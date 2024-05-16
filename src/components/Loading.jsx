import React from 'react'
import loading from '../../public/loader.gif'

const Loading = () => {
    return (
        <div className='w-screen h-screen bg-black flex items-center justify-center'>
            <img src={loading} alt="" />
        </div>
    )
}

export default Loading