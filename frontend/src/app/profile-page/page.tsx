import {JSX} from "react"
import {ArticlePost} from "@/app/shared/Posts";

export default function Profile() : JSX.Element {
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
                        <p>100 <br/> Followers</p>
                        <p>100 <br/> Following</p>
                    </div>

                </div>
                <div className='pt-10'>

                    {/* Username */}
                    <div>
                        <h1 className='text-4xl text-black md:text-5xl lg:text-6xl'>@username</h1>
                    </div>

                    {/* About User */}
                    <div className='pt-4 text-black leading-8'>
                        <p>Passionate creator exploring the intersections of technology and creativity. 🚀 Web developer by day, aspiring digital artist by night. 🎨 Follow along for coding insights, design inspiration, and occasional doodles. Let's connect! 🌟 #TechEnthusiast #CreativeSoul</p>
                    </div>
                </div>

                {/* follow profile */}
                <div className='grid pt-5 max-w-full md:w-96 lg:w-96'>

                    {/* follow profile */}
                    <button className="btn btn-active bg-[#04bfad] text-white hover:bg-[#8181e6] border-[#04bfad] hover:border-[#8181e6]">Follow +</button>
                </div>
            </section>

            <section className='my-24'>
            <div className="container mx-auto">
                    <div className='flex justify-between'>
                        <h2 className='text-black text-3xl font-custom md:text-4xl lg:text-5xl'>Liked Articles</h2>
                    </div>
                    <ArticlePost/>
                </div>
            </section>

        </>
    )
}