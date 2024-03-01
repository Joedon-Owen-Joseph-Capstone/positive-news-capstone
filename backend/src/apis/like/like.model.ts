import {z} from 'zod'
import {LikeSchema} from "./like.validator";
import {sql} from "../../utils/database.utils";


//Shape of a like object
export type Like = z.infer<typeof LikeSchema>

/**
 * inserts a like into the like table and returns a message
 * @param like to be inserted
 * @returns 'Like successfully posted'
 */
export async function insertLike(like:Like):Promise<string> {

    //deconstruct like object
    const {likeProfileId, likeArticleId} = like

    //insert like into like table
    await sql`INSERT INTO "like" (like_article_id, like_profile_id, like_date_time) VALUES (${likeProfileId}, ${likeArticleId}, now())`

    //return a message to the user indicating success
    return  'Successful Like!'

}

/**
 * selects a like from the like table by likeId and returns the like
 * @param like to be selected by likeId
 * @returns the like that was selected
 * @returns null if no like was found
 */
export async function selectLikeByLikeId(like:Like): Promise<Like | null> {

    // deconstruct the like object
    const {likeProfileId, likeArticleId} = like

    // select the like from the like table by likeId
    const rowList = <Like[]>await sql`SELECT like_profile_id, "like".like_article_id, like_date_time
                                      FROM "like"
                                      WHERE like_profile_id = ${likeProfileId}
                                        AND "like".like_article_id = ${likeArticleId}`

    // parse the result into an array of likes
    const result = LikeSchema.array().max(1).parse(rowList)

    // return the like that was selected
    return result.length === 0 ? null : result[0]

}

/**
 * deletes a like from the like table and returns a message
 * @param like to be deleted
 * @returns 'Like successfully deleted'
 */
export async function deleteLike(like: Like): Promise<string> {

    // deconstruct the like object
    const {likeProfileId, likeArticleId} = like

    // delete the like from the like table
    await sql`DELETE
              FROM "like"
              WHERE like_profile_id = ${likeProfileId}
                AND "like".like_article_id = ${likeArticleId}`

    // return a message to the user indicating success
    return 'Like removed'
}

/**
 * selects likes from the like table by likeThreadId and returns the likes
 * @returns the likes that were selected
 * @param likeArticleId
 */

export async function selectLikesByLikeArticleId(likeArticleId: string): Promise<Like[]> {

    // select the likes from the like table by likeThreadId
    const rowList = <Like[]>await sql
        `SELECT like_profile_id, like_article_id, like_date_time
         FROM "like"
         WHERE like_article_id = ${likeArticleId}`

    // parse the result into an array of likes and return it
    return LikeSchema.array().parse(rowList)
}

/**
 * selects likes from the like table by likeProfileId and returns the likes
 * @param likeProfileId to be selected by likeProfileId
 * @returns the likes that were selected
 */
export async function selectLikesByLikeProfileId(likeProfileId: string): Promise<Like[]> {

    // select the likes from the like table by likeProfileId
    const rowList = <Like[]>await sql`SELECT like_profile_id, like_article_id, like_date_time
                                      FROM "like"
                                      WHERE like_profile_id = ${likeProfileId}`

    // parse the result into an array of likes and return it
    return LikeSchema.array().parse(rowList)
}