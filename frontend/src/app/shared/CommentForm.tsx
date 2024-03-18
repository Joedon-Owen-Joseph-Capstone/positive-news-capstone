'use client'

import React from 'react';
import {Formik, FormikHelpers} from 'formik';
import {useRouter} from 'next/navigation';
import {Session} from '@/utils/fetchSession';
import {Article} from '@/utils/models/article.model';
import {Comment, CommentSchema} from '@/utils/models/comment.model';
import {DisplayStatus} from '@/components/displayStatus';
import {toFormikValidationSchema} from 'zod-formik-adapter';
import {z} from 'zod';
import {FormDebugger} from "@/components/formDebugger";

type CommentFormProps = {
    session: Session | undefined
    article: Article
}

export function CommentForm(props: CommentFormProps) {

    const router = useRouter();

    const {session, article} = props;

    if(session === undefined) {
        return <></>
    }

    const {authorization} = session;

    const initialValues = {
        commentId: null,
        commentArticleId: article.articleId,
        commentProfileId: session?.profile.profileId ?? null,
        commentContent: '',
        commentDateTime: null,
    };

    const formSchema = CommentSchema;
    type Values = z.infer<typeof formSchema>

    const handleSubmit = (values: Values, actions: FormikHelpers<any>) => {
        const {setStatus, resetForm} = actions;
        fetch('/apis/comment', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `${authorization}`
            },
            body: JSON.stringify(values)
        }).then(response => response.json()).then(json => {
            if (json.status === 200) {
                resetForm();
                router.refresh();
            }
            setStatus({type: json.type, message: json.message});
        });
    };

    return (
        <>
            <Formik initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={toFormikValidationSchema(formSchema)}>
                {CommentFormContent}
            </Formik>

        </>
    );
}

function CommentFormContent(props: any) {
    const {
        values,
        handleChange,
        handleBlur,
        status,
        handleSubmit,
    } = props;

    return (
        <>
            <form onSubmit={handleSubmit}>
                <textarea className={"textarea textarea-lg block w-1/3 h-32 resize-none p-4 text-sm text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"}
                          id="content"
                          name="commentContent"
                          value={values.commentContent}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Type your comment here..."
                          required
                />
                <button type="submit" className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md">Submit Comment</button>
                <DisplayStatus status={status}/>
            </form>
            {/*<FormDebugger {...props}/>*/}
        </>
    );
}