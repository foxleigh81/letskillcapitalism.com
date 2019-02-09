import PropTypes from 'prop-types'
import React from 'react'

import './styles.scss'

const VideoEmbed = ({ type, watch, autoplay }) => {
  let embed = null
  const setAutoPlay = (autoplay) ? 1 : 0;
  if (type === 'youtube') {
    embed = (
      <iframe
        title="ytplayer"
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${watch}&autoplay=${setAutoPlay}&origin=https://blog.foxleigh.me`}
        frameBorder="0"
      />
    )
  }

  return (
    <div className="video-embed">
      {embed}
    </div>
  )
}

VideoEmbed.propTypes = {
  type: PropTypes.string,
  watch: PropTypes.string.isRequired,
  autoplay: PropTypes.bool,
}

VideoEmbed.defaultProps = {
  type: 'youtube',
  autoplay: false,
}

export default VideoEmbed
