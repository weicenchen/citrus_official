(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69b3fc9e"],{"159b":function(t,e,a){var i=a("da84"),r=a("fdbc"),s=a("17c2"),c=a("9112");for(var o in r){var n=i[o],l=n&&n.prototype;if(l&&l.forEach!==s)try{c(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,r=a("a640"),s=a("ae40"),c=r("forEach"),o=s("forEach");t.exports=c&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,a){"use strict";var i=a("23e7"),r=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"7db0":function(t,e,a){"use strict";var i=a("23e7"),r=a("b727").find,s=a("44d2"),c=a("ae40"),o="find",n=!0,l=c(o);o in[]&&Array(1)[o]((function(){n=!1})),i({target:"Array",proto:!0,forced:n||!l},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},8418:function(t,e,a){"use strict";var i=a("c04e"),r=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var c=i(e);c in t?r.f(t,c,s(0,a)):t[c]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),r=a("d039"),s=a("e8b5"),c=a("861d"),o=a("7b0b"),n=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),p=a("b622"),f=a("2d00"),v=p("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",h=f>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),C=u("concat"),b=function(t){if(!c(t))return!1;var e=t[v];return void 0!==e?!!e:s(t)},_=!h||!C;i({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,i,r,s,c=o(this),u=d(c,0),p=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?c:arguments[e],b(s)){if(r=n(s.length),p+r>m)throw TypeError(g);for(a=0;a<r;a++,p++)a in s&&l(u,p,s[a])}else{if(p>=m)throw TypeError(g);l(u,p++,s)}return u.length=p,u}})},"99bf":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),a("div",{staticClass:"bg-gray02 m-lg-20 m-md-15 py-lg-50 py-30"},[a("div",{staticClass:"container"},[0!==t.cartItemQty?a("div",{staticClass:"row justify-content-md-between"},[a("div",{staticClass:"col-lg-9 px-20 text-lighter text-gray05"},[t._m(1),a("div",{staticClass:"bag-item"},t._l(t.cart.carts,(function(e){return a("div",{key:e.id,staticClass:"row justify-content-between border-bottom border-gray03 mx-0 py-40"},[a("div",{staticClass:"col-md-3 text-center my-md-auto mb-40"},[e.product.title&&-1!==e.product.title.indexOf("LARGE VINTAGE EARRING")?a("img",{staticClass:"bag-img-large-earring",attrs:{src:e.product.imageUrl,alt:e.product.title}}):t._e(),e.product.title&&-1!==e.product.title.indexOf("SMALL VINTAGE EARRING")?a("img",{staticClass:"bag-img-small-earring",attrs:{src:e.product.imageUrl,alt:e.product.title}}):t._e(),e.product.title&&-1!==e.product.title.indexOf("NECKLACE")?a("img",{staticClass:"bag-img-necklace",attrs:{src:e.product.imageUrl,alt:e.product.title}}):t._e(),e.product.title&&-1!==e.product.title.indexOf("BRACELET")?a("img",{staticClass:"bag-img-bracelet",attrs:{src:e.product.imageUrl,alt:e.product.title}}):t._e()]),a("div",{staticClass:"col-md-5 bag-item-content"},[a("p",{staticClass:"pb-10"},[t._v(t._s(e.product.title))]),a("p",[t._v("Style / "+t._s(e.product.id))]),a("p",{staticClass:"pb-5"},[t._v("Color/ "+t._s(e.product.color))]),a("p",{staticClass:"d-md-none"},[t._v("QTY/ "+t._s(e.qty))]),a("p",{staticClass:"mb-md-50"},[t._v("AVAILABLE")]),a("p",{staticClass:"text-right total-price mb-5 d-md-none"},[t._v(" "+t._s(t._f("currency")(e.total))+" ")]),a("div",{staticClass:"d-flex justify-content-between"},[a("div",[a("a",{staticClass:"text-black pr-10 border-right border-black",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeCartItem(e.id)}}},[t._v(" Remove ")]),a("a",{staticClass:"text-black pl-10",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.saveItem(e.product)}}},[a("i",{staticClass:"far fa-heart"}),t._v(" Save ")])]),e.coupon?a("p",{staticClass:"text-citrus d-md-none"},[t._v(" Discounted ")]):t._e()])]),a("div",{staticClass:"col-md-1"},[a("p",{staticClass:"d-none d-md-block"},[t._v("QTY/ "+t._s(e.qty))])]),a("div",{staticClass:"col-md-2 text-right d-none d-md-block"},[a("p",{staticClass:"text-18 mb-5"},[t._v(" "+t._s(t._f("currency")(e.product.price))+" ")]),e.coupon?a("p",{staticClass:"text-citrus"},[t._v("Discounted")]):t._e()])])})),0)]),a("div",{staticClass:"summary-content text-lighter col-lg-3 bg-white border border-gray05 p-25 align-self-start mx-lg-0 mx-20"},[a("p",{staticClass:"text-gray05 pb-15 border-bottom border-gray05"},[t._v(" ORDER SUMMARY ")]),a("div",{staticClass:"d-flex justify-content-between"},[a("p",[t._v("Subtotal")]),a("p",[t._v(t._s(t._f("currency")(t.cart.total)))])]),t._m(2),t._m(3),a("div",{staticClass:"input-group mb-3 input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control px-0 bg-gray01",class:{"is-invalid":t.errors.has("couponCode")},attrs:{type:"text",name:"couponCode",placeholder:"coupon?",id:"couponCode"},domProps:{value:t.couponCode},on:{input:function(e){e.target.composing||(t.couponCode=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-gray02",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v(" add coupon ")])])]),t.errors.has("couponCode")?a("span",{staticClass:"text-danger"},[t._v("required")]):t._e(),a("div",{staticClass:"d-flex justify-content-between align-items-end"},[a("p",[t._v("Estimated Total")]),a("p",{staticClass:"total-price",class:{"line-through":t.cart.final_total!==t.cart.total}},[t._v(" "+t._s(t._f("currency")(t.cart.total))+" ")])]),t.cart.final_total!==t.cart.total?a("div",{staticClass:"d-flex justify-content-between align-items-end"},[a("p",[t._v("Discounted Total")]),a("p",{staticClass:"text-citrus total-price"},[t._v(" "+t._s(t._f("currency")(t.cart.final_total))+" ")])]):t._e(),a("a",{staticClass:"btn btn-black btn-block mt-35 py-10",attrs:{to:"/check_out"},on:{click:t.checkOut}},[t._v("CHECKOUT")])])]):a("div",{staticClass:"text-center py-lg-50 py-160"},[a("p",{staticClass:"text-30 py-10"},[t._v("Your Bag Is Empty : )")]),a("router-link",{staticClass:"btn btn-black py-10 px-50",attrs:{to:"/products/EARRINGS"}},[t._v("SHOP SOMETHING")])],1)])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-shopbag bg-black",staticStyle:{height:"300px"}},[a("h2",{staticClass:"text-center text-80 text-white text-lighter"},[t._v("SHOPPING BAG")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"selection-header border-bottom border-gray03 d-flex justify-content-between pb-10"},[a("span",[t._v("YOUR SELECTIONS")]),a("a",{staticClass:"text-gray05",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-print pr-10"}),t._v("Print")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-between"},[a("p",[t._v("Shipping")]),a("p",[t._v("Free")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-between pb-20"},[a("p",[t._v("Estimated Tax")]),a("p",[t._v("Calculate")])])}],s=(a("99af"),a("7db0"),a("4160"),a("159b"),{name:"ShoppingBag",data:function(){return{cart:[],isLoading:!1,couponCode:"",saved:JSON.parse(localStorage.getItem("savedItems"))||[]}},methods:{getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/cart");t.isLoading=!0,t.$http.get(e).then((function(e){t.cart=e.data.data,t.isLoading=!1}))},removeCartItem:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/cart/").concat(t);e.isLoading=!0,e.$http.delete(a).then((function(){e.getCart(),e.isLoading=!1,e.$bus.$emit("RemoveItem:removeCartItem",t)}))},addCouponCode:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/coupon"),a={code:t.couponCode};t.isLoading=!0,t.$http.post(e,{data:a}).then((function(e){t.getCart(),t.isLoading=!1}))},saveItem:function(t){var e=this,a=e.saved.find((function(e){return e.id===t.id}))||{};a.id!==t.id&&(e.cart.carts.forEach((function(a){a.product_id===t.id&&e.saved.push(a.product)})),localStorage.setItem("savedItems",JSON.stringify(e.saved)),window.dispatchEvent(new CustomEvent("savedItems-localstorage-changed",{detail:{storage:localStorage.getItem("savedItems")}})))},checkOut:function(){var t=this;t.$validator.validate().then((function(e){e&&t.$router.push("/check_out")}))}},computed:{cartItemQty:function(){if(this.cart.carts){var t=0;return this.cart.carts.forEach((function(e){t+=e.qty})),t}return 0}},created:function(){this.getCart()}}),c=s,o=a("2877"),n=Object(o["a"])(c,i,r,!1,null,null,null);e["default"]=n.exports},a640:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&i((function(){a.call(null,e||function(){throw 1},1)}))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-69b3fc9e.399df73a.js.map