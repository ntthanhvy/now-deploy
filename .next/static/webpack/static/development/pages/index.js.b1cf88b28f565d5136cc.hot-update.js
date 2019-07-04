webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/link */ "./node_modules/next/dist/client/link.js");
/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _comps_MyLayouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/MyLayouts */ "./comps/MyLayouts.js");
/* harmony import */ var _comps_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/Container */ "./comps/Container.js");








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

/* harmony default export */ __webpack_exports__["default"] = (Blog = function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_MyLayouts__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_comps_Container__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "My Blog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, getPost.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      as: "/p/".concat((post, id)),
      href: "/post?id=".concat(post.title)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, post.title)));
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.b1cf88b28f565d5136cc.hot-update.js.map