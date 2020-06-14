import React from "react";
import Loadable from "react-loadable";
import PropTypes from "prop-types";

const Loading = (props) => {
  if (props.error) {
    return <div>Error!</div>;
  } else if (props.timedOut) {
    return <div>Taking a long time...</div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

Loading.propTypes = {
  error: PropTypes.object,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool
};

const Async = (opts) => Loadable({
  loading: Loading,
  ...opts
});

export default Async;