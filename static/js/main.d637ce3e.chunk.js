(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(9),i=c.n(s),n=(c(15),c(10)),a=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},d=c(6),b=c(3),m=c.n(b),u=(c(21),c(8)),O=c.n(u),h=function(){var e=Object(d.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com","/?apikey=13b8ae73&t=").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.onAdd,c=e.movies,s=Object(r.useState)(null),i=Object(a.a)(s,2),n=i[0],j=i[1],b=Object(r.useState)(""),u=Object(a.a)(b,2),v=u[0],x=u[1],f=Object(r.useState)(!1),p=Object(a.a)(f,2),N=p[0],g=p[1],w=Object(r.useState)(!1),y=Object(a.a)(w,2),I=y[0],k=y[1],D=Object(r.useState)(!1),S=Object(a.a)(D,2),C=S[0],F=S[1],A=function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,h(v);case 3:(t=e.sent).imdbID?j(t):g(!0),F(!1),k(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:O()("input",{"is-danger":N}),value:v,onChange:function(e){x(e.target.value),g(!1),k(!1)}})}),N&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"}),I&&Object(l.jsx)("p",{className:"help is-danger",children:"The movie is already on page"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:O()("button","is-light",{"is-loading":C}),onClick:A,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-primary",onClick:function(){n&&t(n),n&&c.some((function(e){return e.imdbID===n.imdbID}))&&k(!0),N||(x(""),j(null))},disabled:!n,children:"Add to the list"})})]})]}),n&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:n})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(v,{onAdd:function(e){!c.some((function(t){return t.imdbID===e.imdbID}))&&e.imdbID&&s((function(t){return[].concat(Object(n.a)(t),[e])}))},movies:c})})]})};i.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.d637ce3e.chunk.js.map