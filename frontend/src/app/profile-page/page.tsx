'use server'

import {Follow} from "@/utils/models/follow.model";
import {fetchFollowByFollowProfileId} from "@/utils/http/follow.http";
import {FollowDisplay} from "@/app/profile-page/FollowDisplay"

export default async function followUser ({params} : {params :  {followProfileId : string}}) {

    const {followProfileId} = params

    const {follow} =  await getData(followProfileId)

    return (
        <>
            <div>
                <FollowDisplay follow={follow} key={follow.followProfileId} />
            </div>
        </>
    )
}

async function getData(followProfileId : string): Promise<{ follow: Follow}> {

    const follow = await fetchFollowByFollowProfileId(followProfileId)

    return {follow}
}

