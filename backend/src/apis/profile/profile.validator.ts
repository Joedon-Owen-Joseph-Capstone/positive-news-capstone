import { z } from 'zod'

export const PrivateProfileSchema = z.object({
    profileId: z.string({
        required_error: 'profileId is required',
        invalid_type_error: 'Please provide a valid profileId'
    })
        .uuid({ message: 'please provide a valid profileId' }),
    profileActivationToken: z.string({
        required_error: 'profileActivationToken is required',
        invalid_type_error: 'please provide a valid profileActivationToken'
    })
        .length(32, { message: 'profile activation token is to long' })
        .nullable(),
    profileEmail: z.string({
        required_error: 'profileEmail is required',
        invalid_type_error: ' please provide a valid profileEmail'
    })
        .email({ message: 'please provide a valid email' })
        .max(128, { message: 'profileEmail is to long' }),

    profileHash: z.string({
        required_error: 'profileHash is required',
        invalid_type_error: 'please provide a valid profileHash'
    })
        .length(97, { message: 'profile hash must be 97 characters' }),


    profileName: z.string()
        .trim()
        .min(1, { message: 'please provide a valid profile name (min 1 characters)' })
        .max(32, { message: 'please provide a valid profile name (max 32 characters)' })
})

export const PublicProfileSchema = PrivateProfileSchema.omit({profileHash: true, profileActivationToken: true, profileEmail: true})