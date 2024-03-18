"use client";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {FormDebugger} from "@/components/formDebugger";
import {DisplayError} from "@/components/displayError";
import {DisplayStatus} from "@/components/displayStatus";
import {Profile, ProfileSchema} from "@/utils/models/profile.model";


export function ProfileAboutForm() {

    const initialValues : Profile = {
        profileId: '',
        profileAbout: null,
        profileImageUrl: null,
        profileName: '',
    }

    const handleSubmit = (values: Profile, actions: FormikHelpers<Profile>) => {

        const {setStatus, resetForm} = actions
        fetch('/apis/profile', {
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
                validationSchema={toFormikValidationSchema(ProfileSchema)}
            >
                {ProfileAboutFormContent}
            </Formik>

        </>
    )
}


function ProfileAboutFormContent(props: FormikProps<Profile>) {

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
            <form onSubmit={handleSubmit} className={"py-2 "}>
                <div className="fl pb-2">
                    <label className="text-lg font-semibold" htmlFor="profileAbout">Name</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profileAbout as string}
                        className="input input-bordered w-full max"
                        type="text"
                        name="profileAbout"
                        id="profileAbout"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profileName"}/>
                </div>

            </form>

        </>
    )
}