import { z } from 'zod';

export const ArticleTagSchema = z.object({
    article_tag_article_id: z.string({
        required_error: 'Please provide a valid article_tag_article_id',
        invalid_type_error: 'article_tag_article_id is not the correct type',
    })
        .trim()
        .uuid({
            message: 'Please provide a valid UUID for article_tag_article_id',
        }),
    article_tag_tag_id: z.string({
        required_error: 'Please provide a valid article_tag_tag_id',
        invalid_type_error: 'article_tag_tag_id is not the correct type',
    })
        .trim()
        .uuid({
            message: 'Please provide a valid UUID for article_tag_tag_id',
        }),
});

export const validateArticleTag = (data: any) => {
    try {
        const validatedData = ArticleTagSchema.parse(data);
        return { success: true, data: validatedData };
    } catch (error) {
        return { success: false};
    }
};