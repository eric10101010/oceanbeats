(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0896c8c"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"1dde":function(t,e,c){var i=c("d039"),o=c("b622"),r=c("2d00"),n=o("species");t.exports=function(t){return r>=51||!i((function(){var e=[],c=e.constructor={};return c[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,c){"use strict";var i=c("23e7"),o=c("5a34"),r=c("1d80"),n=c("ab13");i({target:"String",proto:!0,forced:!n("includes")},{includes:function(t){return!!~String(r(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"4de4":function(t,e,c){"use strict";var i=c("23e7"),o=c("b727").filter,r=c("1dde"),n=r("filter");i({target:"Array",proto:!0,forced:!n},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,c){var i=c("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},8418:function(t,e,c){"use strict";var i=c("c04e"),o=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var n=i(e);n in t?o.f(t,n,r(0,c)):t[n]=c}},"841c":function(t,e,c){"use strict";var i=c("d784"),o=c("825a"),r=c("1d80"),n=c("129f"),a=c("14c3");i("search",(function(t,e,c){return[function(e){var c=r(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,c):new RegExp(e)[t](String(c))},function(t){var i=c(e,this,t);if(i.done)return i.value;var r=o(this),s=String(t),l=r.lastIndex;n(l,0)||(r.lastIndex=0);var u=a(r,s);return n(r.lastIndex,l)||(r.lastIndex=l),null===u?-1:u.index}]}))},"99af":function(t,e,c){"use strict";var i=c("23e7"),o=c("d039"),r=c("e8b5"),n=c("861d"),a=c("7b0b"),s=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),h=c("b622"),f=c("2d00"),b=h("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",v=f>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=d("concat"),O=function(t){if(!n(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},j=!v||!m;i({target:"Array",proto:!0,forced:j},{concat:function(t){var e,c,i,o,r,n=a(this),d=u(n,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(r=-1===e?n:arguments[e],O(r)){if(o=s(r.length),h+o>p)throw TypeError(g);for(c=0;c<o;c++,h++)c in r&&l(d,h,r[c])}else{if(h>=p)throw TypeError(g);l(d,h++,r)}return d.length=h,d}})},a3b2:function(t,e,c){},a434:function(t,e,c){"use strict";var i=c("23e7"),o=c("23cb"),r=c("a691"),n=c("50c4"),a=c("7b0b"),s=c("65f0"),l=c("8418"),u=c("1dde"),d=u("splice"),h=Math.max,f=Math.min,b=9007199254740991,p="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var c,i,u,d,g,v,m=a(this),O=n(m.length),j=o(t,O),x=arguments.length;if(0===x?c=i=0:1===x?(c=0,i=O-j):(c=x-2,i=f(h(r(e),0),O-j)),O+c-i>b)throw TypeError(p);for(u=s(m,i),d=0;d<i;d++)g=j+d,g in m&&l(u,d,m[g]);if(u.length=i,c<i){for(d=j;d<O-i;d++)g=d+i,v=d+c,g in m?m[v]=m[g]:delete m[v];for(d=O;d>O-i+c;d--)delete m[d-1]}else if(c>i)for(d=O-i;d>j;d--)g=d+i-1,v=d+c-1,g in m?m[v]=m[g]:delete m[v];for(d=0;d<c;d++)m[d+j]=arguments[d+2];return m.length=O-i+c,u}})},ab13:function(t,e,c){var i=c("b622"),o=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(c){try{return e[o]=!1,"/./"[t](e)}catch(i){}}return!1}},aef2:function(t,e,c){"use strict";c("a3b2")},caad:function(t,e,c){"use strict";var i=c("23e7"),o=c("4d64").includes,r=c("44d2");i({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r("includes")},e4f3:function(t,e,c){"use strict";var i=function(t){return{all:t=t||new Map,on:function(e,c){var i=t.get(e);i?i.push(c):t.set(e,[c])},off:function(e,c){var i=t.get(e);i&&(c?i.splice(i.indexOf(c)>>>0,1):t.set(e,[]))},emit:function(e,c){var i=t.get(e);i&&i.slice().map((function(t){t(c)})),(i=t.get("*"))&&i.slice().map((function(t){t(e,c)}))}}},o=i();e["a"]=o},ed84:function(t,e,c){"use strict";c.r(e);c("caad"),c("2532"),c("ac1f"),c("841c");var i=c("7a23"),o=Object(i["R"])("data-v-74e21a70");Object(i["y"])("data-v-74e21a70");var r=Object(i["h"])("div",{class:"banner container-fluid d-flex align-items-center justify-content-center my-5"},[Object(i["h"])("div",{class:"row banner-box p-3 w-100"},[Object(i["h"])("div",{class:"text-white text-center "},[Object(i["h"])("h2",{class:"text-center p-4"},"商品列表")])])],-1),n={class:"breadcrumb container"},a={"aria-label":"breadcrumb row mb-3"},s={class:"breadcrumb col-lg-12 col-md-12 col-12","aria-label":"breadcrumb mb-3"},l={class:"breadcrumb-item"},u=Object(i["g"])(" 首頁 "),d={class:"breadcrumb-item"},h=Object(i["g"])(" 商品列表 "),f=Object(i["h"])("li",{class:"breadcrumb-item active text-third","aria-current":"page"}," 全部商品 ",-1),b={class:"product-list"},p={class:"container"},g={class:"row"},v={class:"col-lg-3 col-md-3 col-12 mb-4 mb-md-0"},m={class:"side-bar list-group"},O={class:"text-center mb-0"},j={class:"col-lg-9 col-md-9 col-12"},x={class:"row list-unstyled"},y={class:"product-box card "},w={class:"badge bg-primary text-whit"},F={class:"favorite btn"},P={class:"p-3 text-decoration-none"},C=Object(i["h"])("div",{class:"view-detail position-absolute"},[Object(i["h"])("span",{class:"h5"},[Object(i["h"])("i",{class:"bi bi-search me-2"}),Object(i["g"])("查看商品")])],-1),k={class:"all-text card-body"},L={class:"product-title"},S={class:"text-center mb-2 fw-bolder",style:{"font-size":"22px"}},$={class:"cart-box"},I={class:"d-flex justify-content-center align-items-center"},E={class:"text-third text-decoration-line-through ",style:{"font-size":"14px"}},T={class:"text-danger fw-bolder px-3",style:{"font-size":"20px"}},_=Object(i["h"])("button",{class:"bg-secondary px-5",style:{"font-size":"20px"}},[Object(i["h"])("span",{class:"text-light"},[Object(i["h"])("i",{class:"bi bi-cart pe-3"}),Object(i["g"])("加入購物車")])],-1),z={class:"d-flex justify-content-center mt-5"};Object(i["w"])();var A=o((function(t,e,c,A,N,M){var J=Object(i["C"])("router-link"),W=Object(i["C"])("Pagination");return Object(i["v"])(),Object(i["d"])("div",null,[r,Object(i["h"])("div",n,[Object(i["h"])("nav",a,[Object(i["h"])("ul",s,[Object(i["h"])("li",l,[Object(i["h"])(J,{to:"/",class:"text-secondary text-decoration-none"},{default:o((function(){return[u]})),_:1})]),Object(i["h"])("li",d,[Object(i["h"])(J,{to:"/products",class:"text-secondary text-decoration-none"},{default:o((function(){return[h]})),_:1})]),f])])]),Object(i["h"])("section",b,[Object(i["h"])("div",p,[Object(i["h"])("div",g,[Object(i["h"])("div",v,[Object(i["h"])("ul",m,[(Object(i["v"])(!0),Object(i["d"])(i["a"],null,Object(i["B"])(N.category,(function(t,e,c){return Object(i["v"])(),Object(i["d"])("li",{class:["list-group-item border border-third",{active:N.choose===e}],key:c,onClick:function(t){return M.catelogClick(e)}},[Object(i["h"])("p",O,Object(i["F"])(e)+"（"+Object(i["F"])(t)+"）",1)],10,["onClick"])})),128))])]),Object(i["h"])("div",j,[Object(i["h"])("ul",x,[(Object(i["v"])(!0),Object(i["d"])(i["a"],null,Object(i["B"])(M.searchProducts,(function(t){return Object(i["v"])(),Object(i["d"])("li",{class:"col-12 col-md-6 col-lg-4 mb-5 px-2 position-relative",key:t.id},[Object(i["h"])("div",y,[Object(i["h"])("span",w,Object(i["F"])(t.category),1),Object(i["h"])("span",F,[Object(i["h"])("i",{class:["bi bi-heart-fill text-third",{"active text-danger":N.myFavorite.includes(t.id)}],style:{top:"0px",right:"0px","z-index":"10","font-size":"45px"},onClick:Object(i["Q"])((function(e){return M.addFavorite(t)}),["prevent"])},null,10,["onClick"])]),Object(i["h"])("div",P,[Object(i["h"])(J,{class:"products-img card d-block d-flex align-items-center justify-content-center ",style:{"background-image":"url(".concat(t.imageUrl,")")},to:"/product/".concat(t.id)},{default:o((function(){return[C]})),_:2},1032,["style","to"])]),Object(i["h"])("div",k,[Object(i["h"])("div",L,[Object(i["h"])("h5",S,Object(i["F"])(t.title),1)]),Object(i["h"])("div",$,[Object(i["h"])("ul",I,[Object(i["h"])("li",E," NT "+Object(i["F"])(t.origin_price),1),Object(i["h"])("li",T," NT "+Object(i["F"])(t.price),1)]),Object(i["h"])("div",{class:"add-btn mt-2 text-center d-flex align-items-center justify-content-center ",onClick:Object(i["Q"])((function(e){return M.addCart(t)}),["prevent"])},[_],8,["onClick"])])])])])})),128))]),Object(i["h"])("div",z,[""===N.search&&"全部商品"===N.choose?(Object(i["v"])(),Object(i["d"])(W,{key:0,page:N.pagination,onGetProduct:M.getProducts},null,8,["page","onGetProduct"])):Object(i["e"])("",!0)])])])])])])})),N=(c("99af"),c("159b"),c("a434"),c("4de4"),c("e4f3")),M=c("1799"),J={components:{Pagination:M["a"]},data:function(){return{products:[],category:{},choose:"全部商品",productWithPagination:[],pagination:{},search:"",buyNum:1,myFavorite:[],favoriteProduct:[]}},methods:{getAllProducts:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("item666","/products/all");this.$http.get(e).then((function(e){e.data.success&&(t.products=e.data.products,t.calculateCategories(),console.log(e))})).catch((function(t){return console.log(t)}))},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("item666","/products?page=").concat(e);this.$http.get(c).then((function(e){e.data.success&&(t.productWithPagination=e.data.products,t.pagination=e.data.pagination)}))},getProduct:function(){var t=this,e=this.$route.params.id,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("item666","/product/").concat(e);this.$http.get(c).then((function(e){console.log(e),t.product=e.data.product})).catch((function(t){return console.log(t)}))},calculateCategories:function(){var t=this;this.category["全部商品"]=this.products.length,this.products.forEach((function(e){var c=e.category;c in t.category?t.category[c]++:t.category[c]=1})),console.log(this.category)},catelogClick:function(t){this.choose=t,console.log(this.filterProducts)},addCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("item666","/cart");this.$http.post(c,{data:{product_id:t.id,qty:this.buyNum}}).then((function(t){console.log(t),N["a"].emit("update-cart"),e.$swal({title:"成功加入購物車",icon:"success"})})).catch((function(t){return console.log(t)}))},getFavorite:function(){var t=this;this.myFavorite=this.getLocalStorage()||[],this.favoriteProduct=[],this.isLoading=!0,this.myFavorite.length>0?this.myFavorite.forEach((function(e){var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("item666","/product/").concat(e);t.$http.get(c).then((function(e){e.data.success?(t.favoriteProduct.push(e.data),console.log(e.data),t.isLoading=!1):t.isLoading=!1})).catch((function(){t.$swal({title:"發生錯誤，請重新整理此頁面</p>",icon:"error"})}))})):this.isLoading=!1},saveLocalStorage:function(t){var e=JSON.stringify(t);localStorage.setItem("saveFavorite",e)},getLocalStorage:function(){return JSON.parse(localStorage.getItem("saveFavorite"))},addFavorite:function(t){this.myFavorite.includes(t.id)?(this.myFavorite.splice(this.myFavorite.indexOf(t.id),1),this.saveLocalStorage(this.myFavorite),N["a"].emit("update-favorite"),this.$swal({title:"商品已從收藏清單中移除",icon:"success"})):(this.myFavorite.push(t.id),N["a"].emit("update-favorite"),this.$swal({title:"商品已加入收藏清單",icon:"success"})),this.saveLocalStorage(this.myFavorite)},removeFavoriteItem:function(t){this.myFavorite.splice(this.myFavorite.indexOf(t.id),1),this.saveLocalStorage(this.myFavorite),N["a"].emit("update-favorite"),this.isLoading=!0,this.$swal({title:'<p class="h4">商品已從收藏中移除</p>',icon:"success"}),this.getFavorite()}},computed:{filterProducts:function(){var t=this;return"全部商品"===this.choose?this.productWithPagination:this.products.filter((function(e){return e.category===t.choose}))},searchProducts:function(){var t=this;return""!==this.search?this.filterProducts===this.productWithPagination?this.products.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())})):this.filterProducts.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())})):this.filterProducts}},created:function(){this.getAllProducts(),this.getProducts(),this.getProduct()},mounted:function(){this.getFavorite()}};c("aef2");J.render=A,J.__scopeId="data-v-74e21a70";e["default"]=J}}]);
//# sourceMappingURL=chunk-c0896c8c.504ee480.js.map