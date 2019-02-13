import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from '../components/header'
import BlogArticle from '../components/blog-article'
import SEO from '../components/seo';

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
export const pageQuery = graphql`
  query ArticleByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        tags
        template
        comments
        author
        title
        date
      }
      fields {
        hero {
          childImageSharp {
            fluid(quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`
export default function Template({ data }) {
  const post = data.markdownRemark // data.markdownRemark holds our post data
  const pageTitle = post.frontmatter.title
  return (
    <>
      <div className={`article-page-container ${post.frontmatter.tags}`}>
        <SEO title={pageTitle} />
        <Header />
        <BlogArticle tags={post.frontmatter.tags} postData={post} />
      </div>
    </>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
