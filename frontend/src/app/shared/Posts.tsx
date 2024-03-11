'use server'

import {Article} from "@/utils/models/article.model";
import {fetchAllArticles} from "@/utils/http/article.http";
import {Post} from "@/app/shared/Post";

export async function ArticlePost () {
    const {articles} =  await getData()

    return (
        <>
            <title>News Article</title>

            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.slice(0, 6).map((article: Article) => <Post article={article} key={article.articleId}/>)}
            </div>
        </>
    )
}

export async function ArticlePostUS () {
    const {articles} =  await getData()

    return (
        <>
            <title>News Article</title>

            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.map((article: Article) => <Post article={article} key={article.articleId}/>)}
            </div>
        </>
    )
}

export async function ArticlePostWorld () {
    const {articles} =  await getData()

    return (
        <>
            <title>News Article</title>

            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {articles.map((article: Article) => <Post article={article} key={article.articleId}/>)}
            </div>
        </>
    )
}

async function getData(): Promise<{ articles: Article[] }> {
    const articles = await fetchAllArticles()

    return {articles}
}
