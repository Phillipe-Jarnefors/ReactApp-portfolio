import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
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
    <header className={`text-xl flex justify-between fixed w-full px-6 py-6 z-10 top-0 left-0 transition duration-1000 ${scrolling ? "bg-abstract" : 'bg-transparent'}`}>
      <Link to="/">
        <h1 className={`text-primary transition duration-4000 ${scrolling &&  "text-secondary"}`}>Pjolio</h1>
      </Link>
      <nav className="flex gap-4 items-center">
        <Link to="/">
          <h1 className="text-primary text-medium">about</h1>
        </Link>
        <Link to="/">
          <h2 className="text-primary text-medium">projects</h2>
        </Link>
        <div className="cursor-pointer md:hidden">
            <Icon onClick={() => setToggleMenu(!toggleMenu)} icon="mingcute:menu-fill" color="#61dbfb" />
        </div>
        <section className={`fixed right-0 top-0 text-primary backdrop-blur-xl backdrop-brightness-50  h-[100%] transform transition-transform duration-100 ${toggleMenu ? "translate-x-0 w-[70%]" : 'translate-x-64'}` }>
          <button onClick={() => setToggleMenu(!toggleMenu)} className="mx-5 my-5 ">
            <Icon className="h-8 w-8 transition hover:translate-x-[-5px]" icon="maki:cross" />
          </button>
          <ul className="flex flex-col gap-8 items-center mt-10">
            <li className="transition hover:translate-y-[-5px]">home</li>
            <li className="transition hover:translate-y-[-5px]">projects</li>
            <li className="transition hover:translate-y-[-5px]">about</li>
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
