import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from '../components/header'
import BlogArticle from '../components/blog-article'

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
export const pageQuery = graphql`
  query ArticleByPath($slug: String!, $dir: String!) {
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
    }
    file (dir: { eq: $dir }, name: { eq: "hero" }) {
      childImageSharp {
        fluid(quality: 100) {
          src
        }
      }
    }
  }
`
export default function Template({ data }) {
  const post = data.markdownRemark // data.markdownRemark holds our post data
  const hero = data.file ? data.file.childImageSharp.fluid : null
  return (
    <>
      <Header />
      <div className="article-page-container">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <BlogArticle tags={post.frontmatter.tags} hero={hero} postData={post} />
      </div>
    </>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
