import {ArticlePost} from "@/app/shared/Posts";
import {SignOutButton} from "@/app/shared/SignOutForm";

export default function Home() {
    return (
        <>
            {/* Header */}
            <div className="bg-[url('/manolo-chretien-RpC-9e0ORNM-unsplash.jpg')] bg-cover bg-fixed bg-center py-56 p-12 md:p-28 lg:p-52">
            <h1 className="animation-highlight duration-75 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-center font-custom italic pt-2" id='high'>POSITIVE NEWS NETWORK</h1>
            </div>

            {/* U.S. posts */}
            <section className='mt-28 lg:mt-56'>
                <div className="container mx-auto">

                    {/* Title */}
                    <div className='flex justify-between'>
                        <h2 className='font-custom text-black text-3xl md:text-4xl lg:text-5xl'>Popular U.S.</h2>
                    </div>
                    <ArticlePost/>

                    {/* View all button */}
                    <p className='text-right text-black hover:underline py-10 pe-5'><a href='/us-page'>View All...</a>
                    </p>
                </div>
            </section>

            {/* History section */}
            <section className='bg-[#0e142a] text-white font-custom p-8 md:p-16 lg:px-64 mt-28 lg:mt-56'>
                <h2 className='text-center text-3xl md:text-4xl lg:text-5xl pb-16'>Today in History</h2>

                {/* History content */}
                <div className='lg:flex justify-center items-center gap-20'>
                    <div>

                    {/* History image */}
                    <div className='flex justify-center'>
                        <img src={""} alt={'history pic'}/>
                    </div>

                    {/* History text */}
                    <div>
                        <h3 className='text-2xl md:text-3xl lg:text-4xl py-10'>Gaia the cat may be cute but she’s actually a deadly predator</h3>
                        <p className='font-serif text-lg md:text-xl lg:text-2xl'>
                            A Salt Lake City zoo has welcomed the world’s deadliest cat, which apparently is also the cutest. On Dec. 28, Utah’s Hogle Zoo announced the arrival of its newest resident: Gaia, an 8-month-old predatory feline belonging to a species known as the black-footed cat. Gaia is not yet fully grown and weighs in at 2.6 pounds. Black spots and stripes are dotted all along Gaia’s tawny fur, and her pupils can grow so big she could give Puss in Boots a run for his money. But don’t let her looks fool you.
                        </p>
                        <p className='pt-10'>Date: 2024-2-22</p>
                    </div>
                    </div>
                </div>

            </section>

            {/* World posts */}
            <section className='mt-28 lg:mt-56'>
                <div className="container mx-auto">
                    <div className='flex justify-between'>

                        {/* Title */}
                        <h2 className='font-custom text-black text-3xl md:text-4xl lg:text-5xl'>Popular World</h2>
                    </div>
                    <ArticlePost/>

                    {/* View all button */}
                    <p className='text-right text-black hover:underline py-10 pe-5'><a href='/world-page'>View All...</a>
                    </p>
                </div>
            </section>
            <SignOutButton/>
        </>
    )
}
