<template>
<div>
  <!-- Banner -->
  <div class="banner container-fluid d-flex align-items-center justify-content-center my-5">
    <div class="row banner-box p-3 w-100">
      <div class="text-white text-center ">
        <h2 class="text-center p-4">購物車</h2>
      </div>
    </div>
  </div>
  <!-- 無商品 -->
  <div class="container d-flex flex-column align-items-center mt-6" v-if="cart.carts == 0">
    <div class="row">
      <div class="col-12">
        <h2 class="h2 text-center mb-4 fw-bolder">
          購物車內<br>目前沒有商品唷!
        </h2>
      </div>
      <router-link :to="`/products`" class="btn btn-secondary text-white my-6">
        <h3 class="h4 my-2">返回購物列表</h3>
      </router-link>
    </div>
  </div>
  <!-- 購物車 商品資料-->
  <div class="container my-5" v-if="cart.final_total">
    <div class="row d-flex justify-content-evenly">
      <div class="col-lg-7 col-md-7 col-12 mb-4">
        <div class="title bg-secondary py-2 text-light text-center">
          <h3>購物車品項</h3>
        </div>
        <div class="bg-table border border-third p-5">
          <div class="row align-items-center text-center border-bottom border-third">
            <div class="col-lg-3 col-md-3 col-3">
              <p>商品</p>
            </div>
            <div class="col-lg-2 col-md-2 col-3">
              <p>售價</p>
            </div>
            <div class="col-lg-4 col-md-4 col-3">
              <p>數量</p>
            </div>
            <div class="col-lg-2 col-md-1 col-1 d-flex d-lg-flex d-md-none d-none justify-content-center">
              <p>小計</p>
            </div>
            <div class="col-lg-2 col-md-3 col-3 d-flex d-lg-none text-center ">
              <p>小計</p>
            </div>
          </div>
          <div class="cart-listtext-center">
            <div v-for="item in cart.carts" :key="item.id" :loading="loadingStatus"
                 class="row py-3 text-dark text-center p-0 border-bottom">
              <div class="col-lg-3 col-md-3 col-3 d-flex justify-content-center align-item-center m-auto">
                <div class="box d-flex flex-column">
                  <img :src="item.product.imageUrl" alt="" style="max-width:80px;min-height:60px;"/>
                  <p class="d-lg-block d-md-none d-sm-none d-none mt-2">{{ item.product.title }}</p>
                  <div class="text-success" v-if="item.coupon">
                    <p class="d-xl-block d-md-block d-sm-block"><span class="teext-success text-center">優惠劵<i class="bi bi-patch-check-fill"></i></span></p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-3 d-flex align-items-center justify-content-start">
                <p class="fw-bold ">{{item.product.price}}</p>
              </div>
              <div class="col-lg-3 col-md-4 col-2 text-center m-auto d-flex justify-content-center" >
                <div class="d-inline-block d-lg-flex d-md-flex d-sm-flex">
                  <button type="button"
                          class="btn btn-outline-third d-flex text-dark border border-third"
                          @click="minusQty(item)"
                          :class="{ disabled: item.qty <= 1 || isChageQty }"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <!-- v-model.number="item.qty" -->
                  <span type="number"
                        class="px-2 d-flex justify-content-center align-items-center border border-third"
                        min="1"
                        disabled
                  >
                        {{item.qty}}
                  </span>

                  <button type="button"
                          class="btn btn-outline-third d-flex align-items-center text-dark border border-third"
                          @click="addQty(item)"
                          :class="{ disabled: isChageQty }"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-2 d-flex align-items-center justify-content-center">
                <p class="fw-bold  text-dark">{{ item.final_total }}</p>
              </div>
              <div class="col-lg-1 col-md-1 col-1 d-flex align-items-center">
                <button type="button" class="btn btn-sm btn-outline-danger"
                        data-action="remove"
                        :data-id="item.id"
                        @click="deleteCart(item.id,item.product.title)">
                  <span v-if="loadingStatus.loadingItemId = itemId">
                    <i class="bi bi-alarm">刪除</i>
                  </span>
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
          <!--跳轉按鈕-->
          <div class="next-step my-3 d-flex justify-content-between" v-if="cart.carts != 0">
            <router-link  :to="`/products`"
                          class="btn btn-secondary text-light"
            >
                返回購物
            </router-link>
            <div class="d-flex justify-content-end">
              <button class="btn btn-outline-danger"
                      type="button"
                      v-if="cart.carts != 0"
                      @click="deleteAllCart"
              >
                      <span v-if="loadingStatus.loadingItem === 1">
                        <i class="bi bi-trash2">清除中</i>
                      </span>
                清空商品
              </button>
            </div>
          </div>
        </div>
      </div>
      <!--購物車結算-->
      <div class="col-lg-4 col-md-4 col-12" v-if="cart.final_total">
        <div class="title bg-secondary p-2 text-light text-center">
          <h3>購物車結算</h3>
        </div>
        <div class="pt-4 border border-third d-flex flex-column align-items-center">
          <div class="h6 px-3 w-100 d-flex justify-content-between" v-if="cart.final_total == cart.total" >
            <p >商品總價:</p>
            <span class="text-danger h5 fw-bolder">NT${{ this.cart.total  }}</span>
          </div>
          <div class="coupon-price w-100" v-else>
            <div class="h6 px-3 d-flex justify-content-between">
              <p >商品總價:</p>
              <span class="text-dark h6 ">NT${{ this.cart.total  }}</span>
            </div>
            <div class="h6 px-3 d-flex justify-content-between">
              <p>優惠折抵:</p>
              <span class="text-warning h6">NT${{ this.cart.total - cart.final_total  }}</span>
            </div>
            <div class="h6 px-3 d-flex justify-content-between">
              <p class="fw-bolder">優惠總價:</p>
              <span class="text-danger h6 fw-bolder">NT${{ this.cart.final_total }}</span>
            </div>
          </div>
          <div v-if="cart.final_total" class="d-flex justify-content-center w-100 px-3">
            <div class="input-group input-group-sm" :class="show ? '' : 'd-none d-md-none'">
              <input type="text" class="form-control" placeholder="coupon" v-model="couponCode">
              <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button" @click="applyCoupon" :disabled="couponCode == ''">
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>
            <router-link  class="btn bg-primary text-light w-100 mt-4 "
                          :to="`/checkorder`"
            >
              <p class="h5">進行結帳</p>
            </router-link>
        </div>

      </div>
    </div>
  </div>
