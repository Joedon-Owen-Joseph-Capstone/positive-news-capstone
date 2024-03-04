import axios from "axios"
import {insertArticle} from "../../apis/article/article.model";

// Create an interface type for the articles to follow
interface Article {
    articleId: string | null,
    articleAuthor: string,
    articleDatetime: Date | null,
    articleImage: string,
    articleSummary: string,
    articleText: string,
    articleTitle: string,
    articleUrl: string
}

function dataDownloader() : Promise<any> {
    return main()
    async function main() {
        try {
            await downloadArticles()

        } catch (e) {
            console.log(e)
        }
    }

    // Create a function to fetch APi data and input it into your tables
    async function downloadArticles() {
        try {

            // Create a variable to pull the 'data' from the API
            const {data} = await axios.get("https://api.worldnewsapi.com/search-news?number=5&min-sentiment=0.7&language=en", {headers:{"x-api-key":process.env.NEWS_KEY}})

            // loop through each article item and assign them a value corresponding to the info on the API
            for(let currentArticle of data.news) {

                // Check if all required fields are present
                if (currentArticle.author && currentArticle.publish_date && currentArticle.image && currentArticle.url && currentArticle.title && currentArticle.text) {
                    console.log("currentArticle", currentArticle)

                    // Create manual summary
                    let articleSummary = currentArticle?.summary ?? currentArticle.text.split(" ").slice(0, 45).join(" ") + "..."

                    // Establish a variable to insert values into the 'insert statement'
                    let article : Article = {
                        articleId: null,
                        articleAuthor: currentArticle.author,
                        articleDatetime: currentArticle.publish_date,
                        articleImage: currentArticle.image,
                        articleSummary: articleSummary,
                        articleUrl: currentArticle.url,
                        articleTitle: currentArticle.title,
                        articleText: currentArticle.text}

                    console.log("myArticle", article)

                    // insert the values into an article to post
                    await insertArticle(article)

                    // Else don't use the article without required fields
                } else {
                    console.log("Skipping article due to missing fields:", currentArticle);
                }
            }

        } catch (error) {
            console.error(error)
        }
    }
}

dataDownloader().catch(error => console.error(error))
