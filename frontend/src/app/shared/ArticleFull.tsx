'use client'

import {Article} from "@/utils/models/article.model";

type Props = {
    article: Article
}

export function ArticleFull(props: Props){
    const {article} = props
    console.log(article)

    return(

        <>
            <section className={"mt-12"}>
                <div className={"flex gap-1 py-5"}>
                    <div className={"md:*:text-xl *:p-2 md:*:p-5 border-e-2 pe-2 border-black"}>
                        <div className="badge badge-primary">{article.articleSourceCountry}</div>
                    </div>
                    <div className='flex items-center'><p className='text-black md:text-2xl'>{article.articleDatetime?.toString()}</p></div>
                </div>
            </section>

            <section className={"mt-2.5"}>
                <div className="hero min-h-screen border-solid"
                     style={{backgroundImage: `url(${article.articleImage})`}}>
                    <div className="hero-overlay bg-opacity-30"></div>
                </div>
            </section>

            <div className="flex justify-between bg-[#344955] p-5">
                <div className="flex gap-8">
                    <button><img src='/heart.svg' alt='like button'/></button>
                    <button><img src='/chat.svg' alt='chat button'/></button>
                </div>
                <button><img src='/share.svg' alt='share button'/></button>
            </div>
            <div className={"text-black *:p-5 lg:px-60"}>
                <div className='font-bold font-serif'>
                    <a className='hover:underline hover:text-blue-500' href={article.articleUrl} target='_blank'>Article URL</a>
                    <p>Author: {article.articleAuthor}</p>
                </div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-custom font-bold'>{article.articleTitle}</h1>
                <p className='md:text-lg lg:text-xl tracking-wider leading-10 font-serif'>{article.articleText}</p>
            </div>
        </>
    )
}