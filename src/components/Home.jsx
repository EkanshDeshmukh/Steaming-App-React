import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'
import Header from '../partials/Header'
import Horizontal from '../partials/HorizontalCards'
import Dropdown from '../partials/Dropdown'

const Home = () => {
    document.title = 'SCSDB |  Homepage'

    const [wallpaper, setwallpaper] = useState(null)
    const [trending, settrending] = useState(null)
    const [category, setcategory] = useState('movie')

    const setwallpaperHeader = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`)
            const randomData = data.results[(Math.random() * data.results.length).toFixed()]
            setwallpaper(randomData)
        } catch (error) {
            console.log('error:', error);
        }
    }
    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            settrending(data.results);
        } catch (error) {
            console.log("Error: ", error.response.data);
        }
    };
    useEffect(() => {
        GetTrending()
        !wallpaper && setwallpaperHeader()
    }, [category])
    return wallpaper && trending ? (
        <>
            <Sidenav />
            <div className=' w-[80%] h-full'>
                <Topnav />
                <Header data={wallpaper} />
                <div className='mb-4 mt-4 pl-5 pr-5 flex items-center justify-between '>
                    <h1 className='text-zinc-300 text-3xl font-semibold'>Trending</h1>
                    <Dropdown title='Filter' options={['all', 'tv', 'movie']} func={(e) => setcategory(e.target.value)} />
                </div>
                <Horizontal data={trending} />
            </div>
        </>
    ) : (<h1 className='text-4xl text-red-300 text-center '>Loading..</h1>)

}

export default Home