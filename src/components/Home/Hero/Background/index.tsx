import React from 'react'
import Image from 'next/image'

export default function HeroBackground() {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image
                src="/images/hero-mobile-bg.png"
                alt="Hero Background"
                className="object-cover w-full h-full md:hidden"
                fill
                priority
            />
            <Image
                src="/images/hero-dekstop-bg.png"
                alt="Hero Background"
                className="object-cover w-fit hidden md:flex"
                fill
                priority
            />
        </div>
    );
}
