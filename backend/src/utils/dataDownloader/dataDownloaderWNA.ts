import axios from "axios"
import {
    insertArticle,
    selectArticleSourceNumber
} from "../../apis/article/article.model";

// Create an interface type for the articles to follow
interface Article {
    articleId: string | null,
    articleAuthor: string,
    articleDatetime: Date | null,
    articleImage: string,
    articleSourceCountry: string,
    articleSourceNumber: string,
    articleSummary: string,
    articleText: string,
    articleTitle: string,
    articleUrl: string
}

function dataDownloader() : Promise<any> {
    return main()

    // Catch potential structural errors in the async function and log them
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
            // Search filters: SENTIMENT-0.68, LANGUAGE-english, PUBLISH AFTER-2024/01/01, NEWS SOURCES: Forbes & BBC & Forbes & NBC & CNN & News Week & Google News & ABC & US News & CBS & AP News & NY Times & USA Today & PBS News & MSNBC & Washington Street Journal & Bloomberg & UN News & Buzz Feed & Vox & IGN & TODAY & WIRED & Reuters & Esports.net
            const {data} = await axios.get("https://api.worldnewsapi.com/search-news?number=100&min-sentiment=0.69&language=en&earliest-publish-date=2023-01-01&news-sources=https://www.bbc.co.uk,https://www.forbes.com,https://www.nbcnews.com,https://www.cnn.com,https://www.newsweek.com,https://news.google.com,https://abcnews.go.com,https://www.usnews.com,https://www.cbsnews.com,https://apnews.com,https://www.usatoday.com,https://www.pbs.org,https://www.msnbc.com,https://www.wsj.com,https://www.bloomberg.com,https://news.un.org,https://www.vox.com,https://www.buzzfeednews.com,https://www.ign.com,https://www.today.com,https://www.wired.com,https://www.reuters.com,https://www.esports.net", {headers:{"x-api-key":process.env.NEWS_KEY}})

            // loop through each article item within the API
            for(let currentArticle of data.news) {

                // Create a variable to hold existing articles (not article UUID, it's the APIs' identifier for the article)
                const existingArticle = await selectArticleSourceNumber(currentArticle.id)

                // Check if the article already exists in the database
                if (existingArticle !== null) {

                    // Log that the article exists if true
                    console.log("Skipping article because it already exists:", currentArticle)

                    // Skip to the next iteration of the loop after
                    continue
                }

                // Check if all required fields are present
                if (currentArticle.author && currentArticle.publish_date && currentArticle.image && currentArticle.source_country && currentArticle.id && currentArticle.url && currentArticle.title && currentArticle.text) {
                    console.log("currentArticle", currentArticle)

                    // Create manual summary
                    let articleSummary = currentArticle?.summary ?? currentArticle.text.split(" ").slice(0, 45).join(" ") + "..."

                    // Establish a variable to insert values into the 'insert statement'
                    let article : Article = {
                        articleId: null,
                        articleAuthor: currentArticle.author,
                        articleDatetime: currentArticle.publish_date,
                        articleImage: currentArticle.image,
                        articleSourceCountry: currentArticle.source_country,
                        articleSourceNumber: currentArticle.id,
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
