import{S as t,i as r,s as e,H as s,l as c,f as a,I as o,G as n,d as l,K as p,e as h,t as i,c as u,a as f,g as d,E as g,k as m,n as v,b as E,h as k,J as b}from"../../chunks/vendor-f871edcf.js";import{p as x}from"../../chunks/stores-42bc2d7a.js";import"../../chunks/[product].svelte_svelte&type=style&lang-66900c76.js";function y(t,r,e){const s=t.slice();return s[6]=r[e],s}function j(t){let r,e,s,c=t[9].message+"";return{c(){r=h("p"),e=i("Error: "),s=i(c)},l(t){r=u(t,"P",{});var a=f(r);e=d(a,"Error: "),s=d(a,c),a.forEach(l)},m(t,c){a(t,r,c),g(r,e),g(r,s)},p:n,d(t){t&&l(r)}}}function I(t){let r,e=t[0],s=[];for(let c=0;c<e.length;c+=1)s[c]=P(y(t,e,c));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();r=c()},l(t){for(let r=0;r<s.length;r+=1)s[r].l(t);r=c()},m(t,e){for(let r=0;r<s.length;r+=1)s[r].m(t,e);a(t,r,e)},p(t,c){if(1&c){let a;for(e=t[0],a=0;a<e.length;a+=1){const o=y(t,e,a);s[a]?s[a].p(o,c):(s[a]=P(o),s[a].c(),s[a].m(r.parentNode,r))}for(;a<s.length;a+=1)s[a].d(1);s.length=e.length}},d(t){b(s,t),t&&l(r)}}}function P(t){let r,e,s,c,o,n,p,b,x,y,j,I,P,z,D,G,H=t[6].product+"",N=t[6].price+"",V=t[6]["expiry date"]+"";return{c(){r=h("div"),e=h("div"),s=h("h1"),c=i(H),o=m(),n=h("p"),p=i("£"),b=i(N),x=m(),y=h("p"),j=i("Expiration date: "),I=i(V),P=m(),z=h("img"),G=m(),this.h()},l(t){r=u(t,"DIV",{class:!0});var a=f(r);e=u(a,"DIV",{class:!0});var h=f(e);s=u(h,"H1",{});var i=f(s);c=d(i,H),i.forEach(l),o=v(h),n=u(h,"P",{});var g=f(n);p=d(g,"£"),b=d(g,N),g.forEach(l),x=v(h),y=u(h,"P",{});var m=f(y);j=d(m,"Expiration date: "),I=d(m,V),m.forEach(l),P=v(h),z=u(h,"IMG",{src:!0}),h.forEach(l),G=v(a),a.forEach(l),this.h()},h(){z.src!==(D=t[6].images)&&E(z,"src",D),E(e,"class","product svelte-porazy"),E(r,"class","product-wrapper svelte-porazy")},m(t,l){a(t,r,l),g(r,e),g(e,s),g(s,c),g(e,o),g(e,n),g(n,p),g(n,b),g(e,x),g(e,y),g(y,j),g(y,I),g(e,P),g(e,z),g(r,G)},p(t,r){1&r&&H!==(H=t[6].product+"")&&k(c,H),1&r&&N!==(N=t[6].price+"")&&k(b,N),1&r&&V!==(V=t[6]["expiry date"]+"")&&k(I,V),1&r&&z.src!==(D=t[6].images)&&E(z,"src",D)},d(t){t&&l(r)}}}function z(t){let r,e;return{c(){r=h("p"),e=i("fetching...")},l(t){r=u(t,"P",{});var s=f(r);e=d(s,"fetching..."),s.forEach(l)},m(t,s){a(t,r,s),g(r,e)},p:n,d(t){t&&l(r)}}}function D(t){let r,e={ctx:t,current:null,token:null,hasCatch:!0,pending:z,then:I,catch:j,error:9};return s(t[1],e),{c(){r=c(),e.block.c()},l(t){r=c(),e.block.l(t)},m(t,s){a(t,r,s),e.block.m(t,e.anchor=s),e.mount=()=>r.parentNode,e.anchor=r},p(r,[s]){o(e,t=r,s)},i:n,o:n,d(t){t&&l(r),e.block.d(t),e.token=null,e=null}}}function G(t,r,e){let s;p(t,x,(t=>e(2,s=t)));const{slug:c}=s.params;console.log(c);let a=s.params.product,o=[];const n=fetch(`http://localhost:4000/api/db/${a}`).then((t=>t.json())).then((t=>{e(0,o=t),console.log(t)}));return[o,n]}export default class extends t{constructor(t){super(),r(this,t,G,D,e,{})}}