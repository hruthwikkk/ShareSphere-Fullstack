import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './3d-pin'

const Categories = () => {
    return (
        <section className='pt-15' id='projects'>
            <div className='mt-10 pt-10'>
                <h1 className='text-white heading mt-5 pt-5'>
                    Explore Categories: {' '}
                    <span className='text-pink-500'>Browse and share items, study buddies, housing, and more - securely and locally at NC State.</span>
                </h1>
                <div className='flex flex-wrap items-center justify-center px-4 py-4 pb-2 pt-2 gap-x-16 gap-y-2 mt-2'>
                    {projects.map((project) =>
                        <div key={project.id} className='sm:h-[30rem] h-[20rem] min-h-[20.5rem] flex items-center justify-center m-10 sm:w-[470px] w-[70vw]'>
                            <PinContainer href={project.link}>
                                <div className='relative flex text-white items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] lg:h-[30vh] mb-10'>
                                    <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                        <img src="./bg.png" alt='bg-img' />
                                    </div>
                                    <img className="z-10, absolute" src={project.img} alt="Project" />
                                </div>
                                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white'>{project.title}
                                </h1>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-white-200'>
                                    {project.des}
                                </p>
                            </PinContainer>
                        </div>)}

                </div>
            </div>
        </section>
    )
}

export default Categories