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
                    <div className="card shadow-xl image-full h-96">

                        {/* Post image */}
                        <figure><img src={article.articleImage} alt="Post background"/></figure>

                        {/* Post text */}
                        <div className="card-body overflow-y-auto">
                            <h2 className="card-title">{article.articleTitle}</h2>
                            <p>{article.articleSummary}</p>
                        </div>
                    </div>
                </a>

            {/* Post interaction bar */}
                <div className="flex justify-between bg-[#344955] p-5 rounded-xl">

                    {/* Like, Comment, Share */}
                    <div className="flex items-center gap-8">
                        <button><img src='/heart.svg' alt='like button'/></button>
                        <button><img src='/chat.svg' alt='chat button'/></button>
                    </div>
                    <button><img src='/share.svg' alt='chat button'/></button>
                </div>
            </div>
        </>
    )
}
