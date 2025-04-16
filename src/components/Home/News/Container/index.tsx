import React from 'react'
import NewsItem from '../Item'
import newsData from '@/data/news.json';

export default function NewsContainer() {
    return (
        <div className='flex flex-col w-full gap-5 px-4 md:px-10'>
            {newsData.map((item, index) => (
                <NewsItem
                    key={index}
                    thumbnail={`/images/${item.thumbnail}`}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    )
}
