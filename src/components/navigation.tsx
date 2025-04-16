import React from "react"
import Image from "next/image";

export default function Navigation() {


    return (
        <nav className="flex justify-center items-center bg-white">
            {/* Logo */}
            <div className="flex bg-red-500">
                <Image
                    src="/logo-icon.png"
                    alt="Aviary Bird Logo"
                    width={46}
                    height={46}
                />
                <h1>Aviary Bird</h1>
            </div>
        </nav>
    )
}
