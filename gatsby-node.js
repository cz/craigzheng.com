/**
 * Create pages from Markdown files in the content directory
 */

const path = require(`path`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    //Match everything between content/ and the file extension
    const pathMatch = node.fileAbsolutePath.match(/content\/(.*)\.md/);
    // Get the capturing group result, minus 'index', e.g. posts/my-first-post/
    const relativePath = pathMatch[1].replace('index', '');
    // Append slash if needed
    const finalPath = relativePath.endsWith('/') ? relativePath : relativePath.concat('/');
    // Get the type, e.g. posts
    const type = relativePath.split('/')[0];
    createNodeField({
      node,
      name: `type`,
      value: type,
    })
    createNodeField({
      node,
      name: `path`,
      value: finalPath,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              type,
              path
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: path.resolve(`./src/templates/${node.fields.type}.js`),
        context: {
          path: node.fields.path,
       },
      })
    })
  });
}