import {z} from 'zod'

export const TagSchema = z.object({
    tagCommentId: z.string({
        required_error: 'please provide valid tagCommentId',
        invalid_type_error: 'tagCommentId is not the correct type'
    })
        .uuid({message: 'please provide a valid uuid for the tagCommentId'}).nullable(),

    tagProfileId: z.string({
        required_error: 'please provide a valid tagProfileId',
        invalid_type_error: 'tagProfileId is not the correct type'
    })
        .uuid({message: 'please provide a valid uuid for the tagProfileId'}).nullable(),

});