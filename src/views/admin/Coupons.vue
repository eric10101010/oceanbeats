<template>
    <div class="col-11 py-20 fw-bolder">
      <h2 class="text-center text-primary pt-14 pt-md-20 mt-6">優惠卷列表</h2>
      <div class="container vh-100">
        <div class="text-end mb-8">
          <button type="button"
                  class="btn btn-danger text-light hvr-bounce-to-right h5 mb-3"
                  @click="openCouponModal('new')"
          >
            建立新優惠券
          </button>
        </div>
        <table class="table table-hover fw-bolder mb-10 border border-third">
          <thead class="bg-secondary border border-primary">
            <tr class="text-center text-light">
              <th scope="col">序號</th>
              <th scope="col">優惠卷名稱</th>
              <th scope="col">優惠碼</th>
              <th scope="col">折扣百分比</th>
              <th scope="col">到期日</th>
              <th scope="col" class="text-center">是否啟用</th>
              <th scope="col" class="text-center">編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in coupons" :key="key" class="text-center">
              <td width="3%">{{ item.num }}</td>
              <td width="5%">{{ item.title }}</td>
              <td width="5%">{{ item.code }}</td>
              <td width="5%" class="text-success px-4">{{ item.percent }}%</td>
              <td width="5%">{{ expiryDate(item.due_date) }}</td>
              <td width="5%" class="text-center">
                <span class="ms-1"
                      :class="{ 'text-success' : item.is_enabled ,
                                'text-danger' : !item.is_enabled }">
                  {{ item.is_enabled ? '已啟用' : '未啟用' }}
                </span>
              </td>
              <td width="5%" class="text-center">
                <button class="btn btn-outline-primary btn-sm me-4" @click="openCouponModal('edit', item)" type="button">編輯</button>
                <button class="btn btn-outline-danger btn-sm"  @click="openCouponModal('delete', item)" type="button">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-center mt-4">
          <Pagination :page="pagination" @getProduct="getCoupons" />
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div id="couponModal" ref="couponModal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered" style="max-width: 600px;">
        <div class="modal-content border-0 fw-bolder">
          <div class="modal-header bg-primary text-white">
            <h5 id="productModalLabel" class="modal-title fw-bolder">
              <span v-if="isNew">新增優惠券</span>
              <span v-else>編輯優惠券</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body mb-5">
            <div class="form-group">
              <label for="title">標題</label>
              <input id="title" v-model="tempCoupon.title" type="text" class="form-control my-3" placeholder="請輸入標題">
            </div>
            <div class="form-group">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control my-3" id="coupon_code" v-model="tempCoupon.code"
                placeholder="請輸入優惠碼">
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control my-3" id="due_date" v-model="due_date">
            </div>
            <div class="form-group">
              <label for="price">折扣百分比</label>
              <input type="number" class="form-control my-3" id="price" min="1" max="100"
                v-model.number="tempCoupon.percent" placeholder="請輸入折扣百分比">
            </div>
            <div class="form-group mt-4">
              <div class="form-check form-switch ">
                <input class="form-check-input px-3 " v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0" type="checkbox" id="is_enabled">
                <label class="form-check-label" for="is_enabled">
                  是否啟用 :
                </label>
                <span class="h5 ms-3 fw-bolder"
                      :class="{ 'text-success' : tempCoupon.is_enabled ,
                                'text-danger' : !tempCoupon.is_enabled }">
                  {{ tempCoupon.is_enabled ? '啟用' : '未啟用' }}
                </span>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button v-if="isNew" type="button" class="btn btn-primary text-white fw-bolder" @click="updateCoupon">
              新增優惠券
            </button>
            <button v-else type="button" class="btn btn-primary text-white fw-bolder" @click="updateCoupon">
              確定
            </button>
            <button type="button" class="btn btn-outline-danger fw-bolder" data-bs-dismiss="modal">
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <CouponModal  ref="touchModal"
                  :is-new="isNew"
                  :inner-temp="tempCoupon"
                  @get-data="getCoupons"
                  @update-product="updateCoupon"
                  @close-del-modal="closeDelModal">
    </CouponModal>
</template>
<script>
import Pagination from '@/components/Pagination'
import CouponModal from '../../components/admin/CouponModal.vue'
import * as bootstrap from 'bootstrap'
export default {
  components: {
    Pagination,
    CouponModal
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        due_date: 0,
        code: ''
      },
      due_date: new Date(),
      pagination: {},
      isNew: false,
      couponModalId: '',
      couponModal: '',
      delCouponModal: ''
    }
  },
  watch: {
    due_date () {
      const timestamp = Math.floor(new Date(this.due_date) / 1000)
      this.tempCoupon.due_date = timestamp
    }
  },
  methods: {
    expiryDate (time) {
      const date = new Date(time * 1000)
      return date.toLocaleDateString()
    },
    openCouponModal (isNew, item) {
      if (isNew === 'new') {
        this.isNew = true
        this.couponModal.show()
        this.due_date = new Date()
        this.tempCoupon = {
          due_date: Math.floor(new Date(this.due_date) / 1000), // 預設為今日的時間戳
          is_enabled: 0
        }
      }
      if (isNew === 'edit') {
        this.isNew = false
        this.tempCoupon = { ...item }
        this.couponModal.show()
        this.tempCoupon = { ...item }
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T')
        this.due_date = dateAndTime[0]
      } else if (isNew === 'delete') {
        this.tempCoupon = { ...item }
        this.isNew = false
        this.delCouponModal.show()
      }
    },
    getCoupons (num = this.pagination.current_page || 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${num}`
      this.$http.get(url)
        .then(res => {
          this.coupons = res.data.coupons
          this.pagination = res.data.pagination
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCoupon () {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethod = 'put'
        this.due_date = new Date(this.tempCoupon.due_date * 1000)
      }
      this.$http[httpMethod](url, { data: this.tempCoupon }).then((res) => {
        if (res.data.success) {
          this.couponModal.hide()
          this.getCoupons()
          this.$swal({ title: res.data.message, icon: 'success' })
        } else {
          this.getCoupons()
          this.$swal({ title: res.data.message, icon: 'error' })
        }
      })
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.couponModalId}`
      this.$http.delete(url)
        .then((res) => {
          this.$swal({ title: res.data.message, icon: 'success' })
          this.couponModalId = ''
          this.delModalHide()
          this.getCoupons()
        })
    },
    closeDelModal () {
      this.delCouponModal.hide()
    }
  },
  created () {
    this.getCoupons()
  },
  mounted () {
    this.couponModal = new bootstrap.Modal(document.getElementById('couponModal'), {
      keyboard: false,
      backdrop: 'static'
    })
    this.delCouponModal = new bootstrap.Modal(this.$refs.touchModal.$refs.delCouponModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
<style scope>
.swal2-container {
  margin-top: 100px;
}
</style>
