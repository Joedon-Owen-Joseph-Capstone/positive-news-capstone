'use client'

import React from 'react';
import { Session } from '@/utils/fetchSession';
import { Article } from '@/utils/models/article.model';
import {toggleLike} from "@/utils/http/like.http";

type LikeFormProps = {
    session: Session | undefined;
    article: Article;
};

export function LikeForm(props: LikeFormProps) {
    const { session, article } = props;

    if (!session) {
        return (
            <>
                <label className='sr-only' htmlFor='like'>
                    button to like & to dislike articles
                </label>
                {/*<button onClick={() => router.push('/sign-in-page')} id='like' name='like'>*/}
                {/*    <img src='/heart.svg' alt='like button' />*/}
                {/*</button>*/}
            </>
        );
    }

    const handleClick = async () => {
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
            <button onClick={handleClick} id='like' name='like'>
                <img src={'/heart.svg'} alt='Like button' />
            </button>
        </>
    );
}
