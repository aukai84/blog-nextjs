'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Andrea/temp/blog-nextjs/client/components/BlogRoll.js';


var BlogRoll = function (_React$Component) {
  (0, _inherits3.default)(BlogRoll, _React$Component);

  function BlogRoll(props) {
    (0, _classCallCheck3.default)(this, BlogRoll);

    return (0, _possibleConstructorReturn3.default)(this, (BlogRoll.__proto__ || (0, _getPrototypeOf2.default)(BlogRoll)).call(this, props));
  }

  (0, _createClass3.default)(BlogRoll, [{
    key: 'render',
    value: function render() {
      console.log(this.props, 'props');

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, this.props.title, this.props.slug, this.props.created_by, _react2.default.createElement(_link2.default, { href: this.props.slug, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, this.props.title)));
    }
  }]);

  return BlogRoll;
}(_react2.default.Component);

exports.default = BlogRoll;