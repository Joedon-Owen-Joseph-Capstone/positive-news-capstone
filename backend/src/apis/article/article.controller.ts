import {Request, Response} from 'express'
import {Status} from "../../utils/interfaces/Status";
import {
    selectAllArticles,
    selectArticleByArticleId,
    selectPageOfArticles} from "./article.model";
import {zodErrorResponse} from "../../utils/response.utils";
import {z} from "zod";

/**
 * gets all articles from the database and returns them to the user in the response
 * @param request from the client to the server to get all articles
 * @param response from the server to the client with all articles or an error message
 */
export async function getAllThreads (request: Request, response: Response): Promise<Response<Status>> {
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
            message: 'Error getting threads. Try again.',
            data: []
        })
    }
}

/**
 * gets a article from the database by article id and returns it to the user in the response
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