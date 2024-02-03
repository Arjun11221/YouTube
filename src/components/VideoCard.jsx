import React from 'react'

const VideoCard = ({info}) => {
  const {snippet ,statistics} = info;
  const {channelTitle , title ,thumbnails } = snippet;
  return (
    <div className='md:p-2 md:m-2 p-4 md:w-80 w-76 shadow-lg rounded-lg' >
      <img className='rounded-lg ' src={thumbnails.medium.url} alt="" />
      <h1 className='py-2 font-semibold'>{title}</h1>
      <h2 className=''>{channelTitle}</h2>
      <h3>{statistics.viewCount} views</h3>
    </div>
  )
}

export default VideoCard