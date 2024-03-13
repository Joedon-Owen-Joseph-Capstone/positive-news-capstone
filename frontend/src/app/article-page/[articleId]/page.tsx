'use server'

import {Article} from "@/utils/models/article.model";
import {fetchArticleByArticleId} from "@/utils/http/article.http";
import {ArticleFull} from "@/app/article-page/ArticleFull";

// Function to take articleId and display unique article when a post is clicked
export default async function articlePage ({params} : {params :  {articleId : string}}) {

    // Give function articleId as 'params' to pass it through the function
    const {articleId} = params

    // Get the articleId's data
    const {articles} =  await getData(articleId)

    // Return it as JSX defined in ArticleFull.tsx
    return (
        <>
            <div>
                <ArticleFull article={articles} key={articles.articleId} />
            </div>
        </>
    )
}

// Create function to pull an article by articleId
async function getData(articleId : string): Promise<{ articles: Article}> {

    // Variable assigned to article data
    const articles = await fetchArticleByArticleId(articleId)

    // Return the article values
    return {articles}
}
