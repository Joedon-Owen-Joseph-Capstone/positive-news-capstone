
import React from "react";
import {SignInForm} from "@/app/log-in-page/SignInForm";

export default function SignIn() {
    return (
        <>
            <section>
                <div className="flex justify-center min-h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/5">
                        <img src="/StackedNewspaper.jpg" alt="Image of good news coming" />
                    </div>

                    <div className="flex flex-1 flex-col justify-center items-center w-full  p-8 mx-auto lg:px-12 ">
                        <div className="w-full max-w-md">
                            <h1 className="text-4xl text-black text-center font-medium tracking-wider capitalize mb-16">
                                Log in to your Account
                            </h1>

                            <div className="w-full bg-slate-200 rounded-lg p-6 shadow-2xl">

                                <SignInForm/>

                                <p className='text-center text-black text-sm mt-5'>I don't have an account,
                                    <a href='../sign-up' className="text-blue-500"> Sign up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}