import React from 'react'
import Dropdown from './Dropdown'
import NotFound from '../../../public/image.jpg'
import { Link } from 'react-router-dom'


const Horizontal = ({ data,title }) => {
    return (


        <div className='w-[100%] flex overflow-y-auto p-4 h-[30vh]'>
            {data.length > 0 ? (data.map((d, i) => (
                <Link to={`/${d.media_type || title}/details/${d.id}`} key={i} className=" min-w-[15%] mb-10 h-[100%] bg-zinc-900 mr-5">
                    <img className='h-[55%] w-[100%] object-cover' src={d.backdrop_path || d.profile_path ? `https:image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path} ` : NotFound} alt="" />
                    <h1 className='text-lg mt-2 mb-2 leading-tight font-lg'>{d.original_title || d.name || d.title || d.original_name}</h1>
                    <p className='text-sm '>{d.overview.slice(0, 50)}... <span className='text-blue-400'>more</span> </p>
                </Link>
            ))) : (
                <h1 className="text-3xl mt-5 text-white font-black text-center">
                    Nothing to show
                </h1>
            )}

        </div>


    )
}

export default Horizontal