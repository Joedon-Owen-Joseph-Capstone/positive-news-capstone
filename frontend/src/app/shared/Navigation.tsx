import {JSX} from 'react'


export function Navigation() : JSX.Element {
    return(
        <nav>
            <div className="navbar bg-gradient-to-br from-[#0D0B33] to-[#52489F] text-white p-5 rounded-b">

                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">PNN</a>
                </div>

                <div className="flex-none gap-2">

                    <div>
                        <input type="text" placeholder="Search"
                               className="input input-bordered w-24 md:w-auto bg-[#e2e1f9] text-black"/>
                    </div>

                    <div className="flex-none">
                        <ul className="menu menu-horizontal z-50">
                            <li>
                                <details>
                                    <summary className="lg:hidden text-3xl focus:outline-2 cursor-pointer">
                                        &#9776;
                                    </summary>
                                    <ul className="bg-white italic p-2 rounded-t-none text-black">
                                        <li>
                                            <div className="dropdown dropdown-end">

                                                <div tabIndex="0" role="button"
                                                     className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img alt="Tailwind CSS Navbar component"
                                                             src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                                    </div>
                                                </div>

                                                <ul tabIndex="0"
                                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                                                    <li><a className="justify-between">Profile</a></li>
                                                    <li><a>Logout</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a>About PNN</a></li>
                                        <li><a>U.S.</a></li>
                                        <li><a>World</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal px-1">
                            <li><a>About PNN</a></li>
                            <li><a>U.S.</a></li>
                            <li><a>World</a></li>
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end hidden lg:flex">

                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component"
                                     src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                            </div>
                        </div>

                        <ul tabIndex="0"
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                            <li><a className="justify-between">Profile</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
