import {Posts} from "@/app/shared/Posts";

export default function Home() {
    return (
        <>
            <section className='my-24'>
                <h1 className="text-6xl font-bold text-center text-white italic pb-24">POSITIVE NEWS NETWORK</h1>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                             className="w-full"/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                             className="w-full"/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                             className="w-full"/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                             className="w-full"/>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='my-24'>
                <div className="container mx-auto">
                    <div className='flex justify-between'>
                        <h2 className='text-5xl'>Popular U.S.</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white"
                             className="bi bi-filter-right" viewBox="0 0 16 16">
                            <path
                                d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </div>
                    <Posts/>
                </div>
            </section>

            <section className='bg-gray-500 p-10'>
                <h2 className='text-center text-5xl'>Today in History</h2>
                <div className='flex justify-center items-center gap-20 p-10'>
                    <img className='image-full' src={"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt={'history pic'}/>
                    <div>
                        <h3 className='text-4xl'>Title</h3>
                        <p className='text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit tincidunt nulla fermentum faucibus. Integer consectetur est vel pharetra viverra. Donec commodo mi nec ligula pharetra mattis. Proin faucibus magna ut elit efficitur efficitur. Aliquam vel quam ut lectus tincidunt molestie a ac risus. Donec ut ornare ante. In quis orci dui. </p>
                    </div>
                </div>

            </section>

            <section className='my-24'>
                <div className="container mx-auto">
                    <div className='flex justify-between'>
                        <h2 className='text-5xl'>Popular World</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white"
                             className="bi bi-filter-right" viewBox="0 0 16 16">
                            <path
                                d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5m0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5"/>
                        </svg>
                    </div>
                    <Posts/>
                </div>
            </section>

            <section className='flex justify-between items-baseline border-t-4 border-gray-300 p-20'>
                <h2 className='text-5xl'>PNN</h2>
                <p className='text-2xl hover:underline'>Back to the Top</p>
            </section>
        </>
    )
}
