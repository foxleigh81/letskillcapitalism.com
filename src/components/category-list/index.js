import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import getSlugsWithData from '../../helpers/js/getSlugsWithData'

const CategoryList = ({ posts, context }) => {
  const slugsWithData = getSlugsWithData(
    posts,
    context,
  )
  return (
    <nav className="category-list">
      <ul>
        {slugsWithData.map((top) => {
          // Display all pages (excluding index pages)
          if (!top.slug.match(/^\/([\w-]+)\/$/) && top.slug !== '/') {
            const category = top.slug.split('/')[1]
            const hasHero = top.hero.childImageSharp && true
            const style = (hasHero) && { backgroundImage: `url(${top.hero.childImageSharp.fluid.src})` }
            return (
              <li key={top.id} className={`${top.tags} ${category} ${hasHero ? 'has-hero' : 'no-hero'}`}>
                <article style={style}>
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
  posts: PropTypes.instanceOf(Object).isRequired,
  context: PropTypes.string,
}

CategoryList.defaultProps = {
  context: '/',
}

export default CategoryList
