<template>
  <!-- delModal -->
  <div class="modal fade"
        id="delCouponModal"
        ref="delCouponModal"
        tabindex="-1"
        aria-labelledby="delCouponModalLabel"
        aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title fw-bolder" id="exampleModalLabel">
            刪除優惠券
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body fw-bolder py-10">
          是否刪除
          <strong class="text-danger">
            {{ innerTemp.title }}
          </strong> 優惠卷(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="delCoupon" >
            確定刪除
          </button>
          <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      couponModalId: ''
    }
  },
  props: ['innerTemp', 'isNew'],
  watch: {
    innerTemp () {
      this.tempCoupon = this.innerTemp
    }
  },
  methods: {
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.innerTemp.id}`
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.$swal({ title: res.data.message, icon: 'success' })
            this.$emit('close-del-modal')
            this.$emit('get-data')
            console.log(res.data)
            console.log(res.data.message)
            this.couponModalId = ''
          } else {
            console.log(res.data.message)
          }
        })
        .catch(err => {
          this.$swal({ title: err.data.message, icon: 'error' })
        })
    }
  }
}
</script>
