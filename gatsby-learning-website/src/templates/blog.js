import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

//useStaticQuery is not being imported because template file works differently
//we are defining our query seperately then export it
//we cant access the context which contains our slug, if we were to useStaticQuery
//to export it as named export, export is added before const
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

//the $slug variable will be from the context when we createPage
//then it is going to take the response, all of the post data and provide it as a react prop

const Blog = props => {
  const { title, date } = props.data.markdownRemark.frontmatter
  const { html } = props.data.markdownRemark

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>

      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default Blog
