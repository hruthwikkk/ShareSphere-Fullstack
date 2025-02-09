import { Button } from '@/components/ui/MovingBorders'
import { SparklesCore } from '@/components/ui/sparkles'
import { TextGenerateEffect } from '@/components/ui/textGenerateEffect'
import { userOptions } from '@/data'
import React from 'react'

const homepage = () => {
    return (
        <div className="h-screen w-full bg-black-100 dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center">
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    WELCOME BACK!
                </h2>
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                    Aceternity
                </h1>

                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

            </div>
        </div >

    )
}

export default homepage