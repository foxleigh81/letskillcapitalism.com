/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const fs = require('fs')

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
              category
              hero {
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
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
          hero: node.fields.hero,
          category: node.fields.category,
        },
      })
    })
  })
}

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Add slug to MarkdownRemark node
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'library' })
    const { dir } = path.parse(node.fileAbsolutePath)
    const heroImage = await new Promise((res, rej) => {
      // get a list of files in `dir`
      fs.readdir(dir, (err, files) => {
        if (err) rej(err)

        // if there's a file named `hero`, return it
        res(files.find(file => file.includes('hero')))
      })
    })

    // path.relative will return a (surprise!) a relative path from arg 1 to arg 2.
    // you can use this to set up your default hero
    const heroPath = heroImage
      ? `./${heroImage}`
      : path.relative(dir, 'src/images/no-hero.gif')

    // create a node with relative path
    createNodeField({
      node,
      name: 'hero',
      value: `./${heroPath}`,
    })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })

    createNodeField({
      node,
      name: 'category',
      value: slug.split('/')[1],
    })
  }
}
