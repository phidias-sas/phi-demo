(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68c01766","chunk-6a40635e"],{5948:function(e,t,i){"use strict";var n=i("d526");t["a"]=n["a"]},"6a6e":function(e,t,i){"use strict";i("f0de")},7151:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("a",{staticClass:"media-file",attrs:{href:e.href,target:"_system"}},[i("UiItem",{staticClass:"ui-clickable",attrs:{text:e.text,secondary:e.secondary,icon:e.icon}})],1)},a=[]},"72ea":function(e,t,i){"use strict";i.r(t);var n=i("ff7c"),a=i("5948"),r=(i("6a6e"),i("2877")),s=Object(r["a"])(a["a"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"733e":function(e,t,i){"use strict";i.r(t);var n=i("8e22"),a=i("fea8"),r=(i("7508"),i("2877")),s=Object(r["a"])(a["a"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},7508:function(e,t,i){"use strict";i("f075")},"8e22":function(e,t,i){"use strict";var n=i("cde2");i.d(t,"a",(function(){return n["a"]})),i.d(t,"b",(function(){return n["b"]}))},ba8d:function(e,t,i){"use strict";var n=i("72ea"),a=i("fa30");t["a"]={name:"MediaFileEditor",components:{MediaFile:n["default"],UiIcon:a["m"]},props:{value:{type:Object,required:!0}},data:function(){return{innerValue:null,isEditing:!1}},watch:{value:{immediate:!0,handler:function(e){this.innerValue=JSON.parse(JSON.stringify(e)),this.isEditing=this.isEmpty}}},computed:{isEmpty:function(){return!this.innerValue.href&&!this.innerValue.text&&!this.innerValue.secondary},sanitizedValue:function(){return{href:this.innerValue.href,text:this.innerValue.text||"Sin título",secondary:this.innerValue.secondary,icon:this.innerValue.icon||"mdi:file"}}},methods:{accept:function(){this.$emit("input",JSON.parse(JSON.stringify(this.innerValue))),this.isEditing=!1},cancel:function(){this.innerValue=JSON.parse(JSON.stringify(this.value)),this.isEditing=!1,this.isEmpty&&this.$emit("delete")}}}},cde2:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"media-file-editor"},[i("div",{staticClass:"media-file-wrapper"},[i("MediaFile",e._b({staticClass:"media-element"},"MediaFile",e.sanitizedValue,!1)),i("UiIcon",{staticClass:"ui-clickable",attrs:{value:"mdi:pencil media-file-icon"},on:{click:function(t){e.isEditing=!0}}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"isEditing"}],staticClass:"file-editor-form"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.innerValue.text,expression:"innerValue.text"}],staticClass:"ui-native",attrs:{type:"text",placeholder:"Titulo"},domProps:{value:e.innerValue.text},on:{input:function(t){t.target.composing||e.$set(e.innerValue,"text",t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.innerValue.secondary,expression:"innerValue.secondary"}],staticClass:"ui-native",attrs:{type:"text",placeholder:"Descripción"},domProps:{value:e.innerValue.secondary},on:{input:function(t){t.target.composing||e.$set(e.innerValue,"secondary",t.target.value)}}}),i("div",{staticClass:"file-editor-form-footer"},[i("button",{staticClass:"ui-button --main",attrs:{type:"button"},on:{click:e.accept}},[e._v("OK")]),i("button",{staticClass:"ui-button --cancel",attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancelar")])])])])},a=[]},d526:function(e,t,i){"use strict";var n=i("fa30");t["a"]={name:"MediaFile",components:{UiItem:n["q"]},props:{href:{type:String,required:!1,default:"#"},text:{type:String,required:!1,default:"Sin título"},secondary:{type:String,required:!1,default:""},icon:{type:String,required:!1,default:"mdi:file"}}}},f075:function(e,t,i){},f0de:function(e,t,i){},fea8:function(e,t,i){"use strict";var n=i("ba8d");t["a"]=n["a"]},ff7c:function(e,t,i){"use strict";var n=i("7151");i.d(t,"a",(function(){return n["a"]})),i.d(t,"b",(function(){return n["b"]}))}}]);
//# sourceMappingURL=chunk-68c01766.3ed941a5.js.map