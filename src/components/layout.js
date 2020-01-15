import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/index.scss"
import layoutStyles from "../components/layout.module.scss"

//in react we get access to content of a component via props children
const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      {/* common html structure for sticky footer always at the bottom of the page */}
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
//this will eventually become the only thing needed to be imported for our pages
