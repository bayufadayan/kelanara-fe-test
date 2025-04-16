import React from 'react'
import Image from 'next/image'

export default function NewsItem() {
    return (
        <div className='flex gap-4'>
            {/* Thumbnail Berita */}
            <div className='relative w-2/5 h-[100px] rounded-lg overflow-hidden z-30'>
                <Image
                    src="/images/news-tn-1.png"
                    alt="Thumbnail Berita 1"
                    className="object-cover"
                    fill
                    priority
                />
            </div>

            {/* Content */}
            <div className='h-full w-3/5'>
                <h3 className='font-bold md:text-xl'>Patroli Hutan Terbaru</h3>
                <p className='text-black/40 text-sm md:text-base'>
                    Tim kami baru saja menyelesaikan patroli hutan terakhir di Papua.
                </p>
            </div>
        </div>

    )
}
