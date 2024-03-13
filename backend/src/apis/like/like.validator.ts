import { z } from 'zod'

/**
 * The shape of a like object
 * @property likeProfileId {string} the primary key
 * @property likeArticleId {string} the foreign key
 * @property likeDateTime {Date} the date and time the like was posted
 */

export const LikeSchema = z.object({
    // throw error for like profile id if wrong
    likeProfileId: z.string({required_error: 'please provide a valid likeProfileId'})
        .uuid({message: 'please provide a valid uuid for likeProfileId'}),
    // throw error for like article id if wrong
    likeArticleId: z.string({required_error: 'please provide a valid likeArticleId'})
        .uuid({message: 'please provide a valid uuid for likeArticleId'}),
    // throw error for like date time if wrong
    likeDateTime: z.coerce.date({required_error: 'please provide a valid likeDatetime or null'})
        .nullable()
})