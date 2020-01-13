/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
//nodejs file - uses module.export
module.exports = {
  //naming has to be exactly as shown below - other gatsby wont find it
  siteMetadata: {
    title: "Exploring Gatsby Site!",
    author: "Michael Su",
  },

  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
