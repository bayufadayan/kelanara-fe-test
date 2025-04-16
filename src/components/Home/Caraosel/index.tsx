import React from 'react'
import SectionTitle from '@/components/common/HomeSectionTitle'
import CarouselContainer from './Container'

export default function Caraosel() {
    return (
        <div className='relative'>
            <SectionTitle title={'Pemantauan Populer'}/>
            <CarouselContainer/>
        </div>
    )
}
