!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),r=function(t){return t&&t.__esModule?t:{default:t}}(n),o={install:function(t){t.__highcharts_plugin_installed||(t.__highcharts_plugin_installed=!0,t.component("highcharts",r.default))}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(5),o=n(r),u=i(6),s=n(u),h=i(7),c=n(h);e.default={props:{options:{type:Object,required:!0},type:{type:String,default:"highcharts"},width:{type:String,default:"100%"},height:{type:String,default:"250px"}},data:function(){return{id:"highcharts-"+(new Date).getTime()}},watch:{options:function(){this.buildChart()},width:function(){this.buildChart()},height:function(){this.buildChart()}},computed:{styles:function(){return{width:isNaN(this.width)?this.width:this.width+"%",height:isNaN(this.height)?this.height:this.height+"%"}}},methods:{buildChart:function(){switch(this.type){case"stock":case"highstock":c.default.chart(this.id,this.options);break;case"maps":case"highmaps":s.default.chart(this.id,this.options);break;default:o.default.chart(this.id,this.options)}}},mounted:function(){this.buildChart()}}},function(t,e,i){var n=i(3)(i(1),i(4),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,i,n){var r,o=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var h=Object.create(s.computed||null);Object.keys(n).forEach(function(t){var e=n[t];h[t]=function(){return e}}),s.computed=h}return{esModule:r,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:t.styles,attrs:{id:t.id}})},staticRenderFns:[]}},function(t,e){t.exports=require("highcharts")},function(t,e){t.exports=require("highcharts/highmaps")},function(t,e){t.exports=require("highcharts/highstock")},function(t,e,i){t.exports=i(0)}]);