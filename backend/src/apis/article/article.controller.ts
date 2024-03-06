import {Request, Response} from 'express'
import {Status} from "../../utils/interfaces/Status";
import {
    Article,
    insertArticle,
    selectAllArticles,
    selectArticleByArticleAuthor,
    selectArticleByArticleDatetime,
    selectArticleByArticleId,
    selectArticleByArticleSourceCountry,
    selectArticleByArticleTitle,
    selectPageOfArticles
} from "./article.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";
import {ArticleSchema} from "./article.validator";

/**
 * Posts a new article to the database and returns a status. If successful, the status will contain the message "Article created successfully." If unsuccessful, the status will contain the message "Error creating article. Try again.".
 * @param request body must contain a articleText, articleAuthor, and articleImage
 * @param response will contain a status object with a message and data if successful or a status with an error message and null data if unsuccessful
 */
export async function postArticleController(request: Request, response: Response): Promise<Response | undefined> {
    try {

        // validate the incoming request with the article schema
        const validationResult = ArticleSchema.safeParse(request.body)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // if the validation succeeds, continue on with postArticleController logic below this line

        // get the article content from the request body
        const {articleAuthor, articleImage, articleSourceCountry, articleSourceNumber, articleSummary, articleText, articleTitle, articleUrl} = validationResult.data

        // create a new article object with the articleAuthor, articleImage, articleSummary, articleText, articleTitle and articleUrl
        const article: Article = {
            articleId: null,
            articleAuthor,
            articleDatetime: null,
            articleImage,
            articleSourceCountry,
            articleSourceNumber,
            articleSummary,
            articleText,
            articleTitle,
            articleUrl
        }

        // insert the article into the database and store the result in a variable called result
        const result = await insertArticle(article)

        // return the response with the status code 200, a message, and the result as data
        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        console.log(error)
        return response.json({status: 500, message: 'Error creating article. Try again.', data: null})
    }
}

/**
 * gets all articles from the database and returns them to the user in the response
 * @param request from the client to the server to get all articles
 * @param response from the server to the client with all articles or an error message
 */
export async function getAllArticles (request: Request, response: Response): Promise<Response<Status>> {
    try {

        // get the articles from the database and store it in a variable called data
        const data = await selectAllArticles()

        // return the response with the status code 200, a message, and the articles as data
        const status: Status = {status: 200, message: null, data}
        return response.json(status)

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        console.error(error)
        return response.json({
            status: 500,
            message: 'Error getting articles. Try again.',
            data: []
        })
    }
}

/**
 * gets an article from the database by article id and returns it to the user in the response
 * @param request from the client to the server to get an article by article id from
 * @param response from the server to the client with an article by article id or an error message
 */
export async function getArticleByArticleIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request articleId with the uuid schema
        const validationResult = z.string()
            .uuid({message: 'please provide a valid articleId'})
            .safeParse(request.params.articleId)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the article id from the request parameters
        const articleId = validationResult.data

        // get the article from the database by article id and store it in a variable called data
        const data = await selectArticleByArticleId(articleId)

        // return the response with the status code 200, a message, and the article as data
        return response.json({status: 200, message: null, data})

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * gets an article from the database by article author and returns it to the user in the response
 * @param request from the client to the server to get an article by article author from
 * @param response from the server to the client with an article by article author or an error message
 */
export async function getArticleByArticleAuthorController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request articleAuthor with the uuid schema
        const validationResult = z.string()
            .safeParse(request.params.articleAuthor)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the article id from the request parameters
        const articleAuthor = validationResult.data

        // get the article from the database by article author and store it in a variable called data
        const data = await selectArticleByArticleAuthor(articleAuthor)

        // return the response with the status code 200, a message, and the article as data
        return response.json({status: 200, message: null, data})

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * gets an article from the database by article date and returns it to the user in the response
 * @param request from the client to the server to get an article by article date from
 * @param response from the server to the client with an article by article date or an error message
 */
export async function getArticleByArticleDatetimeController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request articleDatetime
        const validationResult = z.string()
            .safeParse(request.params.articleDatetime)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the article date from the request parameters
        const articleDatetime = validationResult.data

        // get the article from the database by article date and store it in a variable called data
        const data = await selectArticleByArticleDatetime(articleDatetime)

        // return the response with the status code 200, a message, and the article as data
        return response.json({status: 200, message: null, data})

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * gets an article from the database by article source country and returns it to the user in the response
 * @param request from the client to the server to get an article by article source country from
 * @param response from the server to the client with an article by article source country or an error message
 */
export async function getArticleByArticleSourceCountryController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request articleSourceCountry
        const validationResult = z.string()
            .safeParse(request.params.articleSourceCountry)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the article title from the request parameters
        const articleSourceCountry = validationResult.data

        // get the article from the database by article source country and store it in a variable called data
        const data = await selectArticleByArticleSourceCountry(articleSourceCountry)

        // return the response with the status code 200, a message, and the articles as data
        return response.json({status: 200, message: null, data})

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * gets an article from the database by article title and returns it to the user in the response
 * @param request from the client to the server to get an article by article title from
 * @param response from the server to the client with an article by article title or an error message
 */
export async function getArticleByArticleTitleController (request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request articleTitle
        const validationResult = z.string()
            .safeParse(request.params.articleTitle)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the article title from the request parameters
        const articleTitle = validationResult.data

        // get the article from the database by article title and store it in a variable called data
        const data = await selectArticleByArticleTitle(articleTitle)

        // return the response with the status code 200, a message, and the articles as data
        return response.json({status: 200, message: null, data})

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

/**
 * get page and request number of most recent articles from the database and return them to the user in the response
 * @param request includes next page number
 * @param response from the server to the client with page of articles or an error message
 */
export async function getPageOfArticlesController(request: Request, response: Response): Promise<Response<Status>> {
    try {

        // validate the incoming request page with the number schema
        const validationResult = z.number()
            .int({message: 'please provide a valid page number'})
            .safeParse(request.params.page)

        // if the validation fails, return a response to the client
        if (!validationResult.success) {
            return zodErrorResponse(response, validationResult.error)
        }

        // get the page number from the request parameters
        const page = validationResult.data

        // get the articles from the database by page number and store it in a variable called data
        const data = await selectPageOfArticles(Number(page))

        // return the response with the status code 200, a message, and the articles as data
        return response.json({status: 200, message: null, data})

        // if there is an error, return the response with the status code 500, an error message, and null data
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}