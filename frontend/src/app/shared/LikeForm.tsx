'use client'

import {z} from "zod";
import {Formik, FormikHelpers} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Session} from "@/utils/fetchSession";
import React from "react";
import {useRouter} from "next/navigation";
import {Like, LikeSchema} from "@/utils/models/like.model";
import {Article} from "@/utils/models/article.model";
import {FormDebugger} from "@/components/formDebugger";
import {DisplayStatus} from "@/components/displayStatus";

type LikeFormProps = {
    session : Session|undefined
    article: Article
}
export function LikeForm(props : LikeFormProps) {

    const router = useRouter()

    const {session, article} = props

    if(session === undefined) {
        return <></>
    }



    const {profile, authorization} = session

    const initialValues = {
        likeArticleId: article.articleId,
        likeProfileId: session?.profile.profileId ?? null,
        likeDateTime: null
    };

    const formSchema = LikeSchema.pick({likeArticleId: true, likeProfileId: true, likeDateTime: true})
    type  Values = z.infer<typeof formSchema>
    const handleSubmit = (values: Values, actions: FormikHelpers<any>) => {

        const {setStatus, resetForm} = actions
        fetch('/apis/like/toggle', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${authorization}`
            },
            body: JSON.stringify(values)
        }).then(response => response.json()).then(json => {
            if (json.status === 200) {
                resetForm()
                router.refresh()
            }
            setStatus({type: json.type, message: json.message})
        })
    };

    return (
        <>
            <Formik initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={toFormikValidationSchema(formSchema)}>
                {LikeFormContent}
            </Formik>
        </>
    )
}


function LikeFormContent(props: any) {

    const {
        status,
        handleSubmit,
    } = props;


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='sr-only' htmlFor='like'>button to like & to dislike articles</label>
                <button type="submit" id='like'>
                    <img src={status && status.message === 'Successful Like!' ? '/heart-fill.svg': '/heart.svg'} alt='like button'/>
                </button>
                <DisplayStatus status={status}/>
            </form>
            {/*<FormDebugger {...props} />*/}
        </>
    )
}