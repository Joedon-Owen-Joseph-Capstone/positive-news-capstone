'use server'

import {Follow} from "@/utils/models/follow.model";
import {fetchFollowByFollowFollowingProfileId, fetchFollowByFollowProfileId} from "@/utils/http/follow.http";
import {FollowDisplay} from "@/app/profile-page/FollowDisplay"
import {fetchProfileByProfileId} from "@/utils/http/profile.http";
import {Profile} from "@/utils/models/profile.model";


export default async function followUser ({params}: { params: {profileId: string} }) {

    const {profileId} = params
    const {follows,profile, following} =  await getData(profileId)



    return (
        <>
            <div>
                <FollowDisplay following={following} profile={profile} follows={follows}/>
            </div>
        </>
    )
}


async function getData(profileId: string): Promise<{profile: Profile , follows: Follow[], following: Follow[]}> {
    const follows = await fetchFollowByFollowProfileId(profileId)
    let profiles: { [profileId: string]: Profile } = {}

    // for (let follow of follows) {
        const profile = await fetchProfileByProfileId(profileId)
    // }
    const following = await fetchFollowByFollowFollowingProfileId(profileId)
    return {profile, follows, following}
}


