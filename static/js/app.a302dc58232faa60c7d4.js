webpackJsonp([1],{"7P1p":function(t,e){},ISJN:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(t){n("ISJN")},null,null).exports,s=n("/ocq"),r=n("DqiZ"),c={components:{},data:function(){return{titleData:["Something better will happen","To be a better man","Is life always this hard or just when you're a kid?","It is nice to be needed","The future belongs to those who believe in the beauty of their dreams"],poem:{content:"相逢祗有梦魂间，可奈梦随春漏短，不到江南。",title:"浪淘沙·莫上玉楼看",author:"韩疁"},showData:[{id:1,title:"BLOG",desc:"Write Sth Down",src:""},{id:2,title:"Projects",desc:"Sth I Coded",src:""}]}},computed:{getTitle:function(){var t=Math.floor(5*Math.random());return this.titleData[t]}},watch:{},mounted:function(){this.initRhthy()},methods:{initRhthy:function(){var t=this;r.load(function(e){console.log(e),"success"===e.status&&(t.poem={content:e.data.content,title:e.data.origin.title,author:e.data.origin.author})})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"zq-wrap"},[n("h2",{staticClass:"title"},[t._v(t._s(t.getTitle))]),t._v(" "),n("div",{staticClass:"poem"},[n("p",[t._v("\n      "+t._s(t.poem.content)+"\n    ")]),t._v(" "),n("p",[t._v("\n      【"+t._s(t.poem.title)+"】\n      "),n("span",{staticClass:"author"},[t._v(t._s(t.poem.author))])])]),t._v(" "),n("div",{staticClass:"flex"},t._l(t.showData,function(e){return n("div",{key:e.id},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.desc))])])}),0),t._v(" "),n("div",{staticClass:"wave"})])},staticRenderFns:[]};var u=n("VU/8")(c,l,!1,function(t){n("7P1p")},"data-v-0f1a3a8a",null).exports;a.a.use(s.a);var p=new s.a({routes:[{path:"/",name:"layout",component:u}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:o},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.a302dc58232faa60c7d4.js.map