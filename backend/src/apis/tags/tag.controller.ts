import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {zodErrorResponse} from "../../utils/response.utils";
import {TagSchema} from "./tag.validator";
import {
    selectTagByTagNameAndTagId,
    selectTagsByTagName,
    selectTagsByTagId
} from "./tag.model";

/**
 * express controller for getting a tag by tagId
 * @param request from the client to the server containing the tagId in the request parameters
 * @param response from the server to the client containing the tag or an error message
 * @return {Promise<Response<Status>>}  A promise containing the response for the client with the requested information,
 *
 */
export async function getTagByTagIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        //validate the incoming request parameters with the tag schema
        const validationResult = TagSchema.pick({tagId: true}).safeParse(request.params)

        // if the validation is unsuccessful, return a preformatted response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the tagArticleId from the validated request parameters
        const {tagId} = validationResult.data

        // get the tag by tagArticleId
        const data = await selectTagsByTagId(tagId)

        // create a preformatted response to send to the client
        const status: Status = {status: 200, data, message: null}

        // return the result to the client
        return response.json(status)


    } catch (error) {
        return response.json({status: 500, data: null, message: "Internal error try again later"})
    }
}

/**
 * express controller for getting a tag by tagName
 * @param request from the client to the server containing the tagName in the request parameters
 * @param response from the server to the client containing the tag or an error message
 * @return {Promise<Response<Status>>}  A promise containing the response for the client with the requested information,
 *
 */
export async function getTagByTagNameController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        //validate the incoming request parameters with the tag schema
        const validationResult = TagSchema.pick({tagName: true}).safeParse(request.params)

        // if the validation is unsuccessful, return a preformatted response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the tagName from the validated request parameters
        const {tagName} = validationResult.data

        // get the tag by tagName
        const data = await selectTagsByTagName(tagName)

        // create a preformatted response to send to the client
        const status: Status = {status: 200, data, message: null}

        // return the result to the client
        return response.json(status)

    } catch (error) {
        return response.json({status: 500, data: null, message: "Internal error try again later"})
    }
}

/**
 * express controller for getting a tag by tagName and tagId
 * @param request from the client to the server containing the tagName and tagId in the request parameters
 * @param response from the server to the client containing the tag or an error message
 * @return {Promise<Response<Status>>}  A promise containing the response for the client with the requested information,
 **/

export async function getTagByPrimaryKeyController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        //validate the incoming request parameters with the tag schema
        const validationResult = TagSchema.safeParse(request.params)

        // if the validation is unsuccessful, return a preformatted response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the tagKeywordId and tagArticleId from the validated request parameters
        const {tagName, tagId} = validationResult.data

        // get the tag by tagKeywordId and tagArticleId
        const data = await selectTagByTagNameAndTagId(tagName, tagId)


        // create a preformatted response to send to the client
        const status: Status = {status: 200, data, message: null}

        // return the result to the client
        return response.json(status)


    } catch (error) {
        return response.json({status: 500, data: null, message: "Internal error try again later"})

    }
}