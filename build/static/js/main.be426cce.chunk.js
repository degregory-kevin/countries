(this["webpackJsonpsite-react"]=this["webpackJsonpsite-react"]||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a.n(i),n=a(24),s=a.n(n),u=a(11),r=a(2),o=a(0),l=function(){return Object(o.jsxs)("div",{className:"logo",children:[Object(o.jsx)("img",{src:"./img/logo192.png",alt:"logo"}),Object(o.jsx)("h3",{children:"React World"})]})},m=function(){return Object(o.jsxs)("div",{className:"navigation",children:[Object(o.jsx)(u.b,{exact:!0,to:"/",activeClassName:"nav-active",children:"Acceuil"}),Object(o.jsx)(u.b,{exact:!0,to:"about",activeClassName:"nav-active",children:"\xc0 propos"})]})},j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(m,{}),Object(o.jsx)(l,{}),Object(o.jsx)("h1",{children:"\xc0 propos"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dicta aliquam inventore minima quisquam maxime, cum beatae quos praesentium consequatur in dolorem ipsam asperiores culpa quidem a harum, perferendis earum reiciendis ipsa voluptatem. Unde, culpa hic quis quam sapiente laborum magnam cumque ea molestias nemo, voluptatem facilis eius. Atque harum est quod minima enim nulla amet itaque quisquam rem aspernatur!"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex magni dolorum amet sed earum eos qui molestiae eum voluptate. Ipsam laudantium aliquam exercitationem dolorum, ut et eaque ab in suscipit, cum non quaerat nulla molestiae repellendus voluptates. Officia quia reiciendis alias placeat enim totam aperiam, quos illum non dignissimos, quasi vero? Debitis, quis rem? Laborum sit eveniet aut nihil deleniti voluptates, asperiores, harum ipsum magnam, autem est recusandae voluptate tempora? Ipsa ea, quidem eum nemo animi dolores iste aperiam voluptates quibusdam fugiat expedita delectus nisi nulla qui earum facilis. Illo architecto sint, eius tempora, provident sequi ea corporis numquam, saepe reprehenderit cupiditate sit a eaque? Non illo quod, obcaecati fuga, enim ad, earum laboriosam iusto consequatur laudantium perspiciatis ea neque voluptas quibusdam reprehenderit itaque quas optio? Hic, molestiae architecto nam, laboriosam commodi mollitia nisi autem doloribus, ipsum laborum natus aut."})]})},d=a(9),p=a(26),b=a.n(p),O=function(e){var t,a=e.country;return Object(o.jsxs)("li",{className:"card",children:[Object(o.jsx)("img",{src:a.flag,alt:"flag"}),Object(o.jsx)("div",{className:"data-container",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:a.name}),Object(o.jsx)("li",{children:a.capital}),Object(o.jsxs)("li",{children:["Pop. ",(t=a.population,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))]})]})})]})},h=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)([]),s=Object(d.a)(n,2),u=s[0],r=s[1],l=Object(i.useState)(!0),m=Object(d.a)(l,2),j=m[0],p=m[1],h=Object(i.useState)(40),x=Object(d.a)(h,2),v=x[0],f=x[1],q=Object(i.useState)(""),g=Object(d.a)(q,2),N=g[0],S=g[1];return Object(i.useEffect)((function(){j&&b.a.get("http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag").then((function(e){c(e.data),p(!1)}));!function(){var e=Object.keys(a).map((function(e){return a[e]})).sort((function(e,t){return t.population-e.population}));e.length=v,r(e)}()}),[a,v,j]),Object(o.jsxs)("div",{className:"countries",children:[Object(o.jsxs)("div",{className:"sort-container",children:[Object(o.jsx)("input",{type:"range",min:"1",max:"250",value:v,onChange:function(e){return f(e.target.value)}}),Object(o.jsx)("ul",{children:["Africa","America","Asia","Europe","Oceania"].map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"radio",value:e,id:e,checked:e===N,onChange:function(e){return S(e.target.value)}}),Object(o.jsx)("label",{htmlFor:e,children:e})]},e)}))})]}),Object(o.jsx)("div",{className:"cancel",children:N&&Object(o.jsx)("h5",{onClick:function(){return S("")},children:"Annuler recherche"})}),Object(o.jsx)("ul",{className:"countries-list",children:u.filter((function(e){return e.region.includes(N)})).map((function(e){return Object(o.jsx)(O,{country:e},e.name)}))})]})},x=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(m,{}),Object(o.jsx)(l,{}),Object(o.jsx)(h,{})]})},v=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Erreur 404"})})},f=function(){return Object(o.jsx)(u.a,{children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/",exact:!0,component:x}),Object(o.jsx)(r.a,{path:"/about",exact:!0,component:j}),Object(o.jsx)(r.a,{component:v})]})})};a(58);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.be426cce.chunk.js.map