import {z} from 'zod'
import {TagSchema} from "./tag.validator";
import {sql} from "../../utils/database.utils";

// the shape of a tag object in the database and the API
export type Tag = z.infer<typeof TagSchema>

/**
 * selects tags by tagArticleId from the tag table
 * @param tagId the thread id to search for in the tag table
 * @returns {Promise<Tag[]>} an array of tags or an empty array
 **/

export async function selectTagsByTagId(tagId: string): Promise<Tag[]> {
    //prepare a statement to select the tags by tagId and execute the statement
    const rowList = await sql`SELECT tag_name, tag_id FROM tag WHERE tag_id = ${tagId}`

    // enforce that the result is an array of tags and return the array
    return TagSchema.array().parse(rowList)
}

/**
 * selects tags by tagName from the tag table
 * @param tagName the keyword id to search for in the tag table
 * @returns {Promise<Tag[]>} an array of tags or an empty array
 **/

export async function selectTagsByTagName(tagName: string): Promise<Tag[]> {

    //prepare a statement to select the tags by tagKeywordId and execute the statement
    const rowList = await sql`SELECT tag_name, tag_id FROM tag WHERE tag_name = ${tagName}`

    // enforce that the result is an array of tags and return the array
    return TagSchema.array().parse(rowList)
}


/**
 * selects a  tag by tagName and tagId from the tag table
 * @param tagName the keyword id to search for in the tag table
 * @param tagId
 * @returns {Promise<Tag | null>} a tag or null
 **/
export async function selectTagByTagNameAndTagId(tagName: string, tagId: string): Promise<Tag | null> {
    // prepare a statement to select the tag by tagName and tagId and execute the statement

    const rowList = await sql`SELECT tag_name, tag_id FROM tag WHERE tag_name = ${tagName} AND tag_id = ${tagId}`

    // enforce that the result is an array of one tag, or null
    const result = TagSchema.array().max(1).parse(rowList)

    // return the tag or null if no tag was found
    return result?.length === 1 ? result[0] : null
}
