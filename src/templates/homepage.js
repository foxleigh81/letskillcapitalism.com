import React from 'react'
import rehypeReact from 'rehype-react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from '../components/header'
import BlogArticle from '../components/blog-article'
import CategoryList from '../components/category-list'

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
export const pageQuery = graphql`
  query HomepageByPath($slug: String!, $dir: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
    file (dir: { eq: $dir }, name: { eq: "hero" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
`

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const hero = data.file ? data.file.childImageSharp : null
  return (
    <>
      <Header hero={hero} />
      <div className="landing-page-container">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <BlogArticle tags={post.frontmatter.tags} hero={hero} postData={post}>
          <CategoryList context="/" />
        </BlogArticle>
      </div>
    </>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
