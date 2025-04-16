import React from 'react'
import SectionTitle from '@/components/common/HomeSectionTitle'
import NewsContainer from './Container'

export default function News() {
    return (
        <div className='relative w-full'>
            <SectionTitle title={'Berita Terbaru'}/>
            <NewsContainer/>
        </div>
    )
}
