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
  query CategoryByPath($slug: String!, $dir: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
    file (dir: { eq: $dir }, name: { eq: "hero" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`

// Register any components which are to be available in this template

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const hero = data.file ? data.file.childImageSharp.fluid : null
  const { slug } = pageContext // Gives us a context for the category list component to work from
  const context = slug.split('/')[1]
  return (
    <>
      <Header hero={hero.fixed.src} />
      <div className="landing-page-container">
        <Helmet title={`Alex Foxleigh- ${post.frontmatter.title}`} />
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div className="blog-post-content">{renderAst(post.htmlAst)}</div>
        </div>
        <CategoryList context={context} />
      </div>
    </>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.string.isRequired,
}
