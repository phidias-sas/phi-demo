(function(e){function n(n){for(var c,r,a=n[0],d=n[1],f=n[2],i=0,h=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(e[c]=d[c]);l&&l(n);while(h.length)h.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var a=t[r];0!==o[a]&&(c=!1)}c&&(u.splice(n--,1),e=d(d.s=t[0]))}return e}var c={},r={popup:0},o={popup:0},u=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-02369729":"410ee679","chunk-04ff498c":"0b0ee874","chunk-0f90a0b9":"ba7ee3b6","chunk-3d632dd4":"5b56318f","chunk-634406c7":"f3030190","chunk-1289583f":"c09b582d","chunk-22d6a12a":"bd3d71dc","chunk-2d0b28ce":"68c77f1c","chunk-2d0e523c":"62a1ac27","chunk-2d0f0a01":"37596018","chunk-2d216368":"0839128d","chunk-2d237af5":"6fddb1e1","chunk-2d66ce56":"7202e707","chunk-4ba2afd8":"7218788c","chunk-552d72e2":"b8202e79","chunk-5901aad5":"2d708d06","chunk-5ed4b251":"de482227","chunk-7f9edd4b":"111c6006","chunk-957fad70":"c4515741","chunk-de3e9c28":"de32676f"}[e]+".js"}function d(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-02369729":1,"chunk-04ff498c":1,"chunk-0f90a0b9":1,"chunk-1289583f":1,"chunk-22d6a12a":1,"chunk-2d66ce56":1,"chunk-552d72e2":1,"chunk-5ed4b251":1,"chunk-957fad70":1,"chunk-de3e9c28":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-02369729":"bfd1eee3","chunk-04ff498c":"84033741","chunk-0f90a0b9":"188e04d6","chunk-3d632dd4":"31d6cfe0","chunk-634406c7":"31d6cfe0","chunk-1289583f":"a9c5d4ea","chunk-22d6a12a":"a7db46c9","chunk-2d0b28ce":"31d6cfe0","chunk-2d0e523c":"31d6cfe0","chunk-2d0f0a01":"31d6cfe0","chunk-2d216368":"31d6cfe0","chunk-2d237af5":"31d6cfe0","chunk-2d66ce56":"74133569","chunk-4ba2afd8":"31d6cfe0","chunk-552d72e2":"5e62c45a","chunk-5901aad5":"31d6cfe0","chunk-5ed4b251":"e8538f41","chunk-7f9edd4b":"31d6cfe0","chunk-957fad70":"ee068850","chunk-de3e9c28":"f38827ed"}[e]+".css",o=d.p+c,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var f=u[a],i=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(i===c||i===o))return n()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){f=h[a],i=f.getAttribute("data-href");if(i===c||i===o)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=o;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){r[e]=0})));var c=o[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=o[e]=[n,t]}));n.push(c[2]=u);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=a(e);var h=new Error;f=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}o[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:i})}),12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(n)},d.m=e,d.c=c,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)d.d(t,c,function(n){return e[n]}.bind(null,c));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/phi-demo/",d.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=n,f=f.slice();for(var h=0;h<f.length;h++)n(f[h]);var l=i;u.push([1,"chunk-vendors","chunk-common"]),t()})({1:function(e,n,t){e.exports=t("b4d3")},"12f0":function(e,n,t){},b4d3:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[e._m(0),e.remoteModel?t("PageSettings",{on:{input:e.onUpdate},model:{value:e.remoteModel,callback:function(n){e.remoteModel=n},expression:"remoteModel"}}):e._e()],1)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("h1",[t("strong",[e._v("Pop")]),e._v("UX")])}],u=t("fe4d"),a={components:{PageSettings:u["a"]},provide:function(){return{CmsPageRoot:{}}},data:function(){return{bc:null,remoteModel:null}},mounted:function(){var e=this;this.bc=new BroadcastChannel("ui_data_window"),this.bc.onmessage=function(n){"setModel"==n.data.action&&(e.remoteModel=n.data.value)},this.bc.postMessage({action:"mounted"})},methods:{onUpdate:function(){this.bc.postMessage({action:"setModel",value:this.remoteModel})}}},d=a,f=(t("dd0b"),t("2877")),i=Object(f["a"])(d,r,o,!1,null,null,null),h=i.exports;t("130e"),t("fa42");c["a"].config.productionTip=!1,new c["a"]({render:function(e){return e(h)}}).$mount("#app")},dd0b:function(e,n,t){"use strict";t("12f0")}});