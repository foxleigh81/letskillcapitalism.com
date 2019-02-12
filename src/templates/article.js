import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from '../components/header'
import BlogArticle from '../components/blog-article'

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
            fluid {
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
  return (
    <>
      <Header />
      <div className="article-page-container">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <BlogArticle tags={post.frontmatter.tags} postData={post} />
      </div>
    </>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
