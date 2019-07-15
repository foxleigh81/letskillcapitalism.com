import { Link, StaticQuery, graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Footer = props => (
  <StaticQuery
    query={graphql`
      query FooterData {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark { 
          edges {
            node {
              fields{
                category
              }
              frontmatter {
                title
                in_nav
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const meta = data.site.siteMetadata
      const categoryList = []

      data.allMarkdownRemark.edges.reduce((result, cat) => {
        const { fields } = cat.node
        const fm = cat.node.frontmatter
        if (fm.in_nav !== true || fields.category === '' || categoryList.includes(fields.category)) {
          return result
        }
        return categoryList.push({
          name: fm.title,
          slug: fields.category,
        })
      })
      const nav = categoryList.map(cat => <li key={cat.slug}><Link to={`/${cat.slug}`}>{cat.name}</Link></li>)

      return (
        <footer className={`site-footer ${props.tags}`}>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              {nav}
            </ul>
          </nav>
          <span class="copyright">Copyright 2019: Alexander foxleigh. All Rights reserved</span>
        </footer>
      )
    }
  }
  />
)

Footer.propTypes = {
  tags: PropTypes.string,
}

Footer.defaultProps = {
  tags: '',
}

export default Footer