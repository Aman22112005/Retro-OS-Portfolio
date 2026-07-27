import React from 'react'

const ComingSoon = ({goBack}) => {
  return (
    <div className='flex w-screen h-screen justify-center items-center flex-col gap-6 text-5xl text-amber-50'><div>Coming Soon...</div>
    <button type="button" className='text-lg rounded-lg px-2 py-1 hover:cursor-pointer hover:bg-gray-300 hover:text-gray-800 transition-all duration-200 bg-white text-black font-bold' onClick={() => goBack()}>Go back</button></div>
  )
}

export default ComingSoon