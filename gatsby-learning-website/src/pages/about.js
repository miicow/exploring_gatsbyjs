import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const aboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about me page! Work in progress!</p>
      <Link to="/contact">Contact Me!</Link>

      <Footer />
    </div>
  )
}

export default aboutPage
