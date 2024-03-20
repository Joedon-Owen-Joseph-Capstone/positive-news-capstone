'use server'

import {Like, LikeSchema} from "../models/like.model";
import {cookies} from "next/headers";
import {Session} from "@/utils/fetchSession";
import {revalidateTag} from "next/cache";

export async function fetchLikesByArticleId(articleId : string) : Promise<Like[]> {
    const {data} = await fetch(
        `${process.env.PUBLIC_API_URL}/apis/like/likeArticleId/${articleId}`, {
            next:{
                tags: [`like-${articleId}`]
            }}).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error liking')
        } else {
            return response.json()
        }
    })

    return LikeSchema.array().parse(data)

}

export async function fetchLikesByProfileId(session: Session) : Promise<Like[]> {

    const sid = cookies().get('connect.sid')?.value ?? ""
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/like/likeProfileId/${session.profile.profileId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: session.authorization,
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

export async function toggleLike(articleId: string, session: Session) {
    const sid = cookies().get('connect.sid')?.value ?? ""
    const response = await fetch(`${process.env.PUBLIC_API_URL}/apis/like/toggle`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': session.authorization,
            Cookie: `connect.sid=${sid}`
        },
        body: JSON.stringify({
            likeArticleId: articleId,
            likeProfileId: session.profile.profileId,
            likeDateTime: null,
        }),
    });
    revalidateTag(`like-${articleId}`)
    return response.json()
}