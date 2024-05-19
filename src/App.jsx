import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShow from './components/TvShow'
import People from './components/People'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/trending' element={<Trending />}></Route>
        <Route path='/popular' element={<Popular />}></Route>
        <Route path='/movie' element={<Movies />}></Route>
        <Route path='/tv' element={<TvShow />}></Route>
        <Route path='/person' element={<People />}></Route>
      </Routes>
    </div>
  )
}

export default App