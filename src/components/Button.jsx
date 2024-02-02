import React from 'react'

const Button = ({name}) => {
  return (
    <div className='flex' >
        <button className='px-4 py-2 dark:bg-slate-800 dark:text-white  rounded-md m-2 bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button