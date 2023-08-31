import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <h1 className="cs-logo">
          CS<span className="cs-logo-core">core</span>
        </h1>
      </Link>
      <p>
        <NavLink className="navlink" to="/live-tournament">
          Live
        </NavLink>
      </p>
      <p>
        <NavLink className="navlink">Upcoming</NavLink>
      </p>
    </header>
  )
}
