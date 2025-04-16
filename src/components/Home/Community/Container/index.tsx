import React from 'react'
import CommunityItem from '../Item'

export default function CommunityContainer() {
    return (
        <div className='flex flex-col w-full gap-5 px-4 md:px-10'>
            <CommunityItem/>
            <CommunityItem/>
        </div>

    )
}
