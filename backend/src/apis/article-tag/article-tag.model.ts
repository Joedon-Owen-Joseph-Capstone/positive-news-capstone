import {z} from 'zod'
import {ArticleTagSchema} from './article-tag.validator'
import {sql} from "../../utils/database.utils";

export type ArticleTag = z.infer<typeof ArticleTagSchema>

export async function insertArticleTag(articleTag: ArticleTag) {

    await sql`INSERT INTO articleTag(article_tag_tag_id, article_tag_article_id) VALUES(gen_random_uuid(), gen_random_uuid())`

    return 'tag inserted successfully'
}

export async function selectAllArticleTags(): Promise<ArticleTag[]> {
    const rowList = await sql`SELECT article_tag_tag_id, article_tag_article_id FROM articleTag`
    return ArticleTagSchema.array().parse(rowList)
}

export async function selectTagByArticleTagTagId(articleTagTagId: string) : Promise<ArticleTag|null> {
    const rowList = await sql`SELECT article_tag_tag_id, article_tag_article_id FROM articleTag WHERE article_tag_tag_id = ${articleTagTagId}`
    const result = ArticleTagSchema.array().max(1).parse(rowList)
    return result.length === 0 ? null : result[0]
}

export async function selectTagByArticleTagArticleId(articleTagArticleId: string) : Promise<ArticleTag|null> {
    const rowList = await sql`SELECT article_tag_tag_id, article_tag_article_id FROM articleTag WHERE article_tag_article_id = ${articleTagArticleId}`
    const result = ArticleTagSchema.array().max(1).parse(rowList)
    return result.length === 0 ? null : result[0]
}