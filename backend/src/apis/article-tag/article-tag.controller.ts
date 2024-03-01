import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {string, z} from "zod";
import {zodErrorResponse} from "../../utils/response.utils";
import {insertArticleTag, selectAllArticleTags, selectTagByArticleTagArticleId, selectTagByArticleTagTagId} from "./article-tag.model";
import {ArticleTagSchema} from "./article-tag.validator";
import {ArticleTag} from "./article-tag.model";

export async function getTagByArticleTagTagIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string({required_error: 'please provide a valid articleTagTagId',
            invalid_type_error:'articleTagTagId is the wrong type'})
            .uuid('please provide a valid uuid for articleTagTagId')
            .safeParse(request.params.tagId)

        if(!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const tagId = validationResult.data

        const data = await selectTagByArticleTagTagId(tagId)
        return response.json({status: 200, message: null, data})

    } catch (e) {
        return response.json({status: 500, message: 'An error occurred please try again later.'})
    }
}

export async function postArticleTagController(request: Request, response: Response): Promise<Response | undefined> {
    try {

        // validate the incoming request with the article schema
        const validationResult = ArticleTagSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue on with postArticleTagController logic below this line
        // create a new article object with the
        const {articleTagArticleId, articleTagTagId} = validationResult.data
        const articleTag: ArticleTag = {articleTagArticleId, articleTagTagId}

        // insert the article into the database and store the result in a variable called result
        const result = await insertArticleTag(articleTag)

        // return the response with the status code 200, a message, and the result as data
        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Error creating article. Try again.', data: null})
    }
}

export async function getTagByArticleTagArticleIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string({required_error: 'please provide a valid tagName',
            invalid_type_error:'tagName is the wrong type'})
            .safeParse(request.params.tagName)

        if(!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const tagName = validationResult.data

        const data = await selectTagByArticleTagArticleId(tagName)
        return response.json({status: 200, message: null, data})

    } catch (e) {
        return response.json({status: 500, message: 'An error occurred please try again later.'})
    }
}

export async function getAllTagsController (request: Request, response: Response): Promise<Response<Status>> {
    try {


        const data = await selectAllArticleTags()
        return response.json({status: 200, message: null, data})

    } catch (e) {
        return response.json({status: 500, message: 'An error occurred please try again later.'})
    }
}