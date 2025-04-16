import React from 'react'
import Logo from '@/components/Navigation/Logo'
import HamburgerIcon from './HamburgerButton'
import { merriweather } from '@/utils/fonts';
import MainMenu from './MainMenu';
import RightMenu from './RightMenu';

export default function Navigation() {
    return (
        <nav className='h-16 w-full flex items-center justify-center md:justify-between bg-white relative md:px-10'>
            {/* Hamburger Button */}
            <div className="absolute left-4 md:hidden">
                <HamburgerIcon />
            </div>

            {/* Logo */}
            <div className={`flex gap-2 items-center`}>
                <Logo />
                <h1 className={`${merriweather.className} font-bold text-lg leading-tight`}>Aviary <br /> Birds</h1>
            </div>

            {/* Menu List */}
            <div className={`hidden md:flex ${merriweather.className}`}>
                <MainMenu />
            </div>

            {/* Additional Menu */}
            <div className='hidden md:flex'>
                <RightMenu />
            </div>

        </nav>
    )
}
