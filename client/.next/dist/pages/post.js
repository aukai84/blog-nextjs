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

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Andrea/temp/blog-nextjs/client/pages/post.js?entry';


var post = function (_React$Component) {
  (0, _inherits3.default)(post, _React$Component);

  function post() {
    (0, _classCallCheck3.default)(this, post);

    return (0, _possibleConstructorReturn3.default)(this, (post.__proto__ || (0, _getPrototypeOf2.default)(post)).apply(this, arguments));
  }

  (0, _createClass3.default)(post, [{
    key: 'render',

    // static async getInitialProps() {
    //   const res = await fetch('http://localhost:8080/api/post')
    //   // const statusCode = res.statusCode > 200 ? res.statusCode : false
    //   const json = await res.json()
    //   return { json }
    // }

    value: function render() {
      console.log(this.props, 'props post');
      if (this.props.statusCode) {
        return _react2.default.createElement(Error, { statusCode: this.props.statusCode, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        });
      }
      return _react2.default.createElement(_MyLayout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Blog Title: ', this.props.title)));
    }
  }]);

  return post;
}(_react2.default.Component);

exports.default = post;