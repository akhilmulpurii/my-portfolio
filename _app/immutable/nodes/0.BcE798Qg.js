var it=Object.defineProperty;var st=(n,t,e)=>t in n?it(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var m=(n,t,e)=>(st(n,typeof t!="symbol"?t+"":t,e),e);import{s as V,n as b,o as X,q as ot,u as nt,v as rt,w as lt}from"../chunks/scheduler.Cu_nLO_j.js";import{S as j,i as q,e as W,c as H,g as ht,p as B,a as F,d as E,s as at,b as I,h as ct,q as dt,j as Y,m as z,n as ut,o as L,r as pt,v as mt,w as gt,x as vt,y as ft}from"../chunks/index.D1aC8OMG.js";import{g as T,S as P}from"../chunks/ScrollTrigger.BwB9e6p5.js";const St=!0,$t=Object.freeze(Object.defineProperty({__proto__:null,prerender:St},Symbol.toStringTag,{value:"Module"})),wt=""+new URL("../assets/galaxy.DEpC8dL1.png",import.meta.url).href;function _t(n){let t,e=`<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"><img src="${wt}" class="w-full h-full grayscale opacity-10 animate-spin" style="animation: spin 5s linear infinite;" alt="galaxy"/></div> <h1 class="text-center text-4xl z-10">THE FOLLOWING <b>WEBSITE</b> HAS BEEN APPROVED FOR<br/><b>ALL AUDIENCES</b><br/>BY THE
		INTERNATIONAL COPY PASTE REPEAT GUILD</h1> <table class="z-10 border border-1 border-black mt-10"><tbody><tr><td class="border border-1 border-black"><div class="flex flex-col justify-center items-center"><div class="bg-black text-white font-extrabold py-3 px-10">RATED</div> <p class="text-6xl font-extrabold py-3">P</p></div></td> <td class="py-3 px-5 w-[25rem] align-middle text-left font-semibold text-2xl leading-normal tracking-wide"><p class="uppercase mx-auto">contains plagiarism from stack overlflow, github and google</p></td></tr></tbody></table>`;return{c(){t=W("section"),t.innerHTML=e,this.h()},l(i){t=H(i,"SECTION",{class:!0,"data-svelte-h":!0}),ht(t)!=="svelte-qhbg2o"&&(t.innerHTML=e),this.h()},h(){B(t,"class","raleway splashscreen relative h-svh w-svw flex flex-col justify-center items-center")},m(i,s){F(i,t,s)},p:b,i:b,o:b,d(i){i&&E(t)}}}function yt(n){return X(()=>{const t=T.timeline();setTimeout(()=>{t.to(".splashscreen",{duration:.5,filter:"blur(10px)",opacity:0})},1e3),setTimeout(()=>{dispatchEvent(new CustomEvent("hide-splash"))},1500)}),[]}class bt extends j{constructor(t){super(),q(this,t,yt,_t,V,{})}}const Et=""+new URL("../assets/noise.DRyHk_ZV.png",import.meta.url).href;function G(n,t,e){return Math.max(n,Math.min(t,e))}class Tt{advance(t){var c;if(!this.isRunning)return;let e=!1;if(this.lerp)this.value=(i=this.value,s=this.to,o=60*this.lerp,r=t,function(l,d,h){return(1-h)*l+h*d}(i,s,1-Math.exp(-o*r))),Math.round(this.value)===this.to&&(this.value=this.to,e=!0);else{this.currentTime+=t;const l=G(0,this.currentTime/this.duration,1);e=l>=1;const d=e?1:this.easing(l);this.value=this.from+(this.to-this.from)*d}var i,s,o,r;(c=this.onUpdate)==null||c.call(this,this.value,e),e&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:s=1,easing:o=l=>l,onStart:r,onUpdate:c}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,r==null||r(),this.onUpdate=c}}class zt{constructor({wrapper:t,content:e,autoResize:i=!0,debounce:s=250}={}){m(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});m(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});m(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,i&&(this.debouncedResize=function(o,r){let c;return function(){let l=arguments,d=this;clearTimeout(c),c=setTimeout(function(){o.apply(d,l)},r)}}(this.resize,s),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class K{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let s=0,o=i.length;s<o;s++)i[s](...e)}on(t,e){var i;return(i=this.events[t])!=null&&i.push(e)||(this.events[t]=[e]),()=>{var s;this.events[t]=(s=this.events[t])==null?void 0:s.filter(o=>e!==o)}}off(t,e){var i;this.events[t]=(i=this.events[t])==null?void 0:i.filter(s=>e!==s)}destroy(){this.events={}}}const U=100/6;class Lt{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=1}){m(this,"onTouchStart",t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});m(this,"onTouchMove",t=>{const{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.touchMultiplier,o=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:o},this.emitter.emit("scroll",{deltaX:s,deltaY:o,event:t})});m(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});m(this,"onWheel",t=>{let{deltaX:e,deltaY:i,deltaMode:s}=t;e*=s===1?U:s===2?this.windowWidth:1,i*=s===1?U:s===2?this.windowHeight:1,e*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})});m(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new K,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class xt{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,eventsTarget:s=i,smoothWheel:o=!0,syncTouch:r=!1,syncTouchLerp:c=.075,touchInertiaMultiplier:l=35,duration:d,easing:h=p=>Math.min(1,1.001-Math.pow(2,-10*p)),lerp:a=!d&&.1,infinite:u=!1,orientation:_="vertical",gestureOrientation:Z="vertical",touchMultiplier:O=1,wheelMultiplier:C=1,autoResize:$=!0,__experimental__naiveDimensions:J=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:p,deltaY:f,event:g})=>{if(g.ctrlKey)return;const S=g.type.includes("touch"),D=g.type.includes("wheel");if(this.options.syncTouch&&S&&g.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const Q=p===0&&f===0,tt=this.options.gestureOrientation==="vertical"&&f===0||this.options.gestureOrientation==="horizontal"&&p===0;if(Q||tt)return;let y=g.composedPath();if(y=y.slice(0,y.indexOf(this.rootElement)),y.find(v=>{var x,R,M,k,N;return((x=v.hasAttribute)===null||x===void 0?void 0:x.call(v,"data-lenis-prevent"))||S&&((R=v.hasAttribute)===null||R===void 0?void 0:R.call(v,"data-lenis-prevent-touch"))||D&&((M=v.hasAttribute)===null||M===void 0?void 0:M.call(v,"data-lenis-prevent-wheel"))||((k=v.classList)===null||k===void 0?void 0:k.contains("lenis"))&&!(!((N=v.classList)===null||N===void 0)&&N.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void g.preventDefault();if(this.isSmooth=this.options.syncTouch&&S||this.options.smoothWheel&&D,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();g.preventDefault();let w=f;this.options.gestureOrientation==="both"?w=Math.abs(f)>Math.abs(p)?f:p:this.options.gestureOrientation==="horizontal"&&(w=p);const et=S&&this.options.syncTouch,A=S&&g.type==="touchend"&&Math.abs(w)>5;A&&(w=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+w,Object.assign({programmatic:!1},et?{lerp:A?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const p=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-p),this.emit()}},window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,eventsTarget:s,smoothWheel:o,syncTouch:r,syncTouchLerp:c,touchInertiaMultiplier:l,duration:d,easing:h,lerp:a,infinite:u,gestureOrientation:Z,orientation:_,touchMultiplier:O,wheelMultiplier:C,autoResize:$,__experimental__naiveDimensions:J},this.animate=new Tt,this.emitter=new K,this.dimensions=new zt({wrapper:t,content:e,autoResize:$}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=r||o,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new Lt(s,{touchMultiplier:O,wheelMultiplier:C}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:r=this.options.easing,lerp:c=!o&&this.options.lerp,onComplete:l,force:d=!1,programmatic:h=!0}={}){if(!this.isStopped&&!this.isLocked||d){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let a;if(typeof t=="string"?a=document.querySelector(t):t!=null&&t.nodeType&&(a=t),a){if(this.options.wrapper!==window){const _=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?_.left:_.top}const u=a.getBoundingClientRect();t=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):t=G(0,t,this.limit),i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!h){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:r,lerp:c,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(a,u)=>{this.isScrolling=!0,this.velocity=a-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=a,this.setScroll(this.scroll),h&&(this.targetScroll=a),u||this.emit(),u&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,e=this.limit,(t%e+e)%e):this.animatedScroll;var t,e}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClassName(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)}}function Rt(n){let t;const e=n[2].default,i=ot(e,n,n[1],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,o){i&&i.m(s,o),t=!0},p(s,o){i&&i.p&&(!t||o&2)&&nt(i,e,s,s[1],t?lt(e,s[1],o,null):rt(s[1]),null)},i(s){t||(L(i,s),t=!0)},o(s){z(i,s),t=!1},d(s){i&&i.d(s)}}}function Mt(n){let t,e;return t=new bt({}),{c(){mt(t.$$.fragment)},l(i){gt(t.$$.fragment,i)},m(i,s){vt(t,i,s),e=!0},p:b,i(i){e||(L(t.$$.fragment,i),e=!0)},o(i){z(t.$$.fragment,i),e=!1},d(i){ft(t,i)}}}function kt(n){let t,e,i,s,o,r;const c=[Mt,Rt],l=[];function d(h,a){return h[0]?0:1}return s=d(n),o=l[s]=c[s](n),{c(){t=W("div"),e=W("div"),i=at(),o.c(),this.h()},l(h){t=H(h,"DIV",{});var a=I(t);e=H(a,"DIV",{style:!0,class:!0}),I(e).forEach(E),i=ct(a),o.l(a),a.forEach(E),this.h()},h(){dt(e,"background","url("+Et+")"),B(e,"class","inset-0 w-screen h-screen opacity-40 fixed top-0 left-0 right-0 bottom-0 z-[1] pointer-events-none")},m(h,a){F(h,t,a),Y(t,e),Y(t,i),l[s].m(t,null),r=!0},p(h,[a]){let u=s;s=d(h),s===u?l[s].p(h,a):(pt(),z(l[u],1,1,()=>{l[u]=null}),ut(),o=l[s],o?o.p(h,a):(o=l[s]=c[s](h),o.c()),L(o,1),o.m(t,null))},i(h){r||(L(o),r=!0)},o(h){z(o),r=!1},d(h){h&&E(t),l[s].d()}}}function Nt(n,t,e){let{$$slots:i={},$$scope:s}=t,o=!0;return X(()=>{window.addEventListener("hide-splash",()=>{e(0,o=!1)}),T.registerPlugin(P.ScrollTrigger);const r=new xt;r.on("scroll",P.ScrollTrigger.update),T.ticker.add(c=>{r.raf(c*2e3)}),T.ticker.lagSmoothing(0)}),n.$$set=r=>{"$$scope"in r&&e(1,s=r.$$scope)},[o,s,i]}class Dt extends j{constructor(t){super(),q(this,t,Nt,kt,V,{})}}export{Dt as component,$t as universal};
