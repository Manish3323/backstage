/*! For license information please see d7f522d9.1faa2ebf.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[852772],{603905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(667294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),f=o,d=p["".concat(l,".").concat(f)]||p[f]||h[f]||n;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},650987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});a(827378);var r=a(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function n(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const s={title:"Backstage Service Catalog released in alpha",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",image:"https://backstage.io/blog/assets/6/header.png"},i=void 0,l={permalink:"/blog/2020/06/22/backstage-service-catalog-alpha",source:"@site/../microsite/blog/2020-06-22-backstage-service-catalog-alpha.md",title:"Backstage Service Catalog released in alpha",description:"TL;DR Today we are announcing the availability of the Backstage Service Catalog in alpha. This has been the community\u2019s most requested feature. Even if the catalog is not ready for production yet, we think this release already demonstrates how Backstage can provide value for your company right out of the box. With your early input and feedback, we hope to create a stronger generally available product.",date:"2020-06-22T00:00:00.000Z",formattedDate:"June 22, 2020",tags:[],readingTime:3.7,hasTruncateMarker:!0,authors:[{name:"Stefan \xc5lund, Spotify",url:"http://twitter.com/stalund"}],frontMatter:{title:"Backstage Service Catalog released in alpha",author:"Stefan \xc5lund, Spotify",authorURL:"http://twitter.com/stalund",image:"https://backstage.io/blog/assets/6/header.png"},prevItem:{title:"How to enable authentication in Backstage using Passport",permalink:"/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport"},nextItem:{title:"Starting Phase 2: The Service Catalog",permalink:"/blog/2020/05/22/phase-2-service-catalog"}},c={authorsImageUrls:[void 0]},u=[{value:"You asked, we listened",id:"you-asked-we-listened",level:2},{value:"What is the service catalog?",id:"what-is-the-service-catalog",level:2},{value:"What does alpha mean?",id:"what-does-alpha-mean",level:2}],p={toc:u};function h(e){var{components:t}=e,s=n(e,["components"]);return(0,r.kt)("wrapper",o({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR")," Today we are announcing the availability of the Backstage Service Catalog in alpha. This has been the community\u2019s most requested feature. Even if the catalog is not ready for production yet, we think this release already demonstrates how Backstage can provide value for your company right out of the box. With your early input and feedback, we hope to create a stronger generally available product."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(322062).Z,width:"2354",height:"1427"})),(0,r.kt)("h2",o({},{id:"you-asked-we-listened"}),"You asked, we listened"),(0,r.kt)("p",null,"When we ",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/blog/2020/03/16/announcing-backstage"}),"released")," Backstage as an open source project back in March, it didn\u2019t have all of the features that our internal version of Backstage has today. One of the main reasons we pushed to release it, despite it being in such a nascent stage, was so that we could start building the next phase of Backstage around the community\u2019s needs. We\u2019ve had hours of conversations with so many of you \u2014 thank you to everyone who has jumped on a video call, attended one of our working sessions, or watched our ",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/demos"}),"demo videos")," and provided feedback via ",(0,r.kt)("a",o({parentName:"p"},{href:"https://discord.com/invite/MUpMjP2"}),"Discord"),"."),(0,r.kt)("p",null,"Today, we wanted to share what we\u2019ve learned from talking with many of you at companies that have shown interest in adopting Backstage. Here it is in short:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The problem of scaling autonomous engineering organisations without creating too much complexity is not a unique problem to Spotify."),(0,r.kt)("li",{parentName:"ul"},'The "extensible frontend platform" that we focused on in the first phase of the project is not the only thing you are looking for.')),(0,r.kt)("p",null,"With these insights we decided to re-focus our efforts towards the most requested feature: the Backstage Service Catalog."),(0,r.kt)("h2",o({},{id:"what-is-the-service-catalog"}),"What is the service catalog?"),(0,r.kt)("p",null,"The Backstage Service Catalog \u2014 actually, a software catalog, since it includes more than just services \u2014 is a centralized system that keeps track of ownership and metadata for all the software in your ecosystem (services, websites, libraries, data pipelines, etc). The catalog is built around the concept of ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/architecture-decisions/adrs-adr002"}),"metadata yaml files")," stored together with the code, which are then harvested and visualized in Backstage."),(0,r.kt)("p",null,"This was our pitch for the virtues of a service catalog when we first ",(0,r.kt)("a",o({parentName:"p"},{href:"https://backstage.io/blog/2020/05/22/phase-2-service-catalog"}),"announced")," it as part of Phase 2:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"With a single catalog, Backstage makes it easy for a team to manage ten services \u2014 and makes it possible for your company to manage thousands of them. Because the system is practically self-organizing, it requires hardly any oversight from a governing or centralized team. Developers can get a uniform overview of all their software and related resources (such as server utilisation, data pipelines, pull request status), regardless of how and where they are running, as well as an easy way to onboard and manage those resources.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"On top of that, we have found that the service catalog is a great way to organise the infrastructure tools you use to manage the software as well. This is how Backstage creates one developer portal for all your tools. Rather than asking teams to jump between different infrastructure UI\u2019s (and incurring additional cognitive overhead each time they make a context switch), most of these tools can be organised around the entities in the catalog:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(320804).Z,width:"959",height:"276"})),(0,r.kt)("p",null,"You\u2019ll be able to see many of these virtues in action with this alpha release \u2014 though, with some caveats, of course, since it is, after all, an alpha."),(0,r.kt)("h2",o({},{id:"what-does-alpha-mean"}),"What does alpha mean?"),(0,r.kt)("p",null,'Alpha is our shorthand for "we don\u2019t yet think Backstage is ready for production, but we\u2019d love for you to test it and provide us with feedback". However, you should be able to try out the functionality of the service catalog:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Register software components (",(0,r.kt)("a",o({parentName:"li"},{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/examples"}),"examples"),")"),(0,r.kt)("li",{parentName:"ol"},"See all components represented in the catalog"),(0,r.kt)("li",{parentName:"ol"},"Search across all components"),(0,r.kt)("li",{parentName:"ol"},"Get an overview of the metadata of the components"),(0,r.kt)("li",{parentName:"ol"},"Click through and get more information about a specific component (service, website, etc)"),(0,r.kt)("li",{parentName:"ol"},"See example tooling (plugins) that helps you manage the component")),(0,r.kt)("p",null,"As with most alpha releases, you should expect things to change quite a lot until we reach the beta stage (we\u2019re targeting the end of summer). There are obviously many things missing as well, but we wanted to start collecting feedback early and make it easier to see the end-to-end flow."),(0,r.kt)("p",null,"If you have feedback or questions, please open a ",(0,r.kt)("a",o({parentName:"p"},{href:"https://github.com/backstage/backstage/issues"}),"GitHub issue"),", ping us on ",(0,r.kt)("a",o({parentName:"p"},{href:"https://discord.gg/EBHEGzX"}),"Discord chat")," or send us an email at ",(0,r.kt)("a",o({parentName:"p"},{href:"mailto:backstage-interest@spotify.com"}),"backstage-interest@spotify.com")," \ud83d\ude4f"),(0,r.kt)("p",null,"To get regular product updates and news about the Backstage community, sign up for the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://info.backstage.spotify.com/newsletter_subscribe"}),"Backstage newsletter"),"."))}h.isMDXComponent=!0},320804:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/tabs-abfdf72185d3ceb1d92c4237f7f78809.png"},322062:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/header-93351b4254863212ce2c149a2a5ea388.png"},862525:e=>{var t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var s,i,l=o(e),c=1;c<arguments.length;c++){for(var u in s=Object(arguments[c]))a.call(s,u)&&(l[u]=s[u]);if(t){i=t(s);for(var p=0;p<i.length;p++)r.call(s,i[p])&&(l[i[p]]=s[i[p]])}}return l}},541535:(e,t,a)=>{var r=a(862525),o=60103,n=60106;var s=60109,i=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),n=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),s=p("react.provider"),i=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var h="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||d}function y(){}function b(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var v=b.prototype=new y;v.constructor=b,r(v,m.prototype),v.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,a){var r,n={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(n[r]=t[r]);var l=arguments.length-2;if(1===l)n.children=a;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];n.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===n[r]&&(n[r]=l[r]);return{$$typeof:o,type:e,key:s,ref:i,props:n,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,a,r,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case n:l=!0}}if(l)return s=s(l=e),e=""===r?"."+T(l,0):r,Array.isArray(s)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),x(s,t,a,"",(function(e){return e}))):null!=s&&(S(s)&&(s=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+T(i=e[c],c);l+=x(i,t,a,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(i=e.next()).done;)l+=x(i=i.value,t,a,u=r+T(i,c++),s);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function N(e,t,a){if(null==e)return e;var r=[],o=0;return x(e,r,"","",(function(e){return t.call(a,e,o++)})),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var B={current:null};function C(){var e=B.current;if(null===e)throw Error(f(321));return e}},827378:(e,t,a)=>{a(541535)}}]);