(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67c8aae2"],{"1dde":function(t,e,n){var o=n("d039"),r=n("b622"),i=n("2d00"),c=r("species");t.exports=function(t){return i>=51||!o((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var o=n("861d"),r=n("e8b5"),i=n("b622"),c=i("species");t.exports=function(t,e){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6a51":function(t,e,n){"use strict";n("9968")},8418:function(t,e,n){"use strict";var o=n("c04e"),r=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var c=o(e);c in t?r.f(t,c,i(0,n)):t[c]=n}},9968:function(t,e,n){},"99af":function(t,e,n){"use strict";var o=n("23e7"),r=n("d039"),i=n("e8b5"),c=n("861d"),a=n("7b0b"),d=n("50c4"),u=n("8418"),s=n("65f0"),h=n("1dde"),f=n("b622"),l=n("2d00"),b=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",m=l>=51||!r((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),w=h("concat"),g=function(t){if(!c(t))return!1;var e=t[b];return void 0!==e?!!e:i(t)},y=!m||!w;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,n,o,r,i,c=a(this),h=s(c,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?c:arguments[e],g(i)){if(r=d(i.length),f+r>p)throw TypeError(v);for(n=0;n<r;n++,f++)n in i&&u(h,f,i[n])}else{if(f>=p)throw TypeError(v);u(h,f++,i)}return h.length=f,h}})},b0c0:function(t,e,n){var o=n("83ab"),r=n("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,d="name";o&&!(d in i)&&r(i,d,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},d7ef:function(t,e,n){"use strict";n.r(e);var o=n("7a23"),r=Object(o["createVNode"])("iframe",{style:{width:"100%",height:"100%"},src:"http://10.10.0.27:6650/#/"},null,-1);function i(t,e,n,i,c,a){var d=Object(o["resolveComponent"])("dv-scale-box");return Object(o["openBlock"])(),Object(o["createBlock"])(d,null,{default:Object(o["withCtx"])((function(){return[r]})),_:1})}n("b0c0");var c=n("ade3"),a=Object(o["withScopeId"])("data-v-ed3bbdd0"),d=a((function(t,e,n,r,i,c){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"main-content",style:c.defaultSize},[Object(o["renderSlot"])(t.$slots,"default")],4)})),u=(n("99af"),{name:"dv-scale-box",props:{width:{default:"1920px"},height:{default:"1080px"},mode:{type:String,default:"fill"}},computed:{defaultSize:function(){return{width:this.width,height:this.height}}},data:function(){return{contentWidth:0,contentHeight:0}},methods:{resize:function(t){var e=document.documentElement.clientWidth,n=document.documentElement.clientHeight,o=e/this.contentWidth,r=n/this.contentHeight;switch(t){case"fill":o=e/this.contentWidth,r=n/this.contentHeight;break;case"horizontal":o=e/this.contentWidth,r=o;break;case"vertical":r=n/this.contentHeight,o=r;break}this.$el.style.transform="scaleX(".concat(o,") scaleY(").concat(r,")")},handle:function(){this.resize(this.mode)}},mounted:function(){var t=this.$el.getBoundingClientRect(),e=t.width,n=t.height;this.contentWidth=e,this.contentHeight=n,this.handle(),window.addEventListener("resize",this.handle)},beforeUnmount:function(){window.removeEventListener("resize",this.handle)}});n("6a51");u.render=d,u.__scopeId="data-v-ed3bbdd0";var s=u,h={components:Object(c["a"])({},s.name,s)};h.render=i;e["default"]=h},e8b5:function(t,e,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);