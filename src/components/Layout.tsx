import React from "react"
import Navbar from "./NavBar"
import "../styles/global.css"
import styled from "styled-components"

const LayoutContainer = styled.div`
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  line-height: 1.4;
`

function Layout({ children }) {
  return (
    <LayoutContainer>
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2022 Hyeongjin Jeong</p>
      </footer>
    </LayoutContainer>
  )
}

export default Layout
