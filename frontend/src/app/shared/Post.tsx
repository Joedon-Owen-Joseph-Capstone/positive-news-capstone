'use client'

import {Article} from "@/utils/models/article.model";

type Props = {
    article: Article
}

export function Post (props: Props) {
    const {article} = props
    return (
        <>

            {/* Post container */}
            <div className="block m-5 pt-10">

                {/* Post content */}
                <a href={`/article-page/${article.articleId}`}>
                    <div className="card rounded-b-none image-full h-96">

                        {/* Post image */}
                        <figure><img src={article.articleImage} alt="Post background"/></figure>

                        {/* Post text */}
                        <div className="card-body overflow-y-auto pt-8">
                            <h2 className="card-title text-white">{article.articleTitle}</h2>
                            <p className='text-gray-300 pt-4'>{article.articleSummary}</p>
                        </div>
                    </div>
                </a>

                {/* Post interaction bar */}
                <div className="flex justify-between bg-[#344955] p-5 rounded-b-sm">

                    {/* Like, Comment, Share */}
                    <div className="flex items-center gap-8">
                        <button><img src='/heart.svg' alt='like button'/></button>
                        <button><img src='/chat.svg' alt='chat button'/></button>
                    </div>
                    <button><img src='/share.svg' alt='chat button'/></button>
                </div>

                {/* Comment section body */}
                <section className="bg-gray-800 p-5 rounded-b-xl">

                    {/* Comment Display*/}
                    <div className='border-b-2 border-gray-500 py-5'>

                            {/* Profile Image */}
                            <img className='w-12 h-12 image-full rounded-full' src='/avatar-placeholder.jpg' alt='user profile image'/>
                            <div>

                                {/* Username */}
                                <h2 className='text-white text-lg break-fix'>@jmarchBB</h2>

                                {/* Comment Content */}
                                <p className='text-gray-300 text-sm leading-4 break-fix'>Shrimp fried rice?!? Sure bud, I'll believe it when I see it.</p>
                            </div>
                    </div>

                    {/* Comment box */}
                    <form className='flex justify-center items-center gap-4 pt-4'>
                        <textarea className='bg-gray-200 text-black rounded-lg p-3' rows={1} cols={44} name='comment' id='comment' placeholder='Comment'/>
                        <button type='submit'><img className='rounded-lg' src='/send-fill.svg' alt='submit comment'/></button>
                    </form>
                </section>
            </div>
        </>
    )
}
