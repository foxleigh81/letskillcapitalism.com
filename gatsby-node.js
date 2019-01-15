/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const fs = require('fs')

const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
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
            fields{
              slug
              hero
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

      createPage({
        path: node.fields.slug,
        component,
        context: {
          slug: node.fields.slug,
          hero: node.fields.hero,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Add slug to MarkdownRemark node
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'library' })
    const hero = (fs.existsSync(path.resolve(__dirname, `src/library/pages/${slug}hero.jpg`))) ? './hero.jpg' : ''

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    createNodeField({
      node,
      name: 'hero',
      value: hero,
    })
  }
}
