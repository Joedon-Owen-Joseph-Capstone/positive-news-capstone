import { z } from 'zod';

export const ArticleTagSchema = z.object({
    article_tag_article_id: z.string().uuid(),
    article_tag_tag_id: z.string().uuid(),
});