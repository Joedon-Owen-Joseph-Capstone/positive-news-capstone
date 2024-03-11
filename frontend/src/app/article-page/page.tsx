'use server'

import {Article} from "@/utils/models/article.model";
import {fetchAllArticles} from "@/utils/http/article.http";
import {ArticleFull} from "@/app/article-page/ArticleFull";

export default async function articlePage () {
    const {articles} =  await getData()

    return (
        <>
            <title>News Article</title>

            <div>
                {articles.map((article: Article) => <ArticleFull article={article} key={article.articleId} /> )}
            </div>
        </>
    )
}

async function getData(): Promise<{ articles: Article[]}> {
    const articles = await fetchAllArticles()

    return {articles}
}