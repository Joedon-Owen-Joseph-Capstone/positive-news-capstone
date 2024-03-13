'use server'

import {Article} from "@/utils/models/article.model";
import {fetchAllArticles} from "@/utils/http/article.http";
import {Post} from "@/app/shared/Post";

// Get all posts function
export async function ArticlePost () {
    const {articles} =  await getData()

    return (
        <>
            {/* Get the first six articles to display */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.slice(0, 6).map((article: Article) => <Post article={article} key={article.articleId}/>)}
            </div>
        </>
    )
}

// Get all US posts function
export async function ArticlePostUS () {
    const {articles} =  await getData()

    return (
        <>
            {/* Get all US posts and map them */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.map((article: Article) => <Post article={article} key={article.articleId}/>)}
            </div>
        </>
    )
}

// Get all World posts excluding US function
export async function ArticlePostWorld () {
    const {articles} =  await getData()

    return (
        <>
            {/* Get all world posts and map them */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.map((article: Article) => <Post article={article} key={article.articleId}/>)}
            </div>
        </>
    )
}

// Get article data function
async function getData(): Promise<{ articles: Article[] }> {

    //  Turn article data into variable
    const articles = await fetchAllArticles()

    // Return article data
    return {articles}
}
