// import axios from "axios"
//
// interface Article {
//     articleId: string | null,
//     articleAuthor: string,
//     articleDatetime: string,
//     articleSummary: string,
//     articleText: string,
//     articleTitle: string,
//     articleUrl: string
// }
//
// function dataDownloader() : Promise<any> {
//     return main()
//     async function main() {
//         try {
//             await downloadArticles()
//
//         } catch (e) {
//             console.log(e)
//         }
//     }
//
//     async function downloadArticles() {
//         try {
//             const {data} = await axios.get("https://api.worldnewsapi.com/search-news?number=100&text=tesla&language=en", {headers:{"x-api-key":process.env.NEWS_KEY}})
//             console.log(data)
//             const createArticles = (array: any[]) : Article[] => {
//                 // Change this part.  Instead of putting the posts into an arrray insert them into the database.
//                 // See https://github.com/Deep-Dive-Coding-Fullstack-Licensing/example-capstone/blob/development/backend/utils/tweet/insertTweet.ts for example.
//                 const  articles : Article[] = []
//                 for(let currentPost of array) {
//                     let article : Article = {articleId, articleAuthor, articleDatetime, articleSummary, articleUrl, articleTitle, articleText}
//                     articles.push(article)
//                 }
//                 return articles
//             }
//
//             console.log(createArticles(data))
//
//         } catch (error) {
//             console.error(error)
//         }
//     }
// }
//
// dataDownloader().catch(error => console.error(error))