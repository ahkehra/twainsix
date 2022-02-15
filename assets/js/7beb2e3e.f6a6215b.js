"use strict";(self.webpackChunkProjectNexus=self.webpackChunkProjectNexus||[]).push([[319],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1536:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Nexus Kernel V9.4",d={unversionedId:"notes/lavender/v9.4",id:"notes/lavender/v9.4",title:"Nexus Kernel V9.4",description:"By : Prashant",source:"@site/docs/notes/lavender/v9.4.md",sourceDirName:"notes/lavender",slug:"/notes/lavender/v9.4",permalink:"/project-nexus/docs/notes/lavender/v9.4",editUrl:"https://github.com/projects-nexus/project-nexus/edit/master/docs/notes/lavender/v9.4.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Nexus Kernel V9.5",permalink:"/project-nexus/docs/notes/lavender/latest"},next:{title:"Team",permalink:"/project-nexus/docs/teams"}},c=[{value:"Changelogs",id:"changelogs",children:[],level:3},{value:"Notes",id:"notes",children:[],level:3},{value:"Credits",id:"credits",children:[],level:3},{value:"Download",id:"download",children:[],level:3},{value:"Redmi Note 7 : Download",id:"redmi-note-7--download",children:[{value:"For Android 9+",id:"for-android-9",children:[],level:5}],level:3}],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nexus-kernel-v94"},"Nexus Kernel V9.4"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"By : ",(0,o.kt)("a",{parentName:"strong",href:"https://t.me/ImPrashantt"},"Prashant"))),(0,o.kt)("h3",{id:"changelogs"},"Changelogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upstream to v4.4.300"),(0,o.kt)("li",{parentName:"ul"},"Fw: update touchscreen fw ( lavender-q-oss )"),(0,o.kt)("li",{parentName:"ul"},"Import latest battery changes (lavender-q-oss)"),(0,o.kt)("li",{parentName:"ul"},"Arm/dts: sdm660: Recalculate energy model"),(0,o.kt)("li",{parentName:"ul"},"Arm/dts: sdm660: Use efficient frequencies"),(0,o.kt)("li",{parentName:"ul"},"Blkdev: set nr request max to 64"),(0,o.kt)("li",{parentName:"ul"},"Sched/Tune: Introduce SchedTune Assist","[v3]"),(0,o.kt)("li",{parentName:"ul"},"Kernel: introduce CPUSets Assist"),(0,o.kt)("li",{parentName:"ul"},"Lavender: defconfig: Disable xt_qtaguid ( fixed upload speed on network indicator)"),(0,o.kt)("li",{parentName:"ul"},"Lot's of misc fixes")),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Don't flash any module which changes cpu frequency.")),(0,o.kt)("h3",{id:"credits"},"Credits"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://t.me/wHo_EM_i"},"wHo_EM_i")," for new script to detect Android version and remove bpf patches on A11/10"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://t.me/ImSp1Dy"},"ImSp1Dy")," for efficient freq , Fixing wrong freq and Recalculate energy model")),(0,o.kt)("h3",{id:"download"},"Download"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"We are")," not responsible for bricked devices. Please\ndo some research if you have any concerns about features included in this package\nbefore flashing it! ",(0,o.kt)("strong",{parentName:"p"},"YOU")," are choosing to make these modifications and if\nyou point the finger at me for messing up your device, we will laugh at you. Hard and a lot."))),(0,o.kt)("h3",{id:"redmi-note-7--download"},"Redmi Note 7 : ",(0,o.kt)("a",{parentName:"h3",href:"https://sourceforge.net/projects/nexuskernel/files/Lavender/"},"Download")),(0,o.kt)("h5",{id:"for-android-9"},"For Android 9+"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Filename: ",(0,o.kt)("inlineCode",{parentName:"p"},"Nexus-EAS-x9.4-Qti-Old-lavender-2022-01-2728.zip"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Nexus-EAS-x9.4-New-lavender-2022-01-2741.zip"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Nexus-EAS-x9.4-Old-lavender-2022-01-2741.zip")),(0,o.kt)("p",{parentName:"div"},"MD5 Checksum: ",(0,o.kt)("inlineCode",{parentName:"p"},"427f836c3def628ff09486c77ce700aa"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"6d92c7afec8003bb548a2efd39b08519"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"0e24f686e9843fa085b15274be592a25"),"\t"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Arranged accordingly.")))))}u.isMDXComponent=!0}}]);