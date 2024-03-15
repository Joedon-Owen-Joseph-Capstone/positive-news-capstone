'use server'

import {Follow, FollowSchema} from "@/utils/models/follow.model";


export async function fetchFollowByFollowProfileId(followProfileId : string) : Promise<Follow[]> {
    console.log(followProfileId)
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/follow/followProfileId/${followProfileId}`).then(response => {
        if(!response.ok) {
            throw new Error(`Error loading page`)
        } else {
            return response.json()
        }
    })
    return FollowSchema.array().parse(data)
}

export async function fetchFollowByFollowFollowingProfileId(followFollowingProfileId : string) : Promise<Follow[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/follow/followFollowingProfileId/${followFollowingProfileId}`).then(response => {
        if(!response.ok) {
            throw new Error(``)
        } else {
            return response.json()
        }
    })
    return FollowSchema.array().parse(data)
}

export async function fetchFollowToggle() : Promise<Follow[]> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/follow/toggle`).then((response: Response) => {
        if(!response.ok) {
            throw new Error('Error following')
        } else {
            return response.json()
        }
    })

    return FollowSchema.array().parse(data)


}