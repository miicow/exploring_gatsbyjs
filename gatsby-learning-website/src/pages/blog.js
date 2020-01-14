import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"

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
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          const { title, date } = edge.node.frontmatter
          const { slug } = edge.node.fields

          return (
            <li key={i}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
