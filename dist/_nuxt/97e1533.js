(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{483:function(t,e,n){"use strict";n.r(e);n(64),n(32),n(33),n(18),n(49);var c=n(27),r={props:["spiceData"]},l=n(13),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.spiceData.SellerData,(function(e){return n("div",{key:e._uid,staticClass:"flex justify-between"},t._l(e.body,(function(e){return n("div",{key:e._uid,staticClass:"py-6"},[t._v("\n      "+t._s(e.value)+"\n    ")])})),0)})),0)}),[],!1,null,null,null).exports,f=n(24);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),t.getSpiceData(t.$route.fullPath),t.$nuxt.$loading.finish()}))},components:{spiceDetails:o},computed:v({},Object(f.c)(["spiceDataIndi","auth"])),methods:v(v({},Object(f.b)(["loadSpiceIndi"])),{},{getSpiceData:function(t){this.loadSpiceIndi(t)},formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}})},h=Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.auth.authorised?n("div",{staticClass:"flex flex-wrap justify-center h-screen"},[n("div",{staticClass:"container flex justify-between w-11/12"},[n("div",{staticClass:"flex flex-col w-full"},[n("nuxt-link",{staticClass:"underline mb-10",attrs:{to:"/spices"}},[t._v("Back")]),t._v(" "),n("div",{staticClass:"flex justify-between items-center"},[n("div",{staticClass:"font-bold text-3xl"},[t._v(t._s(t.spiceDataIndi.name))]),t._v("\n        "+t._s(t.formatDate(t.spiceDataIndi.date))+"\n      ")]),t._v(" "),n("p",[n("b",[t._v("Specification :")]),t._v(" "+t._s(t.spiceDataIndi.specification))]),t._v(" "),n("div",{staticClass:"mt-12"},[t._m(0),t._v(" "),n("spiceDetails",{attrs:{spiceData:t.spiceDataIndi}})],1)],1)])]):n("div",{staticClass:"h-screen"},[t._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-between"},[e("div",{staticClass:"font-bold text-xl"},[this._v("Name of seller")]),this._v(" "),e("div",{staticClass:"font-bold text-xl"},[this._v("Price(PerKG)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"container flex justify-between w-11/12"},[e("div",{staticClass:"w-full flex flex-col"},[e("div",{staticClass:"text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded hover:bg-white"},[this._v("\n          You are Unauthorised to view this page. Try logging In to a\n          different account.\n        ")])])])])}],!1,null,null,null);e.default=h.exports}}]);