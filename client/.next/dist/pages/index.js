'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _BlogRoll = require('../components/BlogRoll');

var _BlogRoll2 = _interopRequireDefault(_BlogRoll);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Andrea/temp/blog-nextjs/client/pages/index.js?entry';


var post = function (_React$Component) {
  (0, _inherits3.default)(post, _React$Component);

  function post() {
    (0, _classCallCheck3.default)(this, post);

    return (0, _possibleConstructorReturn3.default)(this, (post.__proto__ || (0, _getPrototypeOf2.default)(post)).apply(this, arguments));
  }

  (0, _createClass3.default)(post, [{
    key: 'render',
    value: function render() {
      console.log(this.props.json, 'props');
      if (this.props.statusCode) {
        return _react2.default.createElement(Error, { statusCode: this.props.statusCode, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        });
      }
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.props.json.map(function (post) {
        return _react2.default.createElement(_BlogRoll2.default, {
          key: post.id,
          title: post.title,
          slug: post.slug,
          created_by: post.created_by,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        });
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res, json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _isomorphicFetch2.default)('http://localhost:8080/api/post');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt('return', { json: json });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return post;
}(_react2.default.Component);

exports.default = post;