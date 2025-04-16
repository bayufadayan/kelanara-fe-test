import React from 'react'
import CommunityItem from '../Item'
import communityData from '@/data/community.json';

export default function CommunityContainer() {
    return (
        <div className='flex flex-col w-full gap-5 px-4 md:px-10'>
            {communityData.map((item, index) => (
                <CommunityItem
                    key={index}
                    profile={`/images/${item.profile}`}
                    name={item.name}
                    activity={item.activity}
                />
            ))}
        </div>

    )
}
