'use server'

import {Article} from "@/utils/models/article.model";
import {fetchArticleByArticleId} from "@/utils/http/article.http";
import {ArticleFull} from "@/app/article-page/ArticleFull";
import {fetchCommentsByArticleId} from "@/utils/http/comment.http";
import {Comment} from "@/utils/models/comment.model";

// Function to take articleId and display unique article when a post is clicked
export default async function articlePage ({params} : {params :  {articleId : string}}) {

    // Give function articleId as 'params' to pass it through the function
    const {articleId} = params

    // Get the articleId's data
    const {article, comments} =  await getData(articleId)


    // Return it as JSX defined in ArticleFull.tsx
    return (
        <>
            <div>
                <ArticleFull article={article} comments={comments} key={article.articleId} />
            </div>
        </>
    )
}

// Create function to pull an article by articleId
async function getData(articleId : string): Promise<{ article: Article, comments: Comment[]}> {

    // Variable assigned to article data
    const article = await fetchArticleByArticleId(articleId)
    const comments = await fetchCommentsByArticleId(articleId)
    // Return the article values
    return {article, comments}
}
