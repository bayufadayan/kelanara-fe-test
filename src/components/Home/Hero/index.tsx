import React from 'react'
import HeroBackground from './Background'
import HeroContent from './Content'

export default function Hero() {
    return (
        <div className='bg-white h-[490px] w-full flex relative items-center justify-center'>
            <HeroBackground/>
            <HeroContent/>
        </div>
    )
}
