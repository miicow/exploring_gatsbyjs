import React from "react"
import { Link } from "gatsby" //named import with brackets
import Layout from "../components/layout"
//Link is a react component to link between pages with our gatsby site - optimization happening behind the scenes
//gatsby preloads the content of the page to load instantly without the "flash" of rerendering

const indexPage = () => {
  return (
    <Layout>
      {/* only need unique content inside layout component */}
      <h1>Hello</h1>
      <h2>I'm Michael, a Software Engineer living in beautiful Bay Area!</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default indexPage
