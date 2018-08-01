import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  actions: PropTypes.object,
  className: PropTypes.string,
  fps: PropTypes.number,
};

const defaultProps = {
  fps: 30,
};

export default (mode) => {
  class NextPrevFrameControl extends Component {

    constructor(props, context) {
      super(props, context);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { actions, fps, player } = this.props;
      if (!player.paused) {
        actions.pause();
      }
      // Depends mode to implement different actions
      if (mode === 'forward') {
        actions.forward((1 / fps));
      } else {
        actions.replay((1 / fps));
      }
    }

    render() {
      const { seconds, className } = this.props;
      const classNames = ['video-react-control', 'video-react-button', 'video-react-icon'];
      if (mode === 'forward') {
        classNames.push(`video-react-icon-skip-next`);
      } else {
        classNames.push(`video-react-icon-skip-previous`);
      }
      classNames.push(`video-react-${mode}-control`);
      if (this.props.className) {
        classNames.push(this.props.className);
      }
      return (
        <button
          ref={
            (c) => {
              this.button = c;
            }
          }
          className={classNames.join(' ')}
          type="button"
          onClick={this.handleClick}
        >
          <span className="video-react-control-text">{`${mode}`}</span>
        </button>
      );
    }
  }

  NextPrevFrameControl.propTypes = propTypes;
  NextPrevFrameControl.defaultProps = defaultProps;
  return NextPrevFrameControl;
};
