(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edb2064a"],{2758:function(t,e,n){"use strict";n.r(e);var a,i,o=n("e475"),r=n("2877"),s=Object(r["a"])(o["a"],a,i,!1,null,null,null);e["default"]=s.exports},"31a6":function(t,e,n){"use strict";e["a"]={props:{coordinates:{required:!0},color:{required:!1,default:"rgba(0,0,255, 0.2)"},width:{required:!1,default:5}},computed:{geoJson:function(){return{type:"Feature",geometry:{type:"LineString",coordinates:this.coordinates}}}}}},de76:function(t,e,n){"use strict";n("159b");var a=n("31a6"),i=n("755e");e["a"]={name:"google-line",render:function(){return null},mixins:[a["a"]],data:function(){return{features:null,dataLayer:null}},mounted:function(){this.initialize()},watch:{coordinates:function(){var t=this;this.features.forEach((function(e){return t.dataLayer.remove(e)})),this.features=this.dataLayer.addGeoJson(this.geoJson)},color:function(){this.setStyles()},width:function(){this.setStyles()}},computed:{google:i["gmapApi"]},methods:{initialize:function(){var t=this,e=this.$parent.$mapPromise?this.$parent.$mapPromise:this.$parent.$parent.$mapPromise?this.$parent.$parent.$mapPromise:null;e&&e.then((function(e){t.dataLayer=new t.google.maps.Data({map:e}),t.features=t.dataLayer.addGeoJson(t.geoJson),t.setStyles()}))},setStyles:function(){var t=this;this.dataLayer.setStyle((function(){return{strokeColor:t.color,strokeWeight:t.width}}))}}}},e475:function(t,e,n){"use strict";var a=n("de76");e["a"]=a["a"]}}]);
//# sourceMappingURL=chunk-edb2064a.c9677bd0.js.map