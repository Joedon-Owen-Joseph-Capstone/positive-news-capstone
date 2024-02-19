import {JSX} from "react"
import {Posts} from "@/app/shared/Posts";

export default function Profile() : JSX.Element {
    return(
        <>
            <section className='block lg:flex items-center gap-16 border-b-4 border-white p-12 md:p-24'>
                <img className='h-60 w-60 rounded-full' src='/WhiteArrow.jpg' alt='profile image'/>
                <div className='pt-5 lg:pt-0'>
                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl'>@username</h1>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 pt-5 *:text-xl *:p-5'>
                        <div className="badge badge-primary">space</div>
                        <div className="badge badge-primary">science</div>
                        <div className="badge badge-primary">animals</div>
                        <div className="badge badge-primary">tech</div>
                        <div className="badge badge-primary">history</div>
                        <div className="badge badge-primary">medical</div>
                        <p className='text-6xl'>+</p>
                    </div>
                    <p className='text-white text-6xl text-right'>. . .</p>
                </div>
            </section>

            <section className='my-24'>
                <div className="container mx-auto">
                    <div className='flex justify-between'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl'>Saved Articles</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white"
                             className="bi bi-filter-right" viewBox="0 0 16 16">
                            <path
                                d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </div>
                    <Posts/>
                </div>
            </section>

        </>
    )
}