!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),n.d(t,"DOM",(function(){return r}));const r=(()=>{const e=e=>{let n=document.getElementById(e.target.attributes["data-target"].nodeValue);for(let e of t){let t=document.getElementById(e.attributes["data-target"].nodeValue);e.classList.remove("active"),t.classList.remove("show")}e.target.classList.add("active"),n.classList.add("show")};let t=document.getElementsByClassName("tab-link"),n=document.getElementById("menu-button"),r=document.getElementById("project-sidebar");for(let n of t)n.addEventListener("click",e);n.addEventListener("click",()=>{let e="visible"===r.style.visibility?"collapse":"visible";r.style.visibility=e})})()},function(e,t,n){"use strict";n.r(t);const r=e=>{const t=e=>{let t=e.target.parentElement.previousSibling,r=document.createElement("div");r.style="z-index: 10;position: absolute;display: flex;";let a=document.createElement("input");a.type="text",a.value=t.innerText;let l=document.createElement("i");l.className="far fa-check-circle",r.append(a,l),t.append(r),l.addEventListener("click",n)},n=e=>{let t=e.target.parentElement.parentElement,n=e.target.parentElement.firstChild;""!=n.value?(t.innerText=n.value,parent.dispatchEvent(new Event("update"))):n.parentNode.remove()},r=()=>{console.log(taskWrapper,"delete")},a=e=>{i=e.target.checked,i?o.classList.add("complete"):o.classList.remove("complete")},l=()=>{let n=document.createElement("li"),l=(()=>{let e=document.createElement("input");return e.addEventListener("click",a),e.type="checkbox",e})(),i=(()=>{let e=document.createElement("div");e.className="controls";let n=document.createElement("i");n.className="far fa-edit edit",n.addEventListener("click",t);let a=document.createElement("i");return a.className="far fa-trash-alt delete",a.addEventListener("click",r),e.append(n,a),e})(),o=(()=>{let t=document.createElement("span");return t.className="task",t.innerText=e,t})();return n.append(l,o,i),n};let i=!1,o=l();return{getListItem:l,task:e}},a=(e,t,n=[])=>({name:e,description:t,todos:n});n(0);(e=>{const t=()=>({default:a("Build TODO Application","Build the best damn todo list this side of the mississippi.",[r("Make todo's collapseable"),r("Give projects a priority attribute and color option"),r("Allow todos to be created, edited, deleted and marked complete"),r("add a progress bar as items are checked off")])}),n=t=>{e.innerText="";for(let n in t){let r=t[n],a=document.createElement("div");a.id=n+"-project",a.className="project";let o=i(r),c=l(r.todos);a.append(o,c),a.addEventListener("update",s),e.appendChild(a)}},l=e=>{let t=document.createElement("ul");return t.className="todos",e.forEach(e=>{t.append(e.getListItem())}),t},i=e=>{let t=document.createElement("div");t.className="title";let n=document.createElement("h3");n.innerText=e.name;let r=document.createElement("p");return r.innerText=e.description,t.append(n,r),t.addEventListener("click",o),t},o=e=>{let t=e.target.classList.contains("title")?e.target:e.target.parentNode,n=t.nextElementSibling;n.classList.contains("show")?(t.classList.remove("show"),n.classList.remove("show")):(t.classList.add("show"),n.classList.add("show"))},s=e=>{let t=0,a=e.target.id.replace("-project",""),l=d[a],i=e.target.children[0].children[0].innerText,o=e.target.children[0].children[1].innerText,s=e.target.children[1];l.name=i,l.description=o;for(let e of s.children)l.todos[t]=r(e.innerText),t++;d[a]=l,c(),n(d)},c=()=>{localStorage.setItem("myProjects",JSON.stringify(d))};let d=null===localStorage.getItem("myProjects")?t():JSON.parse(localStorage.getItem("myProjects"));n(d)})(document.getElementById("projects-inner"))}]);