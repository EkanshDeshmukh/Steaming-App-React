import React from 'react'
import Dropdown from './Dropdown'
import NotFound from '../../public/image.jpg'

const Horizontal = ({ data  }) => {
    return (

           
            <div className='w-[100%] flex overflow-y-auto p-4 h-[30vh]'>
                {data.map((d, i) => (
                    <div key={i} className=" min-w-[15%] mb-10 h-[100%] bg-zinc-900 mr-5">
                        <img className='h-[55%] w-[100%] object-cover' src={d.backdrop_path || d.profile_path ? `https:image.tmdb.org/t/p/original/${d.backdrop_path || d.profile_path} ` : NotFound} alt="" />
                        <h1 className='text-lg mt-2 mb-2 leading-tight font-lg'>{d.original_title || d.name || d.title || d.original_name}</h1>
                        <p className='text-sm '>{d.overview.slice(0, 50)}... <span className='text-blue-400'>more</span> </p>
                    </div>
                ))}

            </div>
         

    )
}

export default Horizontal