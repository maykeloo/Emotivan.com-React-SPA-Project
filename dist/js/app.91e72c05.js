(function(){"use strict";var e={640:function(e,t,a){var n=a(963),i=a(252);const r={id:"appcontent"};function o(e,t,a,n,o,s){const l=(0,i.up)("header-bg"),d=(0,i.up)("sidebar"),f=(0,i.up)("navigation"),u=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l),(0,i._)("main",r,[(0,i.Wm)(d,{visible:o.sidebarVisible},null,8,["visible"]),(0,i.Wm)(f),(0,i.Wm)(u)])],64)}var s=a(577);const l=e=>((0,i.dD)("data-v-09b94df6"),e=e(),(0,i.Cn)(),e),d={id:"navigation"},f={class:"navigation__buttons"},u=l((()=>(0,i._)("svg",{width:"60",height:"50",viewBox:"0 0 100 100"},[(0,i._)("path",{stroke:"black",class:"line line1",d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}),(0,i._)("path",{stroke:"black",class:"line line2",d:"M 20,50 H 80"}),(0,i._)("path",{stroke:"black",class:"line line3",d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"})],-1))),c=[u];function p(e,t,a,n,r,o){const l=(0,i.up)("Logo");return(0,i.wg)(),(0,i.iD)("nav",d,[(0,i.Wm)(l,{color:[this.$store.state.sidebarVisible?"white":"black"]},null,8,["color"]),(0,i._)("div",f,[(0,i._)("button",{onClick:t[0]||(t[0]=e=>o.setSidebar()),class:(0,s.C_)([{opened:this.$store.state.sidebarVisible},"menu"]),"aria-label":"Main Menu"},c,2)])])}const v=(0,i._)("path",{d:"M31 14.9898L31 9.53674e-06L9.00661 8.57538e-06L31 14.9898ZM22 31C25.1281 31 27.2797 30.093 28.7678 28.279C30.2559 26.465 31 23.6711 31 19.8973L9.00661 8.57538e-06C6 8.44396e-06 3.20402 0.866518 1.9133 2.59954C0.652951 4.28397 0.0227767 7.03736 0.0227765 10.8597L22 31ZM22 31L6.33986e-07 16.4961L3.18551e-09 30.9271L22 31Z",fill:"black"},null,-1),h=[v];function g(e,t,a,n,r,o){return(0,i.wg)(),(0,i.iD)("svg",{width:"31",height:"31",viewBox:"0 0 31 31",style:(0,s.j5)({fill:a.color}),xmlns:"http://www.w3.org/2000/svg"},h,4)}var _={props:{color:{type:String,required:!0,default:"white"}}},m=a(744);const w=(0,m.Z)(_,[["render",g]]);var b=w;const y={class:"button"};function k(e,t,a,n,r,o){return(0,i.wg)(),(0,i.iD)("span",y,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}var x={};const B=(0,m.Z)(x,[["render",k],["__scopeId","data-v-8306ffd4"]]);var C=B,F={components:{Logo:b,Btn:C},mounted(){console.log()},methods:{setSidebar(){this.$store.commit("setSidebar"),console.log(this.$store.state.sidebarVisible)}}};const S=(0,m.Z)(F,[["render",p],["__scopeId","data-v-09b94df6"]]);var I=S;const W=e=>((0,i.dD)("data-v-b2f20c12"),e=e(),(0,i.Cn)(),e),j={key:0,id:"sidebar"},D={class:"sidebar__content"},O={class:"sidebar__leftside"},G=W((()=>(0,i._)("span",{class:"line"},"Home",-1))),L=W((()=>(0,i._)("span",{class:"line"},"About me",-1))),V=W((()=>(0,i._)("span",{class:"line"},"Services",-1))),U=W((()=>(0,i._)("span",{class:"line"},"Blog",-1))),$=W((()=>(0,i._)("div",{class:"sidebar__rightside"},[(0,i._)("span",null,"+48 514 010 099"),(0,i._)("span",null,"forge@outlook.com"),(0,i._)("div",{class:"sidebar__links"},[(0,i._)("a",{href:"",target:"_blank"},"tw"),(0,i._)("a",{href:"",target:"_blank"},"fb"),(0,i._)("a",{href:"",target:"_blank"},"in")])],-1)));function E(e,t,a,r,o,s){const l=(0,i.up)("swiping-text"),d=(0,i.up)("router-link");return(0,i.wg)(),(0,i.j4)(n.uT,{name:"sidebar"},{default:(0,i.w5)((()=>[this.$store.state.sidebarVisible?((0,i.wg)(),(0,i.iD)("aside",j,[(0,i._)("div",D,[(0,i._)("div",O,[(0,i.Wm)(d,{onClick:t[0]||(t[0]=e=>s.toggleSidebar()),to:""},{default:(0,i.w5)((()=>[this.$store.state.sidebarVisible?((0,i.wg)(),(0,i.j4)(l,{key:0,class:"toLeft"},{default:(0,i.w5)((()=>[G])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(d,{onClick:t[1]||(t[1]=e=>s.toggleSidebar()),to:""},{default:(0,i.w5)((()=>[this.$store.state.sidebarVisible?((0,i.wg)(),(0,i.j4)(l,{key:0,class:"toLeft"},{default:(0,i.w5)((()=>[L])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(d,{onClick:t[2]||(t[2]=e=>s.toggleSidebar()),to:""},{default:(0,i.w5)((()=>[this.$store.state.sidebarVisible?((0,i.wg)(),(0,i.j4)(l,{key:0,class:"toLeft"},{default:(0,i.w5)((()=>[V])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(d,{onClick:t[3]||(t[3]=e=>s.toggleSidebar()),to:""},{default:(0,i.w5)((()=>[this.$store.state.sidebarVisible?((0,i.wg)(),(0,i.j4)(l,{key:0,class:"toLeft"},{default:(0,i.w5)((()=>[U])),_:1})):(0,i.kq)("",!0)])),_:1})]),$])])):(0,i.kq)("",!0)])),_:1})}const Z={class:"overflow"};function T(e,t,a,r,o,l){return(0,i.wg)(),(0,i.iD)("div",Z,[(0,i.Wm)(n.uT,{name:"swipeup",appear:""},{default:(0,i.w5)((()=>[(0,i._)("span",{style:(0,s.j5)({color:`#${a.color}`})},[(0,i.WI)(e.$slots,"default",{},void 0,!0)],4)])),_:3})])}var M={props:{color:{type:String,required:!0}}};const q=(0,m.Z)(M,[["render",T],["__scopeId","data-v-4f1812a6"]]);var A=q,H={components:{SwipingText:A},props:{visible:{required:!0,type:Boolean,default:!1}},methods:{toggleSidebar(){this.$store.commit("setSidebar")}}};const P=(0,m.Z)(H,[["render",E],["__scopeId","data-v-b2f20c12"]]);var R=P;const N={key:0,width:"2999",height:"5368",viewBox:"0 0 2999 5368",fill:"none",xmlns:"http://www.w3.org/2000/svg"},z=(0,i.uE)('<g filter="url(#filter0_f_46_6)" data-v-a1f1f976><rect x="500" y="500" width="1368" height="2073" rx="684" fill="#FF00AA" fill-opacity="0.15" data-v-a1f1f976></rect></g><g filter="url(#filter1_f_46_6)" data-v-a1f1f976><path d="M506 3768C506 3379.74 820.744 3065 1209 3065V3065C1597.26 3065 1912 3379.74 1912 3768V4165C1912 4553.26 1597.26 4868 1209 4868V4868C820.744 4868 506 4553.26 506 4165V3768Z" fill="#FFEE00" fill-opacity="0.15" data-v-a1f1f976></path></g><g filter="url(#filter2_f_46_6)" data-v-a1f1f976><rect x="1237" y="1703" width="1262" height="1943" rx="631" fill="#0084FF" fill-opacity="0.15" data-v-a1f1f976></rect></g><defs data-v-a1f1f976><filter id="filter0_f_46_6" x="0" y="0" width="2368" height="3073" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-a1f1f976><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-a1f1f976></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-a1f1f976></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" data-v-a1f1f976></feGaussianBlur></filter><filter id="filter1_f_46_6" x="6" y="2565" width="2406" height="2803" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-a1f1f976><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-a1f1f976></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-a1f1f976></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" data-v-a1f1f976></feGaussianBlur></filter><filter id="filter2_f_46_6" x="737" y="1203" width="2262" height="2943" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-a1f1f976><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-a1f1f976></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-a1f1f976></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" data-v-a1f1f976></feGaussianBlur></filter></defs>',4),Y=[z],J={key:1,width:"5266",height:"3582",viewBox:"0 0 5266 3582",fill:"none",xmlns:"http://www.w3.org/2000/svg"},K=(0,i.uE)('<g filter="url(#filter0_f_46_6)" data-v-a1f1f976><rect x="500" y="685.062" width="2035.07" height="1408.22" rx="704.111" fill="#FF00AA" fill-opacity="0.15" data-v-a1f1f976></rect></g><g filter="url(#filter1_f_46_6)" data-v-a1f1f976><rect x="2941" y="500" width="1824.62" height="1262.59" rx="631.297" fill="#FFEE00" fill-opacity="0.15" data-v-a1f1f976></rect></g><g filter="url(#filter2_f_46_6)" data-v-a1f1f976><rect x="2061" y="1763" width="1905.64" height="1318.66" rx="659.33" fill="#0084FF" fill-opacity="0.15" data-v-a1f1f976></rect></g><defs data-v-a1f1f976><filter id="filter0_f_46_6" x="0" y="185.062" width="3035.07" height="2408.22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-a1f1f976><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-a1f1f976></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-a1f1f976></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" data-v-a1f1f976></feGaussianBlur></filter><filter id="filter1_f_46_6" x="2441" y="0" width="2824.62" height="2262.59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-a1f1f976><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-a1f1f976></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-a1f1f976></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" data-v-a1f1f976></feGaussianBlur></filter><filter id="filter2_f_46_6" x="1561" y="1263" width="2905.64" height="2318.66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-a1f1f976><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-a1f1f976></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-a1f1f976></feBlend><feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_46_6" data-v-a1f1f976></feGaussianBlur></filter></defs>',4),Q=[K];function X(e,t,a,n,r,o){return e.$isMobile()?((0,i.wg)(),(0,i.iD)("svg",N,Y)):((0,i.wg)(),(0,i.iD)("svg",J,Q))}var ee={};const te=(0,m.Z)(ee,[["render",X],["__scopeId","data-v-a1f1f976"]]);var ae=te,ne={components:{Navigation:I,Sidebar:R,HeaderBg:ae},data(){return{sidebarVisible:!1}}};const ie=(0,m.Z)(ne,[["render",o]]);var re=ie,oe=a(119);const se={class:"home"};function le(e,t,a,n,r,o){const s=(0,i.up)("header-component"),l=(0,i.up)("about-component");return(0,i.wg)(),(0,i.iD)("div",se,[(0,i.Wm)(s),(0,i.Wm)(l)])}const de=e=>((0,i.dD)("data-v-1d41cb0c"),e=e(),(0,i.Cn)(),e),fe=(0,i.Uk)(" I create pages that"),ue=(0,i.Uk)(" let you feel "),ce={class:"text__swap-wrapper overflow"},pe={key:0,class:"text__swap"},ve={key:1,class:"text__swap"},he={key:2,class:"text__swap"},ge={key:3,class:"text__swap"},_e={class:"subhead__text"},me=(0,i.Uk)("Be recognized in the "),we=(0,i.Uk)("digital"),be=(0,i.Uk)(" world."),ye={class:"buttons__wrapper"},ke=de((()=>(0,i._)("span",{class:"btn__content"},"Start project with me ",-1)));function xe(e,t,a,r,o,s){const l=(0,i.up)("swiping-text"),d=(0,i.up)("under-text"),f=(0,i.up)("v-icon"),u=(0,i.up)("btn");return(0,i.wg)(),(0,i.iD)("section",null,[(0,i._)("h1",null,[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[fe])),_:1}),(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[ue,(0,i._)("div",ce,[(0,i.Wm)(n.uT,{name:"slide-up"},{default:(0,i.w5)((()=>[0==o.textCounter?((0,i.wg)(),(0,i.iD)("span",pe," emotions. ")):1==o.textCounter?((0,i.wg)(),(0,i.iD)("span",ve," happiness. ")):2==o.textCounter?((0,i.wg)(),(0,i.iD)("span",he," pride. ")):3==o.textCounter?((0,i.wg)(),(0,i.iD)("span",ge," your worth. ")):(0,i.kq)("",!0)])),_:1})])])),_:1})]),(0,i._)("p",_e,[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[me,(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[we])),_:1}),be])),_:1})]),(0,i._)("div",ye,[(0,i.Wm)(u,null,{default:(0,i.w5)((()=>[ke,(0,i.Wm)(f,{name:"ri-chat-smile-2-line",scale:"1.5"})])),_:1})])])}const Be={class:"undertext"};function Ce(e,t){return(0,i.wg)(),(0,i.iD)("span",Be,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])}const Fe={},Se=(0,m.Z)(Fe,[["render",Ce],["__scopeId","data-v-42777f35"]]);var Ie=Se,We={components:{UnderText:Ie,SwipingText:A,Btn:C},data(){return{textCounter:0}},mounted(){setInterval((()=>{this.textCounter>2?this.textCounter=0:this.textCounter++}),3e3)}};const je=(0,m.Z)(We,[["render",xe],["__scopeId","data-v-1d41cb0c"]]);var De=je;const Oe={class:"content"},Ge=(0,i.Uk)("But, who "),Le=(0,i.Uk)("am I"),Ve=(0,i.Uk)("actually?");function Ue(e,t,a,n,r,o){const s=(0,i.up)("under-text"),l=(0,i.up)("slideup"),d=(0,i.up)("video-compontent");return(0,i.wg)(),(0,i.iD)("div",Oe,[(0,i._)("h2",null,[(0,i.Wm)(l,{class:"toLeft"},{default:(0,i.w5)((()=>[Ge,(0,i.Wm)(s,null,{default:(0,i.w5)((()=>[Le])),_:1})])),_:1}),(0,i.Wm)(l,{class:"toLeft"},{default:(0,i.w5)((()=>[Ve])),_:1})]),(0,i.Wm)(d)])}const $e={class:"overflow"},Ee={class:"hidden",ref:"slide"};function Ze(e,t,a,n,r,o){return(0,i.wg)(),(0,i.iD)("div",$e,[(0,i._)("div",Ee,[(0,i.WI)(e.$slots,"default",{},void 0,!0)],512)])}var Te={methods:{isInViewport(e){if(this.$refs.slide&&this.$refs.slide){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}},checkIf(){this.isInViewport(this.$refs.slide)&&(this.$refs.slide.classList.add("showElement"),window.removeEventListener("scroll",this.checkIf))}},mounted(){window.addEventListener("scroll",this.checkIf)}};const Me=(0,m.Z)(Te,[["render",Ze],["__scopeId","data-v-5aa4d020"]]);var qe=Me,Ae=a.p+"media/videohome1.0537a2ca.mp4";const He=e=>((0,i.dD)("data-v-77f7e263"),e=e(),(0,i.Cn)(),e),Pe={class:"text"},Re=He((()=>(0,i._)("video",{autoplay:"",muted:"",playsinline:"",loop:""},[(0,i._)("source",{src:Ae})],-1))),Ne=He((()=>(0,i._)("p",null,"Our clients are the companies and startups who make the world go round — they treat diseases, move parcels, insure cars, create jobs, send emails and publish courses.",-1))),ze=He((()=>(0,i._)("p",null,"Vast and complex businesses like these need digital experiences that are just as people-friendly as they are robust and scalable.",-1))),Ye=He((()=>(0,i._)("p",null,"Through challenging core assumptions, we shape the products and services that improve the lives of thousands every single day.",-1)));function Je(e,t,a,n,r,o){const l=(0,i.up)("slideup");return(0,i.wg)(),(0,i.iD)("div",Pe,[Re,(0,i.Wm)(l,{style:(0,s.j5)(r.styleObject)},{default:(0,i.w5)((()=>[Ne])),_:1},8,["style"]),(0,i.Wm)(l,{style:(0,s.j5)(r.styleObject)},{default:(0,i.w5)((()=>[ze])),_:1},8,["style"]),(0,i.Wm)(l,{style:(0,s.j5)(r.styleObject)},{default:(0,i.w5)((()=>[Ye])),_:1},8,["style"])])}var Ke={components:{Slideup:qe},data(){return{styleObject:{display:"flex","justify-content":"flex-end"}}}};const Qe=(0,m.Z)(Ke,[["render",Je],["__scopeId","data-v-77f7e263"]]);var Xe=Qe,et={components:{Slideup:qe,UnderText:Ie,VideoCompontent:Xe}};const tt=(0,m.Z)(et,[["render",Ue],["__scopeId","data-v-1b9e5514"]]);var at=tt,nt={name:"HomeView",components:{Navigation:I,HeaderComponent:De,AboutComponent:at}};const it=(0,m.Z)(nt,[["render",le],["__scopeId","data-v-566b7c8c"]]);var rt=it;const ot=[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,381))}],st=(0,oe.p7)({history:(0,oe.PO)("/forge/"),routes:ot});var lt=st,dt=a(907),ft=(0,dt.MT)({state(){return{sidebarVisible:!1}},getters:{},mutations:{setSidebar(e){e.sidebarVisible?e.sidebarVisible=!1:e.sidebarVisible=!0}},actions:{},modules:{}}),ut=a(828),ct=a.n(ut),pt=a(248),vt=a(517);(0,pt.Go)(vt.fw0),(0,n.ri)(re).component("v-icon",pt.xt).use(ct()).use(ft).use(lt).mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,r){if(!n){var o=1/0;for(f=0;f<e.length;f++){n=e[f][0],i=e[f][1],r=e[f][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<o&&(o=r));if(s){e.splice(f--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var f=e.length;f>0&&e[f-1][2]>r;f--)e[f]=e[f-1];e[f]=[n,i,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.16b285d3.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="forge:";a.l=function(n,i,r,o){if(e[n])e[n].push(i);else{var s,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),f=0;f<d.length;f++){var u=d[f];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[i];var c=function(t,a){s.onerror=s.onload=null,clearTimeout(p);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/forge/"}(),function(){var e={143:0};a.f.j=function(t,n){var i=a.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var r=new Promise((function(a,n){i=e[t]=[a,n]}));n.push(i[2]=r);var o=a.p+a.u(t),s=new Error,l=function(n){if(a.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};a.l(o,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,o=n[0],s=n[1],l=n[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var f=l(a)}for(t&&t(n);d<o.length;d++)r=o[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(f)},n=self["webpackChunkforge"]=self["webpackChunkforge"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(640)}));n=a.O(n)})();
//# sourceMappingURL=app.91e72c05.js.map