import React from 'react'
import { DiscussionEmbed } from 'disqus-react';
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import BlogArticle from '../components/blog-article'
import Layout from '../components/layout'

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
        bgPos
        excerpt
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
  const disqusShortname = 'lxword'
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  }
  return (
    <Layout seoTitle={pageTitle} headerTags={post.frontmatter.tags} className={`article-page-container ${post.frontmatter.tags}`}>
        <BlogArticle tags={post.frontmatter.tags} postData={post}>
          {post.frontmatter.comments && <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />}
        </BlogArticle>
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
