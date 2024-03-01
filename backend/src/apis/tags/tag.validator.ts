import {z} from 'zod'

/**
 * the shape of a tag object in the database and the API
 * @property tagName {string} foreign key of the keyword that is being tagged
 * @property tagId {string} foreign key of the Article that is being tagged
 **/

export const TagSchema = z.object({
    tagId: z.string({
        required_error: 'please provide valid tagId',
        invalid_type_error: 'tagId is not the correct type'
    })
        .uuid({message: 'please provide a valid uuid for the tagId'}).nullable(),

    tagName: z.string({required_error: 'please provide a valid tagName',
        invalid_type_error: 'tagName is not the correct type'
    })
        .max(32,{message: 'tagName cannot be longer than 32 characters'})

});