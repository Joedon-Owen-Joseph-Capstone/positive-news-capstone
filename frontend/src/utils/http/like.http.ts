import {Like, LikeSchema} from "@/utils/models/like.model";

export async function fetchLikeToggle() : Promise<Like[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/toggle`).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error liking')
        } else {
            return response.json()
        }
    })

    return LikeSchema.array().parse(data)


}

export async function fetchLikesByProfileId(profileId : string) : Promise<Like[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/like/${profileId}`).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error liking')
        } else {
            return response.json()
        }
    })

    return LikeSchema.array().parse(data)


}