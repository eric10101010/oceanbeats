 <template>
  <div>
    <!-- Banner -->
    <section class="banner mb-5">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="container">
          <ul class="row">
            <li class="banner-box col-lg-12 col-md-12 col-12 bg-dark text-light py-2 py-sm-4">
              <h2 class="text-center p-4">商品資訊</h2>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- breadcrumb -->
    <section class="breadcrumb container">
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
          <li class="breadcrumb-item text-secondary">
            {{ product.category }}
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.title }}
          </li>
        </ul>
      </nav>
    </section>
    <!-- 產品細節資訊 -->
    <section class="product-info">
      <div class="container pt-3 pb-5">
          <div class="row">
            <!--商品左側圖片-->
            <div class="col-12 col-md-6 col-lg-6">
              <div class="mb-5 mb-md-0">
                <div class="px-5 px-md-0 px-lg-3">
                  <img :src="product.imageUrl" alt="product-item">
                </div>
              </div>
            </div>
            <!--商品右側文字資訊-->
            <div class="col-12 col-md-6 col-lg-6">

              <div class="px-5 px-md-0">

                <div class="text-dark fw-bolder p-3 py-2 text-center" >
                  <h1 class="mb-4">{{ product.title }}</h1>
                  <h2 class="mb-3 h5">{{ product.content }}</h2>
                  <h2 class="mb-4 h5">{{ product.content }}</h2>

                  <div class="d-flex align-items-center justify-content-center">
                    <p class="h5 text-third text-decoration-line-through me-2" v-if="product.price !== product.origin_price">
                      NT${{ product.origin_price }}
                    </p>
                    <p class="h3 text-danger fw-bolder">
                      NT${{ product.price }}
                    </p>
                  </div>
                  <hr/>
                  <!--選擇數量按鈕-->
                  <div class="num-box d-flex align-items-center justify-content-center pt-1">
                    <div class="d-flex">
                      <a href="#" class="btn btn-outline-dark d-flex align-items-center"
                        @click.prevent="calculator('minus')">
                        -
                      </a>
                      <input type="number" min="1" class="bg-light border-1 border-third text-dark text-center input--num" v-model="buyNum">

                      <a href="#" class="btn btn-outline-dark d-flex align-items-center"
                          @click.prevent="calculator('plus')">
                        +
                      </a>
                    </div>
                  </div>
                  <!--加入購物車-->
                  <div class="cart-btn btn mt-4 d-flex align-items-center justify-content-center">

                    <router-link class="btn btn-secondary p-3 px-4 text-light d-flex align-items-center" :to="`/products`"  >
                     <span><i class="bi bi-bag"></i>返回購物</span>
                    </router-link>

                    <a href="#" class="btn btn-danger p-3 mx-3 text-light text-decoration-none" @click.prevent="addCart">
                     <span><i class="bi bi-cart"></i>加入購物車</span>
                    </a>

                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    <!-- tab切換 -->
    <section class="tab">
      <div class="container">
        <div class="row mb-4">
          <div class="col-lg-6">
            <ul class="nav nav-tabs py-0" ref="tab" id="myTab" role="tablist">
              <li class="nav-item w-30 w-md-auto" role="presentation">
                <button class="nav-link link w-30 active py-3"
                        id="introduction-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#introduction"
                        type="button"
                        role="tab"
                        aria-controls="introduction"
                        aria-selected="true"
                        data-cursor="cursor"
                >
                  商品介紹
                </button>
              </li>
              <li class="nav-item w-30 w-md-auto" role="presentation">
                <button class="nav-link link w-30 py-3"
                        id="notice-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#notice"
                        type="button"
                        role="tab"
                        aria-controls="notice"
                        aria-selected="false"
                        data-cursor="cursor"
                >
                  注意事項
                </button>
              </li>
              <li class="nav-item w-30 w-md-auto" role="presentation">
                <button class="nav-link link w-30 py-3"
                        id="shipping-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#shipping"
                        type="button"
                        role="tab"
                        aria-controls="shipping"
                        aria-selected="false"
                        data-cursor="cursor"
                >
                  運送問題
                </button>
              </li>
            </ul>
            <div class="tab-content bg-black-opacity-50 p-5 p-lg-7" id="myTabContent">
              <div class="tab-pane fade show text-dark active"
                   id="introduction"
                   role="tabpanel"
                   aria-labelledby="introduction-tab"
              >
                {{ product.description }}
              </div>

              <div class="tab-pane fade text-dark"
                   id="notice"
                   role="tabpanel"
                   aria-labelledby="notice-tab"
              >
                <p>
                  ※ 實際的尺寸與重量會因配備的不同而有所差異。<br/>
                  ※ 產品顏色會因網頁呈現而有些許差異，以收到實品為準。
                  ※ 規格可能依機型配置而有所改變，產品規格若敘述有誤，請以實物為主。
                  ※ 使用前請確實遵從產品說明書內之操作指示及注意事項。
                  ※ 以上規格資料若有任何錯誤，以官方所公佈資料為準。
                  ※ 基於安全考量，藍牙商品出廠時僅有些許電力，因電池自然放電現象，初次開機時可能會出現低電量或無電量之情形。
                  ※ 因改良而有變更時，以官方所公佈資料為準，恕不另行通知。
                  ※ 為了方便客戶及加速流程本公司不提供「換貨服務」，只能「退貨處理」
                </p>
              </div>
              <div class="tab-pane fade text-dark"
                   id="shipping"
                   role="tabpanel"
                   aria-labelledby="shipping-tab"
              >
                <p>
                  ■ 運送及其他說明
                  送貨方式：透過宅配送達。
                  消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。
                  送貨範圍：本島各地各縣市、澎湖部分地區、金門部分地區（大金門、小金門）、小琉球、馬祖全部地區、綠島
                  以下區域恕不提供宅急便包裹收送服務：
                  宜蘭縣-釣魚台列嶼(全)，高雄市-東沙(全)、南沙(全)，澎湖縣-馬公(虎井島、桶盤島)、望安(全)、七美(全)、白沙(大倉嶼、員貝嶼、鳥嶼、吉貝嶼)，金門縣-烈嶼(大膽島、二膽島)、烏坵(全)、台東縣-蘭嶼(全)
                  注意！收件地址請勿為郵政信箱。
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <!-- 類似商品 -->
    <section class="similar-product">
      <div class="container pt-3 pb-5">
        <h2 class="text-center mb-5">為您推薦</h2>
        <div class="row">
          <swiper
            :slides-per-view="slideNum"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
            :autoplay='
            {
              "delay": 3000,
              "disableOnInteraction": false
            }'
          >
            <swiper-slide class="col-3 mb-5 position-relative" v-for="item of filterCart" :key="item.id">
              <div class="card position-relative box--shadow">
                <!--推薦商品-分類tag--->

                <!--推薦商品-圖片區塊--->
                <router-link class="card-img d-block" :to="`/product/${item.id}`">
                  <div class="products-img p-3"
                      :style="{ 'background-image': `url(${item.imageUrl})` }"
                  >
                    <span class="badge bg-primary text-white">
                      {{ item.category }}
                    </span>
                  </div>
                </router-link>
                <!--推薦商品-文字區塊--->
                <div class="card-body pt-2 border border-1">
                  <h4 class="text-center">
                    {{ item.title }}
                  </h4>
                  <p class="text-danger text-center fw-bolder h5">
                    ${{ item.price }}
                  </p>
                  <div class="d-flex justify-content-between">
                    <a href="#" class="btn btn-primary d-flex align-items-center justify-content-center" @click.prevent="addCart">
                      <span><i class="bi bi-cart"></i>加入購物車</span>
                    </a>
                    <router-link class="btn btn-secondary d-flex align-items-center" :to="`/product/${item.id}`">
                      <span><i class="bi bi-cart"></i>查看商品</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import emitter from '../../assets/javascript/emitter'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'

SwiperCore.use([Autoplay])
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      product: {},
      slideNum: 0,
      products: [],
      buyNum: 1
    }
  },
  methods: {
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
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          this.products = res.data.products
        })
        .catch(err => {
          console.log(err)
        })
    },
    calculator (action) {
      if (this.buyNum > 1) {
        action === 'plus' ? (this.buyNum += 1) : (this.buyNum -= 1)
      } else {
        action === 'plus' ? (this.buyNum += 1) : (this.buyNum = 1)
      }
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    },
    addCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: { product_id: this.product.id, qty: this.buyNum } })
        .then(res => {
          console.log(res)
          if (res.data.success) {
            emitter.emit('update-cart')
            this.$swal({ title: res.data.message, icon: 'success' })
            this.buyNum = 1
          } else {
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    filterCart () {
      return this.products.filter(item => item.category === this.product.category && (item.id !== this.product.id))
    }
  },
  created () {
    this.getProduct()
  },
  mounted () {
    this.getProducts()
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
.products-img{
    width: 100%;
    height: 260px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 50%;
    object-fit: cover;
    transition: all .3s ease-in-out;
    position: relative;
    overflow: hidden;
}
.badge{
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
}
</style>
