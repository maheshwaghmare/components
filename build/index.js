module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var a=e[o],u=t.base?a[0]+t.base:a[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var f=c(s),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:s,updater:h(p,t),references:1}),r.push(s)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var b=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var a=m++;n=b||(b=l(t)),r=p.bind(null,n,a,!1),o=p.bind(null,n,a,!0)}else n=l(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=u(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,c,u;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){var r=n(1),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,'\n.bsf_toggle-dropdown-wrap {\n    position: relative;\n    \n}\n.bsf_selected-wrap {\n    padding: 5px 10px;\n}\n.bsf_selected-wrap:after {\n    content: "\\25BC";\n    position: absolute;\n    right: 1em;\n}\n.bsf_selected-option-logo img {\n    height: 18px;\n    width: 18px;\n    border-radius: 50%;\n    margin-right: 10px;\n    vertical-align: text-top;\n}\n.bsf_dropdown-options-wrap {\n    right: 0px;\n    border-radius: 5px;\n    position: absolute;\n    left: 0px;\n    top: 45px;\n    z-index: 99;\n    padding: 0px;\n    background: rgb(255, 255, 255);\n    box-shadow: rgb(0 0 0 / 15%) 1px 2px 5px 1px;\n   \n}\n.bsf_dropdown-list-wrap {\n    list-style: none;\n    margin: 0px;\n    padding: 0.4em 0px;\n}\n\n.bsf_dropdown-list-item {\n    margin: 0;\n    padding: 5px 10px;\n}\n.bsf_dropdown-list-item:hover {\n    background: #f7f7f7;\n}\n.bsf_dropdown-options-wrap:after {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    -moz-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n    -o-transform: translateX(-50%);\n    transform: translateX(-50%);\n    height: 0;\n    width: 0;\n    border-bottom: 4px solid #fff;\n    border-left: 4px solid transparent;\n    border-right: 4px solid transparent;\n    margin: 6px 0 0;\n    content: "";\n    top: -10px;\n}\n\nimg.bsf_list-item-logo {\n    height: 18px;\n    width: 18px;\n    border-radius: 50%;\n    margin-right: 10px;\n    vertical-align: text-top;\n}',""]),e.exports=t},function(e,t,n){var r=n(1),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},function(e,t,n){(t=n(2)(!1)).push([e.i,".bsf_search-box-wrap{\n    position: relative;\n}\ninput.bsf_search-box-input {\n    border: none;\n    width: 100%;\n    padding: 0.75em;\n    background:transparent;\n}\ninput.bsf_search-box-input:focus {\n    border: none;\n    outline: none;\n}\n.bsf_search-box-wrap svg {\n    position: absolute;\n    right: 5px;\n    padding: 0.3em;\n    fill: #cac4d0;\n}\ninput.bsf_search-box-input::-webkit-search-cancel-button {\n    -webkit-appearance: searchfield-cancel-button;\n}",""]),e.exports=t},function(e,t,n){"use strict";n.r(t),n.d(t,"Button",(function(){return a})),n.d(t,"Link",(function(){return i})),n.d(t,"Card",(function(){return c})),n.d(t,"Grid",(function(){return u})),n.d(t,"Toggle",(function(){return f})),n.d(t,"ToggleDropdown",(function(){return g})),n.d(t,"SearchBox",(function(){return x}));var r=n(0),o=n.n(r),a=function(e){var t=e.text,n=e.primary,r=e.secondary,a={border:"1px solid #eee",borderRadius:3,color:n?"#FFFFFF":"#1ea7fd",backgroundColor:n?"#1ea7fd":r?"#f2f2f2":"#FFFFFF",cursor:"pointer",fontSize:15,padding:"3px 10px",margin:10};return o.a.createElement("button",{style:a,type:"button"},t)},i=function(e){var t=e.href,n=e.text;return o.a.createElement("a",{href:t},n)},c=function(e){var t=e.heading,n=e.thumbnail,r=e.btn;return o.a.createElement("div",{style:{border:"1px solid #eee",borderRadius:3,cursor:"pointer",fontSize:15,padding:"3px 10px",margin:10}},o.a.createElement("img",{src:n,style:{background:"#fff",border:"1px solid #DCD9E2",borderRadius:"3px",display:"block",marginBottom:"10px",padding:"14px",position:"relative",zIndex:10,maxWidth:"100%"}}),o.a.createElement("h2",{style:{color:"#2f3f50",fontSize:"16px",fontWeight:600}},t),o.a.createElement("button",{style:{display:"inline-block",padding:"5px 16px",background:"#5C2EDE",fontSize:"14px",textShadow:"none",fontWeight:"600"}},r))},u=function(e){var t=e.items,n={width:"33.33%"};return o.a.createElement("div",{style:{display:"flex"}},t.map((function(e){var t=e.heading,r=e.thumbnail,a=e.btn;return o.a.createElement(c,{heading:t,thumbnail:r,btn:a,style:n})})))};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var t=e.text,n=e.toggle,a=l(Object(r.useState)(n||!1),2),i=a[0],c=a[1];return o.a.createElement("div",{onClick:function(){return c(!i)}},t,i?"Toggled":"Not toggled")};n(3);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g=function(e){var t=e.options,n=e.defaulSelected,a=e.className,i=e.onOptionSelect,c=a||"",u=m(Object(r.useState)({showDropdown:!1,currentSelection:n}),2),l=u[0],s=u[1],f=Object.keys(t).map((function(e,n){return o.a.createElement("li",{key:n,className:"bsf_dropdown-list-item",onClick:function(){return p(t[e].slug)}},o.a.createElement("img",{src:t[e].url,className:"bsf_list-item-logo"}),o.a.createElement("span",{className:"bsf_list-item-label"},t[e].title))})),p=function(e){s((function(t){return d(d({},l),{},{currentSelection:e,showDropdown:!l.showDropdown})})),"function"==typeof i&&i(e)};return o.a.createElement("div",{className:"bsf_toggle-dropdown-wrap ".concat(c)},o.a.createElement("div",{className:"bsf_selected-wrap",onClick:function(){s((function(e){return d(d({},l),{},{showDropdown:!l.showDropdown})}))}},o.a.createElement("span",{className:"bsf_selected-option-logo"},o.a.createElement("img",{src:t[l.currentSelection].url})),o.a.createElement("span",{className:"bsf_selected-option-title"},t[l.currentSelection].title)),l.showDropdown&&o.a.createElement("div",{className:"bsf_dropdown-options-wrap"},o.a.createElement("ul",{className:"bsf_dropdown-list-wrap"},f)))};n(5);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(e){var t=e.placeholder,n=e.onChangeEvent,a=y(Object(r.useState)({isInputEmpty:!0}),2),i=a[0],c=a[1];return o.a.createElement("div",{className:"bsf_search-box-wrap"},o.a.createElement("input",{type:"search",autoComplete:"off",name:"search",placeholder:t||"Search...",onChange:function(e){return function(e){var t=!e.target.value;c({isInputEmpty:t}),"function"==typeof n&&n(e.target.value)}(e)},className:"bsf_search-box-input"}),i.isInputEmpty&&o.a.createElement("svg",{focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"}),o.a.createElement("path",{d:"M0,0h24v24H0V0z",fill:"none"})))}}]);