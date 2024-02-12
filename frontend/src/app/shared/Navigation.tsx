import {JSX} from 'react'


export function Navigation() : JSX.Element {
    return(
        <>
            <div className="navbar bg-gray-500 p-5 text-black">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost text-xl">PNN</a>
                </div>
                <div className='me-48'>
                    <input className='w-96 me-4 rounded-lg' type='search' name='searchBar' id='searchBar' placeholder='Search'></input>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                         className="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About PNN</a></li>
                        <li><a>U.S.</a></li>
                        <li><a>World</a></li>
                        <li>
                        <details>
                                <summary>
                                    Login
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Login</a></li>
                                    <li><a>Create Account</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}