'use client'

import {z} from "zod";
import {Session} from "@/utils/fetchSession";
import React from "react";
import {useRouter} from "next/navigation";
import {Like, LikeSchema} from "@/utils/models/like.model";
import {Article} from "@/utils/models/article.model";

type LikeFormProps = {
    session : Session|undefined
    article: Article
    likes: Like[]
}
export function LikeForm(props : LikeFormProps) {

    const router = useRouter()

    const {session, article, likes} = props

    // If no session when clicking send them to sign-in page
    if(session === undefined) {
        return <>
            <label className='sr-only' htmlFor='like'>button to like & to dislike articles</label>
            <button onClick={() => router.push('/sign-in-page')} id='like'>
                <img src='/heart.svg'
                     alt='like button'/>
            </button>
        </>
    }


    const {profile, authorization} = session

    const like = {
        likeArticleId: article.articleId,
        likeProfileId: session?.profile.profileId ? session.profile.profileId : null,
        likeDateTime: null
    };

    const handleSubmit = () => {

        fetch('/apis/like/toggle', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${authorization}`
            },
            body: JSON.stringify(like)
        }).then(response => response.json()).then(json => {
            if (json.status === 200) {
                router.refresh()
            }
        })
    };

    const liked = likes.filter(like => like.likeProfileId === profile.profileId).length
    return (
        <>
                <label className='sr-only' htmlFor='like'>button to like & to dislike articles</label>
                <button onClick={handleSubmit} id='like'>
                    <img src={liked ? '/heart-fill.svg' : '/heart.svg'}
                         alt='like button'/>
                </button>
        </>
    )
}
