import React from 'react'
import Categories from '@/components/ui/Categories'

const help = () => {
  return (
    <div className="h-full w-full bg-black-100 dark:bg-grid-white/[0.01] bg-grid-black/[0.1] flex items-center justify-center">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome to ShareSphere
                </h2>
                <div className='p-5'>
                    <Categories />
                </div>
    </div>
  )
}

export default help