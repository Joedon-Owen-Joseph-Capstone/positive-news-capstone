import {Like, LikeSchema} from "../models/like.model";


export async function fetchLikeToggle() : Promise<Like> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/like/toggle`).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error liking')
        } else {
            return response.json()
        }
    })

    return LikeSchema.parse(data)


}

export async function fetchLikesByArticleId(articleId : string) : Promise<Like[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/like/likeArticleId/${articleId}`).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error liking')
        } else {
            return response.json()
        }
    })

    return LikeSchema.array().parse(data)

}