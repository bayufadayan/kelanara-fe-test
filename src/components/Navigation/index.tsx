'use client'
import React, { useState } from 'react'
import Logo from '@/components/Navigation/Logo'
import HamburgerIcon from './HamburgerButton'
import { merriweather } from '@/utils/fonts';
import MainMenu from './MainMenu';
import RightMenu from './RightMenu';
import MobileMenu from './MobileMenu';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='h-16 w-full flex items-center justify-center md:justify-between bg-white relative md:px-10'>
            {/* Hamburger Button */}
            <button
                className="absolute left-4 md:hidden"
                onClick={() => handleToggle()}
            >
                <HamburgerIcon />
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute md:hidden z-30">
                    <div className='bg-black/40 w-screen h-screen'>
                        <MobileMenu onClose={handleToggle} />
                    </div>
                </div>
            )}

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
