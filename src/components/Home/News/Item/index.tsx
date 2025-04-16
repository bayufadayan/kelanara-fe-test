import React from 'react'
import Image from 'next/image'

type NewsItemProps = {
    thumbnail: string;
    title: string;
    description: string;
};

export default function NewsItem({ thumbnail, title, description }: NewsItemProps) {
    return (
        <div className='flex gap-4'>
            {/* Thumbnail Berita */}
            <div className='relative w-2/5 h-[100px] md:h-[130px] rounded-lg overflow-hidden z-30'>
                <Image
                    src={thumbnail}
                    alt="Thumbnail Berita"
                    className="object-cover"
                    fill
                    priority
                />
            </div>

            {/* Content */}
            <div className='h-full w-3/5'>
                <h3 className='font-bold md:text-xl'>{title}</h3>
                <p className='text-black/40 text-sm md:text-base'>
                    {description}
                </p>
            </div>
        </div>

    )
}
