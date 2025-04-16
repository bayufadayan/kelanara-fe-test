'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import CaraouselOverlay from '../Overlay';

type CarouselItemProps = {
    image: string;
    title: string;
    date: string;
    is_live: boolean;
};

export default function CarouselItem({ image, title, date, is_live }: CarouselItemProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div className='flex flex-col gap-3 hover:cursor-pointer'>
            {/* List Item */}
            <div
                className='relative h-[188px] w-[282px] md:w-[383px] bg-black rounded-lg'
                onClick={handleClick}
            >
                <div className="absolute w-[72px] h-[72px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-md z-20">
                    <Image
                        src="icons/play-icon.svg"
                        alt="Play Icon"
                        width={20}
                        height={26}
                    />
                </div>
                <Image
                    src={image}
                    alt='Thumbnail 1'
                    className='object-cover rounded-lg'
                    fill
                    priority
                />
            </div>

            {/* Title dan date */}
            <div className='leading-tight'>
                <h3 className='font-bold'>{title}</h3>
                <small className='text-black/40 md:hidden'>{date}</small>
                <div className='hidden md:flex items-center gap-1 mt-1'>
                    <span className={`w-[7px] h-[7px] rounded-full ${is_live ? "bg-red-500" : "bg-gray-500"}`}></span>
                    <small className='text-black/40'>
                        {
                            is_live ? "Sedang Live" : "Live sudah berakhir"
                        }
                    </small>
                </div>
            </div>

            {/* Overlay Youtube */}
            {isClicked && (
                <CaraouselOverlay onClose={handleClick}/>
            )}

        </div>
    )
}
