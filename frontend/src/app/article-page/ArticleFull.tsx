'use server'

import {Article} from "@/utils/models/article.model";
import {LikeForm} from "@/app/shared/LikeForm";
import {getSession} from "@/utils/fetchSession";
import {Like} from "@/utils/models/like.model";
import {Comment} from "@/utils/models/comment.model";
import {CommentForm} from "@/app/shared/CommentForm";
import {fetchCommentsByArticleId} from "@/utils/http/comment.http";
import {CommentsDisplay} from "./CommentsDisplay";


type Props = {
    article: Article
    likes: Like[]
    comments: Comment[]
}

export async function ArticleFull(props: Props){
    const {article, likes} = props
    const session = await getSession()
    const comments = await fetchCommentsByArticleId(article.articleId)

    return(

        <>
            <section className={"mt-12"}>
                <div className={"flex gap-1 py-5"}>
                    <div className={"md:*:text-xl *:p-2 md:*:p-5 border-e-2 pe-2 border-black"}>
                        <div className="badge badge-primary">{article.articleSourceCountry}</div>
                    </div>
                    <div className='flex items-center'><p
                        className='text-black md:text-2xl'>{article.articleDatetime?.toString()}</p></div>
                </div>
            </section>

            <section className={"mt-2.5"}>
                <div className="hero min-h-screen border-solid"
                     style={{backgroundImage: `url(${article.articleImage})`}}>
                    <div className="hero-overlay bg-opacity-30"></div>
                </div>
            </section>

            <div className='bg-[#344955] p-5'>
            <div className="flex justify-between">
                <div className="flex gap-8">
                    <LikeForm article={article} session={session} likes={likes}/>
                    <div className='flex items-center gap-2'>
                        <button><img src='/chat.svg' alt='chat button'/></button>
                        <p className='text-gray-300'>{comments.length}</p>
                    </div>
                </div>
                <button><img src='/share.svg' alt='share button'/></button>
            </div>
                <p className='pt-5 text-lg'>10 Likes</p>
            </div>


            <CommentsDisplay comments={comments} article={article}/>


            <div className={"text-black *:p-5 lg:px-60"}>
                <div className='font-bold font-serif'>
                    <a className='hover:underline hover:text-blue-500' href={article.articleUrl} target='_blank'>Article
                        URL</a>
                    <p>Author: {article.articleAuthor}</p>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-custom font-bold'>{article.articleTitle}</h1>
                <p className='md:text-lg lg:text-xl tracking-wider leading-10 font-serif'>{article.articleText}</p>
            </div>
        </>
    )
}
