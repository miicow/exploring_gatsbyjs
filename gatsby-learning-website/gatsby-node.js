/* gatsby node configuration file, which allows us to tap into a lot of the node apis that gatsby exposes
1) this is what be used to generate slugs and dynamic generate blog post pages
*/
const path = require("path")

//##################### No longer needed because we have slug field in contentful#####################
// module.exports.onCreateNode = ({ node, actions }) => {
//   //a node is a data structure for storing gatsby data
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     /*
//     using path.basename from nodejs - we can retrieve the last portion of a path
//     which the path of the markdown we want is located in node.fileAbsolutePath
//     */
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       //shorthand property - setting the property equal to a variable of the same name
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

//this graphql is different from the one imported from gatsby
//this is function that we pass an string into
module.exports.createPages = async ({ graphql, actions }) => {
  //createPage will be called everytime we are trying to create a new blog page
  const { createPage } = actions

  //the arguement passed into resolve is current location to destination
  //the resolve function will add everything else in the front to create an absolute path from the root of the harddrive
  const blogTemplate = path.resolve("./src/templates/blog.js")

  //graphql function returns a promise
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  //1. Get path to template
  //2. Get markdown data
  //3. Create new page
  res.data.allContentfulBlogPost.edges.forEach(edge => {
    const { slug } = edge.node
    createPage({
      //component we are trying to render, not a react component but a path to the component which we have in blogTemplate
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        slug,
      },
    })
  })
}
