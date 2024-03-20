'use server'

import {Article} from "@/utils/models/article.model";
import {fetchAllArticles, fetchArticleByArticleId} from "@/utils/http/article.http";
import {ArticleFull} from "@/app/article-page/ArticleFull";
import {Like} from "@/utils/models/like.model";
import {fetchLikesByArticleId} from "@/utils/http/like.http";
import {fetchCommentsByArticleId} from "@/utils/http/comment.http";
import {Comment} from "@/utils/models/comment.model";

// Function to take articleId and display unique article when a post is clicked
export default async function articlePage ({params} : {params :  {articleId : string, likes: Like[], comments: Comment[]}}) {

    // Give function articleId as 'params' to pass it through the function
    const {articleId} = params

    // Get the articleId's data
    const {article,likes, comments} =  await getData(articleId)

    // Return it as JSX defined in ArticleFull.tsx
    return (
        <>
            <div>
                <ArticleFull article={article} key={article.articleId} likes={likes} comments={comments} />
            </div>
        </>
    )
}

// Create function to pull an article by articleId
async function getData(articleId:string): Promise<{likes:Like[], comments:Comment[], article: Article}>  {
    const article = await fetchArticleByArticleId(articleId)

     const  likes = await fetchLikesByArticleId(article.articleId)
     const  comments = await fetchCommentsByArticleId(article.articleId)

    return {likes, comments, article}
}
