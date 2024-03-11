'use server'

import {Article, ArticleSchema} from "@/utils/models/article.model";

export async function fetchAllArticles() : Promise<Article[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/article`).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error fetching threads')
        } else {
            return response.json()
        }
    })

    return ArticleSchema.array().parse(data)


}