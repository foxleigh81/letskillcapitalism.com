import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import getSlugsWithData from '../../helpers/getSlugsWithData'

// TODO: Refactor - there is a lot of repeated code here.

const CategoryList = ({ context }) => (
  <StaticQuery
    query={graphql`
      query CategoryData {
        allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              fields {
                slug
                hero 
              }
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                tags
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
      return (
        <nav className="category-list">
          <ul>
            {slugsWithData.map((top) => {
              // Remove context from slug results and split into an array
              if (context !== '/') {
                // Display pages within a category (excluding index page)
                if (!top.slug.match(/^\/([\w-]+)\/$/)) {
                  return (
                    <li key={top.id} className={`${top.tags} ${context}`}>
                      <article>
                        
                        <Link to={top.slug}>
                          <h1>{top.title}</h1>
                          <span className="date">{top.date}</span>
                        </Link>
                      </article>
                    </li>
                  )
                }
                return null
              }
              // Display all pages (excluding index pages)
              if (!top.slug.match(/^\/([\w-]+)\/$/) && top.slug !== '/') {
                const category = top.slug.split('/')[1]
                return (
                  <li key={top.id} className={`${top.tags} ${category}`}>
                    <article>
                      <Link to={top.slug}>
                        <h1>{top.title}</h1>
                        <span className="date">{top.date}</span>
                        <span className="category"><Link to={`/${category}/`}>{category.replace(/-/g, ' ')}</Link></span>
                      </Link>
                    </article>
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

CategoryList.propTypes = {
  context: PropTypes.string,
}

CategoryList.defaultProps = {
  context: '/',
}

export default CategoryList
