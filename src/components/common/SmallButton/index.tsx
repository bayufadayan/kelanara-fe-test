import React from 'react'

type SmallButtonProps = {
    // onClick: () => void
    label: string
}

export default function SmallButton({ label }: SmallButtonProps) {
    return (
        <div className='px-4 border border-black rounded-full font-bold md:font-medium'>{label}</div>
    )
}
