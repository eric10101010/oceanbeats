<template>
 <div>
   <!-- Banner -->
   <div class="banner mb-5">
     <div class="d-flex justify-content-center align-items-center h-100">
       <div class="container">
        <ul class="row">
          <li class="banner-box col-lg-12 col-md-12 col-12 bg-dark text-light py-2 py-sm-4">
            <h2 class="text-center p-4">商品列表</h2>
          </li>
        </ul>
       </div>
     </div>
   </div>
   <!-- breadcrumb -->
   <div class="breadcrumb container">
     <nav aria-label="breadcrumb row mb-3">
      <ul class="breadcrumb col-lg-12 col-md-12 col-12" aria-label="breadcrumb mb-3">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-secondary text-decoration-none">
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products" class="text-secondary text-decoration-none">
              商品列表
            </router-link>
          </li>
          <li class="breadcrumb-item active text-third" aria-current="page">
            全部商品
          </li>
      </ul>
     </nav>
   </div>
   <!-- 產品列表 -->
   <section class="product-list">
    <div class="container">
      <div class="row">
        <!-- 種類側欄 -->
        <div class="col-lg-3 col-md-3 col-12 mb-4 mb-md-0">
          <ul class="side-bar list-group">
            <li class="list-group-item border border-third" v-for="(item, key, index) of category" :key="index"
            :class="{ 'active': choose === key }" @click="catelogClick(key)">
              <p class="text-center mb-0">{{ key }}（{{ item }}）</p>
            </li>
          </ul>
        </div>
        <!-- 產品主欄 -->
        <div class="col-lg-9 col-md-9 col-12">
          <ul class="row list-unstyled">
            <li class="col-12 col-md-6 col-lg-4 mb-5 px-2 position-relative" v-for="item of searchProducts" :key="item.id" >
              <!-- 產品容器 -->
              <div class="product-box card">
                  <!-- 1.分類tag -->
                  <span class="badge bg-primary text-whit">
                    {{ item.category }}
                  </span>
                  <!-- 2.收藏tag -->
                  <span class="favorite">
                    <i class="bi bi-bookmark-heart"></i>
                  </span>
                <!-- 3.產品圖片 -->
                <div class="p-3 text-decoration-none">
                  <router-link class="products-img card d-block d-flex align-items-center justify-content-center "
                                :style="{ 'background-image': `url(${item.imageUrl})` }"
                                :to="`/product/${item.id}`">
                    <div class="view-detail position-absolute">
                      <span class="h5"><i class="bi bi-search me-2"></i>查看商品</span>
                    </div>
                  </router-link>
                </div>
                  <div class="all-text card-body">
                    <!-- 4.產品名稱 -->
                    <div class="product-title">
                      <h5 class="text-center mb-2 fw-bolder" style="font-size:22px">
                          {{ item.title }}
                      </h5>
                    </div>
                    <!-- 5.價錢+購物車 -->
                    <div class="cart-box">
                      <ul class="d-flex justify-content-center align-items-center">
                        <li class="text-third text-decoration-line-through " style="font-size:14px">
                          NT {{ item.origin_price }}
                        </li>
                        <li class="text-danger fw-bolder px-3" style="font-size:20px">
                          NT {{ item.price }}
                        </li>
                      </ul>
                      <div class="add-btn mt-2 text-center d-flex align-items-center justify-content-center " @click.prevent="addCart(item)">
                        <button class="bg-secondary px-5" style="font-size:20px">
                          <span class="text-light"><i class="bi bi-cart"></i>加入購物車</span>
                        </button>
                      </div>
                    </div>
                  </div>
              </div>

            </li>
          </ul>
          <div class="d-flex justify-content-center mt-5">
            <Pagination :page="pagination" @getProduct="getProducts" v-if="search === '' && choose === '全部商品'"></Pagination>
          </div>
        </div>
      </div>
    </div>
   </section>
 </div>
</template>

<script>
import emitter from '../../assets/javascript/emitter'
import Pagination from '../../components/Pagination.vue'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      category: {},
      choose: '全部商品',
      productWithPagination: [],
      pagination: {},
      search: '',
      buyNum: 1
    }
  },
  methods: {
    getAllProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.products = res.data.products
            this.calculateCategories()
            console.log(res)
          }
        })
        .catch(err => console.log(err))
    },
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.productWithPagination = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    getProduct () {
      const Id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${Id}`
      this.$http.get(url)
        .then(res => {
          console.log(res)
          this.product = res.data.product
        })
        .catch(err => console.log(err))
    },
    calculateCategories () {
      this.category['全部商品'] = this.products.length
      this.products.forEach(item => {
        const cate = item.category
        if (!(cate in this.category)) {
          this.category[cate] = 1
        } else {
          this.category[cate]++
        }
      })
      console.log(this.category)
    },
    catelogClick (key) {
      this.choose = key
      console.log(this.filterProducts)
    },
    // selectHandler (e) {
    //   this.choose = e.target.value
    //   console.log(e.target.value)
    // },
    addCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: { product_id: item.id, qty: this.buyNum } })
        .then(res => {
          console.log(res)
          emitter.emit('update-cart')
          this.$swal({ title: '成功加入購物車', icon: 'success' })
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    filterProducts () {
      return this.choose === '全部商品' ? this.productWithPagination : this.products.filter(item => item.category === this.choose)
    },
    searchProducts () {
      if (this.search !== '') {
        if (this.filterProducts === this.productWithPagination) {
          return this.products.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
        } else {
          return this.filterProducts.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
        }
      } else {
        return this.filterProducts
      }
    }
  },
  created () {
    this.getAllProducts()
    this.getProducts()
    this.getProduct()
  }
}
</script>

<style lang="scss" scoped>
.banner {
  height: calc(30vh + 50px);
  background-color: #ccc;
  background: url('https://images.unsplash.com/photo-1594998440033-042baa3ee40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80') 50% 25%;
  background-size: cover;
}
.banner-box {
  opacity: 0.8;
}
.side-bar {
  cursor: pointer;
}
.product-box{
  box-shadow: 1px 2px 3px #ccc;
}
.products-img{
    width: 100%;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 50%;
    object-fit: cover;
 }
.badge, .favorite{
  position: absolute;
  z-index: 2;
  top: 10px;
}
.badge{
  left: 10px;
}
.favorite {
  right: 10px;
}
// .add-btn{
// display: inline-block;
// }
.add-btn button {
  display: block;
  padding: 16px 80px;
  text-align: center;
  border: none;
}
.more {
  text-decoration: none;
  color:#ffff;
  background-color: #000000;
  opacity: 0.6;
}
.view-detail {
  color: #fff;
  bottom: 0px;
  left: 0;
  right:0;
  top:0px;
  background-color: #000000;
  z-index: 10;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
}
.view-detail:hover {
  opacity: 0.7;
}
</style>
