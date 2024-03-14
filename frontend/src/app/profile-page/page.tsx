'use server'

import {Follow} from "@/utils/models/follow.model";
import {fetchFollowByFollowProfileId} from "@/utils/http/follow.http";
import {FollowDisplay} from "@/app/profile-page/FollowDisplay"

export default async function followUser ({params} : {params :  {followProfileId : string}}) {

    const {followProfileId} = params
    console.log("line10 followProfileId", followProfileId)
    const follows =  await getData(followProfileId)

    return (
        <>
            <div>
                <FollowDisplay follows={follows}/>
            </div>
        </>
    )
}

async function getData(followProfileId : string): Promise<Follow[]> {
try {
    console.log("followProfileId", followProfileId)
    return await fetchFollowByFollowProfileId(followProfileId)

} catch (error) {
    throw error
}
}

