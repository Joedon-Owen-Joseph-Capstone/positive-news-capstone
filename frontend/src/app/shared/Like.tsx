"use client";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {FormDebugger} from "@/components/formDebugger";
import {DisplayError} from "@/components/displayError";
import {DisplayStatus} from "@/components/displayStatus";
import {SignUp, SignUpSchema} from "@/utils/models/profile.model";
import {Like} from "@/utils/models/like.model";

export function likeForm() {

    const initialValues : Like = {
        likeArticleId: null,
        likeProfileId: null,
        likeDateTime: null,
    }

    const handleSubmit = (values: Like, actions: FormikHelpers<Like>) => {

        const {setStatus, resetForm} = actions
        fetch('/apis/like/toggle', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        }).then(response => response.json()).then(json => {
            let type = 'alert alert-danger'
            if(json.status === 200) {
                resetForm()
                type = 'alert alert-success'
            }
            setStatus({type, message: json.message})
        })

    }

    return(
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={toFormikValidationSchema(SignUpSchema)}
            >
                {LikeFormContent}
            </Formik>

        </>
    )
}


function LikeFormContent(props: FormikProps<Like>) {

    const {
        status,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    return(
        <>
            <form onSubmit={handleSubmit} className=''>
                    <button><img src='/heart-fill.svg' alt='like button'/></button>
                <DisplayStatus status={status}/>
            </form>
            <FormDebugger {...props} />
        </>
    )
}