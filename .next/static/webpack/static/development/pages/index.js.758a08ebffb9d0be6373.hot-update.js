webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _comps_MyLayouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/MyLayouts */ "./comps/MyLayouts.js");
/* harmony import */ var _comps_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comps/Container */ "./comps/Container.js");









var getPost = function getPost() {
  return [{
    id: 'hello-next.js',
    title: 'Hello Next.js'
  }, {
    id: 'learn-next.js',
    title: 'Learn Next.js'
  }, {
    id: 'deploy-next.js',
    title: 'Deploy Next.js'
  }];
};

var Post = function Post(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    key: post.id
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: "/p/".concat(post.id),
    href: "/post?id=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, post.title)));
};

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_MyLayouts__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_comps_Container__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-456413199"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-456413199"
  }, getPost().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Post, {
      key: post.id,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "456413199"
  }, "h1.jsx-456413199,a.jsx-456413199{font - family:'Arial';}ul.jsx-456413199{padding:0;}li.jsx-456413199{list - style:none;margin:5px 0;}a.jsx-456413199{text - decoration:none;color:blue;}a.jsx-456413199:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL250dGhuYWh2eS90dXJpbmctY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DNEIsQUFHK0MsQUFJWixBQUlRLEFBS0ssQUFLWCxVQWJwQixFQWNBLE1BVmlCLElBUmpCLENBYWUsUUFKZixHQUtBIiwiZmlsZSI6Ii9ob21lL250dGhuYWh2eS90dXJpbmctY2hhbGxlbmdlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgbGluayBmcm9tICduZXh0L2Rpc3QvY2xpZW50L2xpbmsnO1xuXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9NeUxheW91dHMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wcy9Db250YWluZXInO1xuXG5cbmNvbnN0IGdldFBvc3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgeyBpZDogJ2hlbGxvLW5leHQuanMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnIH0sXG4gICAgICAgIHsgaWQ6ICdsZWFybi1uZXh0LmpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzJyB9LFxuICAgICAgICB7IGlkOiAnZGVwbG95LW5leHQuanMnLCB0aXRsZTogJ0RlcGxveSBOZXh0LmpzJyB9XG4gICAgXVxufVxuXG5jb25zdCBQb3N0ID0gKHsgcG9zdCB9KSA9PiAoXG4gICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgICAgICA8YT57cG9zdC50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtnZXRQb3N0KCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3Qga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgaDEsIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udCAtIGZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCAtIHN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgLSBkZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59OyJdfQ== */\n/*@ sourceURL=/home/ntthnahvy/turing-challenge/pages/index.js */")));
}
;

/***/ })

})
//# sourceMappingURL=index.js.758a08ebffb9d0be6373.hot-update.js.map