import React from 'react'

export default function MainMenu() {
    return (
        <ul className='ps-10 flex gap-8 '>
            <li className='cursor-pointer hover:text-blue-500'>Beranda</li>
            <li className='cursor-pointer hover:text-blue-500'>Lindungi Burung</li>
            <li className='cursor-pointer hover:text-blue-500'>Donasi</li>
            <li className='cursor-pointer hover:text-blue-500'>Pemantauan Live</li>
        </ul>
    )
}
