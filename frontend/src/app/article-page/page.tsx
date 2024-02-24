import {articleImage} from "@/app/shared/Posts";

export default function articlePage () {
    return (
        <>
            <title>News Article</title>
            <section className={"mt-12"}>
                <div className={"flex gap-1 py-5"}>
                    <div className={"md:*:text-xl *:p-2 md:*:p-5 border-e-2 pe-2 border-black"}>
                        <div className="badge badge-primary">Space</div>
                        <div className="badge badge-secondary">Science</div>
                        <div className="badge badge-accent">Technology</div>
                    </div>
                    <div className='flex items-center'><p className='text-black md:text-2xl'>2024-23-2</p></div>
                </div>
            </section>

            <section className={"mt-2.5"}>
                <div className="hero min-h-screen border-solid"
                     style={{backgroundImage: `url(${articleImage})`}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                </div>
            </section>

            <div className="flex justify-between bg-[#344955] p-5">
                <div className="flex gap-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 16 16">
                        <path
                            d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                    </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 16 16">
                    <path
                        d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                </svg>
            </div>
            <div className={"text-black *:p-5 lg:px-60"}>
                <div className='font-bold font-serif'>
                    <a href=''>Article URL</a>
                    <p>Author: Joe Mcowens</p>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-custom font-bold'>Article Title</h1>
                <p className='md:text-lg lg:text-xl tracking-wider leading-10 font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Semper auctor neque vitae
                    tempus quam pellentesque nec nam aliquam. Aliquam sem fringilla ut morbi. Massa sapien faucibus et molestie.
                    Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Volutpat sed cras ornare arcu.
                    Varius duis at consectetur lorem donec massa sapien. Malesuada nunc vel risus commodo. Tincidunt vitae semper
                    quis lectus nulla at volutpat diam ut. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Ornare arcu dui
                    vivamus arcu. In hac habitasse platea dictumst vestibulum rhoncus est.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Semper auctor neque vitae
                    tempus quam pellentesque nec nam aliquam. Aliquam sem fringilla ut morbi. Massa sapien faucibus et molestie.
                    Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Volutpat sed cras ornare arcu.
                    Varius duis at consectetur lorem donec massa sapien. Malesuada nunc vel risus commodo. Tincidunt vitae
                    semper quis lectus nulla at volutpat diam ut. Blandit cursus risus at ultrices mi tempus imperdiet nulla.
                    Ornare arcu dui vivamus arcu. In hac habitasse platea dictumst vestibulum rhoncus est.

                    Magna sit amet purus gravida. Proin libero nunc consequat interdum varius sit amet. Arcu non sodales neque
                    sodales ut etiam sit. Quam viverra orci sagittis eu. Risus commodo viverra maecenas accumsan lacus vel.
                    Vivamus arcu felis bibendum ut tristique et egestas. Vehicula ipsum a arcu cursus vitae. Sed adipiscing diam
                    donec adipiscing tristique risus nec. Lacinia at quis risus sed vulputate odio ut enim blandit. Nulla facilisi
                    etiam dignissim diam quis enim lobortis.

                    Malesuada fames ac turpis egestas integer eget aliquet nibh. Id nibh tortor id aliquet lectus proin nibh nisl
                    condimentum. Donec adipiscing tristique risus nec. Ac ut consequat semper viverra nam libero. Pellentesque
                    dignissim enim sit amet venenatis urna cursus eget. Convallis posuere morbi leo urna molestie at.
                    Porttitor massa id neque aliquam vestibulum morbi blandit. Porttitor eget dolor morbi non arcu risus.
                    Pharetra sit amet aliquam id diam maecenas. Cras pulvinar mattis nunc sed blandit libero.
                    Egestas tellus rutrum tellus pellentesque eu tincidunt. Leo in vitae turpis massa sed.
                    Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Suscipit adipiscing bibendum est ultricies integer.
                    Sollicitudin nibh sit amet commodo nulla facilisi. Mattis vulputate enim nulla aliquet porttitor lacus luctus
                    accumsan tortor. Id porta nibh venenatis cras sed felis eget velit aliquet. Dictum varius duis at consectetur
                    lorem donec massa sapien faucibus. Viverra mauris in aliquam sem fringilla. Viverra mauris in aliquam sem.
                    Elementum nisi quis eleifend quam adipiscing. Gravida arcu ac tortor dignissim convallis aenean. Ut pharetra
                    sit amet aliquam id diam maecenas ultricies.

                    Augue ut lectus arcu bibendum at varius vel pharetra vel. Fames ac turpis egestas maecenas pharetra convallis
                    posuere morbi leo. Semper risus in hendrerit gravida rutrum quisque non. Risus nec feugiat in fermentum
                    posuere urna nec tincidunt praesent. Sit amet porttitor eget dolor morbi non arcu. Condimentum id venenatis a
                    condimentum vitae. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Orci nulla pellentesque
                    dignissim enim sit amet venenatis. Pellentesque eu tincidunt tortor aliquam nulla. Pulvinar etiam non quam
                    lacus suspendisse faucibus interdum. Vitae turpis massa sed elementum tempus egestas sed. Congue eu consequat
                    ac felis. Nisl suscipit adipiscing bibendum est ultricies integer. Purus in massa tempor nec feugiat nisl
                    pretium fusce id. Vulputate dignissim suspendisse in est ante in nibh mauris. Tortor pretium viverra
                    suspendisse potenti nullam ac tortor vitae. Malesuada pellentesque elit eget gravida cum sociis natoque.
                    Quisque id diam vel quam. Varius quam quisque id diam vel. Elit scelerisque mauris pellentesque pulvinar
                    pellentesque habitant.</p>
            </div>

        </>
    )
}