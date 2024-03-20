import React from "react";
import {SignUpForm} from "@/app/sign-up/SignUpForm";

export default function SignUp() {
    return (
        <>
            <section>
                <div className="flex justify-center min-h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/5">
                        <img src="/GoodNews.jpg" alt="Image of good news coming" />
                    </div>

                    <div className="flex flex-1 flex-col justify-center items-center w-full  p-8 mx-auto lg:px-12 ">
                        <div className="w-full max-w-md">
                            <h1 className="text-4xl text-black text-center font-medium tracking-wider capitalize mb-16">
                                Create Your Account
                            </h1>

                            <div className="w-full bg-white rounded-lg p-6 shadow-2xl">

                                <SignUpForm/>

                                <p className='text-center text-black text-sm mt-5'>I already have an account,
                                    <a href='../sign-in-page' className="text-blue-500"> Sign in</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
