import React from 'react'

const LitUpButton = ({ title, icon, position, handleClick, otherClasses }: { title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string }) => {
    return (
        <button className="p-[3px] relative" onClick={handleClick}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-300 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-lg  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}">
                <span className='relative inline-flex h-full w-full items-center justify-center gap-3'>
                    {position === 'left' && icon}
                    {title}
                    {position === 'right' && icon}
                </span>

            </div>
        </button>
    )
}

export default LitUpButton