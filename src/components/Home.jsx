import React from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'

const Home = () => {
    return (
        <div className='flex w-full h-full'>
            <Sidenav />
            <Topnav />
        </div>
    )
}

export default Home