</div>

</template>

<script>
import emitter from '../../assets/javascript/emitter'
export default {
  data () {
    return {
      show: true,
      couponCode: '',
      productData: [],
      cart: {},
      qty: 1,
      tempCartsTotal: '',
      tempCartsDiscount: '',
      loadingStatus: {
        loadingItem: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false,
      isChageQty: false,
      isDiscount: false
    }
  },
  methods: {
    getProductData () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            const { products, pagination } = res.data
            this.productData = products
            this.pagination = pagination
            console.log(this.productData, this.pagination)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            // console.log(res)
            this.cart = res.data.data
            this.isLoading = false
            // console.log(this.cart)
            emitter.emit('update-cart')
          } else {
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteAllCart () {
      this.loadingStatus.loadingItem = 1
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url)
        .then(res => {
          // console.log(res)
          if (res.data.success) {
            this.loadingStatus.loadingItem = ''
            // alert(`${res.data.message}所有購物車品項`)
            this.$swal({ title: '已將購物車內商品全部刪除', icon: 'success' })
            this.getCart()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteCart (itemId, itemTitle) {
      this.loadingStatus.loadingItemId = itemId
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${itemId}`
      this.$http.delete(url)
        .then(res => {
          if (res.data.success) {
            this.$swal({ title: itemTitle + res.data.message, icon: 'success' })
            // alert(itemTitle + res.data.message)
            this.loadingStatus.loadingItemId = ''
            this.getCart()
            console.log(res)
          } else {
            alert(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    editCart (qty, itemId) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${itemId}`
      this.$http.put(url, {
        data: {
          product_id: itemId,
          qty
        }
      })
        .then(res => {
          if (res.data.success) {
            emitter.emit('update-cart')
            this.getCart()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addQty (item) {
      this.loadingStatus.loadingItem = item.id
      const qty = item.qty + 1
      this.editCart(qty, item.id)
      console.log(qty, item.id)
    },
    minusQty (item) {
      this.loadingStatus.loadingItem = item.id
      const qty = item.qty - 1
      this.editCart(qty, item.id)
    },
    applyCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.couponCode
      }
      this.$http.post(url, { data: coupon })
        .then(res => {
          if (res.data.success) {
            this.getCart()
            this.$swal({ title: '成功使用優惠劵', icon: 'success' })
            console.log(res.data)
            this.show = false
            this.$refs.done.classList.add('show')
            this.couponCode = ''
          } else {
            this.$swal({ title: '找不到此優惠劵，請重新確認', icon: 'error' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    datas (val) {
      if (val.final_total !== val.total) {
        this.isDiscount = true
      } else {
        this.isDiscount = false
      }
    }
  },
  mounted () {
    this.getProductData()
    this.getCart()
  },
  created () {
    console.clear()
  }
}
</script>
<style lang="scss">
.banner {
  height: calc(30vh + 50px);
  background-color: #ccc;
  background: url('https://images.unsplash.com/photo-1514742923401-b8ae3074e468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80') 50% 30%;
  background-size: cover;
}
.banner-box {
  background-color: #000000;
  opacity: 0.7;
}
.product-img {
  width: 80px;
  max-height: 55px;
}
.next-step{
  display: flex;
  align-items: center;
  justify-content: center;
}
.next-step button {
  padding: 5px 10px;
  color: #fff;
}
.next-step button:hover{
  background-color: red;
  transition: .5s;
  color: #fff;
}
.form-num{
  padding: 6px 20px;
  border:1px solid #ccc;
}
.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
}
.coupoun-group{
  display: flex;
  justify-content: flex-end;
}
</style>
