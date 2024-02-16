
export default function SignUp() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')" }}>
                    </div>

                    <div className="flex items-center  w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <div className=" bg-gradient-to-br from-[#0D0B33] to-[#52489F] p-5 max-w-fit">
                            <h1 className="text-2xl text-white font-mono tracking-wider capitalize dark:text-white">
                                Create Your Account
                            </h1>
                            </div>


                            <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1">
                                {/* Form fields and submit button */}
                                {/* Similar structure repeated for each input */}
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 font-bold dark:text-gray-200">Username</label>
                                    <input type="text" placeholder=""
                                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 font-bold dark:text-gray-200">Email</label>
                                    <input type="text" placeholder=""
                                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 font-bold dark:text-gray-200">Password</label>
                                    <input type="text" placeholder=""
                                           className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                                </div>

                                {/* Additional fields omitted for brevity */}
                                <button
                                    className="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white bg-blue-500 rounded-lg">
                                    <span>Sign Up </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}