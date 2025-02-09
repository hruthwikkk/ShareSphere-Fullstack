import React from 'react'
import Categories from '@/components/ui/Categories'

const request = () => {
  return (
    <div className="h-screen w-full bg-black-100 dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center">
            <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to ShareSphere
                </h2>
                <div className='max-w-7xl w-full'>
                    <Categories />
                </div>
            </div>
    </div>
  )
}

export default request