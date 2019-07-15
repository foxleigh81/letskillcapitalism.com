import PropTypes from 'prop-types'
import React from 'react'
import rehypeReact from 'rehype-react'

import './styles.scss'

// Import components
import NoteBlock from '../note-block'
import LegacyBanner from '../legacy-banner'
import MetaAuthor from '../meta-author'
import MetaDate from '../meta-date'

const BlogArticle = ({
  tags, postData, children,
}) => {
  // Register any components which are to be available in this template via markdown

  // eslint-disable-next-line new-cap
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      'note-block': NoteBlock
    },
  }).Compiler

  const hasHero = postData.fields.hero.childImageSharp && true
  const bgp = postData.frontmatter.bgPos
  const style = (hasHero) && { backgroundImage: `url(${postData.fields.hero.childImageSharp.fluid.src})` }
  if (style) { style.backgroundPosition = bgp }
  // Check if article is legacy
  const legacyCheck = t => {
    const tagArray = t.split(',')
    return tagArray.includes('legacy')
  }

  // Check if we are currently on an article page
  const articleCheck = () => postData.frontmatter.template === 'article' && true
  
  return (
    <div className="blog-article-container">
      {legacyCheck(tags) && <LegacyBanner year={postData.frontmatter.date.split('-')[0]} /> }
      <article className={`blog-article ${tags}`}>
      { postData.frontmatter.title && 
        <header className={`blog-article__header ${hasHero ? 'has-hero' : 'no-hero'}`} style={style}>
          <h1>{postData.frontmatter.title}</h1>
          {articleCheck() && <MetaDate date={postData.frontmatter.date} /> }
        </header>
      }
        <div className="blog-article__content">
          {renderAst(postData.htmlAst)}
          {articleCheck() && <MetaAuthor author={postData.frontmatter.author} />}
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
