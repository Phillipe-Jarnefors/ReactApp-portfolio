import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"
import { Link as LinkMe } from "react-scroll"
import { Icon } from '@iconify/react';
// import HamburgerMenu from "../utils/HamburgerMenu";
export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => { window.removeEventListener('scroll', handleScroll) }
  }, [])

  return (
    <header className={`text-xl flex justify-between fixed w-full px-6 py-6 xl:px-12 z-20 top-0 left-0 transition duration-1000 ${scrolling ? "bg-abstract" : 'bg-transparent'}`}>
      <LinkMe to="home" spy={true} smooth={true} offset={-200}>
        <h1 className={`text-primary transition duration-4000 hover:cursor-pointer ${scrolling && "text-secondary"}`}>Pjolio</h1>
      </LinkMe>
      <nav className="flex sm:gap-6 items-center">
        <Icon className="h-8 w-8 transition hover:translate-y-[-3px] invisible md:visible" icon="bi:github" color="#61dbfb" />
        <Icon className="h-8 w-8 transition hover:translate-y-[-3px] invisible md:visible" icon="mdi:linkedin" color="#61dbfb" />
        <LinkMe to="about" spy={true} smooth={true} offset={-25} >
          <h1 className="text-primary text-medium transition hover:translate-y-[-3px] invisible md:visible"><a href="#about">about</a></h1>
        </LinkMe>
        <LinkMe to="projects" spy={true} smooth={false} offset={50} >
          <h2 className="text-primary text-medium transition hover:translate-y-[-3px] invisible md:visible">projects</h2>
        </LinkMe>
        <div className="cursor-pointer md:hidden">
            <Icon onClick={() => setToggleMenu(!toggleMenu)} icon="mingcute:menu-fill" color="#61dbfb" />
        </div>
        <section  className={`fixed right-0 top-0 text-primary backdrop-blur-xl backdrop-brightness-50  h-[100%] transform transition-transform duration-100 ${toggleMenu ? "translate-x-0 w-[70%]" : 'translate-x-64'}` }>
          <button onClick={() => setToggleMenu(!toggleMenu)} className="mx-5 my-5 ">
            <Icon className="h-8 w-8 transition hover:translate-x-[-5px]" icon="maki:cross" />
          </button>
          <ul className="flex flex-col gap-8 items-center mt-10">
            <LinkMe onClick={() => setToggleMenu(!toggleMenu)} to="home" spy={true} smooth={true} offset={-250} className="transition hover:translate-y-[-5px]">
              home
            </LinkMe>
            <LinkMe onClick={() => setToggleMenu(!toggleMenu)} to="projects" spy={true} smooth={true} offset={50} className="transition hover:translate-y-[-5px]">
              projects
            </LinkMe>
            <LinkMe onClick={() => setToggleMenu(!toggleMenu)} to="about" spy={true} smooth={true} offset={-250} duration={10} className="transition hover:translate-y-[-5px]">
              about
            </LinkMe>
            <Icon className="h-8 w-8 transition hover:translate-y-[-5px]" icon="bi:github" color="#61dbfb" />
            <Icon className="h-8 w-8 transition hover:translate-y-[-5px]" icon="mdi:linkedin" color="#61dbfb" />
          </ul>
        </section>
      </nav>

  


      {/* <p>
        <NavLink className="" to="/live-tournament">
          Live
        </NavLink>
      </p>
      <p>
        <NavLink className="" to={""}>
          Upcoming
        </NavLink>
      </p> */}
    </header>
  )
}
