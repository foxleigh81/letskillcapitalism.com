import React from 'react'
import PropTypes from 'prop-types'

import module from './styles.module.scss'

const LegacyBanner = ({ year }) => (
  <section className={module.legacyBanner}>
    <h1>This is a legacy article from {year}</h1>
    <p>
      It was written for a previous version of this site so please excuse any graphical issues.
      If you see any broken images or links however. Please let me know.
    </p>
  </section>
)

LegacyBanner.propTypes = {
  year: PropTypes.string.isRequired,
}

export default LegacyBanner
