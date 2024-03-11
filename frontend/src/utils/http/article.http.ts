'use server'

import {Article, ArticleSchema} from "@/utils/models/article.model";

export async function fetchAllArticles() : Promise<Article[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/article`).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error fetching articles')
        } else {
            return response.json()
        }
    })

    return ArticleSchema.array().parse(data)


}

export async function fetchArticleByArticleId(articleId: string) : Promise<Article> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/articleId/${articleId}`).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error fetching article')
        } else {
            return response.json()
        }
    })

    return ArticleSchema.parse(data)


}
