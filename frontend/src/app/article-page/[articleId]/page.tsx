'use server'

import {Article} from "@/utils/models/article.model";
import {fetchArticleByArticleId} from "@/utils/http/article.http";
import {ArticleFull} from "@/app/shared/ArticleFull";

export default async function articlePage ({params} : {params :  {articleId : string}}) {
    const {articleId} = params
    const {articles} =  await getData(articleId)

    return (
        <>
            <title>News Article</title>

            <div>
                <ArticleFull article={articles} key={articles.articleId} />
            </div>
        </>
    )
}

async function getData(articleId : string): Promise<{ articles: Article}> {
    const articles = await fetchArticleByArticleId(articleId)

    return {articles}
}
