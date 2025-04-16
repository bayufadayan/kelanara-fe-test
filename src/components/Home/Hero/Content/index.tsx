import React from 'react'
import { merriweather} from '@/utils/fonts';

export default function HeroContent() {
    return (
        <div className="z-10 w-full bg-gradient-to-b from-transparent via-white/25 to-white flex flex-col justify-end h-full py-4 gap-4">
            <h1 className={`${merriweather.className} font-bold text-3xl px-4 md:px-10 md:text-6xl text-[#333333]`}>Selamat Datang di Konservasi Burung</h1>
            <p className={`px-4 md:px-10 md:text-2xl text-[#333333] `}>Kami berkomitmen untuk melindungi burung yang terancam punah dan habitatnya. Bergabunglah dengan kami dalam upaya pelestarian ini.</p>
        </div>
    )
}
