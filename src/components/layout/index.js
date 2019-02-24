import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../header'
import SEO from '../seo'
import './layout.scss'

require('prismjs/plugins/line-numbers/prism-line-numbers.css')

const Layout = ({ children, className, seoTitle, headerTags }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title={seoTitle} />
        <Header tags={headerTags} />
        <main className={className}>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  seoTitle: PropTypes.string,
  headerTags: PropTypes.string,
}

Layout.defaultProps = {
  className: '',
  seoTitle: '',
  headerTags: '',
}

export default Layout
