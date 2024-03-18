'use server'

import {Article} from "@/utils/models/article.model";
import {LikeForm} from "@/app/shared/LikeForm";
import {Like} from "@/utils/models/like.model";
import {getSession} from "@/utils/fetchSession";
import {fetchAllArticles, fetchArticleByArticleId} from "@/utils/http/article.http";
import {fetchLikesByArticleId} from "@/utils/http/like.http";


type Props = {
    article: Article
    likes: Like[]
}

export async function Post (props: Props) {
    const session = await getSession()

    const { article } = props
    const likes = await getData(article.articleId)

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
                <div className='bg-[#344955] p-4 rounded-b-md'>
                    <div className="flex justify-between">

                    {/* Like, Comment, Share */}
                    <div className="flex items-center gap-8">
                        <LikeForm article={article} session={session} likes={likes}/>
                        <div className='flex items-center gap-2'>
                            <button><a href={`/article-page/${article.articleId}`}><img src='/chat.svg' alt='chat button'/></a></button>
                            <p>10</p>
                        </div>
                    </div>
                    <button><img src='/share.svg' alt='chat button'/></button>
                </div>
                    <p className='text-gray-300 text-lg pt-4'>{likes.length} Likes</p>
                </div>
            </div>
        </>
    )
}

async function getData(articleId : string) {

    // Variable assigned to article data
    const likes = await fetchLikesByArticleId(articleId)

    // Return the article values
    return likes
}