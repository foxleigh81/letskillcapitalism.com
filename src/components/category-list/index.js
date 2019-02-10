import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import getSlugsWithData from '../../helpers/js/getSlugsWithData'

// TODO: Refactor - there is a lot of repeated code here.

const CategoryList = ({ data, context }) => {
  const slugsWithData = getSlugsWithData(
    data,
    context,
  )
  return (
    <nav className="category-list">
      <ul>
        {slugsWithData.map((top) => {
          // Remove context from slug results and split into an array)
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
                  </Link>
                  <div className="meta-data">
                    <span className="date">{top.date}</span>
                    <Link className="category" to={`/${category}/`}>{category.replace(/-/g, ' ')}</Link>
                  </div>
                </article>
              </li>
            )
          }
          return null
        })}
      </ul>
    </nav>
  )
}

CategoryList.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  context: PropTypes.string,
}

CategoryList.defaultProps = {
  context: '/',
}

export default CategoryList
