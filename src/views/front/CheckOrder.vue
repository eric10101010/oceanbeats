<template>
  <div>
    <!-- Banner -->
    <div class="banner container-fluid d-flex align-items-center justify-content-center my-5">
      <div class="row banner-box p-3 w-100">
        <div class="text-white text-center ">
          <h2 class="text-center p-4">填寫購物資料</h2>
        </div>
      </div>
    </div>
    <!--購物車清單-->
    <div class="container mb-6">
      <div class="row">
        <div class="d-flex">
          <ul class="steps list-unstyled d-flex justify-content-between position-relative mx-auto mb-5">
            <li class="steps-item active w-33 d-flex flex-column align-items-center py-2 px-4">
                <p class="steps-circle d-flex justify-content-center align-items-center bg-danger">
                  <span class="h3 text-white text-center pt-2">1</span>
                </p>
              資料填寫
            </li>
            <li class="steps-item w-33 d-flex flex-column align-items-center py-2 px-4">
              <p class="steps-circle d-flex justify-content-center align-items-center bg-third">
                <span class="h3 text-white text-center pt-2">2</span>
              </p>
              訂單建立
            </li>
            <li class="steps-item w-33 d-flex flex-column align-items-center py-2 px-4">
              <p class="steps-circle d-flex justify-content-center align-items-center bg-third">
                <span class="h3 text-white text-center pt-2">3</span>
              </p>
              付款完成
            </li>
          </ul>
        </div>
        <!--會員資料-->
        <div class="col-lg-6 col-md-6 col-12 member-data mb-5">
          <div class="title bg-secondary p-2 text-light text-center">
            <h3>顧客資訊</h3>
          </div>
          <div class="bg-table border border-third p-3">
            <Form v-slot="{ errors }"  @submit="createOrder" class="bg-table rounded-bottom px-8">
              <div class="form-floating form-downline mb-3 mt-3">
                <Field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                ></Field>
                <label for="name" class="form-label">姓名：</label>
                <error-message name="姓名" class="invalid-feedback"></error-message>
              </div>

              <div class="form-floating form-downline mb-3">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"
                ></Field>

                <label for="email">電子郵件：</label>
                <error-message name="email" class="invalid-feedback"></error-message>
              </div>
              <div class="form-floating form-downline mb-3">
                <Field
                  id="tel"
                  name="聯絡電話"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['聯絡電話'] }"
                  placeholder="請輸入聯絡電話"
                  :rules="phoneCheck"
                  v-model="form.user.tel"
                ></Field>
                <label for="tel">聯絡電話：</label>
                <error-message name="聯絡電話" class="invalid-feedback"></error-message>
              </div>
              <div class="form-floating form-downline mb-8">
                <Field
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="form.user.address"
                ></Field>

                <label for="address">地址：</label>
                <error-message name="地址" class="invalid-feedback"></error-message>
              </div>
              <div class=" py-3">

                <Field
                  id="payWay"
                  name="付款方式"
                  type="selcet"
                  class="form-select"
                  :class="{ 'is-invalid': errors['付款方式'] }"
                  rules="required"
                  v-model="form.user.payWay"
                >
                <label for="payWay" class="form-label">付款方式:</label>
                  <select id="payWay" class="form-select" aria-label="Default select example" v-model="form.user.payWay">
                    <option value="0" disabled="disabled" selected >請選擇付款方式</option>
                    <option value="超商付款">超商付款</option>
                    <option value="ATM付款">ATM付款</option>
                    <option value="網路ATM付款">網路ATM付款</option>
                  </select>
                </Field>
                <error-message name="付款方式" class="invalid-feedback"></error-message>
              </div>

              <div class=" py-3">
                <label for="message" class="form-label">備註:</label>
                <textarea
                  name=""
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="3"
                  v-model="form.message"></textarea>
              </div>
            <div class="row">
              <div class="btn col-6">
                <router-link :to="`/cart`"
                            class="btn btn-secondary text-light"
                >
                  回購物車
                </router-link>
              </div>
              <div class="btn col-6">
                <button type="submit"
                        class="btn btn-danger"
                        :disabled="cart.carts <= 1">
                  送出訂單
                </button>
              </div>
            </div>
            </Form>
          </div>
        </div>
          <!--訂單資訊-->
          <div class="col-lg-6 col-md-6 col-12">
            <div class="title bg-secondary p-2 text-light text-center">
              <h3>訂單資訊</h3>
            </div>
            <div class="bg-table border border-third p-3">
              <div class="row align-items-center text-center border-bottom border-third">
                <div class="col-3">
                  <p>商品圖片</p>
                </div>
                <div class="col-3">
                  <p>商品名稱</p>
                </div>
                <div class="col-3">
                  <p>數量</p>
                </div>
                <div class="col-3 text-end">
                  <p>小計</p>
                </div>
              </div>
              <div v-for="item in cart" :key="item.id"
                  class="row py-4 align-items-center text-dark border-bottom text-center ">
                <div class="col-3">
                  <div class="product-photo">
                    <img class="me-4 order-img " :src="item.product.imageUrl" alt="" />
                  </div>
                </div>
                <div class="col-3">
                  <p>{{ item.product.title }}</p>
                </div>
                <div class="col-3 text-center">
                  <p>{{ item.qty }}</p>
                </div>
                <div class="col-3">
                  <p class="fw-bold text-end">NT${{ item.final_total }}</p>
                </div>
              </div>
              <div class="row text-dark pt-4 flex-row-reverse">
                <div class="total-price col-12 px-2 w-50 me-1">
                  <div class="d-flex justify-content-between">
                    <p class="fw-bold text-lg">總金額:</p>
                    <span class="text-danger fw-bolder">NT${{ final_total }}</span>
                  </div>
                </div>
              </div>
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
      cart: {},
      final_total: 0,
      loadingStatus: {
        loadingItem: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          payWay: ''
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            console.log(res)
            this.cart = res.data.data.carts
            this.final_total = res.data.data.final_total
            this.isLoading = false
            console.log(this.cart)
          } else {
            alert(res.data.message)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    phoneCheck (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需為正確的 手機號碼'
    },
    createOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          if (res.data.success) {
            this.$swal({ title: res.data.message, icon: 'success' })
            emitter.emit('update-cart')
            this.$router.push(`/checkoutorder/${res.data.orderId}`)
            this.getCart()
            this.isLoading = false
          } else {
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

  },
  mounted () {
    this.getCart()
  },
  created () {
    this.orderID = this.$route.params.order
  }
}
</script>
<style lang="scss" scoped>
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
.cart-list, .member-data{
  padding: 0 20px;
}
.order-img {
  max-width: 100px;
  max-height: 65px;
  object-fit: cover;
}
.product-photo {
  max-width: 120px;
  height: auto;
  display: flex;
  margin: 0 auto;
}
.product-photo img{
  display: flex;
  width: 100%;
}
.step {
  padding: 6px 20px;
  margin: 0 5px;
  border-radius: 3px;
  border: 1px solid #b2b2b2;
  color: #4f4f4f;
  position: relative;
  &.current {
    border: 1px solid red;
    font-weight: bolder;
    background-color: rgba(255, 255, 255, 0.9);
  }
  &.current :after {
    opacity: 1;
  }
  & :after {
    content: "";
    position: absolute;
    left: calc(50% - 25px);
    bottom: 4px;
    width: 70px;
    height: 7px;
    background-color: rgba(154, 149, 149, 0.6);
    opacity: 0;
  }
}
.steps-circle{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
