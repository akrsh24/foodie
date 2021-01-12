(this.webpackJsonpfoodie=this.webpackJsonpfoodie||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},192:function(e,t,n){},228:function(e,t,n){},230:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(0),r=n.n(a),s=n(17),o=n.n(s),i=(n(141),n(88)),d=n(22),l=n(44),u=n.n(l),j=n(61),b=n(96),O=n(241),f=n(242),h=n(243),p=n(239),g=(n(142),function(e){switch(console.log(e),e.code){case e.PERMISSION_DENIED:return"User denied the request for Geolocation.";case e.POSITION_UNAVAILABLE:return"Location information is unavailable.";case e.TIMEOUT:return"The request to get user location timed out.";case e.UNKNOWN_ERROR:default:return"An unknown error occurred."}}),x=n(30),v=n(53),m="SET_CURRENT_LOCATION",y="SET_LOADING_FLAG",_=function(e){return{type:y,payload:e}},C=n(77),N=n.n(C),S="SET_DINE_CATEGORIES",E="SET_CITY_DETAILS",T="SET_COLLECTION_CATEGORIES",R=function(e,t){return function(){var n=Object(j.a)(u.a.mark((function n(c){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N.a.get("".concat(x.a,"/cities?lat=").concat(e,"&lon=").concat(t),x.b);case 3:a=n.sent,sessionStorage.setItem("currentCityDetails",JSON.stringify({status:a.status,data:a.data.location_suggestions})),c((r={status:a.status,data:a.data.location_suggestions},{type:E,payload:r})),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0),Object(x.d)("error","Something went wrong, Please try again");case 12:case"end":return n.stop()}var r}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return{cityDetails:e.dineReducer.cityDetails,currentCoordinates:e.dineReducer.currentCoordinates}})),n=t.cityDetails,r=t.currentCoordinates,s=Object(a.useState)([]),o=Object(b.a)(s,2),i=o[0],d=o[1],l=Object(a.useState)({}),y=Object(b.a)(l,2),C=y[0],N=y[1];Object(a.useEffect)((function(){d(n)}),[n]),Object(a.useEffect)((function(){N(r)}),[r]);var S=function(){var t=Object(j.a)(u.a.mark((function t(){var n,c,a,r,s,o,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Object(x.c)("currentCoordinates"),c=Object(x.c)("currentCityDetails"),n&&c){t.next=22;break}return t.prev=3,e(_(!0)),t.next=7,navigator.geolocation?new Promise((function(e,t){return navigator.geolocation.getCurrentPosition(e,t)})):new Promise((function(e,t){return t({})}));case 7:a=t.sent,r=a.coords,s=r.latitude,o=r.longitude,sessionStorage.setItem("currentCoordinates",JSON.stringify({latitude:s,longitude:o})),e({type:m,payload:{latitude:s,longitude:o}}),e(R(s,o)),e(_(!1)),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(3),console.error(t.t0),i=g(t.t0.code),Object(x.d)("error",i);case 20:t.next=24;break;case 22:N(n),d(c);case 24:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(){return t.apply(this,arguments)}}();return console.log("Searchbar states",C,i.data,Boolean(i.length>0)),Object(c.jsx)("div",{className:"search-menu-div",children:Object(c.jsxs)("div",{className:"search-menu-overlay",children:[Object(c.jsx)("div",{className:"search-menu-bg"}),Object(c.jsxs)("div",{className:"search-menu-content",children:[Object(c.jsxs)("div",{className:"login-span",children:[Object(c.jsx)("div",{children:"Login"}),Object(c.jsx)("div",{children:"Signup"})]}),Object(c.jsxs)("div",{className:"app-logo-description-div",children:[Object(c.jsx)("div",{className:"logo",children:"Foodie"}),Object(c.jsx)("div",{className:"description",children:"Discover the best food & drinks"}),Object(c.jsx)("div",{className:"search-bar",children:Object(c.jsx)(p.a,{addonBefore:Object(c.jsx)(c.Fragment,{children:i&&Object.keys(i).length>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(O.a,{style:{marginRight:"5%"}}),i.data[0].name]}):Object(c.jsx)(f.a,{onClick:S})}),addonAfter:Object(c.jsx)(h.a,{}),size:"large"})})]})]})]})})},I=n(92),L=n.n(I),D=function(){return Object(c.jsxs)("article",{children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{className:L.a.title,children:"Collections"})}),Object(c.jsxs)("article",{children:[Object(c.jsx)("p",{children:"Explore curated lists of top restaurants, cafes, pubs, and bars in ".concat("Delhi",", based on trends")}),Object(c.jsx)("div",{className:L.a.collectionList})]})]})},A=n(238),P=n(68),k=n.n(P),F=(n(192),function(){return Object(c.jsxs)("article",{className:"dine-category-container",children:[Object(c.jsx)("section",{children:Object(c.jsx)(A.a,{hoverable:!0,style:{width:"100%",height:"100%",borderRadius:"15px"},cover:Object(c.jsx)("img",{alt:"order-online",src:"/foodie/assets/images/order_online.jpg",style:{borderRadius:"15px 15px 0 0"}}),children:Object(c.jsx)(k.a,{title:"Order Food Online",className:"dine-category-meta"})})}),Object(c.jsx)("section",{children:Object(c.jsx)(A.a,{hoverable:!0,style:{width:"100%",height:"100%",borderRadius:"15px"},cover:Object(c.jsx)("img",{alt:"go-out-for-meal",src:"/foodie/assets/images/go_out_meal.jpg",style:{borderRadius:"15px 15px 0 0"}}),children:Object(c.jsx)(k.a,{title:"Go out for a meal",className:"dine-category-meta"})})}),Object(c.jsx)("section",{children:Object(c.jsx)(A.a,{hoverable:!0,style:{width:"100%",height:"100%",borderRadius:"15px"},cover:Object(c.jsx)("img",{alt:"night-life",src:"/foodie/assets/images/night_life.jpg",style:{borderRadius:"15px 15px 0 0"}}),children:Object(c.jsx)(k.a,{title:"Night Life",className:"dine-category-meta"})})}),Object(c.jsx)("section",{children:Object(c.jsx)(A.a,{hoverable:!0,style:{width:"100%",height:"100%",borderRadius:"15px"},cover:Object(c.jsx)("img",{alt:"foodie-pro",src:"/foodie/assets/images/foodie_pro.jpg",style:{borderRadius:"15px 15px 0 0"}}),children:Object(c.jsx)(k.a,{title:"Pro Services",className:"dine-category-meta"})})})]})}),U=(n(228),function(){var e=Object(v.b)();return Object(a.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(x.a,"/categories"),x.b);case 3:n=e.sent,t((c={status:n.status,data:n.data.categories},{type:S,payload:c})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),Object(x.d)("error","Something went wrong, Please try again");case 11:case"end":return e.stop()}var c}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())})),Object(c.jsxs)("div",{className:"content-container",children:[Object(c.jsx)(F,{}),Object(c.jsx)(D,{})]})}),B=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{}),Object(c.jsx)(U,{})]})},G=function(){return Object(c.jsx)("div",{})};var J=Object(d.f)((function(e){return Object(a.useEffect)((function(){return e.history.push("/foodie/")})),Object(c.jsx)("div",{})})),K=function(){return Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:J}),Object(c.jsx)(d.a,{exact:!0,path:"/foodie/",component:B}),Object(c.jsx)(d.a,{exact:!0,path:"/foodie/search",component:G})]})};n(230);var M=function(){return Object(c.jsx)(i.a,{children:Object(c.jsx)("div",{className:"app-container",children:Object(c.jsx)(K,{})})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,244)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},H=(n(231),n(49)),V=(n(232),n(39)),q={currentCoordinates:{},isLoading:!1},z={dineCategories:{},cityDetails:{},collectionCategories:{}},Y=Object(H.c)({utilReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(V.a)(Object(V.a)({},e),{},{currentCoordinates:t.payload});case y:return Object(V.a)(Object(V.a)({},e),{},{isLoading:t.payload});default:return e}},dineReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(V.a)(Object(V.a)({},e),{},{dineCategories:t.payload});case E:return Object(V.a)(Object(V.a)({},e),{},{cityDetails:t.payload});case T:return Object(V.a)(Object(V.a)({},e),{},{collectionCategories:t.payload});default:return e}}}),Z=n(133),Q=H.d,X=[Z.a],$=Object(H.e)(Y,Q(H.a.apply(void 0,X)));o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v.a,{store:$,children:Object(c.jsx)(M,{})})}),document.getElementById("root")),W()},30:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o}));var c=n(235),a={headers:{Accept:"application/json","Content-Type":"application/json","user-key":"8d939575b303f91a2a7df9ffec7b327d"}},r="https://developers.zomato.com/api/v2.1",s=function(t,n){return console.log(n,Object({NODE_ENV:"production",PUBLIC_URL:"/foodie",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ZOMATO_API_KEY:"8d939575b303f91a2a7df9ffec7b327d"}),e),c.b[t](n)},o=function(e){var t=JSON.parse(sessionStorage.getItem(e));return t||null}}).call(this,n(80))},92:function(e,t,n){e.exports={title:"CollectionCategory_title__2lTxx",collectionList:"CollectionCategory_collectionList__Ve_sy"}}},[[233,1,2]]]);
//# sourceMappingURL=main.885f06c1.chunk.js.map