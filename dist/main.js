!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.getElementById("content");let t=document.createElement("nav"),n=document.createElement("img");n.classList="navBar logo",n.setAttribute("src","img/logo3.png");let r=document.createElement("div");r.id="link-container";let o=document.createElement("ul"),a=document.createElement("li"),l=document.createElement("li"),c=document.createElement("li"),i=document.createElement("li"),d=document.createElement("a");d.classList="navBar aboutLink",d.innerText="About";let u=document.createElement("a");u.classList="navBar menuLink",u.innerText="Menu";let m=document.createElement("a");m.classList="navBar contactLink",m.innerText="Contact",t.appendChild(r),r.appendChild(o),o.appendChild(i),o.appendChild(a),o.appendChild(l),o.appendChild(c),i.appendChild(n),a.appendChild(u),l.appendChild(d),c.appendChild(m),e.appendChild(t)};var o=()=>{const e=document.getElementById("content"),t=document.createElement("div");t.id="title-container";const n=document.createElement("h1");n.className="name",n.innerText="Ipsum";const r=document.createElement("h1");r.className="name",r.innerText="Coffee House";const o=document.createElement("h2");o.id="tag",o.innerText="[Something something, something here something.]",e.appendChild(t),t.appendChild(n),t.appendChild(r),t.appendChild(o)};document.getElementById("content");r(),o()}]);