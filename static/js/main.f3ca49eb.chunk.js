(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(6),a=n.n(r),c=n(3),o=n(5),s=n(1),u=n.n(s),i=n(2),l=n.n(i),p=(n(12),n(0)),b=l.a.memo((function(t){var e=t.goods;return Object(p.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.name,r=t.color;return Object(p.jsx)("li",{"data-cy":"good",style:{color:r},children:n},e)}))})})),d="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function f(){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return e=t.sent,t.abrupt("return",e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(i.useState)(!1),s=Object(o.a)(a,2),l=s[0],d=s[1],j=Object(i.useCallback)(Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!1),t.prev=1,t.next=4,f();case 4:e=t.sent,r(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d(!0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[]),x=Object(i.useCallback)(Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!1),t.prev=1,t.next=4,h();case 4:e=t.sent,r(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d(!0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[]),m=Object(i.useCallback)(Object(c.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!1),t.prev=1,t.next=4,v();case 4:e=t.sent,r(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),d(!0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),[]);return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Dynamic list of Goods"}),Object(p.jsx)("button",{type:"button","data-cy":"all-button",onClick:j,children:"Load all goods"}),Object(p.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:x,children:"Load 5 first goods"}),Object(p.jsx)("button",{type:"button","data-cy":"red-button",onClick:m,children:"Load red goods"}),Object(p.jsx)(b,{goods:n}),l&&Object(p.jsx)("p",{className:"error",children:"Unable to show goods"})]})};a.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f3ca49eb.chunk.js.map