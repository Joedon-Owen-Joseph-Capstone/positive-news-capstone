import {ArticleSchema} from "./article.validator";
import {z} from "zod";
import {sql} from "../../utils/database.utils";

/**
 * The shape of a thread in the thread table in the database
 * @property articleId {string} the primary key
 * @property articleAuthor {string} the article's author
 * @property articleDatetime {string} the article's datetime
 * @property articleImage {string} the article's image url
 * @property articleSummary {string} the article's summary
 * @property articleText {string} the article's text
 * @property articleUrl {string} the article's url
 */
export type Article = z.infer<typeof ArticleSchema>

/**
 * posts an article in the article table in the database and returns a message that says 'Article successfully posted'
 * @param article
 * @returns 'Thread successfully posted'
 */
export async function insertArticle(article: Article): Promise<string> {

    // deconstruct the article object
    const {articleAuthor, articleImage, articleSummary, articleText, articleUrl} = article

    // insert the article into the article table
    await sql`INSERT INTO article (
                     article_id, article_author, article_datetime, article_image, article_summary, article_text, article_url)
              VALUES (gen_random_uuid(), ${articleAuthor}, now(), ${articleImage}, ${articleSummary}, ${articleText}, ${articleUrl})`

    // return a message that says 'Article successfully posted'
    return 'Article successfully posted'
}

/**
 * gets all threads from the thread table in the database and returns them to the user in the response
 * @returns {Promise<Article[]>}
 * @throws {Error} an error if the query fails for some reason or if there are no threads in the database
 */

export async function selectAllArticles(): Promise<Article[]> {
    // get all articles from the article table in the database and return them
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_summary,
                         article_text,
                         article_url
                  FROM article
                  ORDER BY article_datetime DESC`

    // parse the threads from the database into an array of Thread objects
    return ArticleSchema.array().parse(rowList)
}

/**
 * get the article from the article table in the database by articleId and return it
 * @param articleId {string} the article's id to search for in the article table
 * @returns <Article|null> the article that has the articleId or null if no article is found
 */
export async function selectArticleByArticleId(articleId : string): Promise<Article | null> {
    // get the article from the article table in the database by articleId
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_summary,
                         article_text,
                         article_url
                  FROM article
                  WHERE article_id = ${articleId}`

    // parse the article from the database into a article object
    const result = ArticleSchema.array().max(1).parse(rowList)


    // return the article or null if no article is found
    return result.length === 0 ? null : result[0]
}

/**
 * selects the next page of articles from the article table in the database and returns them to the user in the response
 * @param page {number} the page number to get the next page of articles
 * @returns <Article[]> the next page of articles
 */
export async function selectPageOfArticles(page: number): Promise<Article[]> {
    // get all articles from the article table in the database and return them
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_summary,
                         article_text,
                         article_url
                  FROM article
                  ORDER BY article_datetime DESC
                  LIMIT 10 OFFSET ${(page - 1) * 10}`
    return ArticleSchema.array().parse(rowList)
}
