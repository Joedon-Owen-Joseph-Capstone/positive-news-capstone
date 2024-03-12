import {ArticlePostUS} from "@/app/shared/Posts";

export default function Us() {
    return (
        <>
            <section
                className="bg-center bg-cover bg-fixed bg-[url('https://live.staticflickr.com/2920/14214064049_4fbe307724_b.jpg')]">
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-custom text-center text-white italic py-60'>US
                    NEWS</h1>
            </section>

            <section className='pt-12'>
                <ArticlePostUS/>
            </section>
        </>
    )

}
