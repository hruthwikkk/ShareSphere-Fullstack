import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridTitles } from '@/data'

const Grid = () => {

    return (
        <section id="about">
            <BentoGrid className="w-full py-15">
                {gridTitles.map((item, i) => (
                    <BentoGridItem
                        className={item.className}
                        id={item.id}
                        key={i}
                        title={item.title}
                        description={item.description}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        spareImg={item.spareImg}
                        titleClassName={item.titleClassName} />
                ))
                }
            </BentoGrid>
        </section>
    )
}

export default Grid