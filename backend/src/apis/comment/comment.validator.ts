import { z } from 'zod';

export const CommentSchema = z.object({

    commentId: z.string({required_error:"Please provide a valid commentId"})
        .uuid({message:"Please provide a valid uuid for commentId"}),

    commentProfileId: z.string({required_error:'Please provide a valid commentProfileId'})
        .uuid({message:'Please provide a valid uuid for commentProfileId'}),

    commentArticleId: z.string({required_error:'Please provide a valid commentArticleId'})
        .uuid({message:'Please provide a valid uuid for commentArticleId'}),

    commentContent: z.string({required_error:'Please provide valid commentContent'})
        .max(512, {message: 'Max amount of characters surpassed'})
        .min(1, {message: 'please provide a'}),

    commentDateTime: z.coerce.date({required_error: 'please provide a valid commentDatetime or null'})
        .nullable(),
});

export type Comment = z.infer<typeof CommentSchema>;