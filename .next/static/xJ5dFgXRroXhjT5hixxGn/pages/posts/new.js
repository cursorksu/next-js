(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2sPA":function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/new",function(){return o("Fg0m")}])},"5Noc":function(t,e,o){"use strict";function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.d(e,"a",(function(){return _}));var r=o("q1tI"),i=o.n(r),a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),s=new Uint8Array(16);function l(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(s)}for(var c=[],d=0;d<256;++d)c[d]=(d+256).toString(16).substr(1);var u=function(t,e){var o=e||0,n=c;return[n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],"-",n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]],n[t[o++]]].join("")};var p=function(t,e,o){var n=e&&o||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var r=(t=t||{}).random||(t.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e)for(var i=0;i<16;++i)e[n+i]=r[i];return e||u(r)},f=o("vOnD"),b=o("UrF2"),m=f.a.input.withConfig({displayName:"FormStyles__Input",componentId:"sc-2t346z-0"})(["box-sizing:border-box;width:100%;display:block;line-height:40px;border:none;background:transparent;font-size:14px;padding:0 12px;font-family:'Raleway',sans-serif;color:rgba (0,0,0,0.4);border-bottom:2px solid #ddd;&:placeholder-shown{font-family:'Raleway',sans-serif;color:rgba (0,0,0,0.4);}&:focus{outline:none;border-bottom:2px solid #f3969a;}"]),y=f.a.textarea.withConfig({displayName:"FormStyles__Textarea",componentId:"sc-2t346z-1"})(["box-sizing:border-box;width:100%;height:150px;display:block;line-height:1.2;background:transparent;font-size:14px;padding:12px;font-family:'Raleway',sans-serif;color:rgba (0,0,0,0.4);border:2px solid #ccc;&:placeholder-shown{font-family:'Raleway',sans-serif;color:rgba (0,0,0,0.4);}&:focus{outline:none;border:2px solid #f3969a;}"]),g=f.a.label.withConfig({displayName:"FormStyles__Label",componentId:"sc-2t346z-2"})(["font-family:'Comfortaa',sans-serif;display:block;box-sizing:border-box;margin-bottom:20px;"]),h=f.a.button.withConfig({displayName:"FormStyles__Button",componentId:"sc-2t346z-3"})(["border:2px solid #f3969a;box-sizing:border-box;width:100%;display:block;line-height:40px;background:#f3969a;color:#fff;font-family:'Comfortaa',sans-serif;text-transform:uppercase;transition:background-color 0.3s ease-in-out;&:hover{background:rgba(243,150,154,0.8);}"]),w=Object(f.a)(b.e).withConfig({displayName:"FormStyles__ErrorMess",componentId:"sc-2t346z-4"})(["font-size:14px;"]),x=i.a.createElement;function v(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function O(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?v(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var _=function(t){var e=t.onSubmitForm,o=t.currentPost,n=Object(r.useState)(o||{id:"",title:"",body:""}),i=n[0],a=n[1],s=Object(r.useState)(""),l=s[0],c=s[1];return x("form",{action:"#",onSubmit:function(t){if(t.preventDefault(),i.title&&i.body){var o=O({},i,{title:i.title.trim(),body:i.body.trim()});e(o),a({id:"",title:"",body:""})}else c("Why do you want to send an empty posts? Write something!")}},l&&x(w,null,l),x(g,{htmlFor:"title"},x("p",null,"Post`s title"),x(m,{placeholder:"Input Title of Post",id:"title",type:"text",value:i.title,onChange:function(t){var e=p().substring(0,6);c(""),a(O({},i,{id:e,title:t.target.value}))}})),x(g,{htmlFor:"body"},x("p",null,"Post`s text"),x(y,{placeholder:"Input Body of Post",id:"body",value:i.body,onChange:function(t){c(""),a(O({},i,{body:t.target.value}))}})),x(h,{type:"submit"},o?"Edit posts":"Create posts"))}},Fg0m:function(t,e,o){"use strict";o.r(e);var n=o("o0o1"),r=o.n(n),i=o("q1tI"),a=o.n(i),s=o("vDqi"),l=o.n(s),c=o("nOHt"),d=o("xccu"),u=o("9Hbq"),p=o("5Noc"),f=o("m8ie"),b=a.a.createElement;e.default=function(){var t=Object(i.useState)(!1),e=t[0],o=t[1],n=Object(i.useState)(""),a=n[0],s=n[1],m=Object(c.useRouter)(),y=function(){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.awrap(m.push("/"));case 2:o(!1),s("");case 4:case"end":return t.stop()}}),null,null,null,Promise)};return Object(i.useEffect)((function(){}),[]),b(u.a,null,b(f.a,{heading:"Create new post now!"},b(p.a,{onSubmitForm:function(t){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return s(t.title),o(!0),e.next=4,r.a.awrap(l()({method:"post",url:"".concat("https://simple-blog-api.crew.red/posts"),data:t}));case 4:case"end":return e.stop()}}),null,null,null,Promise)}})),e&&b(d.a,{onClose:y,title:a},b("p",null,"Success!!!"),b("p",null,"The post was successfully added!")))}},xccu:function(t,e,o){"use strict";o.d(e,"a",(function(){return u}));var n=o("q1tI"),r=o.n(n),i=o("vOnD"),a=i.a.div.withConfig({displayName:"ModalStyles__Backdrop",componentId:"qw3am3-0"})(["position:fixed;left:0;right:0;top:0;bottom:0;z-index:999;background-color:rgba(243,150,154,0.3);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;"]),s=(i.a.div.withConfig({displayName:"ModalStyles__Wrapper",componentId:"qw3am3-1"})(["min-width:400px;padding-top:16px;position:relative;background:#f3969a;@media (max-width:600px){min-width:100%;}"]),i.a.button.withConfig({displayName:"ModalStyles__BtnClose",componentId:"qw3am3-2"})(["position:absolute;top:20px;right:20px;background-color:$main-light;border-radius:50%;border:2px solid #f3969a;padding:0;width:40px;height:40px;display:flex;align-items:center;justify-content:center;transition:background-color 0.3s ease-in-out;& svg{transition:fill 0.3s ease-in-out;fill:#f3969a;width:22px;height:22px;}&:hover{background:#f3969a;& svg{fill:#fff;width:22px;height:22px;}}"])),l=i.a.div.withConfig({displayName:"ModalStyles__Content",componentId:"qw3am3-3"})(["padding:0;"]),c=o("m8ie"),d=r.a.createElement,u=function(t){var e=t.title,o=t.onClose,n=t.children;return d(a,null,d(c.a,{heading:e},d(s,{type:"button",onClick:function(){o()}},d("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 492 492"},d("path",{d:"M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872 c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872 c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052 L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116 c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952 c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116 c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"}))),d(l,null,n)))}}},[["2sPA",0,2,1,3]]]);