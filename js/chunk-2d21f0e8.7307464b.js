(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f0e8"],{d7cb:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"media-file-launcher"},[t("UiFileUploader",{ref:"launcherUploader",attrs:{path:e.path},on:{success:e.onUploadSuccess,queuecomplete:e.onQueueComplete}})],1)},i=[],o=(t("159b"),t("b0c0"),t("fa30")),c={name:"MediaFileLauncher",components:{UiFileUploader:o["j"]},props:{path:{type:String,required:!0}},data:function(){return{uploadedFiles:[]}},methods:{onUploadSuccess:function(e){var n=this;Array.isArray(e)||(e=[e]),e.forEach((function(e){n.$emit("input",{component:"CmsMediaFile",props:{href:e.url,text:e.name,secondary:"",icon:"mime:"+e.mimetype,name:e.name,size:e.size,mimetype:e.mimetype}})}))},onQueueComplete:function(){this.$emit("cancel")}},mounted:function(){this.$refs.launcherUploader.open()}},r=c,u=t("2877"),s=Object(u["a"])(r,a,i,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2d21f0e8.7307464b.js.map