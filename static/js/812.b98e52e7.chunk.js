"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[812,115,21,680,448,290,20,667,25,871,455],{4321:function(n,t,e){e.d(t,{a:function(){return i}});var r=e(184),i=function(){return(0,r.jsx)("div",{children:"Loading..."})}},5115:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return d}});var r=e(5861),i=e(885),o=e(7757),a=e.n(o),c=e(6871),u=e(2791),s=e(1207),p=e(4021),f=e(4321),x=e(2757),l=e(184),d=function(){var n=(0,c.UO)().movieId,t=(0,u.useState)([]),e=(0,i.Z)(t,2),o=e[0],d=e[1],h=(0,u.useState)(!1),g=(0,i.Z)(h,2),v=g[0],m=g[1];return(0,u.useEffect)((function(){function t(){return(t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.IQ)(n);case 3:e=t.sent,d(e),m(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("Error!");case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),console.log(o),(0,l.jsxs)(p.List,{children:[v&&(0,l.jsx)(f.a,{}),o.map((function(n){return(0,l.jsxs)(p.Item,{children:[(0,l.jsx)(p.Image,{src:n.profile_path?"https://image.tmdb.org/t/p/w500/"+n.profile_path:x,alt:n.name,onerror:"this.src='images/default.png"}),(0,l.jsx)(p.Name,{children:n.name}),(0,l.jsxs)(p.Text,{children:[(0,l.jsx)(p.Header,{children:"Character: "}),n.character]})]},n.id)}))]})}},4021:function(n,t,e){e.r(t),e.d(t,{Header:function(){return h},Image:function(){return l},Item:function(){return x},List:function(){return f},Name:function(){return d},Text:function(){return g}});var r,i,o,a,c,u,s=e(168),p=e(6031),f=p.ZP.ul(r||(r=(0,s.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    list-style: none;\n"]))),x=p.ZP.li(i||(i=(0,s.Z)(["\n    width: 150px;\n    margin-right: 20px;\n    margin-top: 20px;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n"]))),l=p.ZP.img(o||(o=(0,s.Z)(["\n    width: 150px;\n    height: auto;\n"]))),d=p.ZP.h2(a||(a=(0,s.Z)(["\n    font-size: 24px;\n    font-weight: 700;\n    color: #490936;\n"]))),h=p.ZP.span(c||(c=(0,s.Z)(["\n    font-size: 14px;\n    font-weight: 600;\n    color: #010501;\n"]))),g=p.ZP.span(u||(u=(0,s.Z)(["\n    font-size: 14px;\n    font-weight: 400;\n    color: #010501;\n"])))},680:function(n,t,e){e.r(t),e.d(t,{HomePage:function(){return x}});var r=e(5861),i=e(885),o=e(7757),a=e.n(o),c=e(2791),u=e(1207),s=e(4321),p=e(3448),f=e(184),x=function(){var n=function(){var n=(0,c.useState)([]),t=(0,i.Z)(n,2),e=t[0],o=t[1],s=(0,c.useState)(!1),p=(0,i.Z)(s,2),f=p[0],x=p[1];return(0,c.useEffect)((function(){function n(){return(n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.prev=1,n.next=4,(0,u.Df)();case 4:t=n.sent,o(t),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:return n.prev=10,x(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,8,10,13]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),{items:e,loading:f}}(),t=n.items,e=n.loading;return(0,f.jsxs)("main",{children:[(0,f.jsx)(p.Header,{children:"Trending today"}),e&&(0,f.jsx)(s.a,{}),(0,f.jsx)(p.List,{children:t.map((function(n){return(0,f.jsx)(p.Item,{children:(0,f.jsx)(p.Link,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})]})}},3448:function(n,t,e){e.r(t),e.d(t,{Header:function(){return p},Item:function(){return x},Link:function(){return l},List:function(){return f}});var r,i,o,a,c=e(168),u=e(6031),s=e(501),p=u.ZP.h1(r||(r=(0,c.Z)(["\n    font-size: 34px;\n    text-transform: uppercase;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    line-height: 1.71;\n    letter-spacing: 0.03em;\n    font-weight: 900;\n    color: #490936;\n"]))),f=u.ZP.ul(i||(i=(0,c.Z)(["\n    padding: 0;\n    list-style: none;\n"]))),x=u.ZP.li(o||(o=(0,c.Z)(["\n    line-height: 1.6;\n"]))),l=(0,u.ZP)(s.OL)(a||(a=(0,c.Z)(["\n    color: #010501;\n    font-weight: 700;\n    text-decoration: none;\n\n    &:hover {\n        color: #9a5a87;\n        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    }\n"])))},9290:function(n,t,e){e.r(t),e.d(t,{MovieDetailsPage:function(){return x}});var r=e(5861),i=e(885),o=e(7757),a=e.n(o),c=e(2791),u=e(6871),s=e(1207),p=e(5020),f=e(184),x=function(){var n,t,e=(0,u.UO)().movieId,o=(0,c.useState)(null),x=(0,i.Z)(o,2),l=x[0],d=x[1],h=(0,u.TH)();return(0,c.useEffect)((function(){function n(){return(n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.HI)(e);case 3:t=n.sent,d(t),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,f.jsxs)("main",{children:[(0,f.jsx)(p.Link,{to:null!==(n=null===h||void 0===h||null===(t=h.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:"Go back"}),l&&(0,f.jsxs)(p.Article,{children:[(0,f.jsx)(p.Image,{src:"https://image.tmdb.org/t/p/w500/"+l.poster_path,alt:l.title}),(0,f.jsxs)(p.Description,{children:[(0,f.jsxs)(p.ItemTitle,{children:[l.title," (",l.release_date.substr(0,4),")"]}),(0,f.jsxs)(p.Text,{children:["User Score: ",10*l.vote_average,"%"]}),(0,f.jsx)(p.Header,{children:"Overview"}),(0,f.jsx)(p.Text,{children:l.overview}),(0,f.jsx)(p.Header,{children:"Genres"}),l.genres.map((function(n){return(0,f.jsxs)(p.TextGenres,{children:[n.name,(0,f.jsx)("br",{})]},n.id)}))]})]}),(0,f.jsxs)(p.Navigation,{children:[(0,f.jsx)(p.Additional,{children:"Additional information"}),(0,f.jsx)(p.Link,{to:"cast",children:"Cast"}),(0,f.jsx)(p.Link,{to:"reviews",children:"Reviews"})]}),(0,f.jsx)(u.j3,{})]})}},5020:function(n,t,e){e.r(t),e.d(t,{Additional:function(){return I},Article:function(){return m},Button:function(){return v},Description:function(){return w},Header:function(){return j},Image:function(){return Z},ItemTitle:function(){return b},Link:function(){return L},Navigation:function(){return y},Text:function(){return P},TextGenres:function(){return k}});var r,i,o,a,c,u,s,p,f,x,l,d=e(168),h=e(501),g=e(6031),v=g.ZP.button(r||(r=(0,d.Z)(["\n  margin-top: 50px;\n  padding: 0;\n  width: 70px;\n  height: 25px;\n  border: 1px solid #490936;\n  border-radius: 4px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: uppercase;\n  align-items: center;\n  text-align: center;\n  color: #490936;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);\n  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);\n\n  &:hover {\n    color: #f0e4ec;\n    background-color: #490936;\n  }\n"]))),m=g.ZP.article(i||(i=(0,d.Z)(["\n    display: flex;\n"]))),Z=g.ZP.img(o||(o=(0,d.Z)(["\n    margin-top: 20px;\n    max-width: 300px;\n    height: fit-content;\n"]))),w=g.ZP.div(a||(a=(0,d.Z)(["\n    margin-left: 20px;\n"]))),b=g.ZP.h2(c||(c=(0,d.Z)(["\n  font-size: 26px;\n  font-weight: 700;\n  color: #490936;\n"]))),j=g.ZP.h3(u||(u=(0,d.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: #490936;\n"]))),P=g.ZP.span(s||(s=(0,d.Z)(["\n  font-size: 14px;\n  font-weight: 400;\n  color: #010501;\n"]))),k=g.ZP.span(p||(p=(0,d.Z)(["\n  margin: 0;\n  margin-top: 5px;\n  font-size: 14px;\n  font-weight: 400;\n  color: #010501;\n"]))),y=g.ZP.span(f||(f=(0,d.Z)(["\n  margin-top: 25px;\n  display: block;\n"]))),I=g.ZP.h3(x||(x=(0,d.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  color: #490936;\n"]))),L=(0,g.ZP)(h.OL)(l||(l=(0,d.Z)(["\n  margin-right: 20px;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 700; \n  color: #010501;;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n  &:hover,\n  &.active {\n    color: #7b205f;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);\n  }\n"])))},2667:function(n,t,e){e.r(t),e.d(t,{MoviesPage:function(){return d}});var r=e(5861),i=e(885),o=e(7757),a=e.n(o),c=e(1207),u=e(2791),s=e(501),p=e(6871),f=e(5025),x=e(8479),l=e(184),d=function(){var n=(0,u.useState)(""),t=(0,i.Z)(n,2),e=t[0],o=t[1],d=(0,u.useState)(null),h=(0,i.Z)(d,2),g=h[0],v=h[1],m=(0,s.lr)(),Z=(0,i.Z)(m,2),w=Z[0],b=Z[1],j=w.get("query"),P=(0,p.TH)();(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,c.gH)(j);case 3:t=n.sent,v(t),n.next=10;break;case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",(0,x.ZP)({error:n.t0}));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}j&&function(){n.apply(this,arguments)}()}),[j]);return(0,l.jsxs)("main",{children:[(0,l.jsxs)(f.Form,{onSubmit:function(n){if(n.preventDefault(),""===e.trim())return x.ZP.error("Search field can't be empty!");b({query:e}),o("")},children:[(0,l.jsx)(f.Input,{onChange:function(n){var t=n.currentTarget.value.toLowerCase();o(t)},value:e,type:"text"}),(0,l.jsx)(f.Button,{type:"submit",children:"Search"}),(0,l.jsx)(x.x7,{})]}),g&&(0,l.jsx)(l.Fragment,{children:g&&(0,l.jsx)(f.List,{children:g.map((function(n){return(0,l.jsx)(f.Item,{children:(0,l.jsx)(f.Link,{to:"".concat(n.id),state:{from:P},children:n.title})},n.id)}))})})]})}},5025:function(n,t,e){e.r(t),e.d(t,{Button:function(){return d},Form:function(){return x},Input:function(){return l},Item:function(){return g},Link:function(){return v},List:function(){return h}});var r,i,o,a,c,u,s=e(168),p=e(6031),f=e(501),x=p.ZP.form(r||(r=(0,s.Z)(["\n    margin-top: 50px;\n"]))),l=p.ZP.input(i||(i=(0,s.Z)(["\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-right: 20px;\n    width: 300px;\n    height: 30px;\n    border: 1px solid #490936;\n    border-radius: 4px;\n    background-color: #f5f2f4;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n"]))),d=p.ZP.button(o||(o=(0,s.Z)(["\n    padding: 0;\n    width: 70px;\n    height: 32px;\n    border: 1px solid #490936;\n    border-radius: 4px;\n    font-size: 12px;\n    font-weight: 600;\n    text-transform: uppercase;\n    align-items: center;\n    text-align: center;\n    color: #490936;\n    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);\n    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n    &:hover {\n    color: #f0e4ec;\n    background-color: #490936;\n    }\n"]))),h=p.ZP.ul(a||(a=(0,s.Z)(["\n    margin-top: 50px;\n    padding: 0;\n    list-style: none;\n"]))),g=p.ZP.li(c||(c=(0,s.Z)(["\n    line-height: 1.6;\n"]))),v=(0,p.ZP)(f.OL)(u||(u=(0,s.Z)(["\n    color: #010501;\n    font-weight: 700;\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n        color: #9a5a87;\n        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    }\n"])))},8871:function(n,t,e){e.r(t),e.d(t,{Reviews:function(){return x}});var r=e(5861),i=e(885),o=e(7757),a=e.n(o),c=e(6871),u=e(2791),s=e(1207),p=e(4455),f=e(184),x=function(){var n=(0,c.UO)().movieId,t=(0,u.useState)([]),e=(0,i.Z)(t,2),o=e[0],x=e[1];return(0,u.useEffect)((function(){function t(){return(t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.Jh)(n);case 3:e=t.sent,x(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Error!");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),console.log(o),(0,f.jsx)(p.List,{children:o.map((function(n){return(0,f.jsxs)(p.Item,{children:[(0,f.jsxs)(p.Header,{children:["Author: ",n.author]}),(0,f.jsx)(p.Text,{children:n.content})]},n.id)}))})}},4455:function(n,t,e){e.r(t),e.d(t,{Header:function(){return f},Item:function(){return p},List:function(){return s},Text:function(){return x}});var r,i,o,a,c=e(168),u=e(6031),s=u.ZP.ul(r||(r=(0,c.Z)(["\n    margin-top: 20px;\n    padding: 0;\n    list-style: none;\n"]))),p=u.ZP.li(i||(i=(0,c.Z)(["\n    margin-top: 20px;\n"]))),f=u.ZP.p(o||(o=(0,c.Z)(["\nmargin: 0;\n    font-size: 20px;\n    font-weight: 700;\n    color: #490936;\n"]))),x=u.ZP.p(a||(a=(0,c.Z)(["\nmargin-top: 10px;\n    font-size: 14px;\n    font-weight: 400;\n    color: #010501;\n"])))},4812:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return a.Cast},HomePage:function(){return r.HomePage},MovieDetailsPage:function(){return i.MovieDetailsPage},MoviesPage:function(){return c.MoviesPage},Reviews:function(){return o.Reviews}});var r=e(680),i=e(9290),o=e(8871),a=e(5115),c=e(2667)},1207:function(n,t,e){e.d(t,{Df:function(){return u},HI:function(){return p},IQ:function(){return x},Jh:function(){return l},gH:function(){return f}});var r=e(5861),i=e(7757),o=e.n(i),a=e(4569),c=e.n(a)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"cd0301e8d36e75459e8f6b3abbc4f987"}});function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2757:function(n,t,e){n.exports=e.p+"static/media/default.30e66d787141d5e7b20f.png"}}]);
//# sourceMappingURL=812.b98e52e7.chunk.js.map