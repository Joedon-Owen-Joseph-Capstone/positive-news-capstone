import { z } from 'zod';

export const ArticleTagSchema = z.object({
    article_tag_article_id: z.string({
        required_error: 'please provide a valid articleTagArticleId',
        invalid_type_error: 'articleTagArticleId is not the correct type'
    })
        .uuid({message: 'please provide a valid uuid for articleTagArticleId'}),

    article_tag_tag_id: z.string({
        required_error: "please provide a valid articleTagTagId",
        invalid_type_error: "articleTagTagId is not the correct type"
    })
        .uuid({message: 'please provide a valid uuid for articleTagTagId'})
});