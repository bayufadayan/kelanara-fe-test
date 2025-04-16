import React from 'react'
import Image from 'next/image'

export default function CarouselItem() {
    return (
        <div className='flex flex-col gap-3'>
            {/* Thumbnail videonya */}
            <div className='relative h-[188px] w-[282px] md:w-[383px] bg-black rounded-lg'>
                <div className="absolute w-[72px] h-[72px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-md z-20">
                    <Image
                        src="icons/play-icon.svg"
                        alt="Play Icon"
                        width={20}
                        height={26}
                    />
                </div>
                <Image
                    src={'/images/carousel-tn-1.png'}
                    alt='Thumbnail 1'
                    className='object-cover rounded-lg'
                    fill
                    priority
                />
            </div>

            {/* Title dan date */}
            <div className='leading-tight'>
                <h3 className='font-bold'>Papua - Cendarawasih</h3>
                <small className='text-black/40'>Senin, 14 April 2025</small>
            </div>
        </div>
    )
}
