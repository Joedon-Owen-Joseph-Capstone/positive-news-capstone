'use server'

import {Article} from "@/utils/models/article.model";
import {LikeForm} from "@/app/shared/LikeForm";
import {Like} from "@/utils/models/like.model";
import {getSession} from "@/utils/fetchSession";
import {fetchAllArticles, fetchArticleByArticleId} from "@/utils/http/article.http";
import {fetchLikesByArticleId} from "@/utils/http/like.http";
import {Comment} from "@/utils/models/comment.model";
import {fetchCommentsByArticleId} from "@/utils/http/comment.http";


type Props = {
    article: Article
}

export async function PopularArticle (props: Props) {
    const session = await getSession()

    const { article } = props
    const likes = await getData(article.articleId)
    const comments =  await fetchCommentsByArticleId(article.articleId)


    return (
        <>
            {/* Popular section */}
            <section className='bg-[#0e142a] text-white font-custom p-8 md:p-16 lg:px-64 mt-28 lg:mt-56'>
                <h2 className='text-center text-3xl md:text-4xl lg:text-5xl pb-16'>Most Popular Article</h2>

                {/* Popular content */}
                <div className='lg:flex justify-center items-center gap-20'>
                    <a href={`/article-page/${article.articleId}`}>
                        <div>

                            {/* Popular image */}
                            <div className='flex justify-center'>
                                <img src={article.articleImage} alt={'popular pic'}/>
                            </div>

                            {/* Popular text */}
                            <div>
                                <h3 className='text-2xl md:text-3xl lg:text-4xl py-10'>{article.articleTitle}</h3>
                                <p className='font-serif text-lg md:text-xl lg:text-2xl'>{article.articleSummary}</p>
                                <p className='pt-10'>{article.articleDatetime?.toString()}</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}

async function getData(articleId : string) {
    return await fetchLikesByArticleId(articleId)
}
