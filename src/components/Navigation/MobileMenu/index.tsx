import SmallButton from '@/components/common/SmallButton'
import React from 'react'

type MobileMenuProps = {
    onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
    return (
        <div className="fixed inset-0 z-40 flex items-end md:hidden">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            <button
                className="absolute top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-white text-white flex items-center justify-center font-bold"
                onClick={onClose}>
                X
            </button>

            <div className="relative w-full bg-white rounded-t-2xl py-6 px-4 h-[50%] shadow-lg z-50">
                {/* Main Menu */}
                <ul className="flex flex-col gap-6 text-lg font-semibold">
                    <li>Beranda</li>
                    <li>Lindungi Burung</li>
                    <li>Donasi</li>
                    <li>Pemantauan Live</li>
                </ul>

                {/* Right Menu */}
                <div className='flex flex-col gap-4 items-start mt-8 text-lg'>
                    <SmallButton label={'Our Work'} />
                    <SmallButton label={'Get Involved'} />
                </div>
            </div>

        </div>
    )
}
