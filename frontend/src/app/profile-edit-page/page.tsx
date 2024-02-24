import {JSX} from "react";
import {Posts} from "@/app/shared/Posts";

export default function EditProfile() : JSX.Element {
    return(
        <>
            <title>Edit Profile</title>
            <section className='block lg:flex items-center justify-center gap-16 border-b-4 border-black p-12 md:p-24 relative'>
                <div className='relative inline-block mb-5 md:mb-1'>
                    <img className='h-60 w-60 rounded-full border-black border-2'
                         src='https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg'
                         alt='profile image'/>
                    <button className="absolute bottom-0 right-0 rounded-full bg-white">
                        <img src='/arrow-up-circle.svg' height="60" width='60' alt='upload new picture'/>
                    </button>
                </div>
                <div className='pb-10 lg:pb-1'>

                    {/* Username */}
                    <div className='flex'>
                        <h1 className='text-4xl text-black md:text-5xl lg:text-6xl'>@username</h1>
                        <img className='mb-5' src='/edit-button.svg' alt='edit username'/>
                    </div>

                    {/* Categories interested in */}
                    <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-5 pt-5 *:text-xl *:p-5'>
                        <div className="badge ">space</div>
                        <div className="badge ">science</div>
                        <div className="badge ">history</div>
                        <div className="badge ">space</div>
                        <div className="badge ">medical</div>

                        {/* Add more */}
                        <div className="dropdown z-50">
                            <div tabIndex={0} role="button" className="text-4xl text-black">+</div>
                            <ul tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box">
                                <li><a>space</a></li>
                                <li><a>science</a></li>
                                <li><a>animals</a></li>
                                <li><a>tech</a></li>
                                <li><a>history</a></li>
                                <li><a>medical</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

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
                    <Posts/>
                </div>
            </section>
        </>
    )
}