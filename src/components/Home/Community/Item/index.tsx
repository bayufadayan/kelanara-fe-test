import React from 'react'
import Image from 'next/image'

type CommunityItemProps = {
    profile: string;
    name: string;
    activity: string;
};

export default function CommunityItem({ profile, name, activity }: CommunityItemProps) {
    return (
        <div className='flex gap-4 items-center'>
            {/* Thumbnail Berita */}
            <div className='relative h-[50px] w-[50px] md:h-[79px] md:w-[79px] bg-black rounded-full'>
                <Image
                    src={profile}
                    alt='person 1'
                    className='object-cover rounded-full'
                    fill
                    priority
                />
            </div>

            {/* Content */}
            <div className='h-full w-fit'>
                <h3 className='font-bold md:text-xl'>{name}</h3>
                <p className='text-black/40 text-sm md:text-base'>
                    Aktivitas terbaru: {activity}
                </p>
            </div>
        </div>
    )
}
