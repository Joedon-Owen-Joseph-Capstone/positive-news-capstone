import {ArticleSchema} from "./article.validator";
import {z} from "zod";
import {sql} from "../../utils/database.utils";

/**
 * The shape of an article in the article table in the database
 * @property articleId {string} the primary key
 * @property articleAuthor {string} the article's author
 * @property articleDatetime {Date} the article's datetime
 * @property articleImage {string} the article's image url
 * @property articleSourceCountry {string} the article's source country
 * @property articleSourceNumber {string} the article's source number
 * @property articleSummary {string} the article's summary
 * @property articleText {string} the article's text
 * @property articleTitle {string} the article's title
 * @property articleUrl {string} the article's url
 */
export type Article = z.infer<typeof ArticleSchema>

/**
 * posts an article in the article table in the database and returns a message that says 'Article successfully posted'
 * @param article
 * @returns 'Article successfully posted'
 */
export async function insertArticle(article: Article): Promise<string> {

    // deconstruct the article object
    const {articleAuthor, articleImage, articleSourceCountry, articleSourceNumber, articleSummary, articleText, articleTitle, articleUrl} = article

    // insert the article into the article table
    await sql`INSERT INTO article (
                     article_id, article_author, article_datetime, article_image, article_source_country, article_source_number, article_summary, article_text, article_title, article_url)
              VALUES (gen_random_uuid(), ${articleAuthor}, now(), ${articleImage}, ${articleSourceCountry}, ${articleSourceNumber}, ${articleSummary}, ${articleText}, ${articleTitle}, ${articleUrl})`

    // return a message that says 'Article successfully posted'
    return 'Article successfully posted'
}

/**
 * gets all articles from the articles table in the database and returns them to the user in the response
 * @returns {Promise<Article[]>}
 * @throws {Error} an error if the query fails for some reason or if there are no articles in the database
 */

export async function selectAllArticles(): Promise<Article[]> {
    // get all articles from the article table in the database and return them
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_source_country,
                         article_source_number,
                         article_summary,
                         article_text,
                         article_title,
                         article_url
                  FROM article
                  ORDER BY article_datetime DESC`

    // parse the articles from the database into an array of Article objects
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
                         article_source_country,
                         article_source_number,
                         article_summary,
                         article_text,
                         article_title,
                         article_url
                  FROM article
                  WHERE article_id = ${articleId}`

    // parse the article from the database into an article object
    const result = ArticleSchema.array().max(1).parse(rowList)


    // return the article or null if no article is found
    return result.length === 0 ? null : result[0]
}

/**
 * get the article from the article table in the database by articleAuthor and return it
 * @param articleAuthor {string} the article's author to search for in the article table
 * @returns <Article|null> the article that has the articleAuthor or null if no article is found
 */
export async function selectArticleByArticleAuthor(articleAuthor : string): Promise<Article | null> {
    // get the article from the article table in the database by articleAuthor
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_source_country,
                         article_source_number,
                         article_summary,
                         article_text,
                         article_title,
                         article_url
                  FROM article
                  WHERE article_author = ${articleAuthor}`

    // parse the article from the database into an article object
    const result = ArticleSchema.array().max(1).parse(rowList)


    // return the article or null if no article is found
    return result.length === 0 ? null : result[0]
}

/**
 * get the article from the article table in the database by articleDatetime and return it
 * @param articleDatetime {Date} the article's date to search for in the article table
 * @returns <Article|null> the article that has the articleDatetime or null if no article is found
 */
export async function selectArticleByArticleDatetime(articleDatetime : string): Promise<Article | null> {
    const futureDate = new Date(articleDatetime)
    futureDate.setMinutes(futureDate.getMinutes() + 1)
    // get the article from the article table in the database by articleDatetime
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_source_country,
                         article_source_number,
                         article_summary,
                         article_text,
                         article_title,
                         article_url
                  FROM article
                  WHERE article_datetime BETWEEN ${articleDatetime} AND ${futureDate}`

    // parse the article from the database into an article object
    const result = ArticleSchema.array().max(1).parse(rowList)


    // return the article or null if no article is found
    return result.length === 0 ? null : result[0]
}

/**
 * get the article from the article table in the database by articleSourceCountry and return it
 * @param articleSourceCountry {string} the article's source country to search for in the article table
 * @returns <Article|null> the article that has the articleSourceCountry or null if no article is found
 */
export async function selectArticleByArticleSourceCountry(articleSourceCountry : string): Promise<Article | null> {
    // get the article from the article table in the database by articleTitle
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_source_country,
                         article_source_number,
                         article_summary,
                         article_text,
                         article_title,
                         article_url
                  FROM article
                  WHERE article_source_country = ${articleSourceCountry}`

    // parse the article from the database into an article object
    const result = ArticleSchema.array().max(1).parse(rowList)


    // return the article or null if no article is found
    return result.length === 0 ? null : result[0]
}

/**
 * get the article from the article table in the database by articleSourceNumber and return it
 * @param articleSourceNumber {number} the article's source number to search for in the article table
 * @returns <Article|null> the article that has the articleSourceNumber or null if no article is found
 */
export async function selectArticleSourceNumber(articleSourceNumber : string): Promise<Article | null> {
    // get the article from the article table in the database by articleTitle
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_source_country,
                         article_source_number,
                         article_summary,
                         article_text,
                         article_title,
                         article_url
                  FROM article
                  WHERE article_source_number = ${articleSourceNumber}`

    // parse the article from the database into an article object
    const result = ArticleSchema.array().parse(rowList)


    // return the article source number or null if no article source number is found
    return result.length === 0 ? null : result[0]
}

/**
 * get the article from the article table in the database by articleTitle and return it
 * @param articleTitle {string} the article's title to search for in the article table
 * @returns <Article|null> the article that has the articleTitle or null if no article is found
 */
export async function selectArticleByArticleTitle(articleTitle : string): Promise<Article | null> {
    // get the article from the article table in the database by articleTitle
    const rowList = <Article[]>
        await sql`SELECT article_id,
                         article_author,
                         article_datetime,
                         article_image,
                         article_source_country,
                         article_source_number,
                         article_summary,
                         article_text,
                         article_title,
                         article_url
                  FROM article
                  WHERE article_title = ${articleTitle}`

    // parse the article from the database into an article object
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
                         article_source_country,
                         article_source_number,
                         article_summary,
                         article_text,
                         article_title,
                         article_url
                  FROM article
                  ORDER BY article_datetime DESC
                  LIMIT 10 OFFSET ${(page - 1) * 10}`
    return ArticleSchema.array().parse(rowList)
}
