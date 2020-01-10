import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

//in react we get access to content of a component via props children
const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
//this will eventually become the only thing needed to be imported for our pages
