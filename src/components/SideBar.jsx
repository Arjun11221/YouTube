import React from 'react'

const SideBar = () => {
  return (
    <div className='p-4 shadow-lg w-52' >
      <ul className='m-2 font-semibold' >
        <li>Home</li>
        <li>Shorts</li>
        <li>Watch later</li>
        <li>History</li>
        <li>Liked Videos</li>
      </ul>

      <h1 className='font-bold pt-2' >Subscriptions</h1>
      <ul className='m-2 font-semibold'>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-2' >Explore</h1>
      <ul className='m-2 font-semibold'>
        <li>Trending</li>
        <li>Live</li>
        <li>Sport</li>
        <li>Podcast</li>
      </ul>   
        
    </div>
  )
}

export default SideBar