import {Posts} from "@/app/shared/Posts";

export default function Home() {
    return (
        <>

            {/* Top of the page content */}
            <section className='my-24'>

                {/* Header */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-black font-custom italic pb-24">POSITIVE NEWS NETWORK</h1>

                {/* Carousel */}
                <div className="carousel w-full min-h-72">

                    {/* Carousel image 1 */}
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                             className="image-full" alt='slide 1 image'/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={"#slide4"} className="btn btn-circle">❮</a>
                            <a href={"#slide2"} className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Carousel image 2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                             className="w-full" alt='slide 2 image'/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={"#slide1"} className="btn btn-circle">❮</a>
                            <a href={"#slide3"} className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Carousel image 3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                             className="w-full" alt='slide 3 image'/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={"#slide2"} className="btn btn-circle">❮</a>
                            <a href={"#slide4"} className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* Carousel image 4 */}
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                             className="w-full" alt='slide 4 image'/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={"#slide3"} className="btn btn-circle">❮</a>
                            <a href={"#slide1"} className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* U.S. posts */}
            <section className='mt-28 lg:mt-56'>
                <div className="container mx-auto">

                    {/* Title and filter */}
                    <div className='flex justify-between'>
                        <h2 className='font-custom text-black text-3xl md:text-4xl lg:text-5xl'>Popular U.S.</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="black"
                             className="bi bi-filter-right" viewBox="0 0 16 16">
                            <path
                                d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </div>
                    <Posts/>
                </div>
            </section>

            {/* History section */}
            <section className='bg-[#0e142a] text-white font-custom p-20 mt-28 lg:mt-56'>
                <h2 className='text-center text-3xl md:text-4xl lg:text-5xl pb-5'>Today in History</h2>

                {/* History content */}
                <div className='lg:flex justify-center items-center gap-20'>

                    {/* History image */}
                    <img className='w-96' src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt={'history pic'}/>

                    {/* History text */}
                    <div>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl pt-5 lg:pt-0'>Title</h3>
                        <p className='font-serif text-lg md:text-xl lg:text-2xl'>Article Description</p>
                    </div>
                </div>

            </section>

            {/* World posts */}
            <section className='mt-28 lg:mt-56'>
                <div className="container mx-auto">
                    <div className='flex justify-between'>

                        {/* Title and filter */}
                        <h2 className='font-custom text-black text-3xl md:text-4xl lg:text-5xl'>Popular World</h2>
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
