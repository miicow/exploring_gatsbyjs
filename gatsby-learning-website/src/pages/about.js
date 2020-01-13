import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <p>This is the about me page! Work in progress!</p>
      <Link to="/contact">Contact Me!</Link>
    </Layout>
  )
}

export default AboutPage
