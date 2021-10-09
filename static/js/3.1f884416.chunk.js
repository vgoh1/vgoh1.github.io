(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[3],{109:function(A,e,a){"use strict";var t=a(37),n=a(38),c=a(39),r=a.n(c),s=a(0),i=a.n(s),o=a(45),l=a(40),j=a(43),d=i.a.createContext(null);d.displayName="AccordionContext";var b=d,u=["as","children","eventKey","onClick"];var x=i.a.forwardRef((function(A,e){var a=A.as,c=void 0===a?"button":a,r=A.children,o=A.eventKey,l=A.onClick,d=Object(n.a)(A,u),x=function(A,e){var a=Object(s.useContext)(b),t=Object(s.useContext)(j.a);return function(n){t&&t(A===a?null:A,n),e&&e(n)}}(o,l);return"button"===c&&(d.type="button"),i.a.createElement(c,Object(t.a)({ref:e,onClick:x},d),r)})),h=a(56),m=["children","eventKey"],E=i.a.forwardRef((function(A,e){var a=A.children,c=A.eventKey,r=Object(n.a)(A,m),o=Object(s.useContext)(b);return i.a.createElement(j.a.Provider,{value:null},i.a.createElement(h.a,Object(t.a)({ref:e,in:o===c},r),i.a.createElement("div",null,i.a.Children.only(a))))}));E.displayName="AccordionCollapse";var p=E,f=["as","activeKey","bsPrefix","children","className","onSelect"],y=i.a.forwardRef((function(A,e){var a=Object(o.a)(A,{activeKey:"onSelect"}),c=a.as,s=void 0===c?"div":c,d=a.activeKey,u=a.bsPrefix,x=a.children,h=a.className,m=a.onSelect,E=Object(n.a)(a,f),p=r()(h,Object(l.a)(u,"accordion"));return i.a.createElement(b.Provider,{value:d||null},i.a.createElement(j.a.Provider,{value:m||null},i.a.createElement(s,Object(t.a)({ref:e},E,{className:p}),x)))}));y.displayName="Accordion",y.Toggle=x,y.Collapse=p;e.a=y},110:function(A,e,a){"use strict";var t=a(37),n=a(38),c=a(39),r=a.n(c),s=a(0),i=a.n(s),o=a(45),l=a(47),j=a(40),d=["bsPrefix","className","as"],b=i.a.forwardRef((function(A,e){var a=A.bsPrefix,c=A.className,s=A.as,o=Object(n.a)(A,d);a=Object(j.a)(a,"navbar-brand");var l=s||(o.href?"a":"span");return i.a.createElement(l,Object(t.a)({},o,{ref:e,className:r()(c,a)}))}));b.displayName="NavbarBrand";var u=b,x=a(56),h=a(48),m=["children","bsPrefix"],E=i.a.forwardRef((function(A,e){var a=A.children,c=A.bsPrefix,r=Object(n.a)(A,m);return c=Object(j.a)(c,"navbar-collapse"),i.a.createElement(h.a.Consumer,null,(function(A){return i.a.createElement(x.a,Object(t.a)({in:!(!A||!A.expanded)},r),i.a.createElement("div",{ref:e,className:c},a))}))}));E.displayName="NavbarCollapse";var p=E,f=a(50),y=["bsPrefix","className","children","label","as","onClick"],I=i.a.forwardRef((function(A,e){var a=A.bsPrefix,c=A.className,o=A.children,l=A.label,d=A.as,b=void 0===d?"button":d,u=A.onClick,x=Object(n.a)(A,y);a=Object(j.a)(a,"navbar-toggler");var m=Object(s.useContext)(h.a)||{},E=m.onToggle,p=m.expanded,I=Object(f.a)((function(A){u&&u(A),E&&E()}));return"button"===b&&(x.type="button"),i.a.createElement(b,Object(t.a)({},x,{ref:e,onClick:I,"aria-label":l,className:r()(c,a,!p&&"collapsed")}),o||i.a.createElement("span",{className:a+"-icon"}))}));I.displayName="NavbarToggle",I.defaultProps={label:"Toggle navigation"};var O=I,v=a(43),g=["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"],C=Object(l.a)("navbar-text",{Component:"span"}),M=i.a.forwardRef((function(A,e){var a=Object(o.a)(A,{expanded:"onToggle"}),c=a.bsPrefix,l=a.expand,d=a.variant,b=a.bg,u=a.fixed,x=a.sticky,m=a.className,E=a.children,p=a.as,f=void 0===p?"nav":p,y=a.expanded,I=a.onToggle,O=a.onSelect,C=a.collapseOnSelect,M=Object(n.a)(a,g),N=Object(j.a)(c,"navbar"),Q=Object(s.useCallback)((function(){O&&O.apply(void 0,arguments),C&&y&&I&&I(!1)}),[O,C,y,I]);void 0===M.role&&"nav"!==f&&(M.role="navigation");var Y=N+"-expand";"string"===typeof l&&(Y=Y+"-"+l);var P=Object(s.useMemo)((function(){return{onToggle:function(){return I&&I(!y)},bsPrefix:N,expanded:!!y}}),[N,y,I]);return i.a.createElement(h.a.Provider,{value:P},i.a.createElement(v.a.Provider,{value:Q},i.a.createElement(f,Object(t.a)({ref:e},M,{className:r()(m,N,l&&Y,d&&N+"-"+d,b&&"bg-"+b,x&&"sticky-"+x,u&&"fixed-"+u)}),E)))}));M.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},M.displayName="Navbar",M.Brand=u,M.Toggle=O,M.Collapse=p,M.Text=C;e.a=M},17:function(A,e,a){"use strict";a.r(e);a(0);var t=a(2),n=a(42),c=a(11),r=a(110),s=a(63),i=a(93),o=a(12),l=a(64),j=a(114),d=a(109),b=a(123),u=a(44),x=a(122),h=a(1),m=function(A){var e=A.pub;return Object(h.jsxs)(x.a,{className:"publication-card",children:[Object(h.jsxs)(d.a.Toggle,{as:x.a.Header,eventKey:e._id,className:"publication-title-column",children:[Object(h.jsx)("div",{className:"pub-category-above-title",children:e.category.type}),Object(h.jsxs)("div",{className:"publication-title",children:[" ",e.title]}),Object(h.jsxs)("div",{className:"pub-year-below-title",children:[" ",e.yearPublished," "]})]}),Object(h.jsx)(d.a.Collapse,{eventKey:e._id,children:Object(h.jsxs)(x.a.Body,{className:"publication-body-column",children:[Object(h.jsx)("div",{className:"pub-body-subheader",children:"Authors"}),Object(h.jsx)("div",{className:"pub-body-content",children:e.authors.map((function(A){return"".concat(A)})).join(", ")}),Object(h.jsx)("div",{className:"pub-body-subheader",children:"Description"}),Object(h.jsx)("div",{className:"pub-body-content pub-body-paragraph",children:e.description}),Object(h.jsx)("div",{className:"pub-body-subheader",children:e.category.categoryTitle?e.category.type.charAt(0)+e.category.type.slice(1).toLowerCase():""}),Object(h.jsx)("div",{className:"pub-body-content",children:e.category.categoryTitle?e.category.categoryTitle+(e.category.issue?", Issue ".concat(e.category.issue):"")+(e.category.volume?", Volume ".concat(e.category.volume):"")+(e.category.pages?", Page ".concat(e.category.pages):""):""}),Object(h.jsx)("div",{className:"pub-body-subheader",children:e.category.publisher?"Published by":null}),Object(h.jsx)("div",{className:"pub-body-content",children:e.category.publisher}),Object(h.jsx)("div",{className:"pub-body-subheader",children:e.link?"View at":null}),Object(h.jsx)("div",{className:"pub-body-content",children:Object(h.jsx)("a",{href:e.link,children:e.link})})]})})]})},E=function(A){var e=A.teamPublications,a=A.groupBy;return Object(h.jsx)(h.Fragment,{children:a?e.filter((function(A){return A.category.type.toUpperCase()===a.toUpperCase()})).map((function(A){return Object(h.jsx)(m,{pub:A},A._id)})):e.map((function(A){return Object(h.jsx)(m,{pub:A},A._id)}))})},p=function(A){var e=A.teamPublications;return Object(h.jsx)(b.a,{className:"mb-2",children:Object.keys(u.categoryTypes).map((function(A){return a=A,e.filter((function(A){return A.category.type.toUpperCase()===a.toUpperCase()})).length>0&&Object(h.jsx)(j.a,{style:{color:"var(--researchify-text-color)"},eventKey:a,title:a.toUpperCase(),children:Object(h.jsx)(d.a,{children:Object(h.jsx)(E,{groupBy:a,teamPublications:e})})});var a}))})},f=a(52),y=function(){var A=c.f.publicationOptions,e=Object(f.a)(c.e,A.sortBy);return function(){switch(A.groupBy){case u.groupByOptions.CATEGORY:return Object(h.jsx)(p,{teamPublications:e});default:return Object(h.jsx)(E,{teamPublications:e})}}()},I=function(){var A=c.c.teamName;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(n.a,{children:Object(h.jsxs)("title",{children:[" ","Publications -"," ",A," "]})}),Object(h.jsx)(s.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(h.jsx)("div",{className:"publication-pg-title",children:"Our Publications"})}),Object(h.jsx)(s.a,{fluid:!0,children:Object(h.jsx)(y,{})})]})},O=function(){var A=c.b,e=c.c.teamName;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(n.a,{children:Object(h.jsxs)("title",{children:[" ","Home -"," ",e," "]})}),Object(h.jsxs)(s.a,{fluid:!0,className:"pages-top-padding",children:[Object(h.jsx)("div",{className:"landing-center-title",children:"About Us"}),A.aboutUs.map((function(A){return Object(h.jsx)("div",{className:"landing-center-content",children:A})}))]})]})},v=a(96),g=a(49),C=function(A){var e=A.member;return Object(h.jsxs)(x.a,{className:"team-card",children:[Object(h.jsx)(x.a.Img,{variant:"top",src:g.a}),Object(h.jsxs)(x.a.Body,{children:[Object(h.jsx)("div",{className:"member-name",children:e.fullName}),Object(h.jsx)("div",{className:"member-position",children:e.position}),Object(h.jsx)("div",{className:"member-summary",children:e.summary})]})]})},M=function(A){var e=A.achievement;return Object(h.jsxs)(x.a,{className:"award-card",children:[Object(h.jsx)(x.a.Img,{variant:"top",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAWgBaAMBIQACEQEDEQH/xAAdAAEAAQUBAQEAAAAAAAAAAAAABgEDBAUHAggJ/9oACAEBAAAAAPssAAAAAAAAAAAAFKgKVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKKgUVFBUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA18RtAAe5NugAAACmt455BkZIzsOnQ5D6AAABic21u30FgGRlF6xtcLaYOwnmUAAAOc4fTrnP4UFNzj19y+N4+26N55/dn4AAA5DLJlTRcoFKy3U2aZ+AnUrReJ9UAAAHKNn0Ra4j5rmMne4WGtW3UNohWk6gAAAIbAOrbtxzWtlvvY1+upXr13Wc0lsxAAAHjmGi6RJ+YRkvyw1WEZ/VNLz7P6RdAAAC1AYdL8uBmXKbF7Xa8kebEJFO7wAAADQc9w8atN1bwdnnaguZM2kIAAAAeIjAbFffjIyfXl7mEsugAAAAIPAhfy1KyucAAAAADUx+AUZOSSaUbYAAAAChVooboqZ22k8hqAAAAAAQuCzGegAAAAAAgcNlXRAAAAAAAc1je/wCngAAAAAA5Frs/rnsAAAAAAWuJXMrqWyAAAAAARCM42i9e9nlb+aXgAAAADjnEJRzawBIZx9QgAAAAPlj5U3PTsilFa8n1HRf0NAAAAAfK/wAq0+9MzH8Vv5fxhBujfoaAAAADH+ZeR8kfQd+1Sty7w/Qyb6P7dNgAAAPGvwtN+bAoqAfZPccrPzQAADAhnh45yAVBMdyZc29AAAMTW42NYs0AqHu9fyMvZ3gAAADx48vB7p69+6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xAAcAQEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/2gAIAQIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOc0Ye+9jmAAURPHjy3TnYf0NvQAWIOtc4WvL+12Hd9+AHI4udBJ5T22l+gocmgAOA32d85FeNn9FOsOzD6AOEzup+Z6armNbkOYoUmr0Ac9wcufN2HkreFKMjwzOgAUwDM8KaO/cwaJg0vQSAADkI0ucrfrw7ckc1P9wACLI5sXbFVnZT1ugAFML8SteVzx1YAA5uBPLXnTfQAAAYcNcha8mbv/QAA1kLc5JUqegAAc7D/wBBAAAHLw/9EAAAHHQ/9IgAAHAxB9N1AAAIwiv6VzgAAeRnwuo6uT+kAADziKDc9EAADFwvKtpUAADTcray+3vAAAwtTRd31YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/EABsBAQACAwEBAAAAAAAAAAAAAAAFBgIDBAEH/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUkgYwOkABarGc+GnbSOUAGV1ykjnww5dMTEABKbdF5OJEdlNstZACd4NP0MievRxVOyVsAJvRGfSMNEf17IatWirgB3TlV+iew3m2Qr0LZqoAC906590bwyOys9XFEAAlLJjKxfN27YGQp3gAFlsWyP26N/PUOYAAuM15o1qfwAADvvfvPhH08AANlwl+fCrRAAAN9y6K7AAAAO+zUoAAAkrNRwAACWs1DAAAJyyUDwAABZJ+gawAALJPdEZWI8AAMpnI44/wAAAGe3c80a8QABn1y2zmh9WIAAy29mWrjw8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//EADMQAAAFAwIFAwQBAwUBAAAAAAABAgMEBREhBhAHEhMXIiAxQBQwMlAVCBhgFiM2N0Fw/9oACAEBAAEIAP1+fTnfPqztn152ztn9/f05+xcXGRkXGRfe4uMjIuL/AGb/AODeI8fseI8fg+IwMDAwMDAwMDAwMDAwLkMDAuQwMDAwMC5DAwLkMDAxtjbAwLkMDAxtjbAwLl/9DqNQj02MqRIc1/TyOyO4MUdwYo7gRR3AijuDFHcGKO4MUdwIo7gxR3BijuDFBa/jHcdwYoTxAgn+dJrUSsocVH+Rna4uKtG+tp0pkjIjHIkciByIHIgcqRypDCEGah0mx02x0mx0mxEOE23KJ3ptKPBISXtpuP0YBOHce4ue99r73+/LlswmHH3qhqOfMWommY9SmHzNMR9URctyW32nlpe9THuv0MNm51QQpUNEqWylT0fpum0k/wCeU2hBOHUo53chagmxlJJ2LJamMJea+/4+vV01TspuIWm6U3UJK3HkoShJJTgaxi8rkWUXqgxuaK8vdBNmfnQ4dOU3JUmU1BbWomGHTYfacTp6P16ihRhTaFpNKq/TG4LyHWdNS1NSlRj+347eIwPEYGBgYGAdhXlc1XnX0by/Ryx4jA1FGKTSZPqLJkQYb6TLaA+jpurTvBfUx9XbbSzHJHffPA8Rqm30LQpSjRUYZkVrDA8RgYGBgYGBgY+5qVo2qxKGkJZNyZEZWzqEuNrQpxBtrWgwkjUoiL+PmD+PmCLT3ieQp0So6nTSpH0j4+kfCkLZUZK2o7XSpkQt9VSEmqNHKit9WpxC+Pq2nG8yiY0064w6h1uj1hqqMFvV2ehU5yN4tQWzZLjbiHUkpHofmWulszM8mEpNSkkTKCbabQQqNRZpzBrXIfckvLec0xBMicmL+MtCVpNKq9QnKa4p5mPIeiuoeZo+oWJ5JaeGq2OlVOoW8eQ5HXdG8x1fOpv0Utnr1CIgFj3qlZjwEmgpUp6Y8p16k0lyou3NppDSEoR8daEOoUhdZ0u4yan4WUqO9I1Q6xysTtVpblQ4cxneC11ZLZbKkMJXyHgxORY0L9Gm20/VPPrqmozPnZhKNSlGpVLoD0o0uyWmW2G0tt/KqdAhVEjWKjR5tNUfVRLfbYejlvS0pbQ68qVUjXdDLHusMyVs4DpokR1GncnnEtKaKHT5c5VmKdQY0I0uO4L2+HcX3uL73CkJWk0qqmlWXuZ2E/Hfiuqae2Nxw0JRsx7q2StSDunZttx1aUN07TaUkl2a2220gkN/oNXmytMNpJkaTMlbx/dXp0uhjqyFK+L4/Z8dzIR6Ww1JclOag0+b6lzIZkaTMj2j+6vRRqIuSpEiTIpjTjqJDX/hX+B47eIwPEYGBgYGBgYGB4jAwMC5DAqVBg1G61StK1Fgz6MiHLin/vx/dQaYefPlaY09UXrc0DT0SKZLdKwwMDAwMDAwMDA8RgYGBgYGBgY+NrIyKLESI/5KGllEUx9P6vWi8wGwx+ShppVqlb9Xq9zmqLTZR/yUKIsm6pFP9XX3ifq0xQY/JQjudF9h0JsZEf6l1xLTa3FPOKdddcOP+StqU916fFc+XcX3uL+i4uDEnV0Bh5xtD2raqt1amn9S1aQy6yvnWEvOIM7fUviLqGqQ2uk1/qytCLrNjptFJZebfabdbz+h4ucSKnw9Yon8Z/cZrZdklp2s6zr2ndSVcSOLOqIzim194tSDvFqUd4tSjvFqQd4tSDvFqUd4tSiN/UNrOKw2wjQHHHUepdV0qjVH4nj9nx3/AKmvbRO1Pqz0Gm16CmFwVrU2HElo7G1wdjq4Ox9bHY+tjsbXB2Mror9HeoFYnUt4cJP+xtK/B8dsDA8RgYGBgYGBgYHiMC5D+pq1tE70I7UCiBazCnFDnMEswlZhtV7DiV/znUO3CT/sbSowLkMbeIuQwMDAwLkMbeIuQx9+W+UWLKkH/c9TRxS4oxeIf8H0OuQ64p/HKFCp8CIZ8eIKh30gjvlBHfOAC47QSBce4BDVFfRqCvVKqo640dqZvS+paTWl/wBzlOHD/WzGv6CusM/JccQ2V3HKxBbC9QNFfp1ivvrpdSSm21hbe29trC2/AWqSIeiHWkI1AssLbrsVX5tVKC6REkjIyuXxKk5JYimphaluKNS+UcodYQ804052g4fjtBw/HaDh+O0HD8doOH47QaAHaDQA7QaAHaDQA7QcPx2g4fjtBoAdoNADtBoAdoNAChadpOm4RwaVyjlHKIz8phaegk1GhBq+I/T4L+TcobZ3NtdDmEV0KpU5IVDkowo21J9+Uco5RyjlHKOUco5RyjlHKCZcP2RBlL/FNJmqCaI/fzbo0dP5tx47GGvlm22fubEc/c4sUwuFCM/H6GGPoYY+hhg4MD/z6OIQKLGL26DBexJSXt8a4vvcX9FxffIv6Li++f8AAvH7Pjv47ePr8dvH4XjtgYHiMDAwMDAwMDA8RgXIXIXIXIYGPRchchchchgYFyGNvEXIYGBgYFyGNvEXIY/xv//EAEIQAAICAQEDCQQHBQYHAAAAAAABAhEDEAQFIRIgMUFRYYGR0iJxkpQGEzJSU6GxI0KzwdEUM1RigsMwQFBVZXKT/9oACAEBAAk/AGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMf/AE5jGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjGMYxjHox81ofOYxjQ0PR6MYxoaGPVjGPRj1YxjEIQhCEIQhCEIQhCEIQhCEIQhCQkISEhIQhISEhCQkJCEIQhCEIQmIQhMQhCEIQhCEIQhCEIQhCEIQhCEIQx6vmMfMZet8xjL1vmXpet8y9L1sYxj0Y9GMYx6MYxjGMYxjGMYxjGPRjGMYxj0Y9K0rWubRWlFFcyitKKK5lFFFFFFFFFFFFFFFCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIsssssssssssssssssssssssssssssssssssssssssssssYxjGMYxjGMYxy5EWl7MeU7fuNk2h+/kr+Zu/L8SN35fiRu/L8SN35fiRu/L8SN35fiRu/L8SN35fiRu/L8SN35fiRu/L8SN35eHejd+X4kbFnXu5LPrE8dcpTjXSMYxjGMYxjGMfOYx8x6NCTlKFx964oogiK8iK8iK8iC8kQXkiEfIhHyMcfIhHyIR8jZYzcsVLj3oxR8iKOnLJy8Fo1oxjGMYxjGMQhCEIQhCESqETI8GHqjF0/FmPPk/zK2vMhnS7HJSXk7MTxzbbcWq6XeiEIQjsXM/dxyl5aZoJXfJ6JOuNIywyy5VLkW7MeeGOMajGMXHo4dxLaMffJyRP67H2S6fBkk4NCEISEhCEhIQhCEIQhCEIQ/YxJSku+RG8WGrj96TIpJLgkIj9pPHLw4oWqEIjxk+H+nREmvdGzaHlk8bjNOPJ5MZG1TyL/wBP6tD+zJPwFwxJyekE0+ojWLI37P3Wh+xlTaXZJCEIQhCEIQhlj0fMev31+SOn67+SHovax1kX+kerG9OqKPDx46uuXs84+L1X25UvdHRn4y/Rn4iXnw0Y+Y+YxjGPR8xjOiajJeVEv72KlHvcRjFcZRafiPjGTj4rhp0tmP8ANGP80JKMePTp09BD8yH5nB+HQ9euCl4y4jGPirnL9EdUnL4RjGMYxjGMfPorWiFvF7M++LJcmcGnF+4ajmh9uH8/Eoo/Fb8Jcdfah+aJKUXzfGRxenS2kdEYpeRRxk+EIdbJXOTt/wBF3IXSuTj/AJlFFFFFFFFFFCEIQhCEIQhWmqaIuWzTd9vIvqZNwnHoaP2e09nVL3CFwy40/FcOY+HWu3mcIqhCEfiJ+EeOnt5uqHZ3snypP8hOOGP25dvciNRiqSXcIQhCEIQhCLLLLLLLLLLLLIqUZKmmRcsfFvF0te4tNeHFDc8fBLJ0te/tJKcIzatdkuZ0J2/DTIuVp7uY6hih0vqcjxy/0G22+LYnDF93olIgowiuCRZZZZZZZZZZZYxjGMYxjGMYxi+rz1wyR/n2kLx9WSPQZLxZKuD6LXG0MYx0uhN93EdR+8dw7j2DuuPiuZNqDackusxtrrm+EUftcva+he4YxjGMYxjGMY+Y9GMerGPRiTT6UNYp/c/df9DG4TXUx6S9hdWndpKnrFym3wSHb6safDxIKMUuCSGMYxjGMY9GMYxCEIQhCEIQhCEIRBS2lz9munkkaYhCO7Vaf3ySpP7rEJCEISEhCEhIQhCQkIQhCEIQhCEIQhC0by7RJv8AaS6l2R7EQ/adOTH97vXeRprqEI7tEIhWFcYxfTP39xP6rPDomuNrsa69EIQhCEIQhCEIQhlj0fMfNfMvSDx5fxI9PicnPHudS8mbPkx9VyjwO4xTm/8AKr86Maxx7ZsbzZO2XQvDnPmMfMfMYxjHo+Yxj1YxjGMZ+K35LTrx/oxjGMYxjGMYxjGMYxjHz6K1orWitK0oo/zs7D97FJFaVpRRRRRRRRRRRRRRRRQhCEIQhCEIQhCEIQhCOiGK/N6dcmn4qhCEIQhCEIQhCEIQhCEWWWWWWWWWWWWWWWWWWWWWdEZKPwo7D9ycZeTvSyyyyyyyyyyyyyyyyyyyxjGMYxjGMYxjGMYxjHUYxbfgP2pycn4u9Xb5FP3x4DGMYxjGMYxjGMYxjHzHoxj1Yx6MYxmHLl5La5cUqtdljxwxuT5MXHqMkOROLi6h28NWvInDkXfGNmTH8Bs+RZOCnKCXJ8LZJShOKlF9zQ0MejGMYxjHoxjGIQhCEIQhCEIQhGw7Lnz7dPPctp5Uowjg5PVBx4vlm6dyf/LN/PKL6PQey4ccsMXtUa5Up3L61rLWP2Vw5VGxbpcl+G5ZY+cMjRu/d3wZPWbBu34MnrNg3b8GT1m792/Bk9ZsG7fgyes2DdvwZPWbBu34MnrN17n5MIqPHFmv+Kbr3dHBtk5w5ezxnCcZKLkn7c5CQhCEhIQhCQhCEhIQhCEIQhCEIQhCEL/uH+1pNrFt+DFCce14s0ci8qN77FGGfDDLFNTtKcbN9bD5TN9bD5TN97D5TN9bD5TN9bD5TN87D5TMsMuTZpKEpw6HaT7u0R/iZ/w5CEIQhCEIQhCEIQyx6PR6PmvSz/yH+1r/AIHZ/wCGuf8Ajx/hx0/xM/4chljLGWMejLGWMsYxjHo+Yxj1VrDhnk5PbyFdeJ9D8/zRufLsX9he03y8yy8v67kd0fuESJ9Hc03gwY8XK+vjx5Ea7D6N5vmI+k+jmb5iPpPo7m+Yj6T6OZvmI+k+jmb5iPpPo1n+Yj6TZnhjtWRSWOUlJxqKXT4ETZJZ4bJlc3ijJRc7i0fRLaPmo+g2CWxxhtM8H1Upqb9hJ3aS7RjGMYxjGMYxj59Fa0ZIwj2yaRl5b7Io2aT975P6WbPjinsuVdr+y/8AkIY5Re8s74rtjA2SL90mv1sxZI+TNoin2S9n9aPAooooooooooQhCEIQhCI8b9p1biiblLtb1jcJwcJLulwa4G45fNZ/Wbjl81n9ZuOXzWf1m45fNZ/Wbjl81n9ZuOXzOb1m45fM5/Wbjl8zn9ZuOXzOf1m45fM5vWbjl8zm9ZuOXzWf1m45fNZ/Wbjl81n9ZuOXzOf1myvBs7yPLyHOU/al3yb7OZJ3f2OlPwI1Kk2u8QhCEIQhFllllllllllmCn96PBmdrukr/NUcmS7m/wCZs0mu7j+hs+Re+LIte/8A4uOT9yZs+T4WYaXa2ZIR93FmSc35IwqPf1vxLLLLLLLLLLGMYxjGMYxjGMYxkU/AwY3/AKUbPj8I0bPHyMETZ4/mbPH8zCjBDyMGP4UYoL3REkMYxjGMYxjGMYx8x6MY9WMejGMYxoY9GMYxjQx6MYxjGMejGMYhCEIQhCEIQhCEIQhCEIQhCEISEIQkJCEISEIQkJCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQyx6PR6PmvSyyy9GWWWWWWXoyxljLGPRljLGWMYxj0fMYx6sYxjGMYxjGMYxjGMYxjGMYxjGPn0VrRWtFaVpRRRRRWlaUUUUUUUUUUUUUUUUUf/EAEERAAECBAIECQgJBAMAAAAAAAECAwAEBREGEhATIVEHFiIwMUBBUmEVMkJUgZGisRQgJDNDcXKSwSNiY3CAgqH/2gAIAQIBAT8A/wCAlYxHK0l0MrF3CkKtHHqX9W+KOPUv6t8Ucepf1b4o49S/q3xRx6l/VvigY6Y9W+KE45lioAy9hvzRITrNQlWplk3QsbOeUtCfOUB+ZtHCE0BOSD6TcLaKf2m8ZjGYxmMKUq/TGZXeinvNNPhTzedGRWy9uyCok3HQSYw82iVolNbJAOpSognvbedmX0SzDrzhsltJUT+UTlTquIJ9eoz2vyEJ7BFWl641KMJqCDqkK5BPZf6iunQtsoZYXbYsqt7IVT2/JUpMIfu4t9aQjxsInOMqEIeeDgQgDLbsAjBWIXakhyTmlXfbF0neOcxtMmXoTwB2urSiMDU5pikpmigFx9RNzuBjGUvrqBOEDagpWPYfqOi2U7xDaUKWkLXlSTtMVaQpTdApK253l2XlOXz9u2KADM1SlS3SlMznt7j/ABC2WloKFIBSRYgi8MtCh42bZb2NqeAA8Hec4QiRS5Ub5gfIxhW3kGnW7kVlnX0qoN285hdvztB0vDkJ0PvqckpFknY3nt7TeMCsa2vsqt922tX8aMUEJxjJEdimYHQOb4QG81HZV3ZgfIxgl8PUCXSDtaUtB994dSFtuJPQUkQ8nI64ncoiAkq6IDariFpzJIEalfdg3HJPZHBy3epTrndYt7zorLn0vG7aUnYJhlHutA5vFMoZyhzraRykpzj/AK7YwDVBLzT0i4qyXtqP1CDtBipo1dRnkd19Y/8AYSopMDQ4vKNHBsjbVHNwbTFSnW6fIzM04bBtBPtjCjTlTxMiYXtyqW8s84tIWlSVC4IIIisSb9BrKw3ycjmsaPhFCqzVXkGn0nl2ssbiIxI1qq5Uk73ir923Q0dhGhwkrOjg5atTp123nPW9wjHVdEy8Kcwu7bZu6d5jANKMpIuTribLfPJ/SOdxbQ/KslrWh9oZBKfERhusu0SoAOEhlZCXUmMZBBrbryDdDzaFg+y2hrzYCgbgQ6LLVop9YTQsJI1avtM0twoHw5ow/SH67Ukhdy2FBbqzDLSGGm2m02ShIAHgOexjhkpK6jKI2Ha6n+YemHXw0lxV9UnIneBozZUAdpjMULvDtiQreNEnLTlWmJeVaBUQAlIHYIodGYo0khhscsi7i9559aUrSUqFwdhEYuw95Mf+lMJ+zun9p0q6TF9gENNrecQ0hN1LICR4mMMYeao0olS0gzLgBWd3h1HFgbNDnErTcqCQgf3EwUlJIIsQdo0K6dGEG2116RLo5IUffbZ1KZk25pyXU5tS0rME9hV2GMY0g06preQn+i/y0ncdCumACSABc7owzhpLVHQt5OWYdWl1Ku1GXzYHQOpVWly9WlVy7yenzTuMVjDM/SS4tSM7A6HIaYdmXktNJzLUbARhrBbiXUTVRRbKQUt/zAAAAAsB1TFdhQKgbegPmIwtYYhp1x6Z+XVsYqy4en/HIPiEYcVkr1MP+ZI6tjleSgujvOIEUderrFNXumG/mOrcITmWlSzfefB9wMS7hammHB6LiTCDdCTvA6rwjO8mmNDetRgmygfERTHddT5J3vsoPvHUzvitY2UlWqkTYpWQVbwIqtXmau40uZXcoFhGRMSmLanKS7Eu27yG0hKR4CMP4gZrSFJAs62lJUOpEXBELwNTlm5JvHESm71xxEpu9ccRKbvXFGw7K0Z51xgm605TfqczNCWCSR0x5Wa7sCsNd2PKzZ9GEKzoSreL9TrGxtr8zDizAWYaUTaJf7hn9A6nOyn0pKBmtaFUMq/FgUEj8WEUUp/FhtORtCb9AA/3h//EAD8RAAIBAwEEBAsFBgcAAAAAAAECAwAEEQUSITFREDJAYRMUFiIwQVJTgZGxFUJxcqIGIDRiY6EjNXBzgILB/9oACAEDAQE/AP8AgJYaVPfoXQhUBxk15NS+/wD015NTe/8A015NS+//AE15NS+/HxWvJqX3/wCmvJuX34+K037NzgErMCeRGKnge2leJ+svH0/7PSHwVwnJgfnW0a2jW0ad22j51bbe1U5laPCPg5H1rbfHWq9YyXdw3859KiNI6IoyWIAFQ21pp8CmTAP3mPrNWj2DTyG3YbbDeB3fuSdY9CsC7ryxQnbxqWMphVQHa5VD9nElEKEmtUsVt2WSMeY24jkfSaNEJL6PIyFBatbnaS7Me15sYAH4mtIk2L+DvyPmP3Nrakl7jTFgCVGTyq2muje3IaD2doZ4Ve4jt7mT1mPZoEggg07G70ks29gufivpNAA8bk/2zWp58fuc+1Vo/g7mBuTr9ek4AJqBsyP37+iNNmad/a2f7CtXbZs2HtMB0af/AJZP/wB/p6TQWAvGHOM/UVrKbF/KcbmAI+WKBwQeRpDlVPMCpJo4sbRqS6iKMFO8iom2HBPCvDR+1SkEZHrrXGxDCvN+i1Hg9JYkcUc+k02YQ3sDHgTg/HdWu223Ek67ym5vwPRanatoDzRfpU8QlQj1jhRBBII39ESbbd1bhuFa4f4YfmqGJppUjXixrUmW3sDGp4gIPScCDVnMl/Zja35XZcd9Xlq9pO8bcOKnurTG27G2P8gHy3dF6gDKw9fREoVFx0a22biJeSfU1pFpsL4dxvbqjurWLjwswiXgn1PpdKvvFJ8Mf8N9zdxrUrNb23yvXUZU1oxPiSoRgozKR0XrZkA5CmRlAJG41Ccxr0TWxvNSfPUjC7VXtylnBu62MKKZixLE5J4n02j6l1baZvyH/wAqONELlR1jk/j0eD8NcuT1QanQNkfKoNysp4g9ErxWqSSNuzvPeaurl7qUu3wHIen4VpGoG5TwMhzIo48x0BQucCn6xrGCTTMqKWY4AGSav71ruQ4OIx1R2HTNoXsBBwASWPcKByAR0SdY9Gpswspdnju+XYo5WjEgXiwwT3Vo92J7ZYy3nx7vh6uiTrHov74vdEIfMUFcc88ex21zJayrJGd44jmKs9UtrrYXa2ZD92p3WPaZjgDiavtVDK0UB48W7Lpgzf235q1b+En/AAHZtJGdQt/j9K1QZtbj8nZtFGb+M8lY1fjaguB/TP07NoC5u3PKM/3NXC7QdeakUey/s8vnXL8goqTjUy7E0q8nI7JY6JtDauDuKjAq0soLRWWMdY5O8miiE1Jo9nJI7ld7HJ3mr/T3smGTlGJ2T2ICl1ecbhX2xPX2xPX2xPV3ePdqiv6jmiMdhXhUce2TXizV4q9G3NEYJFN2FeFWvWakUUUFSDFP13/Gm7CGxUU/gyTilv8AH3K+0f6dNe5+7TPkk0Tn/W//2Q=="}),Object(h.jsxs)(x.a.Body,{children:[Object(h.jsx)("div",{className:"award-name",children:e.title}),Object(h.jsx)("div",{className:"award-position",children:e.yearAwarded}),Object(h.jsx)("div",{className:"award-summary",children:e.description})]})]})},N=[{title:"Publications",path:"/publication",exact:!0,component:I},{title:"Team",path:"/team",exact:!0,component:function(){var A=c.d,e=c.c.teamName;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(n.a,{children:Object(h.jsxs)("title",{children:[" ","Team -"," ",e," "]})}),Object(h.jsx)(s.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(h.jsx)("div",{className:"team-pg-title",children:"Meet Our Team"})}),Object(h.jsx)(s.a,{fluid:!0,className:"team-card-container",children:Object(h.jsx)(v.a,{className:"team-card-deck",children:A.map((function(A){return Object(h.jsx)(C,{member:A},A._id)}))})})]})}},{title:"Achievements",path:"/achievements",exact:!0,component:function(){var A=c.a,e=c.c.teamName;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(n.a,{children:Object(h.jsxs)("title",{children:[" ","Achievements -"," ",e," "]})}),Object(h.jsx)(s.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(h.jsx)("div",{className:"team-pg-title",children:"Achievements"})}),Object(h.jsx)(s.a,{fluid:!0,className:"team-card-container",children:Object(h.jsx)(v.a,{className:"team-card-deck",children:A.map((function(A,e){return Object(h.jsx)(M,{style:{display:"flex",flexDirection:e%2===0?"row":"row-reverse"},achievement:A},A._id)}))})})]})}}],Q=[{title:"Home",path:"/",exact:!0,component:O}],Y=function(){var A=N.filter((function(A){var e=A.title;return c.f.pages.includes(e.toUpperCase())}));return[].concat(Q,Object(l.a)(A))},P=function(){c.c.twitterHandle;var A=c.c.orgName,e=c.c.teamName,a=Y();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(r.a,{collapseOnSelect:!0,expand:"md",variant:"",fixed:"top",children:Object(h.jsxs)(s.a,{fluid:!0,children:[Object(h.jsxs)(r.a.Brand,{as:o.b,to:"/",children:[e," ","@",A]}),Object(h.jsx)(r.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsxs)(r.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsx)(i.a,{className:"me-auto"}),Object(h.jsx)(i.a,{children:a.map((function(A,e){var a=A.path,t=A.title;return Object(h.jsx)(i.a.Link,{as:o.b,to:a,children:t},e)}))})]})]})})})},G=(a(97),a(53),a(54),c.f.template.theme);"light"===G?a.e(0).then(a.t.bind(null,119,7)):"dark"===G?a.e(2).then(a.t.bind(null,120,7)):a.e(0).then(a.t.bind(null,119,7));e.default=function(){var A=c.c.teamName,e=Y().map((function(A){var e=A.path,a=A.exact,n=A.component;return Object(h.jsx)(t.a,{exact:a,path:e,children:Object(h.jsx)("div",{children:n?Object(h.jsx)(n,{}):null})},e)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(n.a,{children:Object(h.jsx)("title",{children:A})}),Object(h.jsx)(P,{}),Object(h.jsx)(t.c,{children:e})]})}},44:function(A,e){A.exports={pageSize:10,categoryPageSize:5,categoryTypes:{Journal:"Journal",Conference:"Conference",Book:"Book",Other:"Other"},groupByOptions:{NONE:"None",CATEGORY:"Category"},sortingOptions:{TITLE:"Title",AUTHOR:"Author",YEAR:"Year"}}},49:function(A,e,a){"use strict";e.a="data:image/jpeg;base64,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"},52:function(A,e,a){"use strict";var t=a(44);e.a=function(A,e){switch(e){case t.sortingOptions.AUTHOR:A.sort((function(A,e){return A.authors[0].toLowerCase()>e.authors[0].toLowerCase()?1:A.authors[0].toLowerCase()<e.authors[0].toLowerCase()?-1:0}));break;case t.sortingOptions.TITLE:A.sort((function(A,e){return A.title.toLowerCase()>e.title.toLowerCase()?1:A.title.toLowerCase()<e.title.toLowerCase()?-1:0}));break;case t.sortingOptions.YEAR:A.sort((function(A,e){return A.yearPublished>e.yearPublished?-1:A.yearPublished<e.yearPublished?1:0}));break;case"Category Title":A.sort((function(A,e){return A.category.categoryTitle.toLowerCase()>e.category.categoryTitle.toLowerCase()?1:A.category.categoryTitle.toLowerCase()<e.category.categoryTitle.toLowerCase()?-1:0}));break;default:A.sort((function(A,e){return A.title.toLowerCase()>e.title.toLowerCase()?1:A.title.toLowerCase()<e.title.toLowerCase()?-1:0})),A.sort((function(A,e){return A.yearPublished>e.yearPublished?-1:A.yearPublished<e.yearPublished?1:0}))}return A}},53:function(A,e,a){},54:function(A,e,a){},63:function(A,e,a){"use strict";var t=a(37),n=a(38),c=a(39),r=a.n(c),s=a(0),i=a.n(s),o=a(40),l=["bsPrefix","fluid","as","className"],j=i.a.forwardRef((function(A,e){var a=A.bsPrefix,c=A.fluid,s=A.as,j=void 0===s?"div":s,d=A.className,b=Object(n.a)(A,l),u=Object(o.a)(a,"container"),x="string"===typeof c?"-"+c:"-fluid";return i.a.createElement(j,Object(t.a)({ref:e},b,{className:r()(d,c?""+u+x:u)}))}));j.displayName="Container",j.defaultProps={fluid:!1},e.a=j},96:function(A,e,a){"use strict";var t=a(47);e.a=Object(t.a)("card-deck")},97:function(A,e,a){}}]);
//# sourceMappingURL=3.1f884416.chunk.js.map