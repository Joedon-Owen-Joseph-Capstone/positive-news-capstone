import { Request, Response } from 'express';
import {
    insertComment,
    selectCommentsByArticleId,
    selectCommentsByProfileId,
    deleteComment, selectCommentByCommentId
} from './comment.model'; // Adjust path as needed
import { CommentSchema } from './comment.validator'; // Adjust path as needed
import { Status } from '../../utils/interfaces/Status'; // Adjust path as needed
import { zodErrorResponse } from '../../utils/response.utils';
import {z} from "zod"; // Assuming a utility function for handling Zod errors

/**
 * Handles POST request to insert a new comment into the database.
 * @param request - body must contain commentArticleId, commentProfileId, and commentContent
 * @param response - will contain a status object with a message and null data if successful,
 *                   or a status with an error message and null data if unsuccessful
 */
export async function postCommentController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        // Validate the incoming request with the comment schema
        const validationResult = CommentSchema.safeParse(request.body);

        // If the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error);
        }

        // If the validation succeeds, extract the validated data
        const {commentArticleId, commentProfileId, commentContent} = validationResult.data;

        // Create a new comment object (excluding fields like commentId and commentDateTime that are set by the database)
        const comment = {
            commentArticleId,
            commentProfileId,
            commentContent,
            commentId:null,
            commentDateTime:null,
        };

        // Insert the comment into the database
        const result = await insertComment(comment);

        // Return the response with status code 200 and the success message
        const status: Status = {status: 200, message: result, data: null}
        return response.json(status);

    } catch (error: any) {
        // If there's an error during the process, log it and return a response with status code 500 and the error message
        console.log(error);
        return response.json({status: 500, message: 'Error creating comment. Try again.', data: null});
    }
}

/**
 * Handles GET request for comments associated with an article.
 */
export async function getCommentsByArticleIdController(request: Request, response: Response): Promise<Response> {
    try {
        // validate the incoming request commentId with the uuid schema
        const validationResult = z.string()
            .uuid({message: 'please provide a valid articleId'})
            .safeParse(request.params.commentArticleId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the comment id from the request parameters
        const commentArticleId = validationResult.data

        // get the comment from the database by comment id and store it in a variable called data
        const data = await selectCommentsByArticleId(commentArticleId)
        return response.json({ status: 200, message: null, data: data });
    } catch (error: any) {
        return response.json({ status: 500, message: error.message, data: [] });
    }
}

/**
 * Handles GET request for comments associated with a profile.
 */
export async function getCommentsByProfileIdController(request: Request, response: Response): Promise<Response> {
    try {
        // validate the incoming request profileId with the uuid schema
        const validationResult = z.string()
            .uuid({ message: 'Please provide a valid profileId' })
            .safeParse(request.params.profileId); // Make sure the parameter name matches your route parameter

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error);
        }

        // get the profile id from the request parameters
        const profileId = validationResult.data;

        // get the comments from the database by profile id and store them in a variable called data
        const data = await selectCommentsByProfileId(profileId);
        return response.json({ status: 200, message: null, data: data });
    } catch (error: any) {
        return response.json({ status: 500, message: error.message, data: [] });
    }
}

/**
 * Handles DELETE request to delete a comment by its ID.
 */
export async function deleteCommentController(request: Request, response: Response): Promise<Response> {
    try {
        // Validate the incoming request commentId with the uuid schema
        const validationResult = z.string()
            .uuid({ message: 'Please provide a valid commentId' })
            .safeParse(request.params.commentId); // Ensure the parameter name matches your route parameter

        // If the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error);
        }

        // Get the comment id from the request parameters
        const commentId = validationResult.data;

        // Attempt to delete the comment from the database
        const message = await deleteComment(commentId);

        // If deletion is successful, return a success response
        return response.json({ status: 200, message: message, data: null });
    } catch (error: any) {
        return response.json({ status: 500, message: error.message, data: [] });
    }
}

export async function  selectCommentByCommentIdController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        // validate the incoming request commentId with the uuid schema
        const validationResult = z.string()
            .uuid({message: 'please provide a valid commentId'})
            .safeParse(request.params.commentId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the comment id from the request parameters
        const commentId = validationResult.data

        // get the comment from the database by comment id and store it in a variable called data
        const data = await selectCommentByCommentId(commentId)

        // return the response with the status code 200, a message, and the article as data
        return response.json({ status: 200, message: null,data });

    } catch (error: any) {
        return response.json({
            status: 500,
            message: error.message,
            data: []
        });
    }
}