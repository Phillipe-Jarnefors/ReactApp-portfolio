import React from 'react'
import Milo from "../images/milo_rounded.jpg"
import { Icon } from '@iconify/react/dist/iconify.js'


export default function About() {
  return (
    <div id='about' className='mb-10'>   
        <h2 className="text-3xl text-primary mt-20 sm:mt-28  md:mt-40">About</h2>
        <div className="h-2 bg-primary rounded mt-3 mb-8 sm:mb-12"></div>
        <section className='flex flex-col bg-abstract rounded-xl px-6 py-6 sm:mx-12 sm:py-12 md:mx-20 2xl:mx-36'>
            <div className='sm:mx-10'>
            <Icon className='h-10 w-10' icon="lucide:quote" color='#61DBFB' />
                <p className="text-standard text-font mt-5 sm:mt-10 ">I have a background in sheet metalwork, with over a decade of experience in the field. Over the past three years, I've dedicated my time to renovating my house. Now, I'm embarking on a new adventure in life as I pursue a career as a full-stack web developer. I share my home in Lidköping with my wonderful girlfriend, Linda and my faithful dog, Milo.</p>
            </div>
            <div className='mt-10 flex items-center justify-center'>
                <img className='rounded-full h-40 w-40 sm:h-52 sm:w-52 md:h-60 md:w-60 lg:h-72 lg:w-72' src={Milo}/>
            </div>
        </section>
    </div>
  )
}
