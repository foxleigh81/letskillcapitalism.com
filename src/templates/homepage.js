import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import BlogArticle from '../components/blog-article'
import CategoryList from '../components/category-list'

// Run the Graphql query
export const pageQuery = graphql`
  query HomepageByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        bgPos
      }
      fields {
        hero {
          childImageSharp {
            fluid(quality: 90) {
              src
            }
          }
        }
      }
    }
    allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
            hero {
              childImageSharp {
                # This could be a smaller image as it's only for categories.
                fluid(quality: 90) {
                  src
                }
              }
            }
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            bgPos
            excerpt
          }
        }
      }
    }
  }
`

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { allMarkdownRemark: articleQueryData } = data
  return (
    <Layout className="landing-page-container">
        <BlogArticle tags={post.frontmatter.tags} postData={post}>
          <CategoryList posts={articleQueryData.edges} context="/" />
        </BlogArticle>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
