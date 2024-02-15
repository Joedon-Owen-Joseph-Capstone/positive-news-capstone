type PostProps = {image:string, title: string, description: string}

export function Post ({image, title, description} : PostProps) {
    return (
        <>
            <div className="block m-5 pt-10 hover:scale-105">
                <div className="rounded-b-none card shadow-xl image-full h-96">
                    <figure><img src={image} alt="Post background"/></figure>
                    <div className="rounded-b-none card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="flex justify-between bg-gray-500 bg-opacity-25 p-5 rounded-b-xl">
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
            </div>
        </>
    )
}

export function Posts() {

    let posts = [
        {image: 'http://placekitten.com/300/200', title: "Placeholder title", description: 'Bruh family squad'},
        {image: 'http://placekitten.com/300/200', title: "Placeholder title", description: 'Bruh family squad'},
        {image: 'http://placekitten.com/300/200', title: "Placeholder title", description: 'Bruh family squad'},
        {image: 'http://placekitten.com/300/200', title: "Placeholder title", description: 'Bruh family squad'},
        {image: 'http://placekitten.com/300/200', title: "Placeholder title", description: 'Bruh family squad'},
        {image: 'http://placekitten.com/300/200', title: "Placeholder title", description: 'Bruh family squad'}
    ]

    return (
        <section className="container mx-auto">
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {posts.map((post, index) => <Post key={index} image={post.image} title={post.title} description={post.description}/>)}
            </div>
            <p className='text-right hover:underline py-10 pe-5'>View All...</p>
        </section>
    )
}
