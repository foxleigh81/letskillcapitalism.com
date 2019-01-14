import React from 'react'
import rehypeReact from 'rehype-react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import NoteBlock from '../components/note-block'

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
export const pageQuery = graphql`
  query NoSideBarByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

// Register any components which are to be available in this template
// (Don't forget to import them first!)
// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'note-block': NoteBlock,
  },
}).Compiler

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <article className="article-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <div className="article-content">{renderAst(post.htmlAst)}</div>
    </article>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
