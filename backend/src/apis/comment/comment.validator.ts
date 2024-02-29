import { z } from 'zod';

export const CommentSchema = z.object({
    commentId: z.number().optional(), // Assuming auto-increment in DB, optional when inserting
    commentProfileId: z.number(),
    commentArticleId: z.number(),
    commentContent: z.string(),
    commentDateTime: z.date().optional(), // Automatically set by the database, optional when inserting
});

export type Comment = z.infer<typeof CommentSchema>;