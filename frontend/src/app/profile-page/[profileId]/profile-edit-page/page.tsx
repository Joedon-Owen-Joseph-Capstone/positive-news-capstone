
import {JSX} from "react";
import {ArticlePost} from "@/app/shared/Posts";
import {Profile} from "@/utils/models/profile.model";
import {Follow} from "@/utils/models/follow.model";
import {getSession, Session} from "@/utils/fetchSession";
import {fetchProfileByProfileId} from "@/utils/http/profile.http";
import {redirect} from "next/navigation";
import {ProfileAboutForm} from "@/app/profile-page/[profileId]/profile-edit-page/ProfileAboutForm";





type Props = {
    profile: Profile
    session: Session | undefined
    follow: Follow[]
}

export default async function EditProfile()  {
    const session = await getSession()
    if (session === undefined ) {
        redirect ("../")
    }
    const value = await fetchProfileByProfileId(session.profile.profileId)
    return(
        <>
            <section className='block lg:flex items-center justify-center gap-16 border-b-4 border-black p-12 md:p-24 relative'>
                <div className='relative inline-block mb-5 md:mb-1'>
                    <img className='h-60 w-60 rounded-full border-black border-2'
                         src={session.profile.profileImageUrl}
                         alt='profile image'/>
                    <button className="absolute bottom-0 right-0 rounded-full bg-white">
                        <img src='/arrow-up-circle.svg' height="60" width='60' alt='upload new picture'/>
                    </button>
                </div>
                <div className='pb-10 lg:pb-1'>

                    {/* Username */}
                    <div className='flex'>
                        <h1 className='text-4xl text-black md:text-5xl lg:text-6xl'>{value.profileName}</h1>
                        <img className='mb-5' src='/edit-button.svg' alt='edit username'/>
                    </div>
                </div>
<ProfileAboutForm/>
                {/* Save and cancel button*/}
                <div className='text-white *:px-5 *:py-2 absolute bottom-5 right-5'>
                <button className='bg-blue-400 rounded-lg me-2'>Save</button>
                <button className='bg-red-400 rounded-lg'> Cancel</button>
                </div>
            </section>

            <section className='my-24'>
                <div className="container mx-auto">
                    <div className='flex justify-between'>
                        <h2 className='text-black text-3xl font-custom md:text-4xl lg:text-5xl'>Liked Articles</h2>
                    </div>
                </div>
            </section>
        </>
    )
}