import React from 'react'
import SectionTitle from '@/components/common/HomeSectionTitle'
import CommunityContainer from './Container'

export default function Community() {
    return (
        <div className='relative w-full'>
            <SectionTitle title={'Komunitas'}/>
            <CommunityContainer />
        </div>
    )
}
