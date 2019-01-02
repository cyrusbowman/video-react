'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _NextPrevFrameControl = require('./NextPrevFrameControl');

var _NextPrevFrameControl2 = _interopRequireDefault(_NextPrevFrameControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pass mode into parent function
var PreviousFrameControl = (0, _NextPrevFrameControl2.default)('replay');
PreviousFrameControl.displayName = 'PreviousFrameControl';

exports.default = PreviousFrameControl;