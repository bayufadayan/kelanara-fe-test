import React from 'react'
import CarouselItem from '../Item'
import carouselData from '@/data/carousel.json';

export default function CarouselContainer() {
    return (
        <div className='flex overflow-x-scroll gap-5 mx-4 md:mx-10 pb-4'>
            {carouselData.map((item, index) => (
                <CarouselItem
                    key={index}
                    image={`/images/${item.image}`}
                    title={item.title}
                    date={item.date}
                    is_live={item.is_live}
                />
            ))}
        </div>
    )
}
