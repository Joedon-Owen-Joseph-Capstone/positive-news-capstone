import {z} from 'zod'
import {TagSchema} from './tag.validator'
import {sql} from "../../utils/database.utils";

export type Tag = z.infer<typeof TagSchema>

export async function insertTag(tag: Tag) {
    const {tagId, tagName} = tag

    await sql`INSERT INTO tag(tag_id, tag_name) VALUES(gen_random_uuid(), ${tagName})`

    return 'tag inserted successfully'
}

export async function selectAllTags(): Promise<Tag[]> {
    const rowList = await sql`SELECT tag_id, tag_name FROM tag`
    return TagSchema.array().parse(rowList)
}

export async function selectTagByTagId(tagId: string) : Promise<Tag|null> {
    const rowList = await sql`SELECT tag_id, tag_name FROM tag WHERE tag_id = ${tagId}`
    const result = TagSchema.array().max(1).parse(rowList)
    return result.length === 0 ? null : result[0]
}