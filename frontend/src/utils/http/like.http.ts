import {Like, LikeSchema} from "../models/like.model";
import {cookies} from "next/headers";

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

export async function fetchLikesByProfileId(authorization: string, likeProfileId:string) : Promise<Like[]> {

    const sid = cookies().get('connect.sid')?.value ?? ""
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/like/likeProfileId/${likeProfileId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: authorization,
            Cookie: `connect.sid=${sid}`
        },
        credentials: "include"

    }).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error fetching threads')
        } else {
            return response.json()
        }
    })
    return LikeSchema.array().parse(data)
}