import {ArticlePostUS} from "@/app/shared/Posts";

export default function World() {
    return (
        <>
            <section
                className="bg-center bg-cover bg-fixed bg-[url('https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149388/iss066e025062_lrg.jpg')]">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-custom text-center text-white italic py-60'>WORLD NEWS</h1>
            </section>
            <section className='pt-12'>
                <ArticlePostUS/>
            </section>
        </>
    )

}
