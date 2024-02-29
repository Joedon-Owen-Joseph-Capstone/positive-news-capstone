import { Request, Response } from 'express';
import {
    insertComment,
    selectCommentsByArticleId,
    selectCommentsByProfileId,
    deleteComment
} from './comment.model'; // Adjust path as needed
import { CommentSchema } from './comment.validator'; // Adjust path as needed
import { Status } from '../../utils/interfaces/Status'; // Adjust path as needed
import { zodErrorResponse } from '../../utils/response.utils'; // Assuming a utility function for handling Zod errors

/**
 * Handles POST request to insert a comment into the comment table.
 */
export async function postCommentController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const validationResult = CommentSchema.safeParse(request.body);

        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error);
        }

        const comment = validationResult.data;
        const message = await insertComment(comment);
        return response.json({ status: 200, message, data: null });
    } catch (error: any) {
        return response.json({ status: 500, data: null, message: error.message });
    }
}

/**
 * Handles GET request for comments associated with an article.
 */
export async function getCommentsByArticleIdController(request: Request, response: Response): Promise<Response> {
    try {
        const articleId = parseInt(request.params.articleId);
        const comments = await selectCommentsByArticleId(articleId);
        return response.json({ status: 200, message: null, data: comments });
    } catch (error: any) {
        return response.json({ status: 500, message: error.message, data: [] });
    }
}

/**
 * Handles GET request for comments associated with a profile.
 */
export async function getCommentsByProfileIdController(request: Request, response: Response): Promise<Response> {
    try {
        const profileId = parseInt(request.params.profileId);
        const comments = await selectCommentsByProfileId(profileId);
        return response.json({ status: 200, message: null, data: comments });
    } catch (error: any) {
        return response.json({ status: 500, message: error.message, data: [] });
    }
}

/**
 * Handles DELETE request to delete a comment by its ID.
 */
export async function deleteCommentController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const commentId = parseInt(request.params.commentId);
        const message = await deleteComment(commentId);
        return response.json({ status: 200, message, data: null });
    } catch (error: any) {
        return response.json({ status: 500, data: null, message: error.message });
    }
}