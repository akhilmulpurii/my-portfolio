import{H as u}from"../chunks/control.CYgJF_JY.js";import{_ as f,p as _}from"../chunks/lodash.DWHDtgT4.js";import{s as g,n as c}from"../chunks/scheduler.Cu_nLO_j.js";import{S as j,i as P,e as h,t as l,c as v,b as x,f as m,d as p,a as y,j as d}from"../chunks/index.D1aC8OMG.js";function S(e,t){throw new u(e,t)}new TextEncoder;function b({params:e}){const t=f.find(_,({urlSlug:a})=>a===e.urlSlug);if(f.isEmpty(t))S(404,"Not found");else return{project:t}}const O=Object.freeze(Object.defineProperty({__proto__:null,load:b},Symbol.toStringTag,{value:"Module"}));function E(e){let t,a,n=e[0].title+"",s,o;return{c(){t=h("main"),a=l("Project Page - "),s=l(n),o=l(" W.I.P")},l(i){t=v(i,"MAIN",{});var r=x(t);a=m(r,"Project Page - "),s=m(r,n),o=m(r," W.I.P"),r.forEach(p)},m(i,r){y(i,t,r),d(t,a),d(t,s),d(t,o)},p:c,i:c,o:c,d(i){i&&p(t)}}}function w(e,t,a){let{data:n}=t;const{project:s}=n;return e.$$set=o=>{"data"in o&&a(1,n=o.data)},[s,n]}class T extends j{constructor(t){super(),P(this,t,w,E,g,{data:1})}}export{T as component,O as universal};
