import {Posts} from "@/app/shared/Posts";

export default function World() {
    return (
        <>
            <title>Popular World</title>
            <section className='mt-28 lg:mt-56'>
                <div className="container mx-auto">

                    {/* Title and filter */}
                    <div className='flex justify-end'>

                        {/* Filter */}
                        <div>

                            {/* Filter list */}
                            <ul className="menu menu-horizontal">
                                <li>
                                    <details>

                                        {/* Filter drop down */}
                                        <summary className="text-3xl focus:outline-2 cursor-pointer">
                                            <img width="36" height="36" src='/filter-right.svg' alt='filter button'/>
                                        </summary>

                                        {/* Drop down links */}
                                        <ul className="bg-white italic p-2 rounded-t-none text-black z-50">

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
