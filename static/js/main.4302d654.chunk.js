(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),l=n(1);function i(){var e=Math.random()+"";return a.a.createElement("div",{className:"wrapper",tabIndex:0,onWheel:function(t){return p(!0,e,t)}},a.a.createElement("div",{className:"inner",onWheel:function(t){return p(!1,e,t)}},Object(l.range)(30).map(function(e){return a.a.createElement("button",{key:e},"Button #".concat(e))})))}var u={};function p(e,t,n){var r=e?n.currentTarget:n.currentTarget.parentElement,a=n.nativeEvent;if(function e(t,n){if(!n)return!1;if(t==n)return!0;return e(t,n.parentElement)}(r,document.activeElement)){var o=a.deltaY<0&&r.scrollTop<=0,c=a.deltaY>0&&r.scrollTop>=r.scrollHeight-r.clientHeight;(o||c)&&n.preventDefault(),n.stopPropagation()}else t in u||(r.style.paddingRight="".concat(r.offsetWidth-r.clientWidth-2,"px"),r.style.overflow="hidden",n.preventDefault()),clearTimeout(u[t]),u[t]=setTimeout(function(){delete u[t],r.style.paddingRight="0px",r.style.overflow="auto"},1e3)}var d=function(){return a.a.createElement(a.a.Fragment,null,Object(l.range)(50).map(function(e){return a.a.createElement(i,{key:e})}))};n(11);c.a.render(a.a.createElement(d,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(12)}},[[4,1,2]]]);
//# sourceMappingURL=main.4302d654.chunk.js.map