'use client'

import {Like} from "@/utils/models/like.model";
import {fetchLikesByArticleId, fetchLikeToggle} from "@/utils/http/like.http";

type Props = {
    like: Like
}

export function LikeButton (props: Props) {
    const {like} = props
    return (
        <>
            {/*<button onlcick={fetchLikeToggle}><img src='/heart.svg' alt='like button'/></button>*/}
        </>
    )

}

export function LikesDisplay (props: Props) {
    const {like} = props
    return (
        <>
            {/*<p className='text-gray-300 text-lg pt-4'>${like.length} Likes</p>*/}
        </>

    )

}

// Get like post and delete function
async function getData(): Promise<{ like: Like[] }> {

    //  Turn like data in variable
    const like = await fetchLikeToggle()

    // Return like variable
    return {like}
}

// Get article data function
async function getDataLikeArticle(articleId : string): Promise<{ like: Like[] }> {

    //  Turn article data into variable
    const like = await fetchLikesByArticleId(articleId)

    // Return article data
    return {like}
}