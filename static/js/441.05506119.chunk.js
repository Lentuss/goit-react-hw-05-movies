"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[441],{8500:function(n,e,t){t.d(e,{Z:function(){return f}});t(2791);var r,a,o=t(168),c=t(6444),i=t(501),u=c.ZP.ul(r||(r=(0,o.Z)(["\n  list-style: square;\n"]))),s=(0,c.ZP)(i.rU)(a||(a=(0,o.Z)(["\n  color: #4b4453;\n"]))),p=t(6871),l=t(184),f=function(n){var e=n.movies,t=n.prevPath,r=(0,p.TH)();return(0,l.jsx)(u,{children:e.map((function(n){return(0,l.jsx)("li",{children:(0,l.jsx)(s,{to:t+n.id,state:{from:r},children:(0,l.jsx)("h3",{children:n.title})})},n.id)}))})}},441:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,o,c,i,u,s,p,l=t(2982),f=t(5861),d=t(885),h=t(7757),v=t.n(h),x=t(2791),g=t(501),m=t(5562),b=t(168),y=t(6444),Z=y.ZP.header(r||(r=(0,b.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding: 12px 24px;\n  color: #fff;\n  background-color: #b39cd0;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),w=y.ZP.form(a||(a=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),k=y.ZP.button(o||(o=(0,b.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://cdn-icons-png.flaticon.com/512/751/751381.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),j=y.ZP.span(c||(c=(0,b.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),S=y.ZP.input(i||(i=(0,b.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),P=t(184),_=function(n){var e,t=n.onSubmit,r=(0,g.lr)(),a=(0,d.Z)(r,2),o=a[0],c=a[1],i=null!==(e=o.get("query"))&&void 0!==e?e:"";return(0,P.jsx)(Z,{children:(0,P.jsxs)(w,{onSubmit:function(n){n.preventDefault(),""!==i.trim()?t(i):m.Notify.info("Enter the query")},children:[(0,P.jsx)(k,{type:"submit",children:(0,P.jsx)(j,{children:"Search"})}),"movie search",(0,P.jsx)(S,{type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies",name:"query",value:i,onChange:function(n){n.currentTarget.value.toLowerCase()!==o&&c({query:n.currentTarget.value.toLowerCase()})}})]})})},q=t(8500),z=t(4635),C=y.ZP.div(u||(u=(0,b.Z)(["\n  padding: 10px;\n  min-height: 100vh;\n"]))),T=(y.ZP.ul(s||(s=(0,b.Z)(["\n  list-style: square;\n"]))),(0,y.ZP)(g.rU)(p||(p=(0,b.Z)(["\n  color: #4b4453;\n"]))),function(){var n=(0,g.lr)(),e=(0,d.Z)(n,1)[0],t=(0,x.useState)(e.get("query")||""),r=(0,d.Z)(t,2),a=r[0],o=r[1],c=(0,x.useState)([]),i=(0,d.Z)(c,2),u=i[0],s=i[1];(0,x.useEffect)((function(){var n=function(){var n=(0,f.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,z.ng)(a);case 3:e=n.sent,s((0,l.Z)(e.results)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),m.Notify.error("Something went wrong");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();""!==a&&n()}),[a]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(_,{onSubmit:function(n){o(n)}}),(0,P.jsx)(C,{children:0!==u.length?(0,P.jsx)(q.Z,{movies:u,prevPath:""}):""!==a&&(0,P.jsx)("p",{children:"Nothing found. Try again"})})]})})},4635:function(n,e,t){t.d(e,{Aj:function(){return p},Jh:function(){return h},_r:function(){return d},ng:function(){return l},s_:function(){return f}});var r=t(5861),a=t(7757),o=t.n(a),c=t(4569),i=t.n(c),u="d181f6aed649ea703d889941a0afb502";i().defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get(e);case 2:return t=n.sent,n.next=5,t.data;case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="trending/movie/day?api_key=".concat(u,"&page=1"),n.next=4,s(e);case 4:return n.abrupt("return",n.sent);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r="search/movie?api_key=".concat(u,"&query=").concat(e,"&page=1"),n.next=4,s(r);case 4:return n.abrupt("return",n.sent);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="/movie/".concat(e,"?api_key=").concat(u,"&page=1&language=us-en"),n.next=4,s(t);case 4:return n.abrupt("return",n.sent);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="/movie/".concat(e,"/reviews?api_key=").concat(u,"&page=1&language=en-US"),n.next=4,s(t);case 4:return n.abrupt("return",n.sent);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="/movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"),n.next=4,s(t);case 4:return n.abrupt("return",n.sent);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},2982:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(907);var a=t(181);function o(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,a.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=441.05506119.chunk.js.map