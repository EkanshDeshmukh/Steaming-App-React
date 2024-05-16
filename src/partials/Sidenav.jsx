import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
    return (
        <div className='w-[20%] h-full border-zinc-400 p-10 border-r-2'>
            <h1 className='text-2xl  font-bold'>
                <i className="ri-tv-line mr-2 text-[#6457CD] "></i>
                <span>SCSDB.</span>
            </h1>
            <nav className='text-xl font-semibold text-zinc-300 flex flex-col gap-5 '>
                <h1 className='mt-10'>New Feeds</h1>
                <Link to="/trending" className='text-xl text-zinc-300 hover:bg-[#6556CD] p-4 rounded-lg duration-300'>
                    <i className="ri-fire-fill text-zinc-400"></i> Trending
                </Link>
                <Link
                    to="/popular"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4"
                >
                    <i className="mr-2 text-zinc-400 ri-bard-fill"></i>
                    Popular
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4"
                >
                    <i className="mr-2 text-zinc-400 ri-movie-2-fill"></i>
                    Movies
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4"
                >
                    <i className="mr-2 text-zinc-400 ri-tv-2-fill"></i>
                    Tv Shows
                </Link>
                <Link
                    to="/person"
                    className="hover:bg-[#6556CD] text-zinc-400 hover:text-white duration-300 rounded-lg p-4"
                >
                    <i className="mr-2 text-zinc-400 ri-team-fill"></i>
                    People
                </Link>
            </nav>
            <hr className='bg-zinc-600' />
            <nav className='flex text-xl font-semibold flex-col text-zinc-300'>
                <h1 className='text-2xl  mt-5 mb-5 font-semibold'>Website Information</h1>
                <Link className='hover:bg-[#6556CD] p-2 flex duration-200  rounded-lg '>  <i className="mr-2 text-zinc-300 ri-information-fill"></i> About </Link>
                <Link className='hover:bg-[#6556CD] duration-200 p-2 rounded-lg'> <i className="mr-2 text-zinc-300 ri-phone-fill"></i>
                    Contact Us</Link>
            </nav>
        </div>
    )
}

export default Sidenav