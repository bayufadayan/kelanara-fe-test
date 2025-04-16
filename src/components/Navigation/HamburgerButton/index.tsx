import React from 'react'
import Image from 'next/image'

export default function HamburgerIcon() {
    return (
        <div>
            <Image
                src={'/icons/hamburger-icon.svg'}
                alt="Hamburger Icon"
                className='object-cover'
                width={32}
                height={32}
            />
        </div>
    )
}
