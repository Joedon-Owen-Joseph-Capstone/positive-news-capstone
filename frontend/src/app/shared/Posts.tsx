'use server'

import {Article} from "@/utils/models/article.model";
import {fetchAllArticles} from "@/utils/http/article.http";
import {Post} from "@/app/shared/Post";
import {Like} from "@/utils/models/like.model";
import {Comment} from "@/utils/models/comment.model";
import {PopularArticle} from "@/app/shared/PopularPost";

// Get all posts function
export async function ArticlePost () {
    const {articles} =  await getLikeData()

    return (
        <>
            {/* Get the first six articles to display */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.slice(0,6).map((article: Article) => <Post article={article} key={article.articleId}/>)}
            </div>
        </>
    )
}

export async function PopPost () {
    const {articles} =  await getLikeData()

    return (
        <>
            {articles.slice(6,7).map((article: Article) => <PopularArticle article={article} key={article.articleId}/>)}
        </>
    )
}

// Get all US posts function
export async function ArticlePostUS () {
    const {articles} =  await getLikeData()

    return (
        <>
            {/* Get all US posts and map them */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.map((article: Article) => <Post article={article} key={article.articleId}/>)}
            </div>
        </>
    )
}


// Get article like data function
export async function getLikeData(): Promise<{likes:{[likeArticleId: string ]: Like[]} , comments:{[commentArticleId: string ]: Comment[]},articles: Article[]}>  {
    const articles = await fetchAllArticles()
    let likes : {[likeArticleId: string ]: Like[]} = {}
    let comments : {[commentArticleId: string ]: Comment[]} = {}


    return {likes, comments, articles}
}
