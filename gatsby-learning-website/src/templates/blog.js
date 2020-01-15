import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Head from "../components/head"

//useStaticQuery is not being imported because template file works differently
//we are defining our query seperately then export it
//we cant access the context which contains our slug, if we were to useStaticQuery
//to export it as named export, export is added before const
// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

//the $slug variable will be from the context when we createPage
//then it is going to take the response, all of the post data and provide it as a react prop

const Blog = props => {
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  const options = {
    //overwrite how specific nodes are rendered, there was various node types in the JSON data
    renderNode: {
      "embedded-asset-block": node => {
        const { title, file } = node.data.target.fields
        const alt = title["en-US"]
        const url = file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <Head componentTitle={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default Blog
