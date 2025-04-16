import React from 'react'
import Image from 'next/image'

export default function Logo() {
    return (
        <div>
            <Image
            src={'/images/logo.png'}
            alt="Logo Aviary Bird"
            className='object-cover'
            width={46}
            height={46} 
            />
        </div>
    )
}
