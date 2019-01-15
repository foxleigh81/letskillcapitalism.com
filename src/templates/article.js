import React from 'react'
import rehypeReact from 'rehype-react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import NoteBlock from '../components/note-block'

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
export const pageQuery = graphql`
  query ArticleByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        hero
      }
      frontmatter {
        title
      }
    }
    # file(relativePath: { eq: "technically-minded/what-should-we-expect-from-the-next-gen-of-vr/hero.jpg" }) {
    #   childImageSharp {
    #     # Specify the image processing specifications right in the query.
    #     # Makes it trivial to update as your page's design changes.
    #     fixed(width: 125, height: 125) {
    #       originalName
    #     }
    #   }
    # }
  }
`

// Register any components which are to be available in this template

// eslint-disable-next-line new-cap
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'note-block': NoteBlock },
}).Compiler

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <div className="landing-page-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div className="blog-post-content">{renderAst(post.htmlAst)}</div>
      </div>
    </div>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
