(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=l.cssRules();return l.flush(),e},t.default=void 0;var r,i=n("q1tI");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,a(t).call(this,e))).prevProps={},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i.Component),n=t,o=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return l.computeId(t,n)}).join(" ")}}],(r=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){l.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&l.remove(this.prevProps),l.add(this.props),this.prevProps=this.props),null}}])&&s(n.prototype,r),o&&s(n,o),t}();t.default=f},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),i=r(n("0iUn")),o=r(n("MI3g")),s=r(n("a7VT")),u=r(n("AT/M")),a=r(n("sLSF")),c=r(n("Tit0")),l=r(n("dfwq")),f=r(n("ttDY"));Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),h="undefined"==typeof window;t.default=function(){var e,t=new f.default;function n(n){e=n.props.reduceComponentsToState((0,l.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function l(e){var r;return(0,i.default)(this,l),r=(0,o.default)(this,(0,s.default)(l).call(this,e)),h&&(t.add((0,u.default)(r)),n((0,u.default)(r))),r}return(0,c.default)(l,r),(0,a.default)(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,a.default)(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component)}},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],l=!1,f=-1;function d(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=u(d);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||u(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),i=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},MX0m:function(e,t,n){e.exports=n("3niX")},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n("MX0m"),i=n.n(r),o=n("q1tI"),s=n.n(o),u=n("YFqc"),a=n.n(u),c=(n("m/Pd"),n("cTJO"),n("zgjP"),n("ETuD")),l=n("xccv"),f=function(){return[{id:"hello-next.js",title:"Hello Next.js"},{id:"learn-next.js",title:"Learn Next.js"},{id:"deploy-next.js",title:"Deploy Next.js"}]},d=function(e){var t=e.post;return s.a.createElement("li",{key:t.id},s.a.createElement(a.a,{as:"/p/".concat(t.id),href:"/post?id=".concat(t.title)},s.a.createElement("a",null,t.title)))};function h(){return s.a.createElement(c.a,null,s.a.createElement(l.a,null,s.a.createElement("h1",{className:"jsx-456413199"},"My Blog"),s.a.createElement("ul",{className:"jsx-456413199"},f().map(function(e){return s.a.createElement(d,{key:e.id,post:e})})),s.a.createElement(i.a,{id:"456413199"},["h1.jsx-456413199,a.jsx-456413199{font - family:'Arial';}","ul.jsx-456413199{padding:0;}","li.jsx-456413199{list - style:none;margin:5px 0;}","a.jsx-456413199{text - decoration:none;color:blue;}","a.jsx-456413199:hover{opacity:0.6;}"])))}},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,u=t.isBrowser,a=void 0===u?"undefined"!=typeof window:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,o;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=o,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var i=String(n),o=t+i;return e[o]||(e[o]="jsx-".concat((0,r.default)("".concat(t,"-").concat(i)))),e[o]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(o,e)}):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,n),o&&s(t,o),e}();t.default=u},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),i=n("Y7ZC"),o=n("JB68"),s=n("sNwI"),u=n("NwJ3"),a=n("tEej"),c=n("IP1Z"),l=n("fNZA");i(i.S+i.F*!n("TuGD")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,f,d=o(e),h="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,v=void 0!==m,y=0,_=l(d);if(v&&(m=r(m,p>2?arguments[2]:void 0,2)),null==_||h==Array&&u(_))for(n=new h(t=a(d.length));t>y;y++)c(n,y,v?m(d[y],y):d[y]);else for(f=_.call(d),n=new h;!(i=f.next()).done;y++)c(n,y,v?s(f,m,[i.value,y],!0):i.value);return n.length=y,n}})},VKFn:function(e,t,n){n("bBy9"),n("FlQf"),e.exports=n("ldVq")},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("imt6");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enabled,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n&&(!i||i&&(void 0!==o&&o))}t.isAmp=s,t.useAmp=function(){return s(i.default.useContext(o.AmpModeContext))},t.withAmp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).hybrid,n=void 0!==t&&t;function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.default.useContext(o.AmpModeContext);return r.enabled=!0,r.hybrid=n,i.default.createElement(e,t)}return r.__nextAmpOnly=!n,r.getInitialProps=e.getInitialProps,r}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=void 0===n?"stylesheet":n,u=t.optimizeForSpeed,a=void 0===u?r:u,c=t.isBrowser,l=void 0===c?"undefined"!=typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#".concat(o,"-deleted-rule____{}"),s("boolean"==typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,u;return t=e,(o=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(u){return r||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `".concat(e,"` not found")),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-".concat(e),""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),u&&n(t,u),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=o}).call(this,n("8oxB"))},d04V:function(e,t,n){e.exports=n("0tVQ")},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),i=n.n(r);var o=n("d04V"),s=n.n(o),u=n("yLu3"),a=n.n(u);function c(e){return function(e){if(i()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(a()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return c})},imt6:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n("q1tI"));t.AmpModeContext=i.createContext({})},ldVq:function(e,t,n){var r=n("QMMT"),i=n("UWiX")("iterator"),o=n("SBuE");e.exports=n("WEpk").isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||o.hasOwnProperty(r(t))}},"m/Pd":function(e,t,n){"use strict";var r=n("KI45")(n("ttDY")),i=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("q1tI")),s=i(n("4hZ1")),u=n("imt6"),a=n("IClC"),c=n("Wziy");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})];return t||n.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:e})),n}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=l;var d=["name","httpEquiv","charSet","viewport","itemProp"];function h(e,t){return e.reduce(function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(f,[]).reverse().concat(l("",t.isAmp)).filter((n=new r.default,i=new r.default,s=new r.default,u={},function(e){if(e.key&&"number"!=typeof e.key&&0===e.key.indexOf(".$"))return!n.has(e.key)&&(n.add(e.key),!0);switch(e.type){case"title":case"base":if(i.has(e.type))return!1;i.add(e.type);break;case"meta":for(var t=0,o=d.length;t<o;t++){var a=d[t];if(e.props.hasOwnProperty(a))if("charSet"===a||"viewport"===a){if(s.has(a))return!1;s.add(a)}else{var c=e.props[a],l=u[a]||new r.default;if(l.has(c))return!1;l.add(c),u[a]=l}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+"next-head",r=e.key||t;return o.default.cloneElement(e,{key:r,className:n})});var n,i,s,u}var p=s.default();function m(e){var t=e.children;return o.default.createElement(u.AmpModeContext.Consumer,null,function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(p,{reduceComponentsToState:h,handleStateChange:n,isAmp:c.isAmp(e)},t)})})}m.rewind=p.rewind,t.default=m},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=n("RNiq");return{page:e.default||e}}])},yLu3:function(e,t,n){e.exports=n("VKFn")},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["vlRD","5d41","9da1"]]]);