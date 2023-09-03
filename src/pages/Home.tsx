
import { Link } from "react-router-dom"
import  phillipe  from "../images/phillipe.jpg"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function Home() {
  return (
    <section className="home-wrapper">
      <h2 className="text-3xl text-primary mt-20">Portfolio</h2>
      <div className="h-2 bg-primary rounded mt-3"></div>
      <main className="grid grid-cols-3">
       <div className="col-span-2 mt-7 pr-12">
        <p className="text-medium text-font">This is a showcase app, featuring the projects I've worked on during my studies</p>
        <article className="flex gap-3 mt-7">
          <div className="p-1 bg-primary rounded mt-3"></div>
          <section>
            <div className="mt-3 rounded">
              <img className="rounded-lg" src={phillipe} alt="phillipe" />
            </div>
            <p className="text-medium text-font font-semibold mt-5">Hi, my name is</p>
            <h2 className="text-3xl text-primary">Phillipe</h2>
            <h3 className="text-2xl text-primary mt-1">Järnefors</h3>
            <p className="text-medium text-font mt-5">I'm a dedicated student in my final year, specializing in Frontend React at YH Campus Lidköping. I'm eager to make meaningful connections and showcase my skills to prospective employers after graduation.</p>
            <button className="text-button rounded-md text-font outline px-5 py-2 mt-6 mb-1">Reach out &gt;</button>
          </section>
        </article>
      </div>
       <section className="container mx-auto mb-40 grid grid-cols-4 grid-rows-layout col-span-1 gap-2 mt-3">
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
