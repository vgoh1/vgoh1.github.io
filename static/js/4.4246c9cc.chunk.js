(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[4],{107:function(A,e,t){},108:function(A,e,t){"use strict";var a=t(52);e.a=Object(a.a)("card-deck")},109:function(A,e,t){},117:function(A,e,t){"use strict";var a=t(37),c=t(38),n=t(39),r=t.n(n),s=t(0),i=t.n(s),l=t(45),o=t(41),j=t(43),d=i.a.createContext(null);d.displayName="AccordionContext";var b=d,u=["as","children","eventKey","onClick"];var x=i.a.forwardRef((function(A,e){var t=A.as,n=void 0===t?"button":t,r=A.children,l=A.eventKey,o=A.onClick,d=Object(c.a)(A,u),x=function(A,e){var t=Object(s.useContext)(b),a=Object(s.useContext)(j.a);return function(c){a&&a(A===t?null:A,c),e&&e(c)}}(l,o);return"button"===n&&(d.type="button"),i.a.createElement(n,Object(a.a)({ref:e,onClick:x},d),r)})),h=t(53),m=["children","eventKey"],f=i.a.forwardRef((function(A,e){var t=A.children,n=A.eventKey,r=Object(c.a)(A,m),l=Object(s.useContext)(b);return i.a.createElement(j.a.Provider,{value:null},i.a.createElement(h.a,Object(a.a)({ref:e,in:l===n},r),i.a.createElement("div",null,i.a.Children.only(t))))}));f.displayName="AccordionCollapse";var p=f,E=["as","activeKey","bsPrefix","children","className","onSelect"],O=i.a.forwardRef((function(A,e){var t=Object(l.a)(A,{activeKey:"onSelect"}),n=t.as,s=void 0===n?"div":n,d=t.activeKey,u=t.bsPrefix,x=t.children,h=t.className,m=t.onSelect,f=Object(c.a)(t,E),p=r()(h,Object(o.a)(u,"accordion"));return i.a.createElement(b.Provider,{value:d||null},i.a.createElement(j.a.Provider,{value:m||null},i.a.createElement(s,Object(a.a)({ref:e},f,{className:p}),x)))}));O.displayName="Accordion",O.Toggle=x,O.Collapse=p;e.a=O},118:function(A,e,t){"use strict";var a=t(37),c=t(38),n=t(39),r=t.n(n),s=t(0),i=t.n(s),l=t(45),o=t(52),j=t(41),d=["bsPrefix","className","as"],b=i.a.forwardRef((function(A,e){var t=A.bsPrefix,n=A.className,s=A.as,l=Object(c.a)(A,d);t=Object(j.a)(t,"navbar-brand");var o=s||(l.href?"a":"span");return i.a.createElement(o,Object(a.a)({},l,{ref:e,className:r()(n,t)}))}));b.displayName="NavbarBrand";var u=b,x=t(53),h=t(46),m=["children","bsPrefix"],f=i.a.forwardRef((function(A,e){var t=A.children,n=A.bsPrefix,r=Object(c.a)(A,m);return n=Object(j.a)(n,"navbar-collapse"),i.a.createElement(h.a.Consumer,null,(function(A){return i.a.createElement(x.a,Object(a.a)({in:!(!A||!A.expanded)},r),i.a.createElement("div",{ref:e,className:n},t))}))}));f.displayName="NavbarCollapse";var p=f,E=t(61),O=["bsPrefix","className","children","label","as","onClick"],y=i.a.forwardRef((function(A,e){var t=A.bsPrefix,n=A.className,l=A.children,o=A.label,d=A.as,b=void 0===d?"button":d,u=A.onClick,x=Object(c.a)(A,O);t=Object(j.a)(t,"navbar-toggler");var m=Object(s.useContext)(h.a)||{},f=m.onToggle,p=m.expanded,y=Object(E.a)((function(A){u&&u(A),f&&f()}));return"button"===b&&(x.type="button"),i.a.createElement(b,Object(a.a)({},x,{ref:e,onClick:y,"aria-label":o,className:r()(n,t,!p&&"collapsed")}),l||i.a.createElement("span",{className:t+"-icon"}))}));y.displayName="NavbarToggle",y.defaultProps={label:"Toggle navigation"};var v=y,I=t(43),g=["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"],C=Object(o.a)("navbar-text",{Component:"span"}),N=i.a.forwardRef((function(A,e){var t=Object(l.a)(A,{expanded:"onToggle"}),n=t.bsPrefix,o=t.expand,d=t.variant,b=t.bg,u=t.fixed,x=t.sticky,m=t.className,f=t.children,p=t.as,E=void 0===p?"nav":p,O=t.expanded,y=t.onToggle,v=t.onSelect,C=t.collapseOnSelect,N=Object(c.a)(t,g),M=Object(j.a)(n,"navbar"),Q=Object(s.useCallback)((function(){v&&v.apply(void 0,arguments),C&&O&&y&&y(!1)}),[v,C,O,y]);void 0===N.role&&"nav"!==E&&(N.role="navigation");var Y=M+"-expand";"string"===typeof o&&(Y=Y+"-"+o);var P=Object(s.useMemo)((function(){return{onToggle:function(){return y&&y(!O)},bsPrefix:M,expanded:!!O}}),[M,O,y]);return i.a.createElement(h.a.Provider,{value:P},i.a.createElement(I.a.Provider,{value:Q},i.a.createElement(E,Object(a.a)({ref:e},N,{className:r()(m,M,o&&Y,d&&M+"-"+d,b&&"bg-"+b,x&&"sticky-"+x,u&&"fixed-"+u)}),f)))}));N.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},N.displayName="Navbar",N.Brand=u,N.Toggle=v,N.Collapse=p,N.Text=C;e.a=N},17:function(A,e,t){"use strict";t.r(e);var a=t(0),c=t(2),n=t(42),r=t(11),s=t(118),i=t(57),l=t(89),o=t(12),j=t(60),d=t(126),b=t(117),u=t(127),x=t(44),h=t(125),m=t(1),f=function(A){var e=A.pub;return Object(m.jsxs)(h.a,{className:"publication-card box min-h-100",children:[Object(m.jsxs)(b.a.Toggle,{as:h.a.Header,eventKey:e._id,className:"publication-title-column",children:[Object(m.jsx)("div",{className:"pub-category-above-title",children:e.category.type}),Object(m.jsxs)("div",{className:"publication-title",children:[" ",e.title]}),Object(m.jsxs)("div",{className:"pub-year-below-title",children:[" ",e.yearPublished," "]})]}),Object(m.jsx)(b.a.Collapse,{eventKey:e._id,children:Object(m.jsxs)(h.a.Body,{className:"publication-body-column",children:[Object(m.jsx)("div",{className:"pub-body-subheader",children:"Authors"}),Object(m.jsx)("div",{className:"pub-body-content",children:e.authors.map((function(A){return"".concat(A)})).join(", ")}),Object(m.jsx)("div",{className:"pub-body-subheader",children:"Description"}),Object(m.jsx)("div",{className:"pub-body-content pub-body-paragraph",children:e.description}),Object(m.jsx)("div",{className:"pub-body-subheader",children:e.category.categoryTitle?e.category.type.charAt(0)+e.category.type.slice(1).toLowerCase():""}),Object(m.jsx)("div",{className:"pub-body-content",children:e.category.categoryTitle?e.category.categoryTitle+(e.category.issue?", Issue ".concat(e.category.issue):"")+(e.category.volume?", Volume ".concat(e.category.volume):"")+(e.category.pages?", Page ".concat(e.category.pages):""):""}),Object(m.jsx)("div",{className:"pub-body-subheader",children:e.category.publisher?"Published by":null}),Object(m.jsx)("div",{className:"pub-body-content",children:e.category.publisher}),Object(m.jsx)("div",{className:"pub-body-subheader",children:e.link?"View at":null}),Object(m.jsx)("div",{className:"pub-body-content",children:Object(m.jsx)("a",{href:e.link,children:e.link})})]})})]})},p=function(A){var e=A.teamPublications,t=A.groupBy;return Object(m.jsx)(m.Fragment,{children:t?e.filter((function(A){return A.category.type.toUpperCase()===t.toUpperCase()})).map((function(A){return Object(m.jsx)(f,{pub:A},A._id)})):e.map((function(A){return Object(m.jsx)(f,{pub:A},A._id)}))})},E=function(A){var e=A.teamPublications;return Object(m.jsx)(u.a,{className:"mb-2",children:Object.keys(x.categoryTypes).map((function(A){return t=A,e.filter((function(A){return A.category.type.toUpperCase()===t.toUpperCase()})).length>0&&Object(m.jsx)(d.a,{style:{color:"var(--researchify-text-color)"},eventKey:t,title:t.toUpperCase(),children:Object(m.jsx)(b.a,{children:Object(m.jsx)(p,{groupBy:t,teamPublications:e})})});var t}))})},O=t(49),y=function(){var A=r.f.publicationOptions,e=Object(O.a)(r.e,A.sortBy);return function(){switch(A.groupBy){case x.groupByOptions.CATEGORY:return Object(m.jsx)(E,{teamPublications:e});default:return Object(m.jsx)(p,{teamPublications:e})}}()},v=function(){var A=r.c.teamName;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n.a,{children:Object(m.jsxs)("title",{children:[" ","Publications -"," ",A," "]})}),Object(m.jsx)(i.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(m.jsx)("div",{className:"publication-pg-title",children:"Our Publications"})}),Object(m.jsx)(i.a,{fluid:!0,children:Object(m.jsx)(y,{})})]})},I=t(47),g=t(120),C=t(121),N=t(58),M=t(83),Q=(t(107),function(A){var e=A.linkedHandle,t=A.themeOption,a=A.twitterHeight,c="#000000";return"dark"===t&&(c="#ffffff"),Object(m.jsx)("div",{className:"twitter-feed",children:Object(m.jsx)(M.a,{dataSource:{sourceType:"profile",screenName:e},options:{theme:t,height:a,borderColor:c}})})}),Y=function(){var A=r.b,e=r.f.template.theme,t=r.c.teamName,c=r.c.twitterHandle,s=r.e,l=Object(a.useState)(0),j=Object(I.a)(l,2),d=j[0],u=j[1],x=Object(a.useRef)(null);return Object(a.useEffect)((function(){u(Math.max(600,x.current.clientHeight))})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n.a,{children:Object(m.jsxs)("title",{children:[" ","Home -"," ",t," "]})}),Object(m.jsx)(i.a,{fluid:!0,className:"pages-top-padding",children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)(C.a,{md:c?9:12,children:Object(m.jsx)("div",{ref:x,children:Object(m.jsxs)(i.a,{fluid:!0,children:[Object(m.jsxs)("div",{className:"landing-center-title",children:["Welcome to"," ",t,"!"]}),Object(N.a)(A.aboutUs),Object(m.jsx)("div",{className:"recent-pub-title",children:"RECENT PUBLICATIONS"}),Object(m.jsx)("div",{className:"recent-publication-link",children:Object(m.jsx)(o.b,{to:"/publication",children:"(VIEW ALL PAPERS)"})}),Object(m.jsx)("div",{className:"recent-publication",children:s.slice(0,5).map((function(A){return Object(m.jsx)(b.a,{children:Object(m.jsx)(f,{pub:A},A._id)})}))})]})})}),c&&Object(m.jsx)(C.a,{md:3,className:"d-flex justify-content-end news-section",style:{maxHeight:d},children:Object(m.jsx)(Q,{linkedHandle:c,themeOption:e,twitterHeight:d-90})})]})})]})},P=t(108),w=t(48),G=function(A){var e,t=A.member;return Object(m.jsxs)(h.a,{className:"team-card",children:[Object(m.jsx)(h.a.Img,{variant:"top",src:null!==(e=t.memberPic)&&void 0!==e?e:w.a}),Object(m.jsxs)(h.a.Body,{children:[Object(m.jsx)("div",{className:"member-name",children:t.fullName}),Object(m.jsx)("div",{className:"member-position",children:t.position}),Object(m.jsx)("div",{className:"member-summary",children:t.summary})]})]})},T=function(A){var e=A.achievement;return Object(m.jsxs)(h.a,{className:"award-card",children:[Object(m.jsx)(h.a.Img,{variant:"top",src:"data:image/jpeg;base64,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"}),Object(m.jsxs)(h.a.Body,{children:[Object(m.jsx)("div",{className:"award-name",children:e.title}),Object(m.jsx)("div",{className:"award-position",children:e.yearAwarded}),Object(m.jsx)("div",{className:"award-summary",children:e.description})]})]})},B=[{title:"Publications",path:"/publication",exact:!0,component:v},{title:"Team",path:"/team",exact:!0,component:function(){var A=r.d,e=r.c.teamName;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n.a,{children:Object(m.jsxs)("title",{children:[" ","Team -"," ",e," "]})}),Object(m.jsx)(i.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(m.jsx)("div",{className:"team-pg-title",children:"Meet Our Team"})}),Object(m.jsx)(i.a,{fluid:!0,className:"team-card-container",children:Object(m.jsx)(P.a,{className:"team-card-deck",children:A.map((function(A){return Object(m.jsx)(G,{member:A},A._id)}))})})]})}},{title:"Achievements",path:"/achievements",exact:!0,component:function(){var A=r.a,e=r.c.teamName;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n.a,{children:Object(m.jsxs)("title",{children:[" ","Achievements -"," ",e," "]})}),Object(m.jsx)(i.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(m.jsx)("div",{className:"team-pg-title",children:"Achievements"})}),Object(m.jsx)(i.a,{fluid:!0,className:"team-card-container",children:Object(m.jsx)(P.a,{className:"team-card-deck",children:A.map((function(A,e){return Object(m.jsx)(T,{style:{display:"flex",flexDirection:e%2===0?"row":"row-reverse"},achievement:A},A._id)}))})})]})}}],R=[{title:"Home",path:"/",exact:!0,component:Y}],U=function(){var A=B.filter((function(A){var e=A.title;return r.f.pages.includes(e.toUpperCase())}));return[].concat(R,Object(j.a)(A))},H=function(){r.c.twitterHandle;var A=r.c.orgName,e=r.c.teamName,t=U();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(s.a,{collapseOnSelect:!0,expand:"md",variant:"",fixed:"top",children:Object(m.jsxs)(i.a,{fluid:!0,children:[Object(m.jsxs)(s.a.Brand,{as:o.b,to:"/",children:[e," ","@",A]}),Object(m.jsx)(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsxs)(s.a.Collapse,{id:"responsive-navbar-nav",children:[Object(m.jsx)(l.a,{className:"me-auto"}),Object(m.jsx)(l.a,{children:t.map((function(A,e){var t=A.path,a=A.title;return Object(m.jsx)(l.a.Link,{as:o.b,to:t,children:a},e)}))})]})]})})})},k=(t(109),t(50),t(51),r.f.template.theme);"light"===k?t.e(0).then(t.t.bind(null,123,7)):"dark"===k?t.e(3).then(t.t.bind(null,124,7)):t.e(0).then(t.t.bind(null,123,7));e.default=function(){var A=r.c.teamName,e=U().map((function(A){var e=A.path,t=A.exact,a=A.component;return Object(m.jsx)(c.a,{exact:t,path:e,children:Object(m.jsx)("div",{children:a?Object(m.jsx)(a,{}):null})},e)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(n.a,{children:Object(m.jsx)("title",{children:A})}),Object(m.jsx)(H,{}),Object(m.jsx)(c.c,{children:e})]})}},44:function(A,e){A.exports={pageSize:10,categoryPageSize:5,categoryTypes:{Journal:"Journal",Conference:"Conference",Book:"Book",Other:"Other"},groupByOptions:{NONE:"None",CATEGORY:"Category"},sortingOptions:{TITLE:"Title",AUTHOR:"Author",YEAR:"Year"}}},48:function(A,e,t){"use strict";e.a="data:image/jpeg;base64,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"},49:function(A,e,t){"use strict";var a=t(44);e.a=function(A,e){switch(e){case a.sortingOptions.AUTHOR:A.sort((function(A,e){return A.authors[0].toLowerCase()>e.authors[0].toLowerCase()?1:A.authors[0].toLowerCase()<e.authors[0].toLowerCase()?-1:0}));break;case a.sortingOptions.TITLE:A.sort((function(A,e){return A.title.toLowerCase()>e.title.toLowerCase()?1:A.title.toLowerCase()<e.title.toLowerCase()?-1:0}));break;case a.sortingOptions.YEAR:A.sort((function(A,e){return A.yearPublished>e.yearPublished?-1:A.yearPublished<e.yearPublished?1:0}));break;case"Category Title":A.sort((function(A,e){return A.category.categoryTitle.toLowerCase()>e.category.categoryTitle.toLowerCase()?1:A.category.categoryTitle.toLowerCase()<e.category.categoryTitle.toLowerCase()?-1:0}));break;default:A.sort((function(A,e){return A.title.toLowerCase()>e.title.toLowerCase()?1:A.title.toLowerCase()<e.title.toLowerCase()?-1:0})),A.sort((function(A,e){return A.yearPublished>e.yearPublished?-1:A.yearPublished<e.yearPublished?1:0}))}return A}},50:function(A,e,t){},51:function(A,e,t){},57:function(A,e,t){"use strict";var a=t(37),c=t(38),n=t(39),r=t.n(n),s=t(0),i=t.n(s),l=t(41),o=["bsPrefix","fluid","as","className"],j=i.a.forwardRef((function(A,e){var t=A.bsPrefix,n=A.fluid,s=A.as,j=void 0===s?"div":s,d=A.className,b=Object(c.a)(A,o),u=Object(l.a)(t,"container"),x="string"===typeof n?"-"+n:"-fluid";return i.a.createElement(j,Object(a.a)({ref:e},b,{className:r()(d,n?""+u+x:u)}))}));j.displayName="Container",j.defaultProps={fluid:!1},e.a=j}}]);
//# sourceMappingURL=4.4246c9cc.chunk.js.map