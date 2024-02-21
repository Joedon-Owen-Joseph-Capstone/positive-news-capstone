import {JSX} from 'react'


export function Navigation() : JSX.Element {
    return(
        <>

            {/* Nav bar content */}
            <nav>

                {/* Nav bar container */}
                <div className="navbar bg-gradient-to-br from-[#1B264F] to-[#274690] text-white p-5 rounded-b">

                    {/* PNN logo/Home button */}
                    <div className="flex-1">
                        <a href='/' className="btn btn-ghost text-2xl md:text-3xl lg:text-4xl">PNN</a>
                    </div>

                    <div className="flex-none gap-2">

                        {/* Search bar */}
                        <div>
                            <input type="text" placeholder="Search"
                                   className="input input-bordered w-24 md:w-auto bg-[#e2e1f9] text-black"/>
                        </div>

                        {/* Dropdown button content */}
                        <div className="flex-none">

                            {/* nav bar list */}
                            <ul className="menu menu-horizontal z-50">
                                <li>
                                    <details>

                                        {/* Drop down button */}
                                        <summary className="lg:hidden text-3xl focus:outline-2 cursor-pointer">
                                            &#9776;
                                        </summary>

                                        {/* Drop down links */}
                                        <ul className="bg-white italic p-2 rounded-t-none text-black">

                                            {/* Profile button */}
                                            <li>
                                                <div className="dropdown dropdown-end">

                                                    <div tabIndex={0} role="button"
                                                         className="btn btn-ghost btn-circle avatar">
                                                        <div className="w-10 rounded-full">
                                                            <img alt="Tailwind CSS Navbar component"
                                                                 src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                                        </div>
                                                    </div>

                                                    {/* Profile button links */}
                                                    <ul tabIndex={0}
                                                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 text-black">
                                                        <li><a href='../profile-page' className="justify-between">Profile</a></li>
                                                        <li><a href='/'>Logout</a></li>
                                                    </ul>
                                                </div>
                                            </li>

                                            {/* Other drop down button links */}
                                            <li><a href='../about-us'>About PNN</a></li>
                                            <li><a>U.S.</a></li>
                                            <li><a>World</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>

                        {/* Regular nav bar links */}
                        <div className='hidden lg:flex'>

                            {/* Nav bar links */}
                            <ul className="menu menu-horizontal px-1 text-lg">
                                <li className='hover:underline'><a href='../about-us'>About PNN</a></li>
                                <li className='hover:underline'><a href='../about-us'>U.S.</a></li>
                                <li className='hover:underline'><a href='../about-us'>World</a></li>
                            </ul>
                        </div>

                        {/* Profile button */}
                        <div className="dropdown dropdown-end hidden lg:flex">

                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component"
                                         src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                </div>
                            </div>

                            {/* Profile button links */}
                            <ul tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 text-black">
                                <li><a href='../profile-page' className="justify-between">Profile</a></li>
                                <li><a href='/'>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
