import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";
import {zodErrorResponse} from "../../utils/response.utils";
import {insertTag, selectAllTags, selectTagByTagId, selectTagByTagName} from "./article-tag.model";
import {ArticleTagSchema} from "./article-tag.validator";

export async function getTagByTagIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string({required_error: 'please provide a valid tagId',
            invalid_type_error:'tagId is the wrong type'})
            .uuid('please provide a valid uuid for tagId')
            .safeParse(request.params.tagId)

        if(!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const tagId = validationResult.data

        const data = await selectTagByTagId(tagId)
        return response.json({status: 200, message: null, data})

    } catch (e) {
        return response.json({status: 500, message: 'An error occurred please try again later.'})
    }
}

export async function postTagController(request: Request, response: Response) :Promise<Response<Status>> {
    try{
        const validationResult = TagSchema.safeParse(request.body)

        if(!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)

        }
        const {tagName} = validationResult.data
        const message = await insertTag({tagId:null, tagName})
        return response.json({status:200, message, data:null})
    }catch (error) {
        return response.json({status: 500, message: 'internal server error try again later'})
    }
}

export async function getTagByTagNameController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string({required_error: 'please provide a valid tagName',
            invalid_type_error:'tagName is the wrong type'})
            .safeParse(request.params.tagName)

        if(!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const tagName = validationResult.data

        const data = await selectTagByTagName(tagName)
        return response.json({status: 200, message: null, data})

    } catch (e) {
        return response.json({status: 500, message: 'An error occurred please try again later.'})
    }
}

export async function getAllTagsController (request: Request, response: Response): Promise<Response<Status>> {
    try {


        const data = await selectAllTags()
        return response.json({status: 200, message: null, data})

    } catch (e) {
        return response.json({status: 500, message: 'An error occurred please try again later.'})
    }
}