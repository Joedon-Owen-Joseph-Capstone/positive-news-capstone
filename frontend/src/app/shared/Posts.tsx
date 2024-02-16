import {Post} from "@/app/shared/Post";

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