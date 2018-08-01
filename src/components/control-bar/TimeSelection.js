import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

export default class TimeSelection extends Component {
  constructor(props, context) {
    super(props, context);
    this.getPercent = this.getPercent.bind(this);
  }
  getPercent() {
    const percent = this.props.time / this.props.duration;
    return percent >= 1 ? 1 : percent;
  }
  render() {
    if (!this.props.time || !this.props.duration) return null;
    return (
      <div
        className={classNames('video-react-time-selection', this.props.className)}
        style={{
          left: `${(this.getPercent() * 100).toFixed(2)}%`,
        }} />
    );
  }
}

TimeSelection.propTypes = {
  duration: PropTypes.number,
  time: PropTypes.number,
  className: PropTypes.string,
};
TimeSelection.displayName = 'TimeSelection';
