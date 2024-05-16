import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../partials/Dropdown'
import Topnav from '../partials/Topnav'
import axios from '../utils/axios'
import Cards from '../partials/Cards'

const Trending = () => {
    document.title = "SCSDB | Trending";
    const navigate = useNavigate()
    const [category, setcategory] = useState('all')
    const [duration, setduration] = useState('day')
    const [trending, settrending] = useState(null)

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`trending/${category}/${duration}`)
            settrending(data.results)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(trending);

    useEffect(() => {
        GetTrending()
    }, [category, duration])

    return (
        <div className='w-screen h-screen px-[2%] '>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-zinc-400 text-2xl p-10 font-semibold'> <i
                    onClick={() => navigate(-1)}
                    className="hover:text-[#6556CD] text-zinc-400 ri-arrow-left-line"
                ></i> Trending</h1>
                <div className='w-[80%] flex items-center '>
                    <Topnav />
                    <Dropdown func={(e) => setcategory(e.target.value)} title='Category' options={['all', 'tv', 'movie']} />
                    <div className='w-[2%]'></div>
                    <Dropdown func={(e) => setduration(e.target.value)} title='Duration' options={['DAY', 'WEEK']} />

                </div>
            </div>
            <Cards data={trending} title={category} />
        </div>
    )
}

export default Trending