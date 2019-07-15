import PropTypes from 'prop-types'
import React from 'react'

import './styles.scss'

const MetaAuthor = ({ author }) => {

  return (
    <div className="meta-author">
      Article author: { author }
    </div>
  )
}

MetaAuthor.propTypes = {
  author: PropTypes.string.isRequired,
}

export default MetaAuthor
