import React from 'react'

type CaraouselOverlayProps = {
    onClose: () => void
}

export default function CaraouselOverlay({ onClose }: CaraouselOverlayProps) {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center" onClick={onClose}>
            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-50 bg-white/90 hover:bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition"
                >
                    ✕
                </button>

                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YQCo9rWFgAY?si=K-IUSt2KA8ar97yW"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
