(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2051d2e4"],{"1dde":function(e,t,a){var c=a("d039"),l=a("b622"),s=a("2d00"),n=l("species");e.exports=function(e){return s>=51||!c((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},5804:function(e,t,a){},8418:function(e,t,a){"use strict";var c=a("c04e"),l=a("9bf2"),s=a("5c6c");e.exports=function(e,t,a){var n=c(t);n in e?l.f(e,n,s(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),l=a("d039"),s=a("e8b5"),n=a("861d"),r=a("7b0b"),o=a("50c4"),i=a("8418"),d=a("65f0"),u=a("1dde"),b=a("b622"),f=a("2d00"),m=b("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",v=f>=51||!l((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),j=u("concat"),O=function(e){if(!n(e))return!1;var t=e[m];return void 0!==t?!!t:s(e)},g=!v||!j;c({target:"Array",proto:!0,forced:g},{concat:function(e){var t,a,c,l,s,n=r(this),u=d(n,0),b=0;for(t=-1,c=arguments.length;t<c;t++)if(s=-1===t?n:arguments[t],O(s)){if(l=o(s.length),b+l>h)throw TypeError(p);for(a=0;a<l;a++,b++)a in s&&i(u,b,s[a])}else{if(b>=h)throw TypeError(p);i(u,b++,s)}return u.length=b,u}})},b0c0:function(e,t,a){var c=a("83ab"),l=a("9bf2").f,s=Function.prototype,n=s.toString,r=/^\s*function ([^ (]*)/,o="name";c&&!(o in s)&&l(s,o,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(e){return""}}})},b415:function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),l=Object(c["R"])("data-v-046453d4");Object(c["y"])("data-v-046453d4");var s=Object(c["h"])("div",{class:"banner container-fluid d-flex align-items-center justify-content-center my-5"},[Object(c["h"])("div",{class:"row banner-box p-3 w-100"},[Object(c["h"])("div",{class:"text-white text-center "},[Object(c["h"])("h2",{class:"text-center p-4"},"填寫購物資料")])])],-1),n={class:"container mb-6"},r={class:"row"},o=Object(c["f"])('<div class="d-flex" data-v-046453d4><ul class="steps list-unstyled d-flex justify-content-between position-relative mx-auto mb-5" data-v-046453d4><li class="steps-item active w-33 d-flex flex-column align-items-center py-2 px-4" data-v-046453d4><p class="steps-circle d-flex justify-content-center align-items-center bg-danger" data-v-046453d4><span class="h3 text-white text-center pt-2" data-v-046453d4>1</span></p> 資料填寫 </li><li class="steps-item w-33 d-flex flex-column align-items-center py-2 px-4" data-v-046453d4><p class="steps-circle d-flex justify-content-center align-items-center bg-third" data-v-046453d4><span class="h3 text-white text-center pt-2" data-v-046453d4>2</span></p> 訂單建立 </li><li class="steps-item w-33 d-flex flex-column align-items-center py-2 px-4" data-v-046453d4><p class="steps-circle d-flex justify-content-center align-items-center bg-third" data-v-046453d4><span class="h3 text-white text-center pt-2" data-v-046453d4>3</span></p> 付款完成 </li></ul></div>',1),i={class:"col-lg-6 col-md-6 col-12 member-data mb-5"},d=Object(c["h"])("div",{class:"title bg-secondary p-2 text-light text-center"},[Object(c["h"])("h3",null,"顧客資訊")],-1),u={class:"bg-table border border-third p-3"},b={class:"form-floating form-downline mb-3 mt-3"},f=Object(c["h"])("label",{for:"name",class:"form-label"},"姓名：",-1),m={class:"form-floating form-downline mb-3"},h=Object(c["h"])("label",{for:"email"},"電子郵件：",-1),p={class:"form-floating form-downline mb-3"},v=Object(c["h"])("label",{for:"tel"},"聯絡電話：",-1),j={class:"form-floating form-downline mb-8"},O=Object(c["h"])("label",{for:"address"},"地址：",-1),g={class:" py-3"},x=Object(c["h"])("label",{for:"payWay",class:"form-label"},"付款方式:",-1),y=Object(c["h"])("option",{value:"0",disabled:"disabled",selected:""},"請選擇付款方式",-1),w=Object(c["h"])("option",{value:"超商付款"},"超商付款",-1),V=Object(c["h"])("option",{value:"ATM付款"},"ATM付款",-1),k=Object(c["h"])("option",{value:"網路ATM付款"},"網路ATM付款",-1),C={class:" py-3"},_=Object(c["h"])("label",{for:"message",class:"form-label"},"備註:",-1),$={class:"row"},T={class:"btn col-6"},U=Object(c["g"])(" 回購物車 "),W={class:"btn col-6"},F={class:"col-lg-6 col-md-6 col-12"},M=Object(c["h"])("div",{class:"title bg-secondary p-2 text-light text-center"},[Object(c["h"])("h3",null,"訂單資訊")],-1),q={class:"bg-table border border-third p-3"},A=Object(c["f"])('<div class="row align-items-center text-center border-bottom border-third" data-v-046453d4><div class="col-3" data-v-046453d4><p data-v-046453d4>商品圖片</p></div><div class="col-3" data-v-046453d4><p data-v-046453d4>商品名稱</p></div><div class="col-3" data-v-046453d4><p data-v-046453d4>數量</p></div><div class="col-3 text-end" data-v-046453d4><p data-v-046453d4>小計</p></div></div>',1),S={class:"col-3"},I={class:"product-photo"},L={class:"col-3"},E={class:"col-3 text-center"},J={class:"col-3"},B={class:"fw-bold text-end"},D={class:"row text-dark pt-4 flex-row-reverse"},N={class:"total-price col-12 px-2 w-50 me-1"},P={class:"d-flex justify-content-between"},K=Object(c["h"])("p",{class:"fw-bold text-lg"},"總金額:",-1),R={class:"text-danger fw-bolder"};Object(c["w"])();var z=l((function(e,t,a,z,G,H){var Q=Object(c["C"])("Field"),X=Object(c["C"])("error-message"),Y=Object(c["C"])("router-link"),Z=Object(c["C"])("Form");return Object(c["v"])(),Object(c["d"])("div",null,[s,Object(c["h"])("div",n,[Object(c["h"])("div",r,[o,Object(c["h"])("div",i,[d,Object(c["h"])("div",u,[Object(c["h"])(Z,{onSubmit:H.createOrder,class:"bg-table rounded-bottom px-8"},{default:l((function(e){var a=e.errors;return[Object(c["h"])("div",b,[Object(c["h"])(Q,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:G.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return G.form.user.name=e})},null,8,["class","modelValue"]),f,Object(c["h"])(X,{name:"姓名",class:"invalid-feedback"})]),Object(c["h"])("div",m,[Object(c["h"])(Q,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":a["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:G.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return G.form.user.email=e})},null,8,["class","modelValue"]),h,Object(c["h"])(X,{name:"email",class:"invalid-feedback"})]),Object(c["h"])("div",p,[Object(c["h"])(Q,{id:"tel",name:"聯絡電話",type:"tel",class:["form-control",{"is-invalid":a["聯絡電話"]}],placeholder:"請輸入聯絡電話",rules:H.phoneCheck,modelValue:G.form.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return G.form.user.tel=e})},null,8,["class","rules","modelValue"]),v,Object(c["h"])(X,{name:"聯絡電話",class:"invalid-feedback"})]),Object(c["h"])("div",j,[Object(c["h"])(Q,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:G.form.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return G.form.user.address=e})},null,8,["class","modelValue"]),O,Object(c["h"])(X,{name:"地址",class:"invalid-feedback"})]),Object(c["h"])("div",g,[Object(c["h"])(Q,{id:"payWay",name:"付款方式",type:"selcet",class:["form-select",{"is-invalid":a["付款方式"]}],rules:"required",modelValue:G.form.user.payWay,"onUpdate:modelValue":t[6]||(t[6]=function(e){return G.form.user.payWay=e})},{default:l((function(){return[x,Object(c["P"])(Object(c["h"])("select",{id:"payWay",class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[5]||(t[5]=function(e){return G.form.user.payWay=e})},[y,w,V,k],512),[[c["J"],G.form.user.payWay]])]})),_:2},1032,["class","modelValue"]),Object(c["h"])(X,{name:"付款方式",class:"invalid-feedback"})]),Object(c["h"])("div",C,[_,Object(c["P"])(Object(c["h"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"3","onUpdate:modelValue":t[7]||(t[7]=function(e){return G.form.message=e})},null,512),[[c["K"],G.form.message]])]),Object(c["h"])("div",$,[Object(c["h"])("div",T,[Object(c["h"])(Y,{to:"/cart",class:"btn btn-secondary text-light"},{default:l((function(){return[U]})),_:1})]),Object(c["h"])("div",W,[Object(c["h"])("button",{type:"submit",class:"btn btn-danger",disabled:G.cart.carts<=1}," 送出訂單 ",8,["disabled"])])])]})),_:1},8,["onSubmit"])])]),Object(c["h"])("div",F,[M,Object(c["h"])("div",q,[A,(Object(c["v"])(!0),Object(c["d"])(c["a"],null,Object(c["B"])(G.cart,(function(e){return Object(c["v"])(),Object(c["d"])("div",{key:e.id,class:"row py-4 align-items-center text-dark border-bottom text-center "},[Object(c["h"])("div",S,[Object(c["h"])("div",I,[Object(c["h"])("img",{class:"me-4 order-img ",src:e.product.imageUrl,alt:""},null,8,["src"])])]),Object(c["h"])("div",L,[Object(c["h"])("p",null,Object(c["F"])(e.product.title),1)]),Object(c["h"])("div",E,[Object(c["h"])("p",null,Object(c["F"])(e.qty),1)]),Object(c["h"])("div",J,[Object(c["h"])("p",B,"NT$"+Object(c["F"])(e.final_total),1)])])})),128)),Object(c["h"])("div",D,[Object(c["h"])("div",N,[Object(c["h"])("div",P,[K,Object(c["h"])("span",R,"NT$"+Object(c["F"])(G.final_total),1)])])])])])])])])})),G=(a("99af"),a("e4f3")),H={data:function(){return{cart:{},final_total:0,loadingStatus:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:"",payWay:""},message:""},isLoading:!1}},methods:{getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("item666","/cart");this.$http.get(t).then((function(t){t.data.success?(console.log(t),e.cart=t.data.data.carts,e.final_total=t.data.data.final_total,e.isLoading=!1,console.log(e.cart)):alert(t.data.message)})).catch((function(e){console.log(e)}))},phoneCheck:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需為正確的 手機號碼"},createOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("item666","/order"),a=this.form;this.$http.post(t,{data:a}).then((function(t){t.data.success?(e.$swal({title:t.data.message,icon:"success"}),G["a"].emit("update-cart"),e.$router.push("/checkoutorder/".concat(t.data.orderId)),e.getCart(),e.isLoading=!1):e.$swal({title:t.data.message,icon:"error"})})).catch((function(e){console.log(e)}))}},mounted:function(){this.getCart()},created:function(){this.orderID=this.$route.params.order}};a("e1d6");H.render=z,H.__scopeId="data-v-046453d4";t["default"]=H},e1d6:function(e,t,a){"use strict";a("5804")},e4f3:function(e,t,a){"use strict";var c=function(e){return{all:e=e||new Map,on:function(t,a){var c=e.get(t);c?c.push(a):e.set(t,[a])},off:function(t,a){var c=e.get(t);c&&(a?c.splice(c.indexOf(a)>>>0,1):e.set(t,[]))},emit:function(t,a){var c=e.get(t);c&&c.slice().map((function(e){e(a)})),(c=e.get("*"))&&c.slice().map((function(e){e(t,a)}))}}},l=c();t["a"]=l}}]);
//# sourceMappingURL=chunk-2051d2e4.a33e463d.js.map