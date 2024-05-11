import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'
import Header from '../partials/Header'

const Home = () => {
    document.title = 'SCSDB |  Homepage'
    const [wallpaper, setwallpaper] = useState(null)
    const setwallpaperHeader = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`)
            const randomData = data.results[(Math.random() * data.results.length).toFixed()]
            setwallpaper(randomData)
        } catch (error) {
            console.log('error:', error);
        }
    }
    useEffect(()=>{
       !wallpaper && setwallpaperHeader()
    },[])
    return wallpaper ? (
        <>
        <Sidenav />
        <div className=' w-[80%] h-full'>
            <Topnav />
            <Header data={wallpaper} />
        </div>
        </>
    ):(<h1 className='text-4xl text-red-300 text-center '>Loading..</h1>)
}

export default Home