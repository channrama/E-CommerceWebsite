import React from 'react'
import Header from './header.jsx'
import Fotter from './footer.jsx'
const Layout = (props) => {
  return (
  <>
  <Header/>
  <main style={{minHeight:"80vh"}}>
    <h1>{props.children}</h1>
  </main>
  <Fotter/>
  </>
  )
}

export default Layout
