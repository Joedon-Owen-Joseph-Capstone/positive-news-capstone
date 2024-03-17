'use client'

import React from 'react';
import { Session } from '@/utils/fetchSession';
import { Article } from '@/utils/models/article.model';
import {toggleLike} from "@/utils/http/like.http";
import {useRouter} from "next/navigation";

type LikeFormProps = {
    session: Session | undefined;
    article: Article;
};

export function LikeForm(props: LikeFormProps) {
    const { session, article } = props
    const router = useRouter()

    if (!session) {
        return (
            <>
                <label className='sr-only' htmlFor='like'>
                    button to like & to dislike articles
                </label>
                <button onClick={() => router.push('/sign-in-page')} id='like' name='like'>
                    <img src='/heart.svg' alt='like button' />
                </button>
            </>
        );
    }

    const handleLike = async () => {
        try {
            const json = await toggleLike(article.articleId, session)
            console.log(json)
            if (json.status !== 200) {
            }
        } catch (error) {
            console.error('Error toggling like:', error)
        }
    };

    return (
        <>
            <label className='sr-only' htmlFor='like'>
                button to like & to dislike articles
            </label>
            <button onClick={handleLike} id='like' name='like'>
                <img src={'/heart.svg'} alt='Like button' />
            </button>
        </>
    );
}
