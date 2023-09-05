import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Projects() {
  return (
    <div className=''>
        <div className='flex justify-end'>      
            <h2 className="text-3xl text-primary mt-20 sm:mt-28 sm:pb-4 md:mt-40">Projects</h2>
        </div>
        <div className="h-2 bg-primary rounded mt-3 mb-8 sm:mb-12"></div>
        <section className='flex flex-col gap-8 sm:gap-12'>
            <div className='bg-abstract rounded-xl mx-6 sm:mx-12 md:mx-20 2xl:mx-36 flex flex-col gap-2 items-center justify-center'>
                <Icon className='h-projects w-projects mt-3' icon="ic:round-quiz" color="#61dbfb" />
                <h2 className='text-3xl text-primary font-semibold mb-2 lg:mb-6'>QuizBattle</h2>
                <p className='text-medium text-font '>React, TypeScript, AJAX & Tailwind</p>
                <button className="2xl:animate-bounce text-button rounded-md hover:bg-primary hover:text-abstract text-font outline px-5 lg:px-8 py-2 lg:py-5 mt-6 mb-6 md:mt-12">Try it!</button>
            </div>
            <div className='bg-abstract rounded-xl mx-6 sm:mx-12 md:mx-20 2xl:mx-36 flex flex-col gap-2 items-center justify-center'>
                <Icon className='h-projects w-projects mt-3' icon="mdi:cards-outline" color="#61dbfb" />
                <h2 className='text-3xl text-primary font-semibold mb-2 lg:mb-6'>Image Editor</h2>
                <p className='text-medium text-font'>React, TypeScript, AJAX & Tailwind</p>
                <button className="2xl:animate-bounce text-button rounded-md hover:bg-primary hover:text-abstract text-font outline px-5 lg:px-8 py-2 lg:py-5 mt-6 mb-6 md:mt-12">Try it!</button>
            </div>
        </section>
    </div>
  )
}
