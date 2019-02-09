import PropTypes from 'prop-types'
import React from 'react'
import rehypeReact from 'rehype-react'

import './styles.scss'

// Import components
import NoteBlock from '../note-block'
import LegacyBanner from '../legacy-banner'

const BlogArticle = ({ tags, hero, postData }) => {

  // Register any components which are to be available in this template via markdown

  // eslint-disable-next-line new-cap
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'note-block': NoteBlock,
    },
  }).Compiler

  const addClass = (hero) ? 'has-hero' : null
  const style = (hero) ? { backgroundImage: `url(${hero.fixed.src})` } : {}

  // Check if article is legacy
  const legacyCheck = (t) => {
    const tagArray = t.split(',')
    return tagArray.includes('legacy')
  }

  return (
    <article className={`blog-article ${tags}`}>
      {legacyCheck(tags) && <LegacyBanner /> }
      <header className={addClass} style={style}>
        <h1>{postData.frontmatter.title}</h1>
      </header>
      <div className="blog-post-content">{renderAst(postData.htmlAst)}</div>
    </article>
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
