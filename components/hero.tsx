import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import LitUpButton from './ui/litUpButton'

const Hero = () => {
    return (
        <div className='pb-15'>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
                <div className="flex justify-center relative my-20 z-10">
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest test-xs text-center text-blue-100 max-w-80'>
                            DYNAMIC WEB MAGIC WITH FULL-STACK DEVELOPMENT
                        </h2>
                        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill="red" />
                        <Spotlight className='top-28 left-80 h-[88vh] w-[50vw]' fill="pink" />

                        {/* <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='Crafting Scalable Solutions to Empower and Simplify Lives' /> */}
                        <h1 className="text-center text-bold text-[40px] md:text-5xl lg:text-6xl">
                            Crafting Scalable Solutions to <span className="text-center text-[40px] text-bold md:text-5xl lg:text-6xl text-pink-500">Empower and Simplify Lives</span>
                        </h1>
                        <p className='text-center md:tracking-wider mt-4 mb-4 text-sm md:text-lg lg:text-2xl'> Hi, I'm Priya Krishnamurthy, a Full-Stack Developer passionate about blending technology and accessibility to drive real-world impact.

                        </p>
                        <a href='#about'>
                            <LitUpButton title="Learn more about my Experience" position='right' icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                            } />
                        </a>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Hero