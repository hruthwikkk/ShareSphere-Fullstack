import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import LitUpButton from './ui/litUpButton'
import SignUp from '@/pages/signup'

const Hero = () => {
    return (
        <div className='pb-15'>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
                <div className="flex justify-center relative my-20 z-10">
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill="red" />
                        <Spotlight className='top-28 left-80 h-[88vh] w-[50vw]' fill="pink" />

                        { <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words='ShareSphere' /> }
                        <h1 className="text-center text-bold text-[40px] md:text-5xl lg:text-6xl">
                            <span className="text-center text-[40px] text-bold md:text-5xl lg:text-6xl text-pink-500">Where Campus Connects and Resources Flow</span>
                        </h1>
                        <p className='text-center md:tracking-wider mt-4 mb-4 text-sm md:text-lg lg:text-2xl'> Welcome to ShareSphere!
                        ShareSphere is your enchanted hub for sharing resources, skills, and opportunities across campus.
                        </p>
                        <a href='#about'>
                            <a href='/signup'>< span className='m-8'><LitUpButton title="Sign Up" position='right' onClick/></span></a>
                            <span className='m-8'><LitUpButton title="Login" position='right'/></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero