import PropTypes from 'prop-types'
import React from 'react'
import rehypeReact from 'rehype-react'
import moment from 'moment'

import './styles.scss'

// Import components
import NoteBlock from '../note-block'
import LegacyBanner from '../legacy-banner'
import VideoEmbed from '../video-embed'

const BlogArticle = ({ tags, hero, postData }) => {
  // Register any components which are to be available in this template via markdown

  // eslint-disable-next-line new-cap
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'note-block': NoteBlock,
      'video-embed': VideoEmbed,
    },
  }).Compiler

  const addClass = (hero) ? 'has-hero' : null
  const style = (hero) ? { backgroundImage: `url(${hero.fixed.src})` } : {}

  // Check if article is legacy
  const legacyCheck = (t) => {
    const tagArray = t.split(',')
    return tagArray.includes('legacy')
  }

  const formatDate = (date) => {
    const dateString = moment(date)
    return dateString.format('Do MMMM YYYY')
  }

  

  return (
    <div className="blog-article-container">
      {legacyCheck(tags) && <LegacyBanner /> }
      <article className={`blog-article ${tags}`}>
        <header className={addClass} style={style}>
          <h1>{postData.frontmatter.title}</h1>
          {/* TODO: This should be made it's own component */}
          <div className="meta-data">
            <span className="meta-data__author">{ postData.frontmatter.author }</span>
            <span className="meta-data__date">{ formatDate(postData.frontmatter.date) }</span>
          </div>
        </header>
        <div className="blog-post-content">{renderAst(postData.htmlAst)}</div>
      </article>
    </div>
  )
}

BlogArticle.propTypes = {
  tags: PropTypes.string,
  hero: PropTypes.instanceOf(Object),
  postData: PropTypes.instanceOf(Object).isRequired,
}

BlogArticle.defaultProps = {
  tags: '',
  hero: '',
}

export default BlogArticle
