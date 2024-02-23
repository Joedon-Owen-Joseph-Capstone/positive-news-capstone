import {JSX} from "react"
import {Posts} from "@/app/shared/Posts";

export default function Profile() : JSX.Element {
    return(
        <>
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
                        <div className="badge badge-primary">science</div>
                        <div className="badge badge-primary">animals</div>
                        <div className="badge badge-primary">tech</div>
                        <div className="badge badge-primary">history</div>
                        <div className="badge badge-primary">medical</div>

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

                        {/* Filter */}
                        <div>

                            {/* Filter list */}
                            <ul className="menu menu-horizontal z-50">
                                <li>
                                    <details>

                                        {/* Filter drop down */}
                                        <summary className="text-3xl focus:outline-2 cursor-pointer">
                                            <img width="36" height="36" src='/filter-right.svg' alt='filter button'/>
                                        </summary>

                                        {/* Drop down links */}
                                        <ul className="bg-white italic p-2 rounded-t-none text-black">

                                            {/* Filter categories */}
                                            <li><a>Animals</a></li>
                                            <li><a>Health</a></li>
                                            <li><a>Science</a></li>
                                            <li><a>Space</a></li>
                                            <li><a>Technology</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Posts/>
                </div>
            </section>

        </>
    )
}