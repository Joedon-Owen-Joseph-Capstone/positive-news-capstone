'use client'

import {Session} from "@/utils/fetchSession";
import React from "react";
import {useRouter} from "next/navigation";
import {Like} from "@/utils/models/like.model";
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
            <button onClick={() => router.push('/sign-in-page')} id='like' name='like'>
                <img src='/heart.svg' alt='like button'/>
            </button>
        </>
    }


    const {profile, authorization} = session

    const like = {
        likeArticleId: article.articleId,
        likeProfileId: session?.profile.profileId ? session.profile.profileId : null,
        likeDateTime: null
    }

    // const handleSubmit = async () => {
    //     try {
    //         const response = await fetch('/apis/like/toggle', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "authorization": `${authorization}`
    //             },
    //             body: JSON.stringify(like)
    //         });
    //         const json = await response.json();
    //         if (json.status === 200) {
    //             router.refresh()
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/apis/like/toggle', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `${authorization}`
                },
                body: JSON.stringify(like)
            });
            const json = await response.json();
            if (json.status === 200) {
                // Assuming the server returns the updated like status
                const newIsLiked = !isLiked;
                setIsLiked(newIsLiked); // Update the local state

                // Update local storage
                updateLocalStorageLikes(article.articleId, newIsLiked);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function updateLocalStorageLikes(articleId: string, newIsLiked: boolean) {
        // Get the current likes from local storage
        let likes = JSON.parse(localStorage.getItem('likes')) || {};

        // Update the like status for the specific article
        likes[articleId] = newIsLiked;

        // Save the updated likes back to local storage
        localStorage.setItem('likes', JSON.stringify(likes));
    }

    function checkIfArticleIsLiked(articleId:string) {

        let likes = JSON.parse(localStorage.getItem('likes')) || {}

        return !!likes[articleId]
    }

    const [isLiked, setIsLiked] = React.useState(checkIfArticleIsLiked(article.articleId))

    return (
        <>
            <label className='sr-only' htmlFor='like'>button to like & to dislike articles</label>
            <button onClick={handleSubmit} id='like' name='like'>
                <img src={isLiked ? '/heart-fill.svg' : '/heart.svg'} alt={'Like image'}/>
            </button>
        </>

        // const liked = likes.filter(like => like.likeProfileId === profile.profileId).length

    )
}
