<template>
  <div id="orderModal" ref="modal" class="modal fade" tabindex="-1" aria-labelledby="orderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" v-if="status === 'put'">
      <div class="modal-content border-0">
        <div class="modal-header bg-primary text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>編輯訂單</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex flex-column ">
          <div class="row d-flex justify-content-evenly">
            <div class="order-block col-md-5 col-xl-5 ">
              <h3 class="text-primary fw-bolder">顧客資訊</h3>
              <div class="order-name mb-3">
                <label for="name" class="h5 mb-2">姓名:</label>
                <input v-model="tempOrder.user.name" class="form-control" type="text">
              </div>
              <div class="order-tel mb-3">
                <label for="tel" class="h5 mb-2">電話:</label>
                <input v-model="tempOrder.user.tel" class="form-control" type="tel">
              </div>
              <div class="order-email mb-3">
                <label for="email" class="h5 mb-2">信箱:</label>
                <input v-model="tempOrder.user.email" class="form-control" type="text">
              </div>
              <div class="order-address mb-3">
                <label for="address" class="h5 mb-2">地址:</label>
                <input v-model="tempOrder.user.address" class="form-control" type="text">
              </div>
              <div class="order-payWay mb-3">
                <label for="payWay" class="form-label">付款方式:</label>
                <div class="input-group mb-0 mt-2">
                  <select class="form-select" v-model="tempOrder.user.payWay">|
                    <option value="0" disabled="disabled" selected >請選擇付款方式</option>
                    <option value="超商付款">超商付款</option>
                    <option value="ATM付款">ATM付款</option>
                    <option value="網路ATM付款">網路ATM付款</option>
                  </select>
                </div>
              </div>

              <div class="order_item_group mb-3">
                <label for="create_time" class="h5 mb-2">備註:</label>
                <input v-model="tempOrder.message" class="form-control" type="text">
              </div>
              <div class="order_item_group mb-3">
                <h3 class="text-primary fw-bolder">付款狀態</h3>
                <div class="col-lg-6 col-md-6 col-6">
                  <label for="is_paid">選擇狀態:</label>
                  <div class="input-group mb-0 mt-2">
                    <select class="form-select" id="is_paid" v-model="tempOrder.is_paid">
                      <option value="true">已付款</option>
                      <option value="false">未付款</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
            <!--切割線--->
            <div class="form-group col-md-5 col-xl-5">
              <h3 class="text-primary fw-bolder">訂單資訊</h3>
              <div class="order_item_group py-2">
                <span class="me-3 h5">訂購日期:</span>
                <span class="h6"> {{ timestampToDate(tempOrder.create_at) }} </span>
              </div>
              <div class="order_item_group mb-3">
                <span class="me-3 h5">訂單編號:</span>
                <span class="h6"> {{ (tempOrder.id) }} </span>
              </div>
            <div class="form-group col-md-6 col-xl-12 mt-5">
                <h3 class="text-primary fw-bolder">訂單明細</h3>
                  <table class="order-list col-xl-12 col-md-12 ">
                    <thead class="bg-secondary text-light boreder border-third ">
                      <tr class="text-center">
                        <th scope="col" width="34%">商品資訊</th>
                        <th scope="col" width="22%">售價</th>
                        <th scope="col" width="22%">數量</th>
                        <th scope="col" width="22%">小計</th>
                      </tr>
                    </thead>
                  <tbody class="text-center">
                    <tr v-for="item in tempOrder.products" :key="item.id" class="border-bottom">
                      <td>
                        <img :src="item.product.imageUrl" alt="item-photo" style="max-width:60px">
                        <span class="mx-3">{{item.product.title}}</span>
                      </td>
                      <td>{{ item.product.price }}</td>
                      <td>{{ item.qty }} {{ item.product.unit }}</td>
                      <td>{{ item.final_total }}</td>
                    </tr>
                  </tbody>
                  </table>
                  <div class="price-total text-end mt-3">
                      <span class="me-2 h5">總金額:</span>
                      <span class="text-danger me-4 h4">NT{{tempOrder.total}}</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary text-light" @click="updateOrder(tempOrder)">
            確定
          </button>
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
            取消
          </button>
        </div>
      </div>
    </div>
    <OrderDelModal @del-tempOrder="delOrder"
                    :temp="tempOrder"
                    :action="action"
                    :status="status"
                    @del-item="delOrder"
    >
    </OrderDelModal>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import OrderDelModal from '../../components/admin/OrderDelModal.vue'
export default {
  props: ['status'],
  components: {
    OrderDelModal
  },
  data () {
    return {
      tempOrder: {
      },
      date: new Date(),
      action: 'order',
      is_paid: 0
    }
  },
  methods: {
    updateOrder (tempOrder) {
      this.$emit('is-loading', true)
      console.log(tempOrder)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${tempOrder.id}`
      this.tempOrder.total = parseInt(this.tempOrder.total)
      this.tempOrder.is_paid === 'true' ? this.tempOrder.is_paid = true : this.tempOrder.is_paid = false
      this.tempOrder.paid_date = this.DateToTimestamp(this.tempOrder.paid_date)
      this.$http.put(url, { headers: { 'Access-Control-Allow-Origin': '*' }, data: this.tempOrder })
        .then(res => {
          this.$emit('is-loading', false)
          console.log(res)
          if (res.data.success) {
            this.$emit('get-order')
            this.modal.hide()
            this.$swal({ title: '成功', icon: 'success' })
          } else {
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
        .catch(err => console.log(err.message))
    },
    delOrder () {
      this.$emit('is-loading', true)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.$http.delete(url)
        .then(res => {
          this.$emit('is-loading', false)
          console.log(res)
          if (res.data.success) {
            this.$emit('get-order')
            this.modal.hide()
            this.$swal({ title: '刪除成功', icon: 'success' })
          }
        })
        .catch(err => console.log(err))
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
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
