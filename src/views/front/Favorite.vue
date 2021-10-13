<template>
  <!-- Banner -->
  <div class="banner container-fluid d-flex align-items-center justify-content-center my-5">
    <div class="row banner-box p-3 w-100">
      <div class="text-white text-center ">
        <h2 class="text-center p-4">我的收藏</h2>
      </div>
    </div>
  </div>
  <!-- 收藏無商品 -->
  <div class="container d-flex flex-column align-items-center mt-6"  v-if="favoriteProduct.length == 0">
    <div class="row">
      <div class="col-12">
        <h2 class="h2 text-center mb-4 fw-bolder">
          收藏清單內<br>目前沒有商品唷!
        </h2>
      </div>
      <router-link :to="`/products`" class="btn btn-secondary text-white my-6">
        <h3 class="h4 my-2">返回購物列表</h3>
      </router-link>
    </div>
  </div>
  <!-- 收藏 商品資料 -->
  <div class="container my-5" v-else>
    <div class="title bg-secondary py-2 text-light text-center">
       <h3>收藏清單</h3>
    </div>
    <div class="border border-third p-5">
      <table class="table">
        <thead>
          <tr class="text-center d-md-table-row border-bottom border-third">
            <th class="border-bottom-0" style="width:25%;">商品</th>
             <!-- <th class="border-bottom-0" style="width:25%;">名稱</th> -->
            <th class="text-center border-bottom-0" style="width:25%;">售價</th>
            <th class="border-bottom-0" style="width:25%;">購物車</th>
            <th class="border-bottom-0" style="width:25%;">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in favoriteProduct" :key="item" class="align-middle text-center">
            <th class="pt-2">
              <div class="d-flex flex-column align-items-center">
                <img :src="item.product.imageUrl" :alt="item.product.title" style="width:100px;" />
                <p class="d-lg-block d-md-none d-sm-none d-none mt-2">{{ item.product.title }}</p>
              </div>
            </th>
            <!-- <td class="text-center borde">
              <p class="d-block mt-2">{{ item.product.title }}</p>
            </td> -->
            <td class="text-center">
              <p class="fw-bold mb-0 mb-sm-2">{{ item.product.price }}</p>
            </td>
            <td  class="addCart">
              <button class="btn btn-sm border border-secondary" style="font-size:20px;"
                      @click.prevent="addCart(item.product.id)">
                <span><i class="bi bi-cart"></i></span>
              </button>
            </td>
            <td>
              <div class="btn btn-sm btn-outline-danger">
                <a :disabled="status.loadingItem === item.id"
                    @click.prevent="removeFavoriteItem(item)"
                    style="font-size:20px">
                  <span><i class="bi bi-trash"></i></span>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center pt-4">
        <router-link class="btn btn-secondary text-white" to="/products">返回購物</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from '../../assets/javascript/emitter'
import localStorage from '../../assets/javascript/localStorage'
export default {
  data () {
    return {
      buyNum: 1,
      status: {
        loadingItem: ''
      },
      myFavorite: [], // 收藏清單(我的最愛)
      favoriteProduct: []
    }
  },
  inject: ['emitter'],
  mixins: [localStorage],
  methods: {
    getFavorite () {
      this.myFavorite = this.getLocalStorage() || []
      this.favoriteProduct = []
      this.isLoading = true
      if (this.myFavorite.length > 0) {
        this.myFavorite.forEach((item) => {
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${item}`
          this.$http.get(url)
            .then((res) => {
              if (res.data.success) {
                this.favoriteProduct.push(res.data)
                console.log(res.data)
                this.isLoading = false
              } else {
                this.isLoading = false
              }
            })
            .catch(() => {
              this.$swal({
                title: '發生錯誤，請重新整理此頁面</p>',
                icon: 'error'
              })
            })
        })
      } else {
        this.isLoading = false
      }
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: { product_id: id, qty: this.buyNum } })
        .then(res => {
          console.log(res.data)
          console.log(res.data)
          emitter.emit('update-cart')
          this.$swal({ title: '成功加入購物車', icon: 'success' })
        })
        .catch(err => console.log(err))
    },
    removeFavoriteItem (item) {
      this.myFavorite.splice(this.myFavorite.indexOf(item.id), 1)
      this.saveLocalStorage(this.myFavorite)
      emitter.emit('update-favorite')
      this.isLoading = true
      this.$swal({
        title: '商品已從收藏中移除',
        icon: 'success'
      })
      this.getFavorite()
    }
  },
  mounted () {
    this.getFavorite()
  }
}
</script>
<style lang="scss">
.banner {
  height: calc(30vh + 50px);
  background-color: #ccc;
  background: url('https://images.unsplash.com/photo-1624280433509-b01afeaf68e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80') 50% 50%;
  background-size: cover;
}
.banner-box {
  background-color: #000000;
  opacity: 0.7;
}
.addCart span{
  color: #7FB3D5;
}
.addCart span:hover{
  color: #FFFFFF;
}
.addCart button:hover{
  background-color: #7FB3D5;
  color: #FFFFFF;
}

</style>
