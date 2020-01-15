import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head componentTitle="About" />
      <h1>About Page</h1>
      <p>This is the about me page! Work in progress!</p>
      <Link to="/contact">Contact Me!</Link>
    </Layout>
  )
}

export default AboutPage
