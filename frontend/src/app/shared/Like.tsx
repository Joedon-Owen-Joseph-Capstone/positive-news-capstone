'use client'

import {Article} from "@/utils/models/article.model";
import {Like} from "@/utils/models/like.model";
import {fetchLikeToggle} from "@/utils/http/like.http";

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