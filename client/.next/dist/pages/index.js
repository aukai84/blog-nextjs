'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BlogRoll = require('../components/BlogRoll');

var _BlogRoll2 = _interopRequireDefault(_BlogRoll);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewtirrell/Projects/blog-nextjs/client/pages/index.js?entry';


var Home = function Home(props) {

  console.log(props, 'props');

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.posts.map(function (post) {
    return _react2.default.createElement(_BlogRoll2.default, {
      key: post.id,
      id: post.id,
      title: post.title,
      slug: post.slug,
      created_by: post.created_by,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    });
  }));
};

Home.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var res, posts;
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
          posts = _context.sent;

          console.log('Show data fetched. Count');

          return _context.abrupt('return', {
            posts: posts
          });

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Home;