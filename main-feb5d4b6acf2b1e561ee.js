(()=>{"use strict";var e={98:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(645),a=n.n(i)()((function(e){return e[1]}));a.push([e.id,"html{height:100%}html body{background-color:#000;font-family:Arial,sans-serif;height:100vh;width:100%;margin:0;padding:0;position:relative}html body .container{display:flex;width:100%;height:70%;position:relative;top:50%;left:50%;transform:translate(-50%, -50%);justify-content:center}html body .container .game-scoreboard{margin:calc(10px * 3) calc(10px * 3);display:flex;justify-content:space-around;flex-direction:column}html body .container .game-scoreboard .game-scoreboard__players{font-size:calc(12px * 2);color:#fff;border:3px solid #fff;padding:10px;display:flex;flex-direction:column;justify-content:space-around;text-align:center}html body .container .game-scoreboard .game-scoreboard__players .game-scoreboard__player{margin:10px 0}html body .container .game-field{border:3px solid #fff;position:relative}html body .container .game-field__canvas{width:100%;height:100%;cursor:none}html body .container .game-options{margin:calc(10px * 3) calc(10px * 3);display:flex;flex-direction:column;justify-content:space-between}html body .container .game-options .game-options__buttons{color:#fff;border:3px solid #fff;font-size:calc(12px * 1.5);padding:calc(10px * 1.5) 0;height:20px;width:calc(20px * 4);cursor:pointer;text-align:center}html body .container .game-options .game-options__buttons:hover{color:#000;background-color:#fff}html body .container .game-options .game-options__buttons--disabled{color:gray;pointer-events:none}html body .container .game-options .game-options__buttons--on{color:#000;background-color:#ff0}@media(max-width: 1024px)and (orientation: portrait){html{height:100%}html body{height:100%;width:100%;margin:0;padding:0;position:static}html body .container{display:block;width:100%;height:100%;top:0;left:0;transform:none}html body .container .game-field{border:none;display:block;position:absolute;width:100%;height:100%}html body .container .game-scoreboard{margin:0;display:flex;justify-content:space-between;position:fixed;top:50%;left:0;transform:translateY(-50%);opacity:.3}html body .container .game-scoreboard .game-scoreboard__players{align-items:center;margin:0;padding:calc(10px * 0.8)}html body .container .game-scoreboard .game-scoreboard__players .game-scoreboard__player{margin:0}html body .container .game-options{position:relative;margin:0;top:50%;height:100%;transform:translateY(-50%);justify-content:center;align-items:flex-end}html body .container .game-options .game-options__buttons{font-size:calc(12px * 1.25);padding:calc(10px * 1.1) 0;width:calc(20px * 3);margin:calc(10px * 2) 0;opacity:1}}@media(max-width: 1024px)and (orientation: landscape){html{height:100%}html body{height:100%;width:100%;margin:0;padding:0;position:static}html body .container{display:block;width:100%;height:100%;top:0;left:0;transform:none}html body .container .game-field{border:none;display:block;position:absolute;width:100%;height:100%}html body .container .game-scoreboard{margin:0;position:fixed;top:50%;left:0;transform:translateY(-50%);opacity:.3}html body .container .game-scoreboard .game-scoreboard__players{padding:calc(10px * 0.8);margin:0}html body .container .game-scoreboard .game-scoreboard__players .game-scoreboard__player{margin:0}html body .container .game-options{height:calc((10px * 1.1)*4) px;position:fixed;margin:0;top:50%;right:0;transform:translateY(-50%)}html body .container .game-options .game-options__buttons{font-size:calc(12px * 1.25);padding:calc(10px * 1.1) 0;width:calc(20px * 3);opacity:1}}",""]);const r=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},o=[],l=0;l<e.length;l++){var s=e[l],c=i.base?s[0]+i.base:s[0],h=r[c]||0,d="".concat(c," ").concat(h);r[c]=h+1;var u=n(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(t[u].references++,t[u].updater(f)):t.push({identifier:d,updater:a(f,i),references:1}),o.push(d)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=i(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var l=n(r[o]);t[l].references--}for(var s=i(e,a),c=0;c<r.length;c++){var h=n(r[c]);0===t[h].references&&(t[h].updater(),t.splice(h,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i=n.css,a=n.media,r=n.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),i=n(795),a=n.n(i),r=n(569),o=n.n(r),l=n(565),s=n.n(l),c=n(216),h=n.n(c),d=n(589),u=n.n(d),f=n(98),p={};p.styleTagTransform=u(),p.setAttributes=s(),p.insert=o().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=h(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;var b=[{key:1,value:1},{key:3,value:3},{key:5,value:5}],g=[{key:"easy",value:"easy"},{key:"medium",value:"medium"},{key:"hard",value:"hard"}],v=10,m=document.querySelector(".game-field__canvas");function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"resize",value:function(){this.gameFieldInnerWidth=document.querySelector(".game-field").clientWidth,this.gameFieldInnerHeight=document.querySelector(".game-field").clientHeight}}],null&&y(t.prototype,null),n&&y(t,n),e}();function M(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function S(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,C(e,t,"get"))}function P(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,C(e,t,"set"),n),n}function C(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}w(k,"gameFieldInnerHeight",void 0),w(k,"gameFieldInnerWidth",void 0);var x=new WeakMap,_=new WeakMap,W=new WeakMap,j=new WeakMap,E=new WeakMap,T=new WeakMap,O=new WeakMap,X=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x.set(this,{writable:!0,value:void 0}),_.set(this,{writable:!0,value:void 0}),W.set(this,{writable:!0,value:void 0}),j.set(this,{writable:!0,value:void 0}),E.set(this,{writable:!0,value:void 0}),T.set(this,{writable:!0,value:void 0}),O.set(this,{writable:!0,value:void 0}),P(this,x,t),"easy"===n?(P(this,j,4),P(this,E,-4),P(this,T,4.8),P(this,O,-4.8)):"medium"===n?(P(this,j,6),P(this,E,-6),P(this,T,6.9),P(this,O,-6.9)):(P(this,j,7),P(this,E,-7),P(this,T,8.3),P(this,O,-8.3))}var t,n;return t=e,(n=[{key:"ballXPosition",get:function(){return S(this,_)},set:function(e){P(this,_,e)}},{key:"ballYPosition",get:function(){return S(this,W)},set:function(e){P(this,W,e)}},{key:"ballMoveChangeX",get:function(){return S(this,j)},set:function(e){P(this,j,e)}},{key:"ballMoveChangeY",get:function(){return S(this,E)},set:function(e){P(this,E,e)}},{key:"debugBallMoveChangeX",get:function(){return S(this,T)},set:function(e){P(this,T,e)}},{key:"debugBallMoveChangeY",get:function(){return S(this,O)},set:function(e){P(this,O,e)}},{key:"drawBall",value:function(e,t){S(this,x).beginPath(),S(this,x).arc(S(this,_),S(this,W),v,0,2*Math.PI,!1),S(this,x).fillStyle=e&&t?"red":e?"transparent":"white",S(this,x).fill(),S(this,x).closePath()}},{key:"createBall",value:function(e,t){P(this,_,k.gameFieldInnerWidth/2),P(this,W,k.gameFieldInnerHeight/2),this.drawBall(e,t)}}])&&M(t.prototype,n),e}();function Y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function B(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,F(e,t,"get"))}function I(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,F(e,t,"set"),n),n}function F(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var A=new WeakMap,L=new WeakMap,q=new WeakMap,z=new WeakMap,H=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),A.set(this,{writable:!0,value:void 0}),L.set(this,{writable:!0,value:void 0}),q.set(this,{writable:!0,value:void 0}),z.set(this,{writable:!0,value:void 0}),I(this,A,n),I(this,z,"white"),I(this,q,!t)}var t,n;return t=e,(n=[{key:"paddleStartSize",get:function(){return B(this,L)},set:function(e){I(this,L,e)}},{key:"drawPaddle",value:function(){B(this,A).beginPath(),B(this,A).rect(B(this,L),B(this,q)?0:k.gameFieldInnerHeight-10,100,10),B(this,A).fillStyle=B(this,z),B(this,A).fill(),B(this,A).stroke(),B(this,A).closePath()}},{key:"createPaddle",value:function(){return I(this,L,Math.random()*(k.gameFieldInnerWidth-100-10)+10),this.drawPaddle(B(this,L)),B(this,L)}}])&&Y(t.prototype,n),e}(),D=function e(t){var n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=void 0,(n="paddle")in this?Object.defineProperty(this,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[n]=i,this.paddle=new H(!0,t),this.paddle.createPaddle()};function R(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Z=function(){function e(t){var n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=void 0,(n="paddle")in this?Object.defineProperty(this,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[n]=i,this.paddle=new H(!1,t),this.paddle.createPaddle()}var t,n;return t=e,(n=[{key:"ai",value:function(e){e-50>this.paddle.paddleStartSize+5?this.paddle.paddleStartSize+=1:e-50<this.paddle.paddleStartSize-5&&(this.paddle.paddleStartSize+=-1)}}])&&R(t.prototype,n),e}();function N(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function U(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,G(e,t,"get"))}function J(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function $(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,G(e,t,"set"),n),n}function G(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var K=new WeakMap,Q=new WeakMap,V=new WeakSet,ee=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),V.add(this),K.set(this,{writable:!0,value:void 0}),Q.set(this,{writable:!0,value:void 0}),$(this,K,0),$(this,Q,0),J(this,V,te).call(this,!0),J(this,V,te).call(this,!1)}var t,n;return t=e,(n=[{key:"scorePlayer1",get:function(){return U(this,K)}},{key:"scorePlayer2",get:function(){return U(this,Q)}},{key:"increaseScorePlayer1",value:function(){$(this,K,U(this,K)+1),J(this,V,te).call(this,!0)}},{key:"increaseScorePlayer2",value:function(){$(this,Q,U(this,Q)+1),J(this,V,te).call(this,!1)}}])&&N(t.prototype,n),e}();function te(e){var t=document.querySelector(".game-scoreboard__player1--score"),n=document.querySelector(".game-scoreboard__player2--score");e?t.textContent=U(this,K).toString():n.textContent=U(this,Q).toString()}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){oe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function re(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function le(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function se(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,he(e,t,"set"),n),n}function ce(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,he(e,t,"get"))}function he(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var de=new WeakMap,ue=new WeakMap,fe=new WeakMap,pe=new WeakMap,be=new WeakMap,ge=new WeakMap,ve=new WeakMap,me=new WeakMap,ye=new WeakMap,we=new WeakMap,ke=new WeakMap,Me=new WeakMap,Se=new WeakMap,Pe=new WeakMap,Ce=new WeakSet,xe=new WeakSet,_e=new WeakSet,We=new WeakSet,je=new WeakSet,Ee=new WeakSet,Te=new WeakMap,Oe=new WeakSet,Xe=new WeakSet,Ye=new WeakSet,Be=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Ye.add(this),Xe.add(this),Oe.add(this),Ee.add(this),je.add(this),We.add(this),_e.add(this),xe.add(this),Ce.add(this),de.set(this,{writable:!0,value:void 0}),ue.set(this,{writable:!0,value:void 0}),fe.set(this,{writable:!0,value:void 0}),pe.set(this,{writable:!0,value:void 0}),be.set(this,{writable:!0,value:void 0}),ge.set(this,{writable:!0,value:void 0}),ve.set(this,{writable:!0,value:void 0}),me.set(this,{writable:!0,value:void 0}),ye.set(this,{writable:!0,value:void 0}),we.set(this,{writable:!0,value:!1}),ke.set(this,{writable:!0,value:void 0}),Me.set(this,{writable:!0,value:void 0}),Se.set(this,{writable:!0,value:function(e,t){(e?document.querySelector(".game-options__buttons--points"):document.querySelector(".game-options__buttons--difficulty")).textContent=e?t.toString():t.charAt(0).toUpperCase()+t.slice(1)}}),oe(this,"addListenersOnButtons",(function(){var e;(e=document.querySelectorAll(".game-options__buttons"),function(e){if(Array.isArray(e))return ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ae(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return e.addEventListener("click",ce(t,Te))}))})),Pe.set(this,{writable:!0,value:function(e){var n;n=ce(t,e===g?de:ue);for(var i=0;i<e.length-1;i+=1){if(e[i].key===n)return e[i+1].value;if(i===e.length-2)return e[0].value}}}),Te.set(this,{writable:!0,value:function(e){switch(e.target.dataset.button){case"start":if(e.target.hasAttribute("dataset","data-started")){le(t,je,qe).call(t,!1),cancelAnimationFrame(ce(t,me)),ce(t,fe).clearRect(0,0,k.gameFieldInnerWidth,k.gameFieldInnerHeight),le(t,Ce,Ie).call(t,!1),clearTimeout(ce(t,Me)),m.removeEventListener("mousemove",le(t,We,Le).bind(t),!1),document.removeEventListener("touchmove",le(t,_e,Ae).bind(t),!1),window.innerWidth>=1024&&le(t,Ee,ze).call(t);break}se(t,fe,(k.resize(),m.width=k.gameFieldInnerWidth,m.height=k.gameFieldInnerHeight,m.getContext("2d"))),le(t,je,qe).call(t,!0),se(t,pe,new X(ce(t,fe),ce(t,de))),se(t,be,new X(ce(t,fe),ce(t,de))),se(t,ge,new D(ce(t,fe))),se(t,ve,new Z(ce(t,fe))),se(t,ye,new ee),ce(t,pe).createBall(!1,ce(t,we)),ce(t,be).createBall(!0,ce(t,we)),se(t,ke,!0),le(t,xe,Fe).call(t),m.addEventListener("mousemove",le(t,We,Le).bind(t),!1),document.addEventListener("touchmove",le(t,_e,Ae).bind(t),!1),se(t,Me,setTimeout(le(t,Ye,Re).bind(t),1e3)),le(t,Ce,Ie).call(t,!0),window.innerWidth>=1024&&le(t,Ee,ze).call(t);break;case"points":t.setPointsToWin(ce(t,Pe).call(t,b));break;case"difficulty":t.setDifficulty(ce(t,Pe).call(t,g));break;case"debug":se(t,we,!ce(t,we)),document.querySelector(".game-options__buttons--debug").classList.toggle("game-options__buttons--on");break;default:throw new Error("Sorry! There is no such a button!")}}}),this.setDifficulty("easy"),this.setPointsToWin(3)}var t,n;return t=e,(n=[{key:"getDifficulty",value:function(){return ce(this,de)}},{key:"setDifficulty",value:function(e){var t=g.reduce((function(e,t){return ie(ie({},e),{},oe({},t.key,t.value))}),{})[e];if(void 0===t)throw new Error("There is no such a value! Check variables.js file and constructor of the object!");se(this,de,t),ce(this,Se).call(this,!1,e)}},{key:"setPointsToWin",value:function(e){var t=b.reduce((function(e,t){return ie(ie({},e),{},oe({},t.key,t.value))}),{})[e];if(void 0===t)throw new Error("There is no such a value! Check variables.js file and constructor of the object!");se(this,ue,t),ce(this,Se).call(this,!0,e)}}])&&re(t.prototype,n),e}();function Ie(e){var t=document.querySelector(".game-options__buttons--start"),n=document.querySelector(".game-options__buttons--points"),i=document.querySelector(".game-options__buttons--difficulty");e?(t.textContent="Restart",t.setAttribute("dataset","data-started")):(t.textContent="Start",t.removeAttribute("dataset","data-started")),n.classList.toggle("game-options__buttons--disabled"),i.classList.toggle("game-options__buttons--disabled")}function Fe(){switch(Math.floor(4*Math.random()+1)){case 1:ce(this,be).debugBallMoveChangeX=-ce(this,be).debugBallMoveChangeX,ce(this,pe).ballMoveChangeX=-ce(this,pe).ballMoveChangeX;break;case 2:ce(this,be).debugBallMoveChangeY=-ce(this,be).debugBallMoveChangeY,ce(this,pe).ballMoveChangeY=-ce(this,pe).ballMoveChangeY;break;case 3:ce(this,be).debugBallMoveChangeX=-ce(this,be).debugBallMoveChangeX,ce(this,be).debugBallMoveChangeY=-ce(this,be).debugBallMoveChangeY,ce(this,pe).ballMoveChangeX=-ce(this,pe).ballMoveChangeX,ce(this,pe).ballMoveChangeY=-ce(this,pe).ballMoveChangeY}}function Ae(e){var t=e.changedTouches[0].screenX-m.offsetLeft;t>0&&t<m.width&&(ce(this,ge).paddle.paddleStartSize=t-50)}function Le(e){var t=e.offsetX-m.offsetLeft;t>0&&t<m.width&&(ce(this,ge).paddle.paddleStartSize=t-50)}function qe(e){if(!(window.innerWidth>1024)){var t=document.querySelector(".game-scoreboard"),n=document.querySelector(".game-options");e?(t.style.opacity=.2,n.style.opacity=.2):(t.style.opacity=0,n.style.opacity=1)}}function ze(){document.querySelector(".game-scoreboard").style.opacity=1,document.querySelector(".game-options").style.opacity=1}function He(e){return e?ce(this,ye).scorePlayer1>=ce(this,ue):ce(this,ye).scorePlayer2>=ce(this,ue)}function De(e){var t=!1;return ce(this,pe).ballXPosition>e.paddle.paddleStartSize&&ce(this,pe).ballXPosition<e.paddle.paddleStartSize+100?ce(this,pe).ballMoveChangeY=-ce(this,pe).ballMoveChangeY:(e===ce(this,ge)?ce(this,ye).increaseScorePlayer2():ce(this,ye).increaseScorePlayer1(),t=!0,le(this,Oe,He).call(this,e!==ce(this,ge))?(alert("Player ".concat(e===ce(this,ge)?"2":"1"," win!")),ce(this,fe).clearRect(0,0,k.gameFieldInnerWidth,k.gameFieldInnerHeight),le(this,je,qe).call(this,!1),le(this,Ce,Ie).call(this,!1),m.removeEventListener("mousemove",le(this,We,Le).bind(this),!1),document.removeEventListener("touchmove",le(this,_e,Ae).bind(this),!1)):(ce(this,fe).clearRect(0,0,k.gameFieldInnerWidth,k.gameFieldInnerHeight),se(this,pe,new X(ce(this,fe),ce(this,de))),se(this,be,new X(ce(this,fe),ce(this,de))),ce(this,pe).createBall(!1),ce(this,be).createBall(!0),se(this,ke,!0),le(this,xe,Fe).call(this),clearTimeout(ce(this,Me)),se(this,Me,setTimeout(le(this,Ye,Re).bind(this),1e3)))),t}function Re(){var e=!1;ce(this,fe).clearRect(0,0,k.gameFieldInnerWidth,k.gameFieldInnerHeight),ce(this,pe).drawBall(!1,ce(this,we)),ce(this,be).drawBall(!0,ce(this,we)),ce(this,ge).paddle.drawPaddle(),ce(this,ve).paddle.drawPaddle();for(var t=10;t>0;t-=1)ce(this,ve).ai(ce(this,be).ballXPosition);(ce(this,be).ballXPosition+ce(this,be).debugBallMoveChangeX>k.gameFieldInnerWidth-v||ce(this,be).ballXPosition+ce(this,be).debugBallMoveChangeX<v)&&(ce(this,be).debugBallMoveChangeX=-ce(this,be).debugBallMoveChangeX),(ce(this,be).ballYPosition+ce(this,be).debugBallMoveChangeY>m.height-v||ce(this,be).ballYPosition+ce(this,be).debugBallMoveChangeY<v)&&(se(this,ke,!1),ce(this,be).debugBallMoveChangeY=-ce(this,be).debugBallMoveChangeY),(ce(this,pe).ballXPosition+ce(this,pe).ballMoveChangeX>k.gameFieldInnerWidth-v||ce(this,pe).ballXPosition+ce(this,pe).ballMoveChangeX<v)&&(ce(this,pe).ballMoveChangeX=-ce(this,pe).ballMoveChangeX),ce(this,pe).ballYPosition+ce(this,pe).ballMoveChangeY<v?(se(this,ke,!0),e=le(this,Xe,De).call(this,ce(this,ve))):ce(this,pe).ballYPosition+ce(this,pe).ballMoveChangeY>k.gameFieldInnerHeight-v&&(se(this,ke,!0),e=le(this,Xe,De).call(this,ce(this,ge))),ce(this,pe).ballXPosition=ce(this,pe).ballXPosition+ce(this,pe).ballMoveChangeX,ce(this,pe).ballYPosition=ce(this,pe).ballYPosition+ce(this,pe).ballMoveChangeY,ce(this,ke)&&(ce(this,be).ballXPosition=ce(this,be).ballXPosition+ce(this,be).debugBallMoveChangeX,ce(this,be).ballYPosition=ce(this,be).ballYPosition+ce(this,be).debugBallMoveChangeY),e?cancelAnimationFrame(ce(this,me)):se(this,me,requestAnimationFrame(le(this,Ye,Re).bind(this)))}document.addEventListener("DOMContentLoaded",(function(){(new Be).addListenersOnButtons()}))})()})();