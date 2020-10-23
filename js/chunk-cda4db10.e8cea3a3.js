(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cda4db10"],{"00c7":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),r("div",{staticClass:"bg-gray02 m-lg-20 m-md-15 py-lg-50 py-30"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-md-between"},[r("div",{staticClass:"col-lg-8 px-20 text-lighter text-gray05"},[r("div",{staticClass:"shipping"},[t._m(1),r("div",{staticClass:"shipping-content text-14 pt-15 pb-35 border-top border-bottom border-white"},[r("p",{staticClass:"pb-i6-10"},[t._v("All fields are required except if mentioned optional.")]),r("p",[t._v("SHIP TO")]),r("form",{on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-i6p-2"},[r("label",{attrs:{for:"title"}},[t._v("TITLE")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.user.title,expression:"form.user.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("title")},attrs:{id:"title",name:"title"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form.user,"title",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"mr"}},[t._v("Mr.")]),r("option",{attrs:{value:"ms"}},[t._v("Ms.")])]),t.errors.has("title")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()]),r("div",{staticClass:"form-group col-i6p-5 col-6"},[r("label",{attrs:{for:"firstName"}},[t._v("FIRST NAME")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.firstName,expression:"form.user.firstName"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("firstName")},attrs:{type:"text",name:"firstName",id:"firstName"},domProps:{value:t.form.user.firstName},on:{input:function(e){e.target.composing||t.$set(t.form.user,"firstName",e.target.value)}}}),t.errors.has("firstName")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()]),r("div",{staticClass:"form-group col-i6p-5 col-6"},[r("label",{attrs:{for:"lastName"}},[t._v("LAST NAME")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.lastName,expression:"form.user.lastName"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("lastName")},attrs:{type:"text",name:"lastName",id:"lastName"},domProps:{value:t.form.user.lastName},on:{input:function(e){e.target.composing||t.$set(t.form.user,"lastName",e.target.value)}}}),t.errors.has("lastName")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddress"}},[t._v("ADDRESS LINE 1")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"address",name:"address",id:"useraddress"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t.errors.has("address")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddressMore"}},[t._v("ADDRESS LINE 2 optional")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.addressMore,expression:"form.user.addressMore"}],staticClass:"form-control",attrs:{type:"address",name:"address",id:"useraddressMore"},domProps:{value:t.form.user.addressMore},on:{input:function(e){e.target.composing||t.$set(t.form.user,"addressMore",e.target.value)}}})]),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-i6p-6"},[r("label",{attrs:{for:"city"}},[t._v("CITY")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.city,expression:"form.user.city"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("city")},attrs:{type:"text",name:"city",id:"city"},domProps:{value:t.form.user.city},on:{input:function(e){e.target.composing||t.$set(t.form.user,"city",e.target.value)}}}),t.errors.has("city")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()]),r("div",{staticClass:"form-group col-i6p-3 col-6"},[r("label",{attrs:{for:"state"}},[t._v("STATE")]),r("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.state,expression:"form.user.state"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("state")},attrs:{id:"state",name:"state"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form.user,"state",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"Taiwan"}},[t._v("Taiwan")]),r("option",{attrs:{value:"US"}},[t._v("US")]),r("option",{attrs:{value:"Canada"}},[t._v("Canada")]),r("option",{attrs:{value:"Japan"}},[t._v("Japan")]),r("option",{attrs:{value:"Singapore"}},[t._v("Singapore")])]),t.errors.has("state")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()]),r("div",{staticClass:"form-group col-i6p-3 col-6"},[r("label",{attrs:{for:"zipcode"}},[t._v("ZIP CODE")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.zipcode,expression:"form.user.zipcode"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("zipcode")},attrs:{type:"text",name:"zipcode",id:"zipcode"},domProps:{value:t.form.user.zipcode},on:{input:function(e){e.target.composing||t.$set(t.form.user,"zipcode",e.target.value)}}}),t.errors.has("zipcode")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()])]),r("div",{staticClass:"form-group form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.business,expression:"form.user.business"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"business","true-value":"true","false-value":"false"},domProps:{checked:Array.isArray(t.form.user.business)?t._i(t.form.user.business,null)>-1:t._q(t.form.user.business,"true")},on:{change:function(e){var r=t.form.user.business,a=e.target,s=a.checked?"true":"false";if(Array.isArray(r)){var i=null,o=t._i(r,i);a.checked?o<0&&t.$set(t.form.user,"business",r.concat([i])):o>-1&&t.$set(t.form.user,"business",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.form.user,"business",s)}}}),r("label",{staticClass:"form-check-label",attrs:{for:"business"}},[t._v("This is a business address")])]),r("div",{staticClass:"row mb-md-40 mb-20"},[r("div",{staticClass:"form-group col-i6-4"},[r("label",{attrs:{for:"telcode"}},[t._v("CONTACT PHONE NUMBER")]),r("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.telCode,expression:"form.user.telCode"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("telcode")},attrs:{id:"telcode",name:"telcode"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form.user,"telCode",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"+886"}},[t._v("+886 Taiwan")]),r("option",{attrs:{value:"+1"}},[t._v("+1 US / Canada")]),r("option",{attrs:{value:"+81"}},[t._v("+81 Japan")]),r("option",{attrs:{value:"+65"}},[t._v("+65 Singapore")])]),t.errors.has("telcode")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()]),r("div",{staticClass:"form-group col-i6-8"},[r("label",{attrs:{for:"usertel"}},[t._v("In the event that our shipping partner needs to reach someone.")]),r("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",name:"tel",id:"usertel"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t.errors.has("tel")?r("span",{staticClass:"text-danger"},[t._v("required")]):t._e()])]),t._m(2)])])]),t._m(3)]),r("CartCard",{attrs:{"cart-in":t.cart}})],1)])])],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner-shopbag bg-black",staticStyle:{height:"300px"}},[r("h2",{staticClass:"text-center text-80 text-white text-lighter"},[t._v("CHECKOUT")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shipping-title d-flex align-items-center pb-lg-40 pb-20"},[r("div",{staticClass:"checkout-number rounded-circle border border-gray05 text-center mr-15"},[t._v(" 1 ")]),r("div",{staticClass:"text-30"},[t._v("Shipping Address")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-left"},[r("button",{staticClass:"btn-checkout-pay btn btn-black px-45 py-10",attrs:{type:"submit"}},[t._v("CONTINUE TO PAYMENT")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"payment"},[r("div",{staticClass:"payment-title d-flex align-items-center pt-lg-40 pt-20"},[r("div",{staticClass:"checkout-number rounded-circle border border-gray05 text-center mr-15"},[t._v(" 2 ")]),r("div",{staticClass:"text-30"},[t._v("Payment")])])])}],i=(r("99af"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-none d-lg-block col-lg-4 bg-white align-self-start text-gray05 text-lighter p-30"},[r("div",{staticClass:"border-bottom border-gray03 text-center text-18 pb-30"},[r("i",{staticClass:"fas fa-shopping-cart text-gray03 pr-10"}),t._v(t._s(t.cartItemQty)+" items ")]),t.cartIn.carts?r("div",{staticClass:"cart-card"},[t._l(t.cartIn.carts,(function(e){return r("div",{key:e.id,staticClass:"row justify-content-between border-bottom border-gray03 py-20"},[r("div",{staticClass:"col-3 my-auto text-center"},[e.product.title&&-1!==e.product.title.indexOf("LARGE VINTAGE EARRING")?r("img",{attrs:{src:e.product.imageUrl,width:"90%",alt:e.product.title}}):e.product.title&&-1!==e.product.title.indexOf("SMALL VINTAGE EARRING")?r("img",{attrs:{src:e.product.imageUrl,width:"80%",alt:e.product.title}}):e.product.title&&-1!==e.product.title.indexOf("NECKLACE")?r("img",{attrs:{src:e.product.imageUrl,width:"50%",alt:e.product.title}}):r("img",{attrs:{src:e.product.imageUrl,width:"90%",alt:e.product.title}})]),r("div",{staticClass:"col-7"},[r("p",[t._v(t._s(e.product.title))]),r("p",[t._v("Style / "+t._s(e.product.id))]),r("p",[t._v("Color/ "+t._s(e.product.color))])]),r("div",{staticClass:"col-2 text-right"},[r("p",[t._v("QTY/ "+t._s(e.qty))]),r("p",[t._v(t._s(t._f("currency")(e.total)))])])])})),r("div",{staticClass:"amount pt-10 pb-20"},[r("div",{staticClass:"d-flex justify-content-between"},[r("p",[t._v("Subtotal")]),r("p",[t._v(t._s(t._f("currency")(t.cartIn.total)))])]),t._m(0),t._m(1),r("div",{staticClass:"d-flex justify-content-between"},[r("p",[t._v("Estimated Total")]),r("p",[t._v(t._s(t._f("currency")(t.cartIn.total)))])]),t.cartIn.final_total!==t.cartIn.total?r("div",{staticClass:"d-flex justify-content-between"},[r("p",[t._v("Discounted Total")]),r("p",{staticClass:"text-citrus"},[t._v(t._s(t._f("currency")(t.cartIn.final_total)))])]):t._e()]),r("button",{staticClass:"btn btn-gray02 btn-block",attrs:{type:"button",disabled:""}},[t._v("PLACE ORDER")])],2):t._e()])}),o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-between"},[r("p",[t._v("Shipping")]),r("p",[t._v("Free")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex justify-content-between"},[r("p",[t._v("Estimated Tax")]),r("p",[t._v("$ 0")])])}],n=(r("4160"),r("159b"),{name:"CartCard",data:function(){return{}},props:["cartIn"],computed:{cartItemQty:function(){if(this.cartIn.carts){var t=0;return this.cartIn.carts.forEach((function(e){t+=e.qty})),t}return 0}}}),l=n,c=r("2877"),u=Object(c["a"])(l,i,o,!1,null,null,null),d=u.exports,m={name:"CheckOut",data:function(){return{cart:[],form:{user:{title:"ms",firstName:"",lastName:"",address:"",addressMore:"",city:"",state:"Taiwan",zipcode:"",business:"",tel:"",telCode:"+886"}},isLoading:!1}},components:{CartCard:d},methods:{getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/cart");t.isLoading=!0,t.$http.get(e).then((function(e){t.cart=e.data.data,t.isLoading=!1}))},createOrder:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("citrus","/order"),r=t.form;t.isLoading=!0,t.$validator.validate().then((function(a){a?t.$http.post(e,{data:r}).then((function(e){e.data.success&&(t.$router.push("/payment/".concat(e.data.orderId)),t.$bus.$emit("AddItem:getCart")),t.isLoading=!1})):t.isLoading=!1}))}},created:function(){this.getCart()}},v=m,p=Object(c["a"])(v,a,s,!1,null,null,null);e["default"]=p.exports},"159b":function(t,e,r){var a=r("da84"),s=r("fdbc"),i=r("17c2"),o=r("9112");for(var n in s){var l=a[n],c=l&&l.prototype;if(c&&c.forEach!==i)try{o(c,"forEach",i)}catch(u){c.forEach=i}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,s=r("a640"),i=r("ae40"),o=s("forEach"),n=i("forEach");t.exports=o&&n?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var a=r("23e7"),s=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},8418:function(t,e,r){"use strict";var a=r("c04e"),s=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var o=a(e);o in t?s.f(t,o,i(0,r)):t[o]=r}},"99af":function(t,e,r){"use strict";var a=r("23e7"),s=r("d039"),i=r("e8b5"),o=r("861d"),n=r("7b0b"),l=r("50c4"),c=r("8418"),u=r("65f0"),d=r("1dde"),m=r("b622"),v=r("2d00"),p=m("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",_=v>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),h=d("concat"),C=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},b=!_||!h;a({target:"Array",proto:!0,forced:b},{concat:function(t){var e,r,a,s,i,o=n(this),d=u(o,0),m=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?o:arguments[e],C(i)){if(s=l(i.length),m+s>f)throw TypeError(g);for(r=0;r<s;r++,m++)r in i&&c(d,m,i[r])}else{if(m>=f)throw TypeError(g);c(d,m++,i)}return d.length=m,d}})},a640:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&a((function(){r.call(null,e||function(){throw 1},1)}))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-cda4db10.e8cea3a3.js.map