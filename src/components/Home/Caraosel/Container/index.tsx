import React from 'react'
import CarouselItem from '../Item'

export default function CarouselContainer() {
    return (
        <div className='flex overflow-x-scroll gap-5 mx-4 md:mx-10 pb-4'>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
            <CarouselItem/>
        </div>
    )
}
