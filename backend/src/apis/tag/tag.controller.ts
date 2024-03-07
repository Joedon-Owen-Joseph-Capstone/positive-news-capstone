import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {z} from "zod";
import {zodErrorResponse} from "../../utils/response.utils";
import {insertTag, selectAllTags, selectTagByTagProfileId, selectTagByTagCommentId} from "./tag.model";
import {TagSchema} from "./tag.validator";

export async function getTagByTagProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string({required_error: 'please provide a valid tagProfileId',
            invalid_type_error:'tagProfileId is the wrong type'})
            .uuid('please provide a valid uuid for tagProfileId')
            .safeParse(request.params.tagProfileId)

        if(!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const tagProfileId = validationResult.data

        const data = await selectTagByTagProfileId(tagProfileId)
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
        const {tagCommentId} = validationResult.data
        const message = await insertTag({tagProfileId:null, tagCommentId})
        return response.json({status:200, message, data:null})
    }catch (error) {
        return response.json({status: 500, message: 'internal server error try again later'})
    }
}

export async function getTagByTagCommentIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = z.string({
            required_error: 'please provide a valid tagCommentId',
            invalid_type_error:'tagCommentId is the wrong type'})
            .safeParse(request.params.tagName)

        if(!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }
        const tagCommentId = validationResult.data

        const data = await selectTagByTagCommentId(tagCommentId)
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