import { z } from 'zod';

export const ArticleTagSchema = z.object({
    articleTagArticleId: z.string({
        required_error: 'please provide a valid articleTagArticleId',
        invalid_type_error: 'articleTagArticleId is not the correct type'
    })
        .uuid({message: 'please provide a valid uuid for articleTagArticleId'}).nullable(),

    articleTagTagId: z.string({
        required_error: "please provide a valid articleTagTagId",
        invalid_type_error: "articleTagTagId is not the correct type"
    })
        .uuid({message: 'please provide a valid uuid for articleTagTagId'}).nullable()
});