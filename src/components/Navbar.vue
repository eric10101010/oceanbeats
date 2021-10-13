<template>
  <div class="nav-bar fixed-top bg-primary">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div class="container position-relative">
          <router-link
            to="/"
            class="logo navbar-brand d-flex align-items-center"
            @click="closeCollapseNavbar"
          >
            <h1 class="h3 mb-0 pt-1">OCEANBEATS</h1>
          </router-link>
          <div class="d-flex justify-content-between">
            <!-- mobile 直接進購物車+收藏頁面 -->
            <div class="navbar-nav ms-auto me-4 d-flex position-relative d-lg-none">
                <router-link to="/favorite" class="nav-link text-decoration-none">
                  <i class="bi bi-heart text-light" style="font-size: 1.5rem;"></i>
                </router-link>
                <div
                  class="rounded-pill bg-danger text-white position-absolute px-2"
                  style="right: -15px;
                  top: 2px;"
                >
                  {{ myFavorite.length }}
                </div>
            </div>
            <div class="navbar-nav ms-auto me-4 d-flex position-relative d-lg-none">
                <router-link to="/cart" class="nav-link text-decoration-none">
                  <i class="bi bi-cart-fill text-dark" style="font-size: 1.5rem;"></i>
                </router-link>
                <div
                  class="rounded-pill bg-danger text-white px-2 position-absolute"
                  style="right: -15px;
                  top: 2px;"
                >
                  {{ cart?.carts?.length }}
                </div>
            </div>
            <!-- mobile 折疊按鈕 -->
            <button
              class="navbar-toggler mx-1"
              type="button"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="openCollapseNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div ref="collapseNavbar" class="collapse navbar-collapse">
            <div class="navbar-nav ms-auto d-flex align-items-center">
              <router-link
                to="/about"
                class="nav-link"
                @click="closeCollapseNavbar"
                >關於我們</router-link
              >
              <router-link
                to="/products"
                class="nav-link"
                @click="closeCollapseNavbar"
                >購物商城</router-link
              >
              <router-link
                to="/contact"
                class="nav-link"
                @click="closeCollapseNavbar"
              >
                聯絡資訊
              </router-link>
            </div>
              <!-- 收藏 -->
              <div class="navbar-nav ms-auto me-3 d-flex position-relative d-lg-block d-none">
                <router-link to="/favorite" class="nav-link text-decoration-none">
                  <i class="bi bi-heart text-light" style="font-size: 1.5rem;"></i>
                </router-link>
                <div
                  class="rounded-pill bg-danger text-white position-absolute px-2"
                  style="right: -6px;
                  top: 2px;"
                >
                  {{ myFavorite.length }}
                </div>
              </div>
              <!-- 購物車 -->
              <div class="navbar-nav d-flex position-relative d-lg-block d-none">
                  <router-link to="/cart" class="nav-link text-decoration-none">
                    <i class="bi bi-cart-fill text-white" style="font-size: 1.5rem;"></i>
                  </router-link>
                  <div
                    class="rounded-pill bg-danger text-white position-absolute px-2"
                    style="right: -6px;
                    top: 2px;"
                  >
                    {{ cart?.carts?.length }}
                  </div>
              </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter'
import Collapse from 'bootstrap/js/dist/collapse'
import localStorage from '../assets/javascript/localStorage'
export default {
  mixins: [localStorage],
  data () {
    return {
      cart: {},
      collapse: {},
      myFavorite: this.getLocalStorage() || []
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then((res) => {
        console.log('購物車:', res)
        this.cart = res.data.data
      })
    },
    getFavorite () {
      this.myFavorite = this.getLocalStorage() || []
      this.favoriteProduct = []
      if (this.myFavorite.length > 0) {
        this.myFavorite.forEach((item) => {
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${item}`
          this.$http.get(url).then((res) => {
            if (res.data.success) {
              this.favoriteProduct.push(res.data.product)
            }
          })
            .catch(() => {
              this.$swal({
                title: '<p class="h4"> 發生錯誤，請重新整理此頁面</p>',
                icon: 'error'
              })
            })
        })
      }
    },
    openCollapseNavbar () {
      this.collapse.toggle()
    },
    closeCollapseNavbar () {
      this.collapse.hide()
    }
  },
  mounted () {
    this.getCart()
    emitter.on('update-cart', () => {
      this.getCart()
    })
    emitter.on('update-favorite', () => {
      this.getFavorite()
    })
    this.collapse = new Collapse(this.$refs.collapseNavbar, {
      toggle: false
    })
  }
}
</script>

<style scoped>
.logo h1 {
  font-size: 30px;
  display: block;
  background: url('../assets/logo-oceanbeats.png') no-repeat 50%;
  background-size: cover;
  /* object-fit: cover; */
  text-indent: 101%;
  overflow: hidden;
  white-space: nowrap;
}
.navbar-nav {
 display: flex;
 align-items: center;
}
</style>
