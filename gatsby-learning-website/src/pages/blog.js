import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
              excerpt
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <h1>My Blog</h1>
      <p>This is currently a place holder.</p>
    </Layout>
  )
}

export default BlogPage
