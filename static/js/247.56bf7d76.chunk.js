"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(D,r,e){e.r(r);var l=e(5861),n=e(8152),t=e(7757),a=e.n(t),w=e(4308),g=e(6871),c=e(2791),u=e(1678),s=e(184);r.default=function(){var D=(0,c.useState)(null),r=(0,n.Z)(D,2),e=r[0],t=r[1],o=(0,g.UO)().movie_id;return(0,c.useEffect)((function(){function D(){return(D=(0,l.Z)(a().mark((function D(){var r;return a().wrap((function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,w.rc(o);case 2:r=D.sent,t(r);case 4:case"end":return D.stop()}}),D)})))).apply(this,arguments)}!function(){D.apply(this,arguments)}()}),[o]),(0,s.jsx)("div",{children:e&&(0,s.jsx)("ul",{children:e.cast.map((function(D){return(0,s.jsxs)("li",{children:[null===D.profile_path?(0,s.jsx)("img",{src:u,alt:"",width:"200"}):(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(D.profile_path),alt:"",width:"200"}),(0,s.jsx)("p",{children:D.name}),(0,s.jsxs)("p",{children:["Character : ",D.character]})]},D.id)}))})})}},4308:function(D,r,e){e.d(r,{$4:function(){return c},Ce:function(){return s},aK:function(){return o},b7:function(){return g},rc:function(){return u}});var l=e(5861),n=e(7757),t=e.n(n),a=e(4569),w=e.n(a);w().defaults.baseURL="https://api.themoviedb.org/3";var g=function(){var D=(0,l.Z)(t().mark((function D(){var r;return t().wrap((function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,w().get("/trending/movie/day?api_key=515070e14c853494df330daa7406d141");case 3:return r=D.sent,D.abrupt("return",r.data);case 7:D.prev=7,D.t0=D.catch(0),console.error(D.t0);case 10:case"end":return D.stop()}}),D,null,[[0,7]])})));return function(){return D.apply(this,arguments)}}(),c=function(){var D=(0,l.Z)(t().mark((function D(r){var e;return t().wrap((function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,w().get("/movie/".concat(r,"?api_key=515070e14c853494df330daa7406d141&language=en-US"),r);case 3:return e=D.sent,D.abrupt("return",e.data);case 7:D.prev=7,D.t0=D.catch(0),console.error(D.t0);case 10:case"end":return D.stop()}}),D,null,[[0,7]])})));return function(r){return D.apply(this,arguments)}}(),u=function(){var D=(0,l.Z)(t().mark((function D(r){var e;return t().wrap((function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,w().get("/movie/".concat(r,"/credits?api_key=515070e14c853494df330daa7406d141&language=en-US"),r);case 3:return e=D.sent,D.abrupt("return",e.data);case 7:D.prev=7,D.t0=D.catch(0),console.error(D.t0);case 10:case"end":return D.stop()}}),D,null,[[0,7]])})));return function(r){return D.apply(this,arguments)}}(),s=function(){var D=(0,l.Z)(t().mark((function D(r){var e;return t().wrap((function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,w().get("/movie/".concat(r,"/reviews?api_key=515070e14c853494df330daa7406d141&language=en-US"),r);case 3:return e=D.sent,D.abrupt("return",e.data);case 7:D.prev=7,D.t0=D.catch(0),console.error(D.t0);case 10:case"end":return D.stop()}}),D,null,[[0,7]])})));return function(r){return D.apply(this,arguments)}}(),o=function(){var D=(0,l.Z)(t().mark((function D(r){var e;return t().wrap((function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,w().get("/search/movie?api_key=515070e14c853494df330daa7406d141&language=en-US&query=".concat(r,"&page=1&include_adult=false"),r);case 3:return e=D.sent,D.abrupt("return",e.data);case 7:D.prev=7,D.t0=D.catch(0),console.error(D.t0);case 10:case"end":return D.stop()}}),D,null,[[0,7]])})));return function(r){return D.apply(this,arguments)}}()},1678:function(D){D.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAEUCAMAAABUNq4iAAAC1lBMVEXm5uYAAAD/tgD/lgD/lwD/lgD/lwD/lwD/lgD/lgD/lgD/lwD/mAD/mwD/vwD/lgD/lwD/lgD/mQD/lwD/lwD/mgD/lwD/lwD/qgD/lwD//wD/lgD/nQD/lgD/lgD/lwD/lwD/lwD/lwD/lgD/lgD/lwD/lgD/lwD/lwD/lgD/lwD/qgD/lgD/lwD/mQD/qgD/lgD/nQD/mAD/lwD/mgD/lwD/ogD/oQD/lwD/lwD/mQD/lwD/lgD/mQD/mAD/lwD/lgD/mAD/lgD/mAD/lgD/lwD/lwD/lwD/lwD/pAD/lgD/lwD/lgD/lgD/lwD/lwD/mAD/lwD/lgD/mQD/lwD/lwD/mQD/mQD/nwD/lgD/lwD/lgD/mgD/lgD/lwD/lwD/lgD/nwD/ngD/lgD/lwD/lgD/lwD/lgD//wD/lgD/lgD/mAD/mQD/qgD/lgD/mwD/mAD/mgD/mQD/lwD/lgD/lwD/mQD/lwD/lwD/mAD/lgD/nAD/lwD/mwD/lwD/mAD/lgD/lgD/lgD/lwD/lwD/mQD/lgD/lwD/lwD/lwD/lwD/lgD/mQD/mAD/lwD/nAD/lgD/lwD/mAD/mwD/lwD/lwD/mAD/lgD/lwD/lgD/lgD/lwD/lwD/mgD/ngD/mAD/mQD/mAD/mQD/lwD/mAD/lgD/lwD/mAD/lwD/lwD/lwD/lgD/lwD/lwD/lwD/lwD/mgD/lgD/lgD/lwD/mAD/lwD/lwD/lgD/lwD/lgD/lwD/mAD/lwD/lgD/lwD/lwD/mAD/mAD/lwD/lwD/lgD/lwD/mAD/lgD/lgD/lgD/lgD/lgD/mAD/nwD/lwD/lwD/lwD/lwD/lwD/lgD/lwD/lwD/lwD/mwD/lwD/lwD/lgD/mAD/lwD/lgD/lgD/lgD/lwD/lgD/mAD/lwD/lwD/lwD/mAD/nAD/lwD/mAD/lgD/lwD/mQD/mAD/lwD/lgD/lgD/lwB92HTLAAAA8nRSTlP/AAdJmMzm/P/23cF+LgRmwjgezpM16bwMsAF8GpfuQnaQ8qqSldH+pvt4CTPJQQa7DXmpMJELE9BHMrXIBWG68y/UTREbYOGsDrKATvH5iUhA7yjY4y0jEFWF6j/ibn+hCB09W/1dcAKGz1dGA4spKitQnbRYN8vV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"}}]);
//# sourceMappingURL=247.56bf7d76.chunk.js.map