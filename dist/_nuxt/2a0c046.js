(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{482:function(t,e,r){"use strict";r.r(e);var n={props:["name","specs","id"]},c=r(13),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nuxt-link",{attrs:{to:"/spices/"+t.id}},[r("div",{staticClass:"flex items-center py-6"},[r("div",{staticClass:"ml-4"},[r("div",{staticClass:"text-lg font-semibold text-gray-900"},[t._v("\n          "+t._s(t.name)+"\n        ")]),t._v(" "),r("div",{staticClass:"text-sm text-gray-500"},[t._v("\n          "+t._s(t.specs)+"\n        ")])])])])],1)}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,r){"use strict";r.r(e);r(64),r(32),r(33),r(18),r(49);var n=r(27),c=r(482),l=r(24);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={mounted:function(){this.getSpiceData()},components:{spicelist:c.default},computed:d({},Object(l.c)(["spiceData","auth"])),methods:d(d({},Object(l.b)(["loadSpiceData"])),{},{getSpiceData:function(){this.loadSpiceData()}})},v=r(13),component=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return this.auth.authorised?e("div",[e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"container flex justify-between w-11/12"},[e("div",{staticClass:"w-full flex flex-col bg-white"},[e("div",{staticClass:"text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded"},[this._v("\n          List of Products\n        ")]),this._v(" "),this._l(this.spiceData,(function(t){return e("div",{key:t.id,staticClass:"border-2 border-gray-100 hover:shadow hover:bg-gray-100"},[e("spicelist",{attrs:{name:t.name,specs:t.specification,id:t.id}})],1)}))],2)])])]):e("div",{staticClass:"h-screen"},[this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-wrap justify-center"},[e("div",{staticClass:"container flex justify-between w-11/12"},[e("div",{staticClass:"w-full flex flex-col"},[e("div",{staticClass:"text-2xl md:text-3xl p-4 border-2 border-gray-100 rounded"},[this._v("\n          Sorry You are not authorised to View this page!\n        ")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Spicelist:r(482).default})}}]);