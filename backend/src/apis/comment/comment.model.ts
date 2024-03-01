import { z } from 'zod';
import { sql } from "../../utils/database.utils";
import { CommentSchema, Comment } from "./comment.validator";

/**
 * Inserts a comment into the comment table and returns a message
 * @param comment to be inserted
 * @returns 'Comment successfully posted'
 */
export async function insertComment(comment: Comment): Promise<string> {
    const { commentProfileId, commentArticleId, commentContent } = comment;

    await sql`INSERT INTO comment (comment_profile_id, comment_article_id, comment_content, comment_date_time) 
            VALUES (${commentProfileId}, ${commentArticleId}, ${commentContent}, NOW())`;

    return 'Comment successfully posted!';
}

/**
 * Selects a comment from the comment table by commentId and returns the comment
 * @param commentId to be selected
 * @returns the comment that was selected
 * @returns null if no comment was found
 */

export async function selectCommentByCommentId(commentId: number): Promise<Comment | null> {
    const rowList = await sql<Comment[]>`SELECT * FROM comment WHERE comment_id = ${commentId}`;

    const result = CommentSchema.array().max(1).parse(rowList);

    return result.length === 0 ? null : result[0];
}

/**
 * Deletes a comment from the comment table and returns a message
 * @param commentId to be deleted
 * @returns 'Comment successfully deleted'
 */
export async function deleteComment(commentId: number): Promise<string> {
    await sql`DELETE FROM comment WHERE comment_id = ${commentId}`;

    return 'Comment successfully deleted';
}

/**
 * Selects comments from the comment table by articleId and returns the comments
 * @param articleId to be used for selection
 * @returns the comments that were selected
 */
export async function selectCommentsByArticleId(articleId: number): Promise<Comment[]> {
    const rowList = await sql<Comment[]>`SELECT * FROM comment WHERE comment_article_id = ${articleId}`;

    return CommentSchema.array().parse(rowList);
}

/**
 * Selects comments from the comment table by profileId and returns the comments
 * @param profileId to be used for selection
 * @returns the comments that were selected
 */
export async function selectCommentsByProfileId(profileId: number): Promise<Comment[]> {
    const rowList = await sql<Comment[]>`SELECT * FROM comment WHERE comment_profile_id = ${profileId}`;

    return CommentSchema.array().parse(rowList);
}