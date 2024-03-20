import {getSession, Session} from "@/utils/fetchSession";
import {Profile} from "@/utils/models/profile.model";
import {SignOutButton} from "@/app/shared/SignOutForm";

type Props = {
    profile: Profile
    session: Session | undefined
}
async function SignUpProfile(props: Props) {
    const {session} = props
    if (!session) {
        return (
                <button><a className='p-1 lg:p-3 text-sm lg:text-xl bg-blue-500 rounded-lg' href="../sign-up">Sign Up</a></button>
        )
    }
    return (
        <>
            <div className="dropdown dropdown-end">

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component"
                             src="/avatar-placeholder.jpg"/>
                    </div>
                </div>

                {/* Profile button links */}
                <ul tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52 text-black">
                    <li><a href={`../profile-page/${session.profile.profileId}/profile-edit-page`}
                           className="justify-between">Profile</a></li>
                    <li><SignOutButton/></li>
                </ul>
            </div>
        </>
    )
}

export async function Navigation(props: Props) {
    const {profile} = props
    const session = await getSession()
    return (
        <>

            {/* Nav bar content */}
            <nav>

                {/* Nav bar container */}
                <div className="navbar bg-gradient-to-br from-[#1B264F] to-[#274690] text-white p-5">

                    {/* PNN logo/Home button */}
                    <div className="flex-1">
                        <a href='/' className="btn btn-ghost font-custom text-2xl md:text-3xl lg:text-4xl">PNN</a>
                    </div>

                    <div className="flex-none gap-2 font-serif">

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

                                           <li><SignUpProfile profile={profile} session={session}/></li>
                                            <li><a href='../about-us'>About PNN</a></li>
                                            <li><a href='../us-page'>U.S.</a></li>
                                            <li><a href='../world-page'>World</a></li>
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
                                <li className='hover:underline'><a href='../us-page'>U.S.</a></li>
                                <li className='hover:underline'><a href='../world-page'>World</a></li>
                                <SignUpProfile profile={profile} session={session}/>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}
