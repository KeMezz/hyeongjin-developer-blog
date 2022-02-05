import React from "react"
import Navbar from "./NavBar"

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2022 Hyeongjin Jeong</p>
      </footer>
    </div>
  )
}

export default Layout
