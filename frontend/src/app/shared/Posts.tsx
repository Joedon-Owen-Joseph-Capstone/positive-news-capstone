'use server'

import {Article} from "@/utils/models/article.model";
import {fetchAllArticles} from "@/utils/http/article.http";
import {Post} from "@/app/shared/Post";
import {fetchLikesByArticleId} from "@/utils/http/like.http";
import {Like} from "@/utils/models/like.model";
import {Comment} from "@/utils/models/comment.model";

// Get all posts function
export async function ArticlePost () {
    const {articles, likes, comments} =  await getLikeData()

    return (
        <>
            {/* Get the first six articles to display */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.slice(0,6).map((article: Article) => <Post article={article} likes={likes[article.articleId] || null} key={article.articleId}/>)}
            </div>
        </>
    )
}

// Get all US posts function
export async function ArticlePostUS () {
    const {articles, likes, comments} =  await getLikeData()

    return (
        <>
            {/* Get all US posts and map them */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.map((article: Article) => <Post article={article} likes={likes[article.articleId] || []} key={article.articleId}/>)}
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




