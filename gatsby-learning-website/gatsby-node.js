/* gatsby node configuration file, which allows us to tap into a lot of the node apis that gatsby exposes
1) this is what be used to generate slugs and dynamic generate blog post pages
*/
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  //a node is a data structure for storing gatsby data
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    /* 
    using path.basename from nodejs - we can retrieve the last portion of a path 
    which the path of the markdown we want is located in node.fileAbsolutePath
    */
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      //shorthand property - setting the property equal to a variable of the same name
      node,
      name: "slug",
      value: slug,
    })
  }
}
