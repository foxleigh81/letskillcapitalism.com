import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import getSlugsWithData from '../../helpers/getSlugsWithData'
import './sidebar.css'

// SIDEBAR COMPONENT
// Note: This is only able to go down one additional level from the top.

// REFACTOR: There is almost certainly a better way to do this

const Sidebar = ({ context }) => (
  <StaticQuery
    query={graphql`
      query Sidebar {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const slugsWithData = getSlugsWithData(
        data.allMarkdownRemark.edges,
        context,
      )
      const re = new RegExp(`/${context}/(.*)`)
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index
      }
      const slugsNoContext = slugsWithData
        .map((slug) => {
          const fullSlug = slug.slug.match(re)[1].split('/')
          if (fullSlug.length > 2) {
            return fullSlug[0]
          }
          return null
        })
        .filter(onlyUnique)
      return (
        <nav className="side-bar">
          <h1>{context.replace(/\//g, '')}</h1>
          <ul>
            {slugsWithData.map((top) => {
              // Remove context from slug results and split into an array
              const slugNoContext = top.slug.match(re)[1].split('/')
              if (slugNoContext.length <= 2) {
                // Only show top level links without a header
                return (
                  <li key={top.id}>
                    <Link to={top.slug}>{top.title}</Link>
                  </li>
                )
              }
              return null
            })}
            {slugsNoContext.map((slug, index) => {
              if (index > 0) {
                // Ignore the first round as this will be unfiltered list items
                // REFACTOR: This is a bit hacky and can probably be written better.
                return (
                  <li key={slug.id}>
                    <h2>{slug}</h2>
                    <ul>
                      { getSlugsWithData(data.allMarkdownRemark.edges, slug).map((l2) => {
                        if (l2.slug.match(re)) {
                          const trimmed = l2.slug
                            .replace(context, '')
                            .split('/')
                            .filter(Boolean)
                          if (trimmed.length >= 2) {
                            return (
                              <li key={l2.id}>
                                <Link to={l2.slug}>{l2.title}</Link>
                              </li>
                            )
                          }
                          return null
                        }
                        return null
                      })}
                    </ul>
                  </li>
                )
              }
              return null
            })}
          </ul>
        </nav>
      )
    }}
  />
)

Sidebar.propTypes = {
  context: PropTypes.string,
}

Sidebar.defaultProps = {
  context: '/',
}

export default Sidebar
