(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("68cbf27e",content,!0,{sourceMap:!1})},109:function(t,e,n){var content=n(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("6fafa66e",content,!0,{sourceMap:!1})},110:function(t,e,n){var content=n(296);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("700a9420",content,!0,{sourceMap:!1})},111:function(t,e,n){"use strict";n.r(e);n(64),n(32),n(33),n(18),n(49);var o=n(26),r=n(148),c=n(112),l=n(24);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={head:{script:[{src:"https://apis.google.com/js/platform.js"}]},components:{googleSignIn:c.a,profile:r.default},computed:d({},Object(l.c)(["auth"])),methods:d(d({},Object(l.b)(["authData"])),{},{onSuccess:function(data){this.authData(data)},onFailed:function(data){console.log("Failed",data)}})},h=(n(293),n(13)),component=Object(h.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"text-base text-txt-pri py-8 w-full"},[e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"container flex justify-between w-11/12"},[e("div",{staticClass:"flex justify-between"},[e("nuxt-link",{staticClass:"flex justify-center items-center",attrs:{to:"/"}},[e("img",{staticClass:"w-12",attrs:{src:"/bespiceslogo.png",alt:"BESpices"}}),this._v(" "),e("div",{staticClass:"uppercase md:text-xl font-semibold ml-2 logoText"},[this._v("\n            Bharatexotics\n          ")])])],1),this._v(" "),e("div",{staticClass:"flex items-center justify-between"},[this.auth.authorised?e("profile"):e("googleSignIn",{attrs:{clientId:"501525525432-jok4m6ci0c4pdlpiu2dneto6gnbjuclm.apps.googleusercontent.com",successCallBack:this.onSuccess,failureCallBack:this.onFailed}})],1)])])])}),[],!1,null,"3e8d3b9e",null);e.default=component.exports;installComponents(component,{Profile:n(148).default,Nav:n(111).default})},148:function(t,e,n){"use strict";n.r(e);n(64),n(32),n(33),n(18),n(49);var o=n(26),r=n(112),c=n(24);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{showMenu:!1}},components:{googleSignIn:r.a},computed:m({},Object(c.c)(["auth"])),methods:m(m({},Object(c.b)(["authData"])),{},{onSuccess:function(data){this.authData(data)},onFailed:function(data){console.log("Failed",data)}})},f=n(13),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"relative inline-block text-left"},[n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"hidden md:block title font-semibold mr-3"},[n("span",{staticClass:"font-normal"},[t._v("Welcome, ")]),t._v(t._s(t.auth.name)+"\n      ")]),t._v(" "),n("div",{staticClass:"self-end"},[n("button",{staticClass:"pointer-events-auto text-base inline-flex justify-center w-full leading-5 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button","aria-haspopup":"true","aria-expanded":"true"},on:{click:function(e){t.showMenu=!t.showMenu}}},[n("img",{staticClass:"rounded-full w-8",attrs:{src:t.auth.img,alt:"profile thumb"}})]),t._v(" "),t.showMenu?n("button",{staticClass:"fixed inset-0 h-full w-full z-30 cursor-default focus:outline-none",attrs:{tabindex:"-1"},on:{click:function(e){t.showMenu=!1}}}):t._e()])]),t._v(" "),t.showMenu?n("div",{staticClass:"origin-top-right absolute z-50 right-0 mt-2 rounded-md shadow-lg"},[n("div",{staticClass:"bg-white flex flex-col items-center justify-center"},[n("div",{staticClass:"p-8 bg-white flex flex-col items-center justify-center rounded",attrs:{role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"}},[n("img",{staticClass:"rounded-full",attrs:{src:t.auth.img,alt:"profile pic"}}),t._v(" "),n("div",{staticClass:"items-start"},[n("div",{staticClass:"text-lg font-semibold mt-8 uppercase"},[t._v("\n              "+t._s(t.auth.name)+"\n            ")]),t._v(" "),n("div",{staticClass:"text-base text-gray-700"},[t._v(t._s(t.auth.email))]),t._v(" "),n("div",[n("googleSignIn",{attrs:{clientId:"501525525432-jok4m6ci0c4pdlpiu2dneto6gnbjuclm.apps.googleusercontent.com",successCallBack:t.onSuccess,failureCallBack:t.onFailed,customButton:!0,customButtonId:"switchAc"}})],1)]),t._v(" "),n("button",{staticClass:"w-full self-center mt-4 rounded bg-gray-100 hover:bg-gray-300 py-4 px-2",attrs:{id:"switchAc"}},[t._v("\n            Switch Account\n          ")])])])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},149:function(t,e,n){"use strict";n.r(e);n(295);var o=n(13),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-col w-full items-center justify-center"},[e("div",{staticClass:"w-12 text-center text-sm"},[e("hr")]),this._v(" "),e("p",{staticClass:"text-xs my-2"},[this._v("All rights reserved © Bharatexotics 2020")])])])}],!1,null,null,null);e.default=component.exports},176:function(t,e,n){var content=n(289);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(107).default)("38dfa7e4",content,!0,{sourceMap:!1})},247:function(t,e,n){"use strict";var o={data:function(){return{loading:!1}},created:function(){this.start()},mounted:function(){this.finish()},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1}}},r=(n(287),n(13)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.loading?e("div",{staticClass:"loading-page z-50 flex justify-center"},[e("svg",{staticClass:" w-20 md:w-32",attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg"}},[e("defs",[e("linearGradient",{attrs:{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a"}},[e("stop",{attrs:{"stop-color":"#fff","stop-opacity":"0",offset:"0%"}}),this._v(" "),e("stop",{attrs:{"stop-color":"#fff","stop-opacity":".631",offset:"63.146%"}}),this._v(" "),e("stop",{attrs:{"stop-color":"#fff",offset:"100%"}})],1)],1),this._v(" "),e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)"}},[e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:"url(#a)","stroke-width":"2"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}})],1),this._v(" "),e("circle",{attrs:{fill:"#fff",cx:"36",cy:"18",r:"1"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"}})],1)])])])]):this._e()}),[],!1,null,"42e72934",null);e.a=component.exports},248:function(t,e,n){"use strict";var o=n(111),r=n(149),c={components:{Nav:o.default,Footer:r.default}},l=n(13),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-wrapper bg-gray-200 bg-no-repeat bg-right-top",staticStyle:{"background-image":"url(/illus.svg)"}},[e("Nav"),this._v(" "),e("Nuxt"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Nav:n(111).default,Footer:n(149).default})},249:function(t,e,n){n(250),t.exports=n(251)},287:function(t,e,n){"use strict";var o=n(108);n.n(o).a},288:function(t,e,n){(e=n(96)(!1)).push([t.i,".loading-page[data-v-42e72934]{position:fixed;top:0;left:0;width:100%;height:100%;background:hsla(0,0%,54.1%,.5);text-align:center;padding-top:200px;font-size:30px;font-family:sans-serif}",""]),t.exports=e},289:function(t,e,n){(e=n(96)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.bg-white{background-color:#fff!important;background-color:rgba(255,255,255,var(--bg-opacity))!important}.bg-gray-100,.bg-white{--bg-opacity:1!important}.bg-gray-100{background-color:#f7fafc!important;background-color:rgba(247,250,252,var(--bg-opacity))!important}.bg-gray-200{--bg-opacity:1!important;background-color:#edf2f7!important;background-color:rgba(237,242,247,var(--bg-opacity))!important}.bg-gray-800{--bg-opacity:1!important;background-color:#2d3748!important;background-color:rgba(45,55,72,var(--bg-opacity))!important}.hover\\:bg-white:hover{--bg-opacity:1!important;background-color:#fff!important;background-color:rgba(255,255,255,var(--bg-opacity))!important}.hover\\:bg-gray-100:hover{--bg-opacity:1!important;background-color:#f7fafc!important;background-color:rgba(247,250,252,var(--bg-opacity))!important}.hover\\:bg-gray-300:hover{--bg-opacity:1!important;background-color:#e2e8f0!important;background-color:rgba(226,232,240,var(--bg-opacity))!important}.bg-center{background-position:50%!important}.bg-right-top{background-position:100% 0!important}.bg-no-repeat{background-repeat:no-repeat!important}.bg-contain{background-size:contain!important}.border-gray-100{--border-opacity:1!important;border-color:#f7fafc!important;border-color:rgba(247,250,252,var(--border-opacity))!important}.rounded{border-radius:.25rem!important}.rounded-md{border-radius:.375rem!important}.rounded-lg{border-radius:.5rem!important}.rounded-full{border-radius:9999px!important}.border-2{border-width:2px!important}.cursor-default{cursor:default!important}.cursor-pointer{cursor:pointer!important}.inline-block{display:inline-block!important}.flex{display:flex!important}.inline-flex{display:inline-flex!important}.table{display:table!important}.hidden{display:none!important}.flex-col{flex-direction:column!important}.flex-wrap{flex-wrap:wrap!important}.items-start{align-items:flex-start!important}.items-center{align-items:center!important}.self-end{align-self:flex-end!important}.self-center{align-self:center!important}.justify-center{justify-content:center!important}.justify-between{justify-content:space-between!important}.justify-evenly{justify-content:space-evenly!important}.font-normal{font-weight:400!important}.font-semibold{font-weight:600!important}.font-bold{font-weight:700!important}.h-6{height:1.5rem!important}.h-56{height:14rem!important}.h-64{height:16rem!important}.h-full{height:100%!important}.h-screen{height:100vh!important}.text-xs{font-size:.75rem!important}.text-sm{font-size:.875rem!important}.text-base{font-size:1rem!important}.text-lg{font-size:1.125rem!important}.text-xl{font-size:1.25rem!important}.text-2xl{font-size:1.5rem!important}.text-3xl{font-size:1.875rem!important}.text-5xl{font-size:3rem!important}.leading-5{line-height:1.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-8{margin-top:2rem!important;margin-bottom:2rem!important}.mt-2{margin-top:.5rem!important}.ml-2{margin-left:.5rem!important}.mr-3{margin-right:.75rem!important}.mt-4{margin-top:1rem!important}.ml-4{margin-left:1rem!important}.mt-6{margin-top:1.5rem!important}.mt-8{margin-top:2rem!important}.mb-10{margin-bottom:2.5rem!important}.mt-12{margin-top:3rem!important}.mb-40{margin-bottom:10rem!important}.ml-auto{margin-left:auto!important}.focus\\:outline-none:focus{outline:0!important}.p-4{padding:1rem!important}.p-8{padding:2rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.py-4{padding-top:1rem!important;padding-bottom:1rem!important}.py-6{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-8{padding-top:2rem!important;padding-bottom:2rem!important}.pointer-events-auto{pointer-events:auto!important}.fixed{position:fixed!important}.absolute{position:absolute!important}.relative{position:relative!important}.inset-0{top:0!important;bottom:0!important;left:0!important}.inset-0,.right-0{right:0!important}.bottom-0{bottom:0!important}.left-0{left:0!important}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)!important}.hover\\:shadow:hover{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)!important}.fill-current{fill:currentColor!important}.text-left{text-align:left!important}.text-center{text-align:center!important}.text-white{--text-opacity:1!important;color:#fff!important;color:rgba(255,255,255,var(--text-opacity))!important}.text-gray-500{--text-opacity:1!important;color:#a0aec0!important;color:rgba(160,174,192,var(--text-opacity))!important}.text-gray-700{--text-opacity:1!important;color:#4a5568!important;color:rgba(74,85,104,var(--text-opacity))!important}.text-gray-900{--text-opacity:1!important;color:#1a202c!important;color:rgba(26,32,44,var(--text-opacity))!important}.uppercase{text-transform:uppercase!important}.capitalize{text-transform:capitalize!important}.hover\\:underline:hover,.underline{text-decoration:underline!important}.w-6{width:1.5rem!important}.w-8{width:2rem!important}.w-12{width:3rem!important}.w-20{width:5rem!important}.w-24{width:6rem!important}.w-48{width:12rem!important}.w-64{width:16rem!important}.w-4\\/5{width:80%!important}.w-11\\/12{width:91.666667%!important}.w-full{width:100%!important}.z-30{z-index:30!important}.z-50{z-index:50!important}.transform{--transform-translate-x:0!important;--transform-translate-y:0!important;--transform-rotate:0!important;--transform-skew-x:0!important;--transform-skew-y:0!important;--transform-scale-x:1!important;--transform-scale-y:1!important;transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))!important}.origin-top-right{transform-origin:top right!important}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform!important}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)!important}.duration-150{transition-duration:.15s!important}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}body{font-family:Montserrat,sans-serif;-webkit-tap-highlight-color:transparent}.page-enter-active,.page-leave-active{transition:opacity .1s}.page-enter,.page-leave-to{opacity:0}.content-wrapper{transition:background-color .25s}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:block{display:block!important}.md\\:grid{display:grid!important}.md\\:justify-between{justify-content:space-between!important}.md\\:text-xl{font-size:1.25rem!important}.md\\:text-3xl{font-size:1.875rem!important}.md\\:w-32{width:8rem!important}.md\\:w-1\\/2{width:50%!important}.md\\:gap-20{grid-gap:5rem!important;gap:5rem!important}.md\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))!important}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}',""]),t.exports=e},293:function(t,e,n){"use strict";var o=n(109);n.n(o).a},294:function(t,e,n){(e=n(96)(!1)).push([t.i,'.logoText[data-v-3e8d3b9e]{font-family:"Montserrat Alternates"}',""]),t.exports=e},295:function(t,e,n){"use strict";var o=n(110);n.n(o).a},296:function(t,e,n){(e=n(96)(!1)).push([t.i,".footer{background-color:#263238}",""]),t.exports=e},297:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));n(39);var o=n(298),r=function(){return{spiceData:{},spiceDataIndi:{},auth:{},gallery:{}}},c={SET_DATA_SPICE:function(t,data){t.spiceData=data},SET_DATA_S_INDI:function(t,data){t.spiceDataIndi=data},SET_DATA_AUTH:function(t,data){t.auth=data},SET_GALLERY:function(t,data){t.gallery=data}},l={loadSpiceData:function(t){var e=t.commit;return this.$storyapi.get("cdn/stories",{version:"published",starts_with:"spices/",sort_by:"content.Name:asc"}).then((function(t){e("SET_DATA_SPICE",t.data.stories.map((function(t){return{id:t.slug,name:t.content.Name,specification:t.content.Specification}})))}))},loadSpiceIndi:function(t,e){var n=t.commit;return this.$storyapi.get("cdn/stories"+e,{version:"published"}).then((function(t){n("SET_DATA_S_INDI",{name:t.data.story.content.Name,specification:t.data.story.content.Specification,SellerData:t.data.story.content.sellerData,date:t.data.story.content.date})}))},authData:function(t,e){return(0,t.commit)("SET_DATA_AUTH",{authorised:["4a6bd68df22664cc64c78c6fa7b6b312","bf2b7fc82574dc382845484d3d1cfd6d","3b8326627dfed40c225e9524c401cad9","ade7f13408aff903deb835d80e11c480"].indexOf(o(e.email))>-1,email:e.email,img:e.image,name:e.name})},setGallery:function(t){var e=t.commit;return this.$storyapi.get("cdn/stories/retail/",{version:"published"}).then((function(t){console.log(t),console.log(t.data.story.content.priceGallery),e("SET_GALLERY",{imdata:t.data.story.content.priceGallery})}))},setGalleryWholesale:function(t){var e=t.commit;return this.$storyapi.get("cdn/stories/wholesale/",{version:"published"}).then((function(t){console.log(t),console.log(t.data.story.content.priceGallery),e("SET_GALLERY",{imdata:t.data.story.content.priceGallery})}))}}},40:function(t,e,n){"use strict";var o={props:["error"]},r=n(13),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center"},[e("div",{staticClass:"container flex flex-col w-4/5"},[e("nuxt-link",{attrs:{to:"/"}},[e("span",{staticClass:"underline text-txt-sec"},[this._v("Go back")])]),this._v(" "),404===this.error.statusCode?e("div",{staticClass:"flex justify-center"},[e("img",{staticClass:"w-4/5",attrs:{src:"/404illus.svg",alt:"404 not found"}})]):e("div",{staticClass:"flex justify-center"},[e("p",[this._v("An error occurred")])])],1)])}),[],!1,null,null,null);e.a=component.exports}},[[249,7,1,8]]]);