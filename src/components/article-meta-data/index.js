import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'

import './styles.scss'

const MetaData = ({ author, date }) => {

  const formatDate = (d) => {
    const dateString = moment(d)
    return dateString.format('Do MMMM YYYY')
  }

  return (
    <div className="meta-data">
      <span className="meta-data__author">Posted by: { author }</span>
      <span className="meta-data__date"> on: { formatDate(date) }</span>
    </div>
  )
}

MetaData.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
}

MetaData.defaultProps = {
  author: 'Alex Foxleigh',
  date: '',
}

export default MetaData
