import{S as t,i as r,s as e,H as a,e as c,t as o,k as l,l as s,c as n,a as h,g as p,d as u,n as i,b as f,f as d,E as m,I as v,G as E,h as g,J as b}from"../../chunks/vendor-f871edcf.js";/* empty css                                                       */function k(t,r,e){const a=t.slice();return a[2]=r[e],a}function x(t){let r,e,a,l=t[5].message+"";return{c(){r=c("p"),e=o("Error: "),a=o(l)},l(t){r=n(t,"P",{});var c=h(r);e=p(c,"Error: "),a=p(c,l),c.forEach(u)},m(t,c){d(t,r,c),m(r,e),m(r,a)},p:E,d(t){t&&u(r)}}}function y(t){let r,e=t[0],a=[];for(let c=0;c<e.length;c+=1)a[c]=P(k(t,e,c));return{c(){r=c("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){r=n(t,"DIV",{class:!0});var e=h(r);for(let r=0;r<a.length;r+=1)a[r].l(e);e.forEach(u),this.h()},h(){f(r,"class","product-wrapper svelte-1fz6at8")},m(t,e){d(t,r,e);for(let c=0;c<a.length;c+=1)a[c].m(r,null)},p(t,c){if(1&c){let o;for(e=t[0],o=0;o<e.length;o+=1){const l=k(t,e,o);a[o]?a[o].p(l,c):(a[o]=P(l),a[o].c(),a[o].m(r,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=e.length}},d(t){t&&u(r),b(a,t)}}}function P(t){let r,e,a,s,v,E,b,k,x,y,P,H,I,S,j=t[2].product+"",z=t[2].price+"",N=t[2]["expiry date"]+"";return{c(){r=c("div"),e=c("a"),a=c("h1"),s=o(j),v=l(),E=c("p"),b=o("£"),k=o(z),x=l(),y=c("p"),P=o("Expiration date: "),H=o(N),S=l(),this.h()},l(t){r=n(t,"DIV",{class:!0});var c=h(r);e=n(c,"A",{href:!0,class:!0});var o=h(e);a=n(o,"H1",{});var l=h(a);s=p(l,j),l.forEach(u),v=i(o),E=n(o,"P",{});var f=h(E);b=p(f,"£"),k=p(f,z),f.forEach(u),x=i(o),y=n(o,"P",{});var d=h(y);P=p(d,"Expiration date: "),H=p(d,N),d.forEach(u),o.forEach(u),S=i(c),c.forEach(u),this.h()},h(){f(e,"href",I="/products/"+t[2].product),f(e,"class","svelte-1fz6at8"),f(r,"class","product svelte-1fz6at8")},m(t,c){d(t,r,c),m(r,e),m(e,a),m(a,s),m(e,v),m(e,E),m(E,b),m(E,k),m(e,x),m(e,y),m(y,P),m(y,H),m(r,S)},p(t,r){1&r&&j!==(j=t[2].product+"")&&g(s,j),1&r&&z!==(z=t[2].price+"")&&g(k,z),1&r&&N!==(N=t[2]["expiry date"]+"")&&g(H,N),1&r&&I!==(I="/products/"+t[2].product)&&f(e,"href",I)},d(t){t&&u(r)}}}function H(t){let r,e;return{c(){r=c("p"),e=o("fetching...")},l(t){r=n(t,"P",{});var a=h(r);e=p(a,"fetching..."),a.forEach(u)},m(t,a){d(t,r,a),m(r,e)},p:E,d(t){t&&u(r)}}}function I(t){let r,e,g,b,k,P,I,S,j,z,N,A,D={ctx:t,current:null,token:null,hasCatch:!0,pending:H,then:y,catch:x,error:5};return a(t[1],D),{c(){r=c("h1"),e=o("HEll0"),g=l(),b=c("form"),k=c("label"),P=o("Search product"),I=l(),S=c("input"),j=l(),z=c("input"),N=l(),A=s(),D.block.c(),this.h()},l(t){r=n(t,"H1",{});var a=h(r);e=p(a,"HEll0"),a.forEach(u),g=i(t),b=n(t,"FORM",{method:!0,action:!0});var c=h(b);k=n(c,"LABEL",{for:!0});var o=h(k);P=p(o,"Search product"),o.forEach(u),I=i(c),S=n(c,"INPUT",{type:!0,id:!0,name:!0}),j=i(c),z=n(c,"INPUT",{type:!0}),c.forEach(u),N=i(t),A=s(),D.block.l(t),this.h()},h(){f(k,"for","product"),f(S,"type","text"),f(S,"id","product"),f(S,"name","product"),S.required="yes",f(z,"type","submit"),z.value="Submit",f(b,"method","get"),f(b,"action","http://localhost:3000/products/search/")},m(t,a){d(t,r,a),m(r,e),d(t,g,a),d(t,b,a),m(b,k),m(k,P),m(b,I),m(b,S),m(b,j),m(b,z),d(t,N,a),d(t,A,a),D.block.m(t,D.anchor=a),D.mount=()=>A.parentNode,D.anchor=A},p(r,[e]){v(D,t=r,e)},i:E,o:E,d(t){t&&u(r),t&&u(g),t&&u(b),t&&u(N),t&&u(A),D.block.d(t),D.token=null,D=null}}}function S(t,r,e){let a=[];const c=fetch("http://localhost:4000/api/db").then((t=>t.json())).then((t=>{e(0,a=t),console.log(t)}));return[a,c]}export default class extends t{constructor(t){super(),r(this,t,S,I,e,{})}}
