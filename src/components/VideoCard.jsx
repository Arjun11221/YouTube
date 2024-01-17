import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info,"videocard");
  const {snippet ,statistics} = info;
  const {channelTitle , title ,thumbnails } = snippet;
  return (
    <div className='p-2 m-2 w-80  shadow-lg' >
      <img className='rounded-lg ' src={thumbnails.medium.url} alt="" />
      <h1 className='font-semibold'>{title}</h1>
      <h2>{channelTitle}</h2>
      <h3>{statistics.viewCount} views</h3>
    </div>
  )
}

export default VideoCard