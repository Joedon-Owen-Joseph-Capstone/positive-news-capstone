import {z} from 'zod'
import {TagSchema} from './tag.validator'
import {sql} from "../../utils/database.utils";

export type Tag = z.infer<typeof TagSchema>

export async function insertTag(tag: Tag) {
    const {tagProfileId, tagCommentId} = tag

    await sql`INSERT INTO tag(tag_profile_id, tag_comment_id) VALUES(${tagProfileId}, ${tagCommentId})`

    return 'tag inserted successfully'
}

export async function selectAllTags(): Promise<Tag[]> {
    const rowList = await sql`SELECT tag_profile_id, tag_comment_id FROM tag`
    return TagSchema.array().parse(rowList)
}

export async function selectTagByTagProfileId(tagProfileId: string) : Promise<Tag|null> {
    const rowList = await sql`SELECT tag_profile_id, tag_comment_id FROM tag WHERE tag_profile_id = ${tagProfileId}`
    const result = TagSchema.array().max(1).parse(rowList)
    return result.length === 0 ? null : result[0]
}

export async function selectTagByTagCommentId(tagCommentId: string) : Promise<Tag|null> {
    const rowList = await sql`SELECT tag_profile_id, tag_comment_id FROM tag WHERE tag_comment_id = ${tagCommentId}`
    const result = TagSchema.array().max(1).parse(rowList)
    return result.length === 0 ? null : result[0]
}