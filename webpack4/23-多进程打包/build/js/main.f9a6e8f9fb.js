!function(){"use strict";var e,n,t={2113:function(e,n,t){t(5769),t(3238),t(1418),t(7460),t(4078),console.log("index.js 被加载了~"),document.querySelector("#btn").onclick=function(){t.e(43).then(t.bind(t,3701)).then((function(e){console.log(e(2,8))}))},"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=function(n,t,r,i){if(!t){var c=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,a=0;a<t.length;a++)(!1&i||c>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(u=!1,i<c&&(c=i));if(u){e.splice(l--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[t,r,i]},o.F={},o.E=function(e){Object.keys(o.F).map((function(n){o.F[n](e)}))},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))},o.u=function(e){return"js/test.a885645c5c.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n={},o.l=function(e,t,r,i){if(n[e])n[e].push(t);else{var c,u;if(void 0!==r)for(var a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var l=a[f];if(l.getAttribute("src")==e){c=l;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=e),n[e]=[t];var s=function(t,r){c.onerror=c.onload=null,clearTimeout(d);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),u&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"}(),function(){var e={179:0};o.f.j=function(n,t){var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=i);var c=o.p+o.u(n),u=new Error;o.l(c,(function(t){if(o.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+c+")",u.name="ChunkLoadError",u.type=i,u.request=c,r[1](u)}}),"chunk-"+n,n)}},o.F.j=function(n){if(!o.o(e,n)||void 0===e[n]){e[n]=null;var t=document.createElement("link");o.nc&&t.setAttribute("nonce",o.nc),t.rel="prefetch",t.as="script",t.href=o.p+o.u(n),document.head.appendChild(t)}},o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,c=t[0],u=t[1],a=t[2],f=0;if(c.some((function(n){return 0!==e[n]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(a)var l=a(o)}for(n&&n(t);f<c.length;f++)i=c[f],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),o.O(0,[179],(function(){o.E(43)}),5);var i=o.O(void 0,[739],(function(){return o(2113)}));i=o.O(i)}();