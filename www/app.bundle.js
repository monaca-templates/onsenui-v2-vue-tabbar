(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){"use strict";n.r(e);var i=n(2),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(n(16)),a=s(n(17)),u=s(n(18));function s(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{activeIndex:0,tabs:[{icon:this.md()?null:"ion-home",label:"Home",page:a.default},{icon:this.md()?null:"ion-ios-bell",label:"News",page:u.default,badge:7},{icon:this.md()?null:"ion-ios-settings",label:"Settings",page:i.default}]}},methods:{md:function(){return this.$ons.platform.isAndroid()}},computed:{title:function(){return this.tabs[this.activeIndex].label}},components:{homePage:a.default,settingsPage:i.default,newsPage:u.default}}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",[n("v-ons-toolbar",[n("div",{staticClass:"center"},[t._v(t._s(t.title))])]),t._v(" "),n("v-ons-tabbar",{attrs:{position:"auto",tabs:t.tabs,visible:!0,index:t.activeIndex},on:{"update:index":function(e){t.activeIndex=e}}})],1)},a=[];i._withStripped=!0},,,function(t,e,n){t.exports=n(9)},function(t,e,n){"use strict";var i=l(n(6)),a=l(n(11)),u=l(n(12)),s=l(n(13));function l(t){return t&&t.__esModule?t:{default:t}}n(14),n(15),i.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),a.default.use(u.default),new a.default({el:"#app",template:"<app></app>",components:{App:s.default}})},,,,function(t,e,n){"use strict";n.r(e);var i=n(5),a=n(1);for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);var s=n(0),l=Object(s.a)(a.default,i.a,i.b,!1,null,null,null);l.options.__file="src/App.vue",e.default=l.exports},,,function(t,e,n){"use strict";n.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("p",{staticStyle:{"text-align":"center"}},[this._v("\n    Change the settings.\n  ")])])};i._withStripped=!0;var a=n(0),u=Object(a.a)({},i,[],!1,null,null,null);u.options.__file="src/Settings.vue";e.default=u.exports},function(t,e,n){"use strict";n.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("p",{staticStyle:{"text-align":"center"}},[this._v("\n    Welcome home.\n  ")])])};i._withStripped=!0;var a=n(0),u=Object(a.a)({},i,[],!1,null,null,null);u.options.__file="src/Home.vue";e.default=u.exports},function(t,e,n){"use strict";n.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("p",{staticStyle:{"text-align":"center"}},[this._v("\n    Some news here.\n  ")])])};i._withStripped=!0;var a=n(0),u=Object(a.a)({},i,[],!1,null,null,null);u.options.__file="src/News.vue";e.default=u.exports}],[[8,1,2]]]);