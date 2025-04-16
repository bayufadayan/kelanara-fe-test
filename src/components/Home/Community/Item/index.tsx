import React from 'react'
import Image from 'next/image'

export default function CommunityItem() {
    return (
        <div className='flex gap-4 items-center'>
            {/* Thumbnail Berita */}
            <div className='relative h-[50px] w-[50px] bg-black rounded-full'>
                <Image
                    src="/images/person-1.png"
                    alt='person 1'
                    className='object-cover rounded-full'
                    fill
                    priority
                />
            </div>

            {/* Content */}
            <div className='h-full w-fit'>
                <h3 className='font-bold md:text-xl'>John Doe</h3>
                <p className='text-black/40 text-sm md:text-base'>
                    Aktivitas terbaru: Mengikuti patroli hutan di Papua
                </p>
            </div>
        </div>
    )
}
