"use client";

import SectionTitle from '@/components/Common/SectionTitle';
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import Breadcrumb from '@/components/Common/Breadcrumb';

// export const metadata: Metadata = {
//     title: "Presentation Generator | ICT Innovations Africa",
//     description:
//         "Create visually stunning presentations, documents, and webpages - all created with the power of AI.",
// };

const PresentationGenerator = () => {
    const { theme } = useTheme();

    return (
        <>
            <Breadcrumb pageName="" description="" />
            <section className="container pb-28 pt-20">
                <div className="container flex flex-wrap items-center">
                    <SectionTitle
                        title="Transform Your Presentations with Gamma"
                        paragraph="Say goodbye to boring slides and hello to dynamic, visually stunning presentations, documents, and webpages - all created with the power of AI."
                        mb="44px"
                        center
                    />
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-1/2">
                            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1111 192" style={{ fill: theme === "light" ? "#4A6CF7" : "#fff" }}><path d="M47.2,14.4c-14.4,8.2-26,19.6-34.4,33.6C4.3,62.1,0,77.7,0,94.3s4.3,32.2,12.7,46.3c8.5,14.1,20,25.4,34.4,33.6,14.4,8.2,30.4,12.4,47.7,12.4h69.8v-112.5h-81v39.1h38.2v31.8h-25.6c-9.1,0-17.6-2.3-25.2-6.9-7.6-4.6-13.8-10.8-18.3-18.4-4.5-7.7-6.7-16.2-6.7-25.3s2.3-17.7,6.7-25.3c4.5-7.7,10.6-13.9,18.3-18.4,7.6-4.6,16.1-6.9,25.2-6.9h68.5V2h-69.8c-17.3,0-33.3,4.2-47.7,12.4h0Z"></path><path d="M267.6.2c-42.7,0-77.4,34.8-77.4,77.6v108.8h42v-54.6h70.8v54.6h42v-108.8c0-42.8-34.7-77.6-77.4-77.6ZM303,93h-70.8v-15.3c0-19.6,15.9-35.5,35.4-35.5s35.4,15.9,35.4,35.5v15.3Z"></path><path d="M576.4,0c-32.1,0-58.2,26.2-58.2,58.4v74.2c0,8.7-7,15.7-15.7,15.7s-15.7-7-15.7-15.7V58.5c0-32.2-26.1-58.4-58.2-58.4s-58.2,26.2-58.2,58.4v128.2h42.6V58.5c0-8.7,7-15.7,15.7-15.7s15.7,7,15.7,15.7v74.1c0,32.2,26.1,58.4,58.2,58.4s58.2-26.2,58.2-58.4V58.4c0-8.7,7-15.7,15.7-15.7s15.7,7,15.7,15.7v128.3h42.6V58.4c0-32.2-26.1-58.4-58.2-58.4h0Z"></path><path d="M1033.1.3c-42.7,0-77.4,34.8-77.4,77.6v108.8h42v-54.6h70.8v54.6h42v-108.8c0-42.8-34.7-77.6-77.4-77.6ZM1068.5,93.2h-70.8v-15.3c0-19.6,15.9-35.5,35.4-35.5s35.4,15.9,35.4,35.5v15.3Z"></path><path d="M872,0c-32.1,0-58.2,26.2-58.2,58.4v74.2c0,8.7-7,15.7-15.7,15.7s-15.7-7-15.7-15.7V58.4c0-32.2-26.1-58.4-58.2-58.4s-58.2,26.2-58.2,58.4v128.3h42.6V58.4c0-8.7,7-15.7,15.7-15.7s15.7,7,15.7,15.7v74.2c0,32.2,26.1,58.4,58.2,58.4s58.2-26.2,58.2-58.4V58.4c0-8.7,7-15.7,15.7-15.7s15.7,7,15.7,15.7v128.3h42.6V58.4c0-32.2-26.1-58.4-58.2-58.4Z"></path></svg>
                        </div>
                        <div className='w-full lg:w-1/2 mb-12 text-base text-body-color dark:text-body-color-dark'>
                            <Link href="https://gamma.app/signup?r=gfz1u6931vfbter" className='text-primary'>Gamma App</Link> is an AI-powered platform that helps you create beautiful, engaging presentations and web-style documents in minutes. No more wrestling with slide layouts, content or wasting hours on formatting - Gamma does the heavy lifting for you.
                        </div>
                    </div>

                    {/* Why Choose Gamma Section */}
                    <div className="w-full mb-12 mt-6">
                        <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Why Choose Gamma?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="wow fadeInUp rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11" data-wow-delay=".1s">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">1. Effortless Creation</h3>
                                <ul className="list-disc pl-6 space-y-2 text-base text-body-color dark:text-body-color-dark">
                                    <li>Generate entire presentations, reports, or pitch decks with just a prompt.</li>
                                    <li>AI helps structure your content intelligently and beautifully.</li>
                                </ul>
                            </div>
                            <div className="wow fadeInUp rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11" data-wow-delay=".2s">
                                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">2. Visual Impact</h3>
                                <ul className="list-disc pl-6 space-y-2 text-base text-body-color dark:text-body-color-dark">
                                    <li>Stunning layouts and templates optimized for readability and engagement.</li>
                                    <li>Add images, charts, callouts, and multimedia effortlessly.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="w-full text-center">
                        <Link
                            href="https://gamma.app/signup?r=gfz1u6931vfbter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ease-in-up rounded-sm bg-primary px-8 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-opacity-90 dark:shadow-submit-dark"
                        >
                            Create your free Gamma account now
                        </Link>
                    </div>
                </div>
            </section >
        </>
    )
}

export default PresentationGenerator;
