import React from "react";

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

                            <div className="w-full dark:bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-2xl">

                            {/* Form fields and submit button */}
                            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1">

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 font-bold dark:text-gray-200">Username</label>
                                    <input type="text"
                                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 font-bold dark:text-gray-200">Email</label>
                                    <input type="text"
                                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 font-bold dark:text-gray-200">Password</label>
                                    <input type="password"
                                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                </div>

                                <button
                                    className="items-center px-6 py-3 text-sm text-white bg-blue-500 rounded-lg max-w-fit">
                                    <span>Sign Up </span>
                                </button>

                            </form>
                            </div>
                            <p className='text-center text-black text-sm mt-5'>I already have an account,
                                <a href='../log-in-page' className="text-blue-500"> Sign in</a> </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}