(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18985e0a"],{"159b":function(t,e,i){var r=i("da84"),a=i("fdbc"),s=i("17c2"),c=i("9112");for(var n in a){var o=r[n],l=o&&o.prototype;if(l&&l.forEach!==s)try{c(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,i){"use strict";var r=i("b727").forEach,a=i("a640"),s=i("ae40"),c=a("forEach"),n=s("forEach");t.exports=c&&n?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,i){"use strict";var r=i("23e7"),a=i("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"7db0":function(t,e,i){"use strict";var r=i("23e7"),a=i("b727").find,s=i("44d2"),c=i("ae40"),n="find",o=!0,l=c(n);n in[]&&Array(1)[n]((function(){o=!1})),r({target:"Array",proto:!0,forced:o||!l},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(n)},8418:function(t,e,i){"use strict";var r=i("c04e"),a=i("9bf2"),s=i("5c6c");t.exports=function(t,e,i){var c=r(e);c in t?a.f(t,c,s(0,i)):t[c]=i}},"99af":function(t,e,i){"use strict";var r=i("23e7"),a=i("d039"),s=i("e8b5"),c=i("861d"),n=i("7b0b"),o=i("50c4"),l=i("8418"),d=i("65f0"),u=i("1dde"),p=i("b622"),g=i("2d00"),m=p("isConcatSpreadable"),f=9007199254740991,v="Maximum allowed index exceeded",b=g>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),h=u("concat"),y=function(t){if(!c(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)},C=!b||!h;r({target:"Array",proto:!0,forced:C},{concat:function(t){var e,i,r,a,s,c=n(this),u=d(c,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?c:arguments[e],y(s)){if(a=o(s.length),p+a>f)throw TypeError(v);for(i=0;i<a;i++,p++)i in s&&l(u,p,s[i])}else{if(p>=f)throw TypeError(v);l(u,p++,s)}return u.length=p,u}})},a640:function(t,e,i){"use strict";var r=i("d039");t.exports=function(t,e){var i=[][t];return!!i&&r((function(){i.call(null,e||function(){throw 1},1)}))}},bbf6:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),i("div",{staticClass:"banner-product text-center bg-gray02",style:{height:t.browserHeight}},[i("div",{staticClass:"d-flex justify-content-md-between justify-content-md-end justify-content-center banner-img"},[i("div",{staticClass:"model-img bg-left d-md-block d-none",style:{backgroundImage:"url("+t.singleProduct.imgModelUrl+")"}}),i("div",{staticClass:"product-img d-flex align-items-center justify-content-md-end justify-content-center"},["EARRINGS"===t.singleProduct.category?i("img",{staticClass:"product-img-earring mb-md-0 mb-60 mt-lg-0 mt-md-60 mt-110",attrs:{src:t.singleProduct.imageUrl,alt:t.singleProduct.title}}):"NECKLACES"===t.singleProduct.category?i("img",{staticClass:"product-img-necklace mb-md-0 mb-20 mt-lg-0 mt-md-50 mt-90",attrs:{src:t.singleProduct.imageUrl,alt:t.singleProduct.title}}):i("img",{staticClass:"product-img-bracelet mb-md-0 mb-20 mt-lg-0 mt-md-60 mt-80",attrs:{src:t.singleProduct.imageUrl,alt:t.singleProduct.title}})])]),i("div",{staticClass:"product-page-icon"},[i("a",{staticClass:"fas fa-share-alt text-gray05 mr-md-30 mr-20",attrs:{href:"#"}}),i("a",{staticClass:"heart-toggle far fa-heart text-gray05",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.saveItem(t.singleProduct)}}})]),i("div",{staticClass:"product-page-card px-md-0 px-30"},[i("div",{staticClass:"product-page-title text-lighter text-gray05 px-xl-60 pb-10 border-bottom border-gray04"},[t._v(" "+t._s(t.singleProduct.title)+" ")]),i("div",{staticClass:"product-page-price pt-10"},[t._v(" "+t._s(t._f("currency")(t.singleProduct.price))+" ")]),i("div",{staticClass:"product-page-option d-flex justify-content-center align-items-center py-lg-20 pt-10 pb-5"},["black"===t.singleProduct.color?i("div",{staticClass:"product-color bg-black rounded-circle"}):i("div",{staticClass:"product-color bg-white rounded-circle border border-gray03"}),i("div",{staticClass:"form-group mb-0"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.singleProduct.color,expression:"singleProduct.color"}],staticClass:"form-control border-0 bg-trans px-50",attrs:{id:"color"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.singleProduct,"color",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"black"}},[t._v("Black")]),i("option",{attrs:{value:"white"}},[t._v("White")])])])]),i("div",{staticClass:"quantity pb-lg-20 pb-10"},[i("a",{staticClass:"btn btn-trans",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.quantity=t.quantity-1}}},[i("span",{staticClass:"text-20 text-black"},[t._v("－")])]),i("span",{staticClass:"px-20"},[t._v(t._s(t.quantity))]),i("a",{staticClass:"btn btn-trans",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.quantity=t.quantity+1}}},[i("span",{staticClass:"text-20 text-black"},[t._v("+")])])]),i("div",{staticClass:"available pb-lg-30 pb-md-20 pb-i6p-30 pb-20"},[1===t.singleProduct.is_enabled?i("div",[t._v("AVAILABLE")]):i("div",[t._v("UNAVAILABLE")])]),i("div",{staticClass:"product-page-add-btn mx-xl-30 pb-30 pb-md-0"},[1===t.singleProduct.is_enabled?i("button",{staticClass:"btn btn-black btn-block py-10",attrs:{type:"button"},on:{click:function(e){return t.addToCart(t.singleProduct.id,t.quantity)}}},[t._v(" ADD TO SHOPPING BAG ")]):i("button",{staticClass:"btn btn-gray03 btn-block py-10",attrs:{type:"button",disabled:""}},[t._v(" SOLD OUT ")])])])]),i("div",{staticClass:"py-md-60 bg-gray01"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row flex-md-row-reverse justify-content-md-between"},[i("div",{staticClass:"col-lg-3 col-md-4 bg-white"},[i("div",{staticClass:"product-detail-img text-center d-none d-md-block"},["EARRINGS"===t.singleProduct.category?i("img",{staticClass:"product-detail-img-earring py-lg-70 pt-50 pb-30",attrs:{src:t.singleProduct.imageUrl,alt:t.singleProduct.title}}):"NECKLACES"===t.singleProduct.category?i("img",{staticClass:"product-detail-img-necklace py-lg-35 pt-35 pb-20",attrs:{src:t.singleProduct.imageUrl,alt:t.singleProduct.title}}):"BRACELETS"===t.singleProduct.category?i("img",{staticClass:"product-detail-img-bracelet py-lg-35 pt-35 pb-15",attrs:{src:t.singleProduct.imageUrl,alt:t.singleProduct.title}}):t._e()]),i("div",{staticClass:"product-details-text p-20 text-lighter"},[i("span",[t._v("PRODUCT DETAILS")]),i("p",{staticClass:"pt-15 pb-30"},[t._v(t._s(t.singleProduct.description))]),i("p",{staticClass:"product-details-content"},[t._v(t._s(t.singleProduct.content))])])]),i("div",{staticClass:"col-lg-8 col-md-7 survice-detail px-0"},[i("ul",{staticClass:"text-lighter mb-0"},[i("li",[i("h6",{staticClass:"t01 survice-detail-title mb-0 d-flex justify-content-between border-top border-bottom border-gray04 px-md-10 px-30 py-20",on:{click:function(e){return t.listSlideToggle("t01")}}},[i("span",{staticClass:"text-lighter"},[t._v("MATERIALS AND CARE")]),i("span",[t._v("+")])]),t._m(0)]),i("li",[i("h6",{staticClass:"t02 survice-detail-title mb-0 d-flex justify-content-between px-md-10 px-30 py-20",on:{click:function(e){return t.listSlideToggle("t02")}}},[i("span",{staticClass:"text-lighter"},[t._v("SHIPPING AND RETURNS INFO")]),i("span",[t._v("+")])]),t._m(1)]),i("li",[i("h6",{staticClass:"t03 survice-detail-title mb-0 d-flex justify-content-between border-top border-bottom border-gray04 px-md-10 px-30 py-20",on:{click:function(e){return t.listSlideToggle("t03")}}},[i("span",{staticClass:"text-lighter"},[t._v("PAYMENT OPTIONS")]),i("span",[t._v("+")])]),t._m(2)])])])])])]),i("div",{staticClass:"recommend mb-20 mx-20 mx-md-0"},[i("div",{staticClass:"container"},[i("h3",{staticClass:"text-lighter text-center text-20 py-25"},[t._v(" You May Also Like ")]),i("div",{staticClass:"row"},t._l(t.recommendProducts,(function(e){return i("div",{key:e.id,staticClass:"col-md-3 col-i6-6 text-center"},[i("div",{staticClass:"bg-gray02 p-lg-20 p-10"},[i("div",{staticClass:"text-right"},[i("a",{staticClass:"recommend-heart far fa-heart text-gray05",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.saveItem(e)}}})]),i("router-link",{attrs:{to:"/product/"+e.id}},[e.title&&-1!==e.title.indexOf("LARGE VINTAGE EARRING")?i("img",{staticClass:"recommend-large-earring py-lg-73 py-33",attrs:{src:e.imageUrl,alt:e.title}}):e.title&&-1!==e.title.indexOf("SMALL VINTAGE EARRING")?i("img",{staticClass:"recommend-small-earring py-lg-80 py-35",attrs:{src:e.imageUrl,alt:e.title}}):e.title&&-1!==e.title.indexOf("NECKLACE")?i("img",{staticClass:"recommend-necklace pb-lg-30 pb-20",attrs:{src:e.imageUrl,alt:e.title}}):i("img",{staticClass:"recommend-bracelet pt-lg-15 pb-lg-30 pb-15",attrs:{src:e.imageUrl,alt:e.title}})])],1),i("h4",{staticClass:"recommend-title text-lighter mt-15"},[t._v(" "+t._s(e.title)+" ")]),i("span",[t._v(t._s(t._f("currency")(e.price)))]),i("router-link",{staticClass:"py-10 btn btn-white btn-block text-lighter",attrs:{to:"/product/"+e.id}},[t._v(" SHOP THIS "),i("i",{staticClass:"fas fa-angle-right ml-10"})])],1)})),0)])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"survice-detail-content px-md-10 px-30 py-20 border-bottom border-gray04"},[i("p",[t._v(" Citrus jewelry is made with carefully selected materials. Please handle with care for longer product life. ")]),i("br"),i("p",[t._v(" - This piece has been produced using hypoallergenic materials in accordance with the current international regulations ")]),i("p",[t._v(" - To care for this piece please clean and polish it with a soft cloth and store it separately ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"survice-detail-content px-md-10 px-30 py-20 border-top border-gray04"},[i("div",{staticClass:"d-flex"},[i("p",{staticClass:"border-right border-gray05 pr-30 pt-10"},[t._v(" Premium Express / Free ")]),i("p",{staticClass:"pl-30"},[t._v(" 3 - 5 business days."),i("br"),t._v("9 am - 8 pm, Mon-Fri. ")])]),i("p",[t._v(" Pre-order, Made to Order and DIY items will ship on the estimated date noted on the product description page. These items will ship through Premium Express once they become available. ")]),i("br"),i("p",[t._v(" The return window for online purchases will be extended to 45 days from the date you received your purchase. You may return products by mail using the complimentary prepaid return label included with your order, and following the return instructions provided in your digital invoice. ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"survice-detail-content px-md-10 px-30 py-20"},[i("p",[t._v(" Citrus accepts the following forms of payment for online purchases: ")]),i("p",[t._v(" - Visa"),i("br"),t._v(" - MasterCard"),i("br"),t._v(" - American Express"),i("br"),t._v(" - JCB ")]),i("br"),i("p",[t._v(" The full transaction value will be charged to your credit card after we have verified your card details, received credit authorisation, confirmed availability and prepared your order for shipping. For Made To Order, DIY, personalised and selected Décor products, payment will be taken at the time the order is placed. ")])])}],s=(i("99af"),i("7db0"),i("4160"),i("159b"),i("1157")),c=i.n(s),n={name:"SingleProduct",data:function(){return{productId:"",singleProduct:[],recommendProducts:[],tempCategoryProducts:[],quantity:1,saved:JSON.parse(localStorage.getItem("savedItems"))||[],browserHeight:"".concat(window.innerHeight,"px"),isLoading:!1}},methods:{getSingleProduct:function(t){var e=this,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/product/").concat(t);e.$http.get(i).then((function(t){e.singleProduct=t.data.product,e.getRecommendProducts()}))},getRecommendProducts:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/products/all");t.recommendProducts=[],t.$http.get(e).then((function(e){if(e.data.success){var i=[];i=e.data.products,i.forEach((function(e){e.category===t.singleProduct.category&&t.tempCategoryProducts.push(e)}));for(var r=0;r<4;r++)t.recommendProducts.push(t.tempCategoryProducts[r])}t.tempCategoryProducts=[]}))},saveItem:function(t){var e=this,i=e.saved.find((function(e){return e.id===t.id}))||{};i.id!==t.id&&(t.id===e.singleProduct.id?e.saved.push(e.singleProduct):e.recommendProducts.forEach((function(i){i.id===t.id&&e.saved.push(i)})),localStorage.setItem("savedItems",JSON.stringify(e.saved)),window.dispatchEvent(new CustomEvent("savedItems-localstorage-changed",{detail:{storage:localStorage.getItem("savedItems")}})))},addToCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/cart");i.isLoading=!0;var a={product_id:t,qty:e};i.$http.post(r,{data:a}).then((function(t){i.$bus.$emit("AddItem:getCart"),i.isLoading=!1}))},listSlideToggle:function(t){c()(".".concat(t)).toggleClass("active"),c()(".".concat(t)).parent().find(".survice-detail-content").slideToggle(),c()(".".concat(t)).parent().siblings().find(".survice-detail-content").slideUp(),c()(".".concat(t)).parent().siblings().find(".survice-detail-title").removeClass("active")}},created:function(){this.productId=this.$route.params.id,this.getSingleProduct(this.productId)},watch:{$route:function(t,e){this.productId=this.$route.params.id,this.getSingleProduct(t.params.id),this.quantity=1}}},o=n,l=i("2877"),d=Object(l["a"])(o,r,a,!1,null,null,null);e["default"]=d.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-18985e0a.d2e38e82.js.map