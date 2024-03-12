'use server'

import {Follow, FollowSchema} from "@/utils/models/follow.model";

export async function fetchFollowByFollowProfileId(followProfileId : string) : Promise<Follow> {
    const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/follow/${followProfileId}`).then(response => {
        if(!response.ok) {
            throw new Error(`error following`)
        } else {
            return response.json()
        }
    })
    return FollowSchema.parse(data)
}