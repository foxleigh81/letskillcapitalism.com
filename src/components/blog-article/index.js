import PropTypes from 'prop-types'
import React from 'react'
import rehypeReact from 'rehype-react'

import './styles.scss'

// Import components
import NoteBlock from '../note-block'
import LegacyBanner from '../legacy-banner'
import VideoEmbed from '../video-embed'
import MetaData from '../article-meta-data'

const BlogArticle = ({
  tags, postData, children,
}) => {
  // Register any components which are to be available in this template via markdown

  // eslint-disable-next-line new-cap
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'note-block': NoteBlock,
      'video-embed': VideoEmbed,
    },
  }).Compiler

  const hasHero = postData.fields.hero.childImageSharp && true
  const style = (hasHero) && { backgroundImage: `url(${postData.fields.hero.childImageSharp.fluid.src})` }

  // Check if article is legacy
  const legacyCheck = (t) => {
    const tagArray = t.split(',')
    return tagArray.includes('legacy')
  }

  return (
    <div className="blog-article-container">
      {legacyCheck(tags) && <LegacyBanner /> }
      <article className={`blog-article ${tags}`}>
        <header className={`blog-article__header ${hasHero ? 'has-hero' : 'no-hero'}`} style={style}>
          <h1>{postData.frontmatter.title}</h1>
          <MetaData author={postData.frontmatter.author} date={postData.frontmatter.date} />
        </header>
        <div className="blog-article__content">
          {renderAst(postData.htmlAst)}
          { children }
        </div>
      </article>
    </div>
  )
}

BlogArticle.propTypes = {
  tags: PropTypes.string,
  postData: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.instanceOf(Object),
}

BlogArticle.defaultProps = {
  tags: '',
  children: null,
}

export default BlogArticle
