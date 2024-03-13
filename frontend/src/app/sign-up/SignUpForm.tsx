"use client";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {FormDebugger} from "@/components/formDebugger";
import {DisplayError} from "@/components/displayError";
import {DisplayStatus} from "@/components/displayStatus";
import {SignUp, SignUpSchema} from "@/utils/models/profile.model";
//import {fetchPostSignUp} from "@/utils/http/profile.http";

export function SignUpForm() {

    const initialValues : SignUp = {
        profileEmail: '',
        profilePassword: '',
        profileId: null,
        profileAbout: null,
        profileImageUrl: null,
        profileName: '',
        profilePasswordConfirm: ''
    }

    const handleSubmit = (values: SignUp, actions: FormikHelpers<SignUp>) => {

        const {setStatus, resetForm} = actions
        fetch('/apis/sign-up', {
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
                {SignUpFormContent}
            </Formik>

        </>
    )
}


function SignUpFormContent(props: FormikProps<SignUp>) {

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
                    <label className="text-lg font-semibold" htmlFor="profileEmail">Name</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profileName}
                        className="input input-bordered w-full max"
                        type="text"
                        name="profileName"
                        id="profileName"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profileName"}/>
                </div>
                <div className="fl pb-2">
                    <label className="text-lg font-semibold" htmlFor="profileEmail">Email</label>
                    <input
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profileEmail}
                        className="input input-bordered w-full max"
                        type="text"
                        name="profileEmail"
                        id="profileEmail"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profileEmail"}/>
                </div>
                <div className="">
                    <label className={"text-lg font-semibold"} htmlFor="password">Password</label>
                    <input
                        className="input input-bordered w-full"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profilePassword}
                        type="password"
                        name="profilePassword"
                        id="password"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
                </div>
                <div className="">
                    <label className={"text-lg font-semibold"} htmlFor="password">Confirm Password</label>
                    <input
                        className="input input-bordered w-full"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.profilePasswordConfirm}
                        type="password"
                        name="profilePasswordConfirm"
                        id="password"
                    />
                    <DisplayError errors={errors} touched={touched} field={"profilePassword"}/>
                </div>
                <div className="py-2 flex gap-2">
                    <button className='btn btn-success mt-8 bg-blue-500 text-white' type="submit">Sign up</button>
                </div>
                <DisplayStatus status={status}/>
            </form>
            <FormDebugger {...props} />
        </>
    )
}