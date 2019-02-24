import { Link, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import uuid from 'uuid'

import getSlugsWithData from '../../helpers/js/getSlugsWithData'

import './style.scss'

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
            const bgp = top.bgPos
            if (bgp && style) { style.backgroundPosition = bgp }
            const hasClicked = () => navigate(top.slug)
            return (
              <li key={uuid()} className={`${top.tags} ${category} ${hasHero ? 'has-hero' : 'no-hero'}`} onClick={hasClicked}>
                <article>
                  <header className="category-list__header" style={style}>
                    <Link to={top.slug}>
                      <h1>{top.title}</h1>
                    </Link>
                  </header>
                  <div className="category-list__meta-data">
                    <span className="category-list__meta-data__date">{top.date}</span>
                    <Link className="category-list__meta-data__category" to={`/${category}/`}>{category.replace(/-/g, ' ')}</Link>
                  </div>
                  <div className="category-list__excerpt" dangerouslySetInnerHTML={{__html: top.excerpt}} />
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
