module.exports = {
  siteMetadata: {
    title: `craigzheng.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 520,
              backgroundColor: '#1D1E1E',
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
        ]
      }
    }
  ],
}
