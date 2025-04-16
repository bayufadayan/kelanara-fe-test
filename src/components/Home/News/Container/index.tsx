import React from 'react'
import NewsItem from '../Item'


export default function NewsContainer() {
    return (
        <div className='flex flex-col w-full gap-5 px-4 md:px-10'>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </div>
    )
}
