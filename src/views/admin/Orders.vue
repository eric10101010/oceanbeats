<template>
  <div class="col-11 py-20 fw-bolder">
    <h2 class="text-center text-primary pt-14 pt-md-20 mt-6 mb-6">訂單列表</h2>
    <div class="container vh-100">
      <table class="table table-hover fw-bolder border border-third">
        <thead class="bg-secondary border border-primary">
          <tr class="text-center text-light">
            <th scope="col" width="3%" class="text-center">序號</th>
            <th scope="col" width="3%" class="text-start px-6">訂單編號</th>
            <th scope="col" width="5%" class="text-start">訂購日期</th>
            <th scope="col" width="5%" class="text-center">訂單金額</th>
            <th scope="col" width="5%">付款狀態</th>
            <th scope="col" width="5%">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id" class="text-center">
            <th scope="row" class="text-center">{{ item.num }}</th>
            <td class="text-start px-6">{{ item.id }}</td>
            <td class="text-start">{{ timestampToDate(item.create_at) }}</td>
            <td>{{ item.total }}</td>
            <td>
                <span v-if="item.is_paid" class="text-success ms-1">已付款</span>
                <span v-else class="text-danger ms-1">未付款</span>
            </td>
            <td>
              <button type="button"
                      class="btn btn-outline-primary btn-sm me-4"
                      data-bs-toggle="modal" data-bs-target="#orderModal"
                      @click="adjustStatus(false, item, 'put')">
                編輯
              </button>
              <button type="button"
                      class="btn btn-outline-danger btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#orderModal"
                      @click="adjustStatus(false, item, 'del')">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-center mt-4">
        <Pagination :page="pagination" @getProduct="getOrder" />
      </div>
    </div>
  </div>
  <!-- Modal -->
  <OrderModal ref="modal"
              :temp="tempOrder"
              :action="action"
              :status="status"
              @get-order="getOrder"
              @del-item="delOrder"
 >
  </OrderModal>

</template>

<script>
import Pagination from '@/components/Pagination'
import OrderModal from '../../components/admin/OrderModal.vue'
export default {
  components: {
    OrderModal,
    Pagination
  },
  data () {
    return {
      orderModal: {},
      orders: [],
      pagination: {},
      isDeleteAll: false,
      status: '',
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    getOrder (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          console.log(res.data)
          console.log(res.data.pagination)
        } else {
          this.isLoading = false
          console.log(res.data.message)
        }
      })
    },
    adjustStatus (isDeleteAll, item, status) {
      this.isDeleteAll = isDeleteAll
      this.isDeleteAll ? this.status = 'delAll'
        : status === 'put' ? this.status = 'put'
          : this.status = 'delete'
      if (item) {
        const tempItem = JSON.parse(JSON.stringify(item))
        tempItem.paid_date = this.timestampToDate(tempItem.paid_date)
        this.$refs.modal.tempOrder = tempItem
        // this.$bus.emit('tempOrder', this.$refs.modal.tempOrder)
      }
    },
    timestampToDate (timestamp) {
      if (timestamp) {
        const dd = new Date(timestamp * 1000)
        return `${dd.getFullYear()}-${this.adjustZero(dd.getMonth() + 1)}-${this.adjustZero(dd.getDate())}`
      }
    },
    adjustZero (num) {
      return num < 10 ? `0${num}` : `${num}`
    },
    delOrder () {
      this.$emit('is-loading', true)
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      if (this.status === 'delAll') {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/all`
      }
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
    }
  },
  created () {
    this.getOrder()
  }
}
</script>
