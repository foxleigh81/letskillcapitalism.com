import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import CategoryList from '../components/category-list'
import BlogArticle from '../components/blog-article'

// Run the Graphql query
export const pageQuery = graphql`
  query CategoryByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
      fields {
        slug
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
            category
            hero {
              childImageSharp {
                fluid(quality: 100) {
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

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { allMarkdownRemark: articleQueryData } = data
  const { slug } = pageContext // Gives us a context for the category list component to work from
  const context = slug.split('/')[1]
  const pageTitle = post.frontmatter.title
  return (
    <Layout className="landing-page-container" seoTitle={pageTitle} headerTags={post.frontmatter.tags}>
        <BlogArticle tags={post.frontmatter.tags} postData={post}>
          <CategoryList posts={articleQueryData.edges} context={context} />
        </BlogArticle>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.instanceOf(Object).isRequired,
}
