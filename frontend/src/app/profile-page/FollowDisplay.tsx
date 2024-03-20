'use server'

import {Follow} from "@/utils/models/follow.model";
import {Profile} from "@/utils/models/profile.model";
import {FollowForm} from "@/app/profile-page/FollowForm";
import {getSession} from "@/utils/fetchSession";
import {fetchFollowByFollowFollowingProfileId, fetchFollowByFollowProfileId} from "@/utils/http/follow.http";

type Props = {
    profile: Profile
}

export async function FollowDisplay(props: Props)  {
    const { profile} = props
    const following = await fetchFollowByFollowProfileId(profile.profileId)
    const session = await getSession()
    const follows = await fetchFollowByFollowFollowingProfileId(profile.profileId)
    return(
        <>
            <section className='border-b-4 border-black bg-[#b1b6bb] glass p-12 md:p-16'>

                {/* Follower and image */}
                <div className='block md:flex gap-10 lg:gap-28 items-center'>

                    {/* Profile Image */}
                    <div className='flex justify-center'>
                        <div className="bg-[url('/avatar-placeholder.jpg')] rounded-full border-black border-4 p-18 md:p-36 w-60 h-60 bg-center">
                        </div>
                    </div>

                    {/* Follow text */}
                    <div className='flex justify-center items-center gap-8 md:gap-16 text-2xl lg:text-4xl text-black text-center font-bold pt-16 md:pt-0'>
                        <p>{follows.length} <br/> Followers</p>
                        <p>{following.length} <br/> Following</p>
                    </div>

                </div>
                <div className='pt-10'>

                    {/* Username */}
                    <div>
                        <h1 className='text-4xl text-black md:text-5xl lg:text-6xl'>{profile.profileName}</h1>
                    </div>

                    {/* About User */}
                    <div className='pt-4 text-black leading-8'>
                        <p>{profile.profileAbout}</p>
                    </div>
                </div>

                {/* follow profile */}
                <FollowForm session={session} profile={profile} follows={follows}/>
            </section>

        </>
    )
}