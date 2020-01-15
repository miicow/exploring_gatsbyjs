import React from "react"
import { Link } from "gatsby" //named import with brackets
import Layout from "../components/layout"
import Head from "../components/head"
//Link is a react component to link between pages with our gatsby site - optimization happening behind the scenes
//gatsby preloads the content of the page to load instantly without the "flash" of rerendering

const IndexPage = () => {
  return (
    <Layout>
      <Head componentTitle="Home" />
      {/* only need unique content inside layout component */}
      <h1>Hello</h1>
      <h2>I'm Michael</h2>
    </Layout>
  )
}

export default IndexPage
