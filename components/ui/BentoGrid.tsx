
"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { MapElement } from './MapElement'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Lottie from "react-lottie";
import { Fascinate } from "next/font/google";
import animationData from '@/data/confetti.json'
import LitUpButton from "./litUpButton";

const leftList = ["Python", "JavaScript", "TypeScript"]
const rightList = ["Next.js", "React.js", "Node.js"]

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    img,
    imgClassName,
    spareImg,
    id,
    titleClassName
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    spareImg?: string;
    titleClassName: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('pkrish24@ncsu.edu')
        setCopied(true)
    }
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                backgroundColor: 'linear-gradient(90deg, rgba(164,0,255,1) 0%, rgba(91,30,102,1) 3%, rgba(2,0,36,1) 98%)',
                background: 'rgb(4,7,29)'
            }}
        >
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && id !== 1 && id !== 5 && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}

                </div>
                <div
                    className={`absolute h-auto left-40 -bottom-10 hidden md:block ${id === 5 && "w-full"
                        } `}
                >
                    {img && id == 5 && (
                        <DotLottieReact
                            src={img}
                            loop
                            autoplay
                            className={cn(imgClassName, "object-cover object-center")}
                        />
                    )}

                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "mr-10 w-full opacity-80"
                        } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            //   width={220}
                            className="object-cover object-center w-full h-full"
                        />
                    )}

                </div>


                {id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}

                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                    >
                        {title}
                    </div>

                    {img && id == 1 && (
                        <DotLottieReact
                            src={img}
                            loop
                            autoplay
                        />
                    )}



                    <div className="group-hover/bento:translate-x-1 transition duration-200">
                        <div className="justify-center items-center flex flex-col h-full w-full">
                            {id === 2 && <MapElement />}
                        </div>

                    </div>

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-2 md:gap-2 lg:gap-8">
                                {leftList.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center text-pink-500 bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                            </div>
                            <div className="flex flex-col gap-1 md:gap-2 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-3 px-2 rounded-lg text-center bg-[#10132E]"></span>
                                {rightList.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-pink-500 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 &&
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={{ loop: copied, autoplay: copied, animationData: animationData, rendererSettings: { preserveAspectRatio: 'xMidYmid slice' } }} />
                            </div>
                            <LitUpButton title={copied ? 'Email Copied' : 'Copy my email'}
                                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                                </svg>}
                                position="left"
                                otherClasses="!bg-[#161a31]"
                                handleClick={handleCopy}>
                            </LitUpButton>
                        </div>
                    }
                </div>

            </div>

        </div >
    );
};
