/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')


exports.createPages = ({ actions, graphql, getNode }) => {
  const { createPage } = actions

  // Register templates
  const templateRegister = {
    homepage: path.resolve('src/templates/homepage.js'),
    article: path.resolve('src/templates/article.js'),
    category: path.resolve('src/templates/category.js'),
  }

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            id
            parent {
              id
            }
            fields{
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // Use a template if specified in mardown frontmatter,
      // otherwise use the article template by default
      const component = (node.frontmatter.template)
        ? templateRegister[node.frontmatter.template]
        : templateRegister.article
      const { dir } = getNode(node.parent.id)
      createPage({
        path: node.fields.slug,
        component,
        context: {
          dir,
          slug: node.fields.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Add slug to MarkdownRemark node
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode, basePath: 'library' })
    createNodeField({
      node,
      name: 'slug',
      value,
    })
  }
}