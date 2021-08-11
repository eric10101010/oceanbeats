<template>
    <div class="container-fluid">
        <div class="bg-primary py-3 row">
            <div class="col-1 p-0">
                <h1 class="h5 text-light text-center bg-primary py-4">
                <i class="bi bi-gear mx-3"></i>後台</h1>
            </div>
            <div class="col-11 d-flex justify-content-end pe-4">
                <a href="#" class="logout text-light py-4" @click.prevent="logout">
                  <i class="bi bi-door-closed mx-3">
                  </i>登出
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-1 p-0">
                <nav class="bg-primary p-3 text-center" style="min-height:100%">
                    <div class="d-flex flex-column runmap">
                        <ul class="list-unstyled backSidebar-list">
                            <li class="nav-item">
                                <router-link class="sidebar-link
                                p-0 py-2 mb-5 d-block border border-light text-light"
                                active-class="backActive"
                                to="/admin/products"
                                >
                                <i class="bi bi-file-bar-graph d-block mb-2"></i>
                                產品管理
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="sidebar-link
                                p-0 py-2 mb-5 d-block border border-light text-light"
                                active-class="backActive"
                                to="/admin/coupons">
                                <i class="bi bi-sd-card d-block mb-2"></i>
                                優惠卷管理
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="sidebar-link
                                p-0 py-2 mb-3 d-block border border-light text-light"
                                active-class="backActive"
                                to="/admin/orders">
                                <i class="bi bi-cart-check d-block mb-2"></i>
                                訂單資料
                                </router-link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`
        const api = `${process.env.VUE_APP_API}api/user/check`
        this.$http.post(api)
          .then((res) => {
            if (res.data.success) {
              this.checkSuccess = true
            } else {
              alert(res.data.message)
              this.$router.push('/Login')
            }
          })
      } else {
        alert('您尚未登入。')
        this.$router.push('/Login')
      }
    },
    logout () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}logout`
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            document.cookie = 'hexToken=;expires=;'
            this.$router.push('/login')
            this.$swal({ title: res.data.message, icon: 'success' })
            this.user.username = ''
            this.user.password = ''
          } else {
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)MyToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
  }
}
</script>

 <style lang="scss">
 .router-link{
   text-decoration: none;
 }
 .runmap{
  padding: 50px 0;
  margin: 50px 0;
 }
 .logout, .sidebar-link{
   text-decoration: none;
 }
 </style>
