import { Link } from "gatsby"
import React from "react"

function Navbar() {
  return (
    <nav>
      <h1>Hyeongjin Developer Blog</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
