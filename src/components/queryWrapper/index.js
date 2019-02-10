import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

// Run the Graphql query
const QueryWrapper = ({ children }) => (
  <StaticQuery
    query={
      graphql`
        query QueryWrapper($slug: String!, $dir: String!) {
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
    }
    render={(data) => {
      const post = data.markdownRemark // data.markdownRemark holds our post data
      const hero = data.file ? data.file.childImageSharp : null
      return (
        <>
          { children(post, hero) }
        </>
      )
    }
  }
  />
)

QueryWrapper.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
}

export default QueryWrapper
