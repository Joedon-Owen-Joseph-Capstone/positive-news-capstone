import {z} from 'zod'
import {ArticleTagSchema} from './article-tag.validator'
import {sql} from "../../utils/database.utils";

export type Tag = z.infer<typeof ArticleTagSchema>

export async function insertArticleTag(tag: Tag) {
    const {article_tag_tag_id, article_tag_article_id} = tag

    await sql`INSERT INTO articleTag(article_tag_tag_id, article_tag_article_id) VALUES(gen_random_uuid(), ${article_tag_article_id})`

    return 'tag inserted successfully'
}

export async function selectAllArticleTags(): Promise<Tag[]> {
    const rowList = await sql`SELECT article_tag_tag_id, article_tag_article_id FROM articleTag`
    return ArticleTagSchema.array().parse(rowList)
}

export async function selectTagByArticleTagTagId(articleTagTagId: string) : Promise<Tag|null> {
    const rowList = await sql`SELECT article_tag_tag_id, article_tag_article_id FROM articleTag WHERE article_tag_tag_id = ${articleTagTagId}`
    const result = ArticleTagSchema.array().max(1).parse(rowList)
    return result.length === 0 ? null : result[0]
}

export async function selectTagByArticleTagArticleId(articleTagArticleId: string) : Promise<Tag|null> {
    const rowList = await sql`SELECT article_tag_tag_id, article_tag_article_id FROM articleTag WHERE article_tag_article_id = ${articleTagArticleId}`
    const result = ArticleTagSchema.array().max(1).parse(rowList)
    return result.length === 0 ? null : result[0]
}