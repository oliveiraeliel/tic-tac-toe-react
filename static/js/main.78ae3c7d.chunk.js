(this.webpackJsonpjogodavelha=this.webpackJsonpjogodavelha||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(7),u=n.n(r),i=(n(13),n(6),n(2)),a=n(0),j=Object(s.createContext)();function l(e){var t=e.children,n=Object(s.useState)(Array(9).fill(null)),c=Object(i.a)(n,2),r=c[0],u=c[1],l=Object(s.useState)(!0),o=Object(i.a)(l,2),b=o[0],O=o[1],x=Object(s.useState)(null),h=Object(i.a)(x,2),d=h[0],f=h[1],v=Object(s.useState)(!1),w=Object(i.a)(v,2),W=w[0],I=w[1],S=Object(s.useState)(null),p=Object(i.a)(S,2),C={squares:r,setSquares:u,isXNext:b,setIsXNext:O,whoIsWinner:d,setWhoIsWinner:f,draw:W,setDraw:I,line:p[0],setLine:p[1]};return Object(a.jsx)(j.Provider,{value:C,children:t})}function o(){var e=Object(s.useContext)(j).isXNext;return Object(a.jsxs)("h1",{children:["Player: ",e?"X":"O"]})}function b(){var e=Object(s.useContext)(j),t=e.setSquares,n=e.setIsXNext,c=e.setWhoIsWinner,r=e.setDraw,u=e.setLine;return Object(a.jsx)("p",{className:"reset",children:Object(a.jsx)("button",{type:"button",onClick:function(){t(Array(9).fill(null)),n(!0),c(null),r(!1),u(null)},children:"Reset"})})}var O=n(8);function x(e){var t=e.value,n=e.index,c=Object(s.useContext)(j),r=c.squares,u=c.setSquares,i=c.isXNext,l=c.setIsXNext,o=c.whoIsWinner,b=c.line;return Object(a.jsx)("button",{type:"button",onClick:function(){if(!o&&!r[n]){var e=Object(O.a)(r);e[n]=i?"X":"O",u(e),l(!i)}},style:b&&b.includes(n)?{color:"white"}:{},children:t})}function h(){var e=Object(s.useContext)(j).whoIsWinner;return Object(a.jsx)("h1",{children:e?"The Winner is: ".concat(e):""})}function d(){var e=Object(s.useContext)(j),t=e.squares,n=e.draw,c=e.setDraw,r=e.whoIsWinner;return Object(s.useEffect)((function(){!1===t.includes(null)&&null===r&&c(!0)}),[t,r]),Object(a.jsx)("h1",{children:n?"DRAW!":""})}function f(){var e=Object(s.useContext)(j),t=e.squares,n=e.setWhoIsWinner,c=e.setLine,r=e.whoIsWinner,u=Object(s.useState)(!1),l=Object(i.a)(u,2),O=l[0],f=l[1];return Object(s.useEffect)((function(){f(!t.includes(null));var e=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n+=1){var s=Object(i.a)(t[n],3),c=s[0],r=s[1],u=s[2];if(e[c]&&e[c]===e[r]&&e[c]===e[u])return[e[c],t[n]]}return null}(t);e&&(n(e[0]),c(e[1]))}),[t]),Object(a.jsxs)("div",{className:"board-container",children:[Object(a.jsx)(o,{}),Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(a.jsx)(x,{value:e,index:t})}))}),r?Object(a.jsx)(h,{}):"",O?Object(a.jsx)(d,{}):""]})}function v(){return Object(a.jsx)(l,{children:Object(a.jsx)(f,{})})}u.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))},6:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.78ae3c7d.chunk.js.map