import React from 'react'
import rehypeReact from 'rehype-react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from '../components/header'
import CategoryList from '../components/category-list'

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
export const pageQuery = graphql`
  query HomepageByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

// Register any components which are to be available in this template

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <>
      <Header />
      <div className="landing-page-container">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-content">{renderAst(post.htmlAst)}</div>
        </div>
        <CategoryList context="/" />
      </div>
    </>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
