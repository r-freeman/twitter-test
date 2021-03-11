import React from 'react';
import dashboard from '../assets/images/dashboard.png';

function Hero() {
    return (
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
            <div
                className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
                <div>
                    <div className="mt-20">
                        <div>
                            <a href="#" className="inline-flex space-x-4">
                                <span
                                    className="rounded bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-500 tracking-wide uppercase">
                                  Update
                                </span>
                                <span
                                    className="inline-flex items-center text-sm font-medium text-blue-500 space-x-1">
                                    <span>What's new in version 0.1.0</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </span>
                            </a>
                        </div>
                        <div className="mt-6 sm:max-w-xl">
                            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                                Take control of your customer support
                            </h1>
                            <p className="mt-6 text-xl text-gray-500">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                                cupidatat commodo.
                            </p>
                        </div>
                        <form action="#" className="mt-12 sm:max-w-lg sm:w-full sm:flex">
                            <div className="min-w-0 flex-1">
                                <label htmlFor="hero_email" className="sr-only">Email address</label>
                                <input id="hero_email" type="email"
                                       className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                       placeholder="Enter your email"/>
                            </div>
                            <div className="mt-4 sm:mt-0 sm:ml-3">
                                <button type="submit"
                                        className="block w-full rounded-md border border-transparent px-5 py-3 bg-blue-500 text-base font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:px-10">Notify
                                    me
                                </button>
                            </div>
                        </form>
                        <div className="mt-6">
                            <div className="inline-flex items-center divide-x divide-gray-300">
                                <div className="flex-shrink-0 flex pr-5">
                                    <svg className="h-5 w-5 text-yellow-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="h-5 w-5 text-yellow-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="h-5 w-5 text-yellow-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="h-5 w-5 text-yellow-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="h-5 w-5 text-yellow-400"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </div>
                                <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                                    <span className="font-medium text-gray-900">Rated 5 stars</span> by
                                    over <span className="font-medium text-blue-500">500 beta users</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div
                    className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="hidden sm:block">
                        <div
                            className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"/>
                        <svg className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404"
                             height="392" fill="none" viewBox="0 0 404 392">
                            <defs>
                                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20"
                                         height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"/>
                        </svg>
                    </div>
                    <div
                        className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                        <img
                            className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                            src={dashboard} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;