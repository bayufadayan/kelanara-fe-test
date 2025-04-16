import React from 'react'

type SectionTitleProps = {
    title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="flex justify-between px-4 md:px-10 py-4 items-center mt-2">
            <h2 className='font-bold text-xl md:text-2xl'>{title}</h2>
            <span className='underline'>See All</span>
        </div>
    )
}
