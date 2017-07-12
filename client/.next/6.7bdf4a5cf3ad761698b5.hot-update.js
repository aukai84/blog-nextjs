webpackHotUpdate(6,{

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(71);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(17);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(18);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(41);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = __webpack_require__(554);

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
    value: function render() {
      console.log(this.props, 'props');
      if (this.props.statusCode) {
        return _react2.default.createElement(Error, { statusCode: this.props.statusCode, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        });
      }
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'Blog Title: ', this.props.json[0].title));
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/Andrea/temp/blog-nextjs/client/pages/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Andrea/temp/blog-nextjs/client/pages/post.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(92)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43YmRmNGE1Y2YzYWQ3NjE2OThiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz81OTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xuXG5jbGFzcyBwb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Bvc3QnKVxuICAgIC8vIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMuc3RhdHVzQ29kZSA+IDIwMCA/IHJlcy5zdGF0dXNDb2RlIDogZmFsc2VcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IGpzb24gfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMsICdwcm9wcycpO1xuICAgIGlmKHRoaXMucHJvcHMuc3RhdHVzQ29kZSkge1xuICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17dGhpcy5wcm9wcy5zdGF0dXNDb2RlfSAvPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+QmxvZyBUaXRsZToge3RoaXMucHJvcHMuanNvblswXS50aXRsZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBwb3N0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvcG9zdC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBVUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQWJBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVBBO0FBQ0E7QUFzQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==