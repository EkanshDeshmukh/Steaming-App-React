import React from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
    return (
        <div className=' w-[80%] mt-3 h-[10vh] relative mx-auto flex items-center '>
            <i className="ml-5 text-zinc-400 text-3xl ri-search-line"></i>
            <input className='w-[50%] text-xl p-5 mx-10 bg-transparent border-none outline-none text-zinc-400'
                type="text" placeholder='Search Anything ?' />
            <i className="text-zinc-400 text-3xl ri-close-line"></i>

            <div className='absolute w-[50%] h-[50vh] top-[90%] left-10 '>
                <Link className='p-10'>
                    <img src="" alt="" />
                    <span>Hello Everyone</span>
                </Link>
            </div>

        </div>
    )
}

export default Topnav