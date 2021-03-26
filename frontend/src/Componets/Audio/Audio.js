import React from "react";
import PropTypes from "prop-types";

const Audio = (props) => {
  return <div>
      <audio controls src="/media/cc0-audio/t-rex-roar.mp3">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
  </div>;
};

Audio.propTypes = {};

export default Audio;
