import {z} from 'zod'

export const ArticleSchema = z.object({
    articleId: z.string({
        required_error: 'please provide a valid articleId or null'})
        .uuid({message: 'please provide a valid uuid for articleId'}),

    articleAuthor: z.string({
        required_error: 'please provide a valid articleAuthor'})
        .max(255, {message:'please provide a valid article author (max 255 characters)'}),

    articleDatetime: z.coerce.date({
        required_error: 'please provide a valid articleDatetime'})
        .nullable(),

    articleImage: z.string({
        required_error: 'please provide a valid articleImage'})
        .trim()
        .url({message: 'please provide a valid URL for article image'})
        .max(255, {message: 'please provide a valid articleImage (max 255 characters)'}),

    articleSourceCountry: z.string({
        required_error: 'please provide a valid articleSourceCountry'})
        .max(255, {message: 'please provide a valid source country'}),

    articleSourceNumber: z.string({
        required_error: 'please provide a valid articleSourceNumber',
        invalid_type_error: "articleSourceNumber must be a number"})
        .max(255, {message: 'please provide a valid source country'}),

    articleSummary:z.string({
        required_error: 'please provide a valid articleSummary'})
        .trim()
        .max(512, {message: 'please provide a valid article summary'}),

    articleText: z.string({
        required_error: 'please provide a valid articleText'}),

    articleTitle: z.string({
        required_error: 'please provide a valid articleTitle'})
        .max(255, {message: 'please provide a valid article title'}),

    articleUrl: z.string({
        required_error: 'please provide a valid articleUrl'})
        .trim()
        .url({message: 'please provide a valid URL for the article'})
        .max(255, {message: 'please provide a valid articleUrl (max 255 characters)'})
})

export type Article = z.infer<typeof ArticleSchema>
