webpackJsonp([1],{0:function(t,e){},Gm7J:function(t,e){},I0za:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"translateForm"}},[a("div",{staticClass:"col=md-6 col-md-offset-3"},[a("form",{staticClass:"well form-inline",on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text",placeholder:"输入需要翻译的内容"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"zh"}},[t._v("Chinese")]),t._v(" "),a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"kor"}},[t._v("Korea")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russia")]),t._v(" "),a("option",{attrs:{value:"jp"}},[t._v("Jpandene")])]),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"翻译"}})])])])},staticRenderFns:[]};var s=a("VU/8")({name:"translateForm",data:function(){return{textToTranslate:"",language:""}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}},created:function(){this.language="en"}},r,!1,function(t){a("Gm7J")},null,null).exports,o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"translateOutput"}},[e("h2",[this._v(this._s(this.translateTexts))])])},staticRenderFns:[]};var l=a("VU/8")({name:"translateOutput",props:["translateTexts"]},o,!1,function(t){a("UsTP")},null,null).exports,i=a("NC6I"),u=a.n(i),c={name:"App",data:function(){return{translatesText:""}},components:{TranslateForm:s,TranslateOutput:l},methods:{translateText:function(t,e){var a=this,n="20221201001480785",r=u()(n+t+"1435660288PaOxbQCggu4qn6RKjvu1");this.$axios.get("/api?q="+t+"&from=auto&to="+e+"&appid="+n+"&salt=1435660288&sign="+r,{emulateJSON:!0}).then(function(t){a.translatesText=t.data.trans_result[0].dst,console.log(t.data.trans_result[0].dst)})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("在线翻译")]),t._v(" "),a("h5",[t._v("简单/易用/便捷")]),t._v(" "),a("TranslateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("TranslateOutput",{domProps:{textContent:t._s(t.translatesText)}})],1)},staticRenderFns:[]};var m=a("VU/8")(c,v,!1,function(t){a("I0za")},null,null).exports,p=a("8+8L"),d=a("mtWM");n.a.prototype.$axios=d.a,n.a.use(p.a),new n.a({el:"#app",render:function(t){return t(m)}})},UsTP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.98d9af83fd2f49873673.js.map