!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2)},function(e,t,n){"use strict";n.r(t),n.d(t,"DOM",(function(){return r}));const r=(()=>{const e=e=>{let n=document.getElementById(e.target.attributes["data-target"].nodeValue);for(let e of t){let t=document.getElementById(e.attributes["data-target"].nodeValue);e.classList.remove("active"),t.classList.remove("show")}e.target.classList.add("active"),n.classList.add("show")};let t=document.getElementsByClassName("tab-link"),n=document.getElementById("menu-button"),r=document.getElementById("project-sidebar");for(let n of t)n.addEventListener("click",e);n.addEventListener("click",()=>{let e="visible"===r.style.visibility?"collapse":"visible";r.style.visibility=e})})()},function(e,t,n){"use strict";n.r(t),n.d(t,"lists",(function(){return r}));const r=(document.getElementById("lists"),document.getElementById("projects-inner"),void window.localStorage.getItem("saved-projects"))}]);