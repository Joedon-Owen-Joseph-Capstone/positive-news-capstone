import {Posts} from "@/app/shared/Posts";

export default function world() {
    return (
        <>
            <title>Popular World</title>
            <section className='mt-28 lg:mt-56'>
                <div className="container mx-auto">

                    {/* Title and filter */}
                    <div className='flex justify-between'>
                        <h2 className='font-custom text-3xl md:text-4xl lg:text-5xl'>Popular World</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black"
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
