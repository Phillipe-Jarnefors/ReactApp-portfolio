
import { Link } from "react-router-dom"
import  phillipe  from "../images/phillipe.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Home() {
  return (
    <section className="home-wrapper">
      <h2 className="text-3xl text-primary mt-20 sm:mt-28 sm:pb-4 md:mt-40">Portfolio</h2>
      <div className="h-2 bg-primary rounded mt-3"></div>
      <main className="grid grid-cols-3 gap-6 sm:gap-10 md:gap-16 lg:gap-[6rem] xl:gap-0">
       <div className="col-span-2 mt-7">
        <p className="text-medium text-font sm:py-4 xl:py-14">This is a showcase app, featuring the projects I've worked on during my studies</p>
        <article className="flex gap-3 mt-7">
          <div className="p-1 bg-primary rounded mt-3 "></div>
          <section className="sm:pl-4 xl:pl-8 ">
            <div className="xl:flex flex-row-reverse justify-end gap-10 ">
              <div className="mt-3 xl:mt-0  rounded">
                <img className="rounded-lg w-heroSm xl:w-hero xl:h-hero lg:mb-10" src={phillipe} alt="phillipe" />
              </div>
              <div className="">
                <p className="text-medium text-font font-semibold mt-5 mb-2 sm:mb-3 lg:mt-1 xl:mb-8 ">Hi, my name is</p>
                <h2 className="text-3xl xl:text-firstname mb-3 sm:mb-4 xl:mb-12 text-primary ">Phillipe</h2>
                <h3 className="text-2xl xl:text-lastname text-primary mt-1 ">Järnefors</h3>
              </div>
            </div>
            <p className="text-medium text-font mt-5 sm:mt-10">I'm a dedicated student in my final year, specializing in Frontend React at YH Campus Lidköping. I'm eager to make meaningful connections and showcase my skills to prospective employers after graduation.</p>
            <button className="text-button rounded-md text-font outline px-5 py-2 mt-6 mb-1 md:mt-12">Reach out &gt;</button>
          </section>
        </article>
       </div>
       <section className="container   xl:z-10 xl:h-full xl:w-1/2 ml-auto mb-40 grid grid-cols-4 grid-rows-layout col-span-1 gap-2 mt-3 ">
        <div className="col-span-3 bg-primary rounded-lg flex justify-center items-center "><Icon icon="logos:nextjs" className="w-cards h-cards" color="#001829" /></div>
        <div className="col-span-1 bg-abstract rounded-lg  "></div>
        <div className="col-span-1 bg-abstract rounded-lg "></div>
        <div className="col-span-3 bg-secondary rounded-lg flex justify-center items-center "><Icon icon="akar-icons:react-fill" className="w-cards h-cards" color="#001829" /></div>
        <div className="col-span-4 bg-abstract rounded-lg"></div>
        <div className="col-span-3 bg-primary rounded-lg flex justify-center items-center "><Icon icon="fa6-brands:node" className="w-cards h-cards" color="#001829"/></div>
        <div className="col-span-1 bg-abstract rounded-lg "></div>
        <div className="col-span-1 bg-abstract rounded-lg "></div>
        <div className="col-span-3 bg-secondary rounded-lg flex justify-center items-center "><Icon icon="file-icons:tailwind" className="w-cards h-cards" color="#001829" /></div>
        <div className="col-span-4  bg-abstract rounded-lg "></div>
        <div className="col-span-3 bg-primary rounded-lg flex justify-center items-center"><Icon icon="cib:typescript" className="w-cards h-cards" color="#001829"/></div>
        <div className="col-span-1 bg-abstract rounded-lg "></div>
       </section>
      </main>
      {/* <h1>Next up tournaments</h1>
      <Link to="live-tournament">
        <h3>Watch the schedule</h3>
      </Link> */}
    </section>
  )
}
