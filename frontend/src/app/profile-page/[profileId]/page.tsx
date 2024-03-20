'use server'

import {Follow} from "@/utils/models/follow.model";
import {FollowDisplay} from "@/app/profile-page/FollowDisplay"
import {fetchProfileByProfileId} from "@/utils/http/profile.http";
import {Profile} from "@/utils/models/profile.model";


export default async function followUser ({params}: { params: {profileId: string, follows: Follow[], following: Follow[] } }) {

    const {profileId} = params
    const {profile} =  await getData(profileId)



    return (
        <>
            <div>
                <FollowDisplay  profile={profile}/>
            </div>
        </>
    )
}


async function getData(profileId: string): Promise<{profile: Profile}> {
        const profile = await fetchProfileByProfileId(profileId)
    return {profile}
}


