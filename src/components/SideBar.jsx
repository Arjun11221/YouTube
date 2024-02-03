import React from 'react'
import { useSelector } from 'react-redux';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='md:p-4 p-2 shadow-lg md:w-40 w-24' >
      <ul className='m-2 font-semibold ' >
        <li>Home</li>
        <li>Shorts</li>
        <li>Watch later</li>
        <li>History</li>
        <li>Liked Videos</li>
      </ul>

      <h1 className='md:font-bold font-semibold pt-2' >Subscriptions</h1>
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

export default SideBar;