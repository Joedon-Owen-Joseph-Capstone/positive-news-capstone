import {JSX} from "react"
import {Posts} from "@/app/shared/Posts";

export default function Profile() : JSX.Element {
    return(
        <>
            <title>User Profile</title>
            <section className='block lg:flex items-center justify-center gap-16 border-b-4 border-black p-12 md:p-24'>
                <img className='h-60 w-60 rounded-full border-black border-4 ' src='https://www.milton.edu/wp-content/uploads/2019/11/avatar-placeholder.jpg' alt='profile image'/>
                <div className='pt-5 lg:pt-0'>

                    {/* Username */}
                    <div>
                        <h1 className='text-4xl text-black md:text-5xl lg:text-6xl'>@username</h1>
                    </div>

                    {/* Categories interested in */}
                    <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-5 pt-5 *:text-xl *:p-5'>
                        <div className="badge badge-primary">space</div>
                        <div className="badge badge-secondary">science</div>
                        <div className="badge badge-accent">animals</div>
                        <div className="badge badge-error">tech</div>
                        <div className="badge badge-neutral">history</div>
                        <div className="badge badge-success">medical</div>

                        {/* Add more */}
                        <p><a className='text-4xl'>+</a></p>
                    </div>
                </div>

                {/* edit profile */}
                <div className='grid'>

                    {/* edit profile */}
                    <ul className="menu menu-horizontal z-50">
                        <li>
                            <details>

                                {/* edit dropdown */}
                                <summary className="text-black text-right text-6xl focus:outline-2 cursor-pointer">
                                    . . .
                                </summary>

                                {/* Drop down links */}
                                <ul className="bg-white italic p-2 rounded-t-none text-black">

                                    {/* Edit item */}
                                    <li><a>Edit Profile</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
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