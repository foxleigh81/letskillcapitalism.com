import React from 'react'
import rehypeReact from 'rehype-react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import NoteBlock from '../components/note-block'
import Sidebar from '../components/sidebar'

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
export const pageQuery = graphql`
  query WithSideBarByPath($slug: String!) {
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
  components: { 'note-block': NoteBlock },
}).Compiler

export default function Template({ data, pageContext }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { slug } = pageContext // Gives us a context for the sidebar to work from
  const context = slug.split('/')[1]
  return (
    <div className="page-container">
      <Sidebar context={context} />
      <article className="article-container">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <h1>{post.frontmatter.title}</h1>
        <div className="article-content">{renderAst(post.htmlAst)}</div>
      </article>
    </div>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.string.isRequired,
}
