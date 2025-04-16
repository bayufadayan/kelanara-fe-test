import SmallButton from '@/components/common/SmallButton'
import React from 'react'

export default function RightMenu() {
    return (
        <div className='flex gap-1 items-center'>
            <SmallButton label={'Our Work'}/>
            <SmallButton label={'Get Involved'}/>
        </div>
    )
}
