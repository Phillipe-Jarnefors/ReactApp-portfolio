
import { Link, NavLink } from "react-router-dom"
import { Icon } from '@iconify/react';

export default function Header() {
  return (
    <header className="text-xl flex justify-between">
      <Link to="/">
        <h1 className="text-primary ">Pjolio</h1>
      </Link>
      <Icon icon="mingcute:menu-fill" color="#61dbfb" />
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
