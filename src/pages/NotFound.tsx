import React from 'react'

export default function NotFound() {
  return (
    <>
        <div className="h-2 bg-abstract rounded mb-5 mt-20 sm:mt-28 md:mt-40"></div>
        <div className='flex flex-col items-center gap-6'>
            <h2 id="home" className="text-xl text-secondary ">404 - Page not found.</h2>
            <p className='text-secondary'>Please go back to home</p>
        </div>
        <div className="h-2 bg-abstract rounded mt-5"></div>
    </>
  )
}
