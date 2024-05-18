import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ data, title }) => {
    // console.log(data);
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    return (
        <div className='flex flex-wrap w-full h-full bg-[#1F1E24]'>
            {data.map((c, i) => (
                <Link key={i} className='w-[25vh] mr-[5%] ml-[3%] mb-[5%] '>
                    <img
                        className='h-[40vh] rounded-sm bg-center object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]'
                        src={`https:image.tmdb.org/t/p/original/${c.backdrop_path || c.profile_path} `} />
                    <h1 className='text-zinc-200     w-[120%] text-2xl font-semibold'>
                        {c.name || c.orignal_name || c.profile_title || c.title}</h1>
                </Link>
            ))}
        </div>
    )
}

export default Cards