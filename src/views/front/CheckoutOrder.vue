<template>
  <div>
    <div class="banner mb-5">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="container">
        <ul class="row">
          <li class="banner-box col-lg-12 col-md-12 col-12 bg-dark text-light py-2 py-sm-4">
            <h2 class="text-center p-4">結帳</h2>
          </li>
        </ul>
        </div>
      </div>
    </div>
    <div class="container mb-6">
      <div class="row d-flex justify-content-evenly">
        <!--訂單資料-->
        <div class="col-lg-5 col-md-5 col-12 mb-4">
          <div class="col-lg-12 p-0 border border-third">
            <h3 class="text-center p-3 mb-2 bg-secondary text-light" v-if="!order.is_paid">確認訂購資訊</h3>
            <h3 class="text-center p-3 mb-2 bg-secondary text-light" v-else>訂購者資訊</h3>
              <table class="table mb-0" v-if="order.user">
                <tbody>
                  <tr>
                    <th scope="col" width="110" class="text-left">收件人姓名:</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                  <tr>
                    <th scope="col" width="110" class="text-left">收件人電話:</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th scope="col" width="110" class="text-left">收件人地址:</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                  <tr>
                    <th scope="col" width="110" class="text-left">電子郵件:</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th scope="col" width="110" class="text-left">付款方式:</th>
                    <td>{{ order.user.payWay }}</td>
                  </tr>
                  <tr v-if="order.message">
                    <th scope="col" width="110" class="text-left">備註:</th>
                    <td>{{ order.message }}</td>
                  </tr>
                  <tr v-else>
                    <th scope="col" width="110" class="text-left">備註:</th>
                    <td class="text-danger">無</td>
                  </tr>
                </tbody>
              </table>
              <div class="status">
                <h3 class="text-center p-3 bg-secondary text-light mb-4">付款狀態</h3>
                <div class="col-xl-12 col-md-12 col-12 p-0" v-if="!order.is_paid">
                  <div class="d-flex justify-content-center align-items-center flex-column">
                    <img  src="https://i.imgur.com/EwjxudG.png" alt="pay-unsuccess" >
                    <p class="text-danger pt-3">目前尚未付款</p>
                  </div>
                </div>
                <div class="col-xl-12 col-md-12 col-12 p-0" v-else>
                  <div class="status d-flex justify-content-center align-items-center flex-column">
                    <img src="https://i.imgur.com/sEaN24V.png" alt="pay-success">
                    <p class="text-success pt-3">已成功付款，感謝您的訂單!</p>
                  </div>
                </div>
              </div>
              <!--按鈕列表-->
              <div class="d-flex justify-content-around my-2" v-if="order.is_paid === false">
                <router-link to="/products" class="btn btn-secondary text-light d-flex align-items-center">
                  返回購物
                </router-link>
                <button class="btn btn btn-danger d-flex align-items-center" @click="payOrder">
                  付款結帳
                </button>
              </div>
              <div class="d-flex justify-content-center" v-if="order.is_paid === true">
                <router-link to="/products" class="btn btn-secondary text-light d-flex align-items-center my-2">
                  繼續購物
                </router-link>
              </div>
          </div>
        </div>
        <!--訂單資訊-->
        <div class="col-lg-5 col-md-5 col-12">
          <div class="col-lg-12 p-0 border border-third mb-4 d-flex flex-column justify-content-between">
            <div class="order-information">
              <h3 class="text-center p-3 bg-secondary text-light mb-2">訂單資訊</h3>
              <div class="col-xl-12 col-md-12 col-12 p-0" >
                <div class="d-flex justify-content-center align-items-center flex-column">
                  <table class="table mb-0 " v-if="order.user">
                    <tbody>
                      <tr>
                        <th scope="col" width="110" class="text-left">訂單時間:</th>
                        <td>{{ timestampToDate(order.create_at) }}</td>
                      </tr>
                      <tr >
                        <th scope="col" width="110" class="text-left">訂單編號:</th>
                        <td>{{ order.id }}</td>
                      </tr>
                      <tr>
                        <th scope="col" width="110" class="text-left">訂單金額:</th>
                        <td class="fw-bolder"
                            :class="{ 'text-success' : order.is_paid,
                                      'text-danger' : !order.is_paid}"
                        >
                          NT${{order.total}}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!--訂單明細-->
          <div class="col-lg-12 p-0 border border-third">
            <div class="order-detail d-flex flex-column ">
              <h3 class="text-center p-3 mb-2 bg-secondary text-light">
                訂單明細
              </h3>
              <table class="mb-0">
                <thead class="cart-list mb-2 border-bottom border-third ">
                  <tr class="text-center">
                    <th scope="col" width="25%">
                      商品圖片
                    </th>
                    <th scope="col" width="25%">
                      商品名稱
                    </th>
                    <th scope="col" width="25%">
                      數量
                    </th>
                    <th scope="col" width="25%">
                      小記
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product of products" :key="product.id" class="border-bottom">
                    <th scope="row" class="text-center">
                      <img :src="product[1].product.imageUrl" alt="" class="cart-img" style="max-height:100px">
                    </th>
                    <td class="text-center">{{ product[1].product.title }}</td>
                    <td class="text-center">{{ product[1].qty }}</td>
                    <td class="text-center">NT${{ product[1].total }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      order: {},
      orderID: '',
      products: [],
      productId: [],
      message: '',
      date: new Date()
    }
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.$route.params.id}`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            this.order.total = parseInt(this.order.total)
            this.productId = []
            this.products = []
            this.order = res.data.order
            this.user = res.data.order.user
            this.order.paid_date = this.DateToTimestamp(this.order.paid_date)
            Object.entries(this.order.products).forEach(item => {
              this.products.push(item)
            })
            this.productId.forEach(item => {
              this.products.push(this.order.products[item])
            })
          } else {
            alert(res.data.message)
            console.log('error')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    sumData (arr) {
      let sum = 0
      for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
      };
      return sum
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.order.id}`
      this.$http.post(url)
        .then(res => {
          console.log(res)
          this.$swal({ title: '已成功結帳', icon: 'success' })
          this.getOrder()
        })
        .catch(err => {
          console.log(err)
        })
    },
    DateToTimestamp (date) {
      return (Date.parse(date) / 1000)
    },
    timestampToDate (timestamp) {
      if (timestamp) {
        const dd = new Date(timestamp * 1000)
        return `${dd.getFullYear()}-${this.adjustZero(dd.getMonth() + 1)}-${this.adjustZero(dd.getDate())}`
      }
    },
    adjustZero (num) {
      return num < 10 ? `0${num}` : `${num}`
    }
  },
  created () {
    this.getOrder()
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
.status img{
  max-width: 150px;
  max-height: 100px;
}
.cart-list{
  border-bottom: 1px solid #ccc;
}
</style>
