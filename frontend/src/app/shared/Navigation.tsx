import {JSX} from 'react'


export function Navigation() : JSX.Element {
    return(
        <nav>
            <div className="navbar bg-gradient-to-br from-[#0D0B33] to-[#52489F] text-white p-5">

                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">PNN</a>
                </div>

                <div className="flex-none gap-2">

                    <div className='flex items-center gap-2'>
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-[#e2e1f9] text-black"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </div>

                    <div>
                        <ul className="menu menu-horizontal px-1 bg-">
                            <li><a>About PNN</a></li>
                            <li><a>U.S.</a></li>
                            <li><a>World</a></li>
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end">

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
