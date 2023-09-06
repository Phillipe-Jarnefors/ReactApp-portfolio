import React from 'react'
import Milo from "../images/milo.jpg"

export default function About() {
  return (
    <div id='about' className='mb-32'>   
        <h2 className="text-3xl text-primary mt-20 sm:mt-28 sm:pb-4 md:mt-40">About</h2>
        <div className="h-2 bg-primary rounded mt-3 mb-8 sm:mb-12"></div>
        <section className='grid grid-cols-3 items-center'>
            <div className='col-span-2'>
                <p className="text-standard text-font mt-5 sm:mt-10 ">I have a background in sheet metalwork, with over a decade of experience in the field. Over the past three years, I've dedicated my time to renovating my house. Now, I'm embarking on a new adventure in life as I pursue a career as a full-stack web developer. I share my home in Lidköping with my faithful dog, Milo, and my wonderful girlfriend, Linda.</p>
            </div>
            <div className='col-span-1'>
                <img className='rounded-full' src={Milo}/>
            </div>
        </section>
    </div>
  )
}
