<template>
  <div class="col-11 py-20 fw-bolder">
    <h2 class="text-center text-primary pt-14 pt-md-20 mt-6">產品列表</h2>
    <div class="container vh-100">
      <div class="text-end mb-8">
        <button type="button"
                class="btn btn-danger text-light btn-md h5 "
                @click="openModal('new')"
                data-bs-toggle="modal" data-bs-target="#productModal"
                >
          建立新產品
        </button>
      </div>
      <table class="table table-hover fw-bolder border border-third">
        <thead class="bg-secondary border border-primary">
          <tr class="text-center text-light">
            <th scope="col" width="3%">序號</th>
            <th scope="col" class="text-center">分類</th>
            <th scope="col" class="text-center">產品名稱</th>
            <th scope="col">原價</th>
            <th scope="col">售價</th>
            <th scope="col" class="text-center">是否啟用</th>
            <th scope="col" width="5%" class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in products" :key="item.id" class="text-center">
            <td>{{ item.num }}</td>
            <td width="5%" class="text-center">{{ item.category }}</td>
            <td width="5%" class="text-center">{{ item.title }}</td>
            <td width="5%">{{ item.origin_price }}</td>
            <td width="5%">{{ item.price }}</td>
            <td width="5%" class="text-center">
              <span class="ms-1"
                    :class="{ 'text-success' : item.is_enabled ,
                              'text-danger' : !item.is_enabled }">
                {{ item.is_enabled ? '已啟用' : '未啟用' }}
              </span>
            </td>
            <td>
              <button class="btn btn-outline-primary btn-sm me-4 fw-bolder"
                      @click="openModal('edit', item)"
                      type="button"
              >
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm fw-bolder"
                      @click="openModal('delete', item)"
                      type="button"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-center mt-4">
        <Pagination :page="pagination" @getProduct="getProducts" />
      </div>
    </div>
    <!-- Modal -->
    <ProductModal ref="touchModal"
                  :is-new="isNew"
                  :inner-temp="tempProduct"
                  @get-data="getProducts"
                  @update-product="updateProduct"
                  @close-del-modal="closeDelModal">
    </ProductModal>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue'
import ProductModal from '../../components/admin/ProductModal.vue'
import * as bootstrap from 'bootstrap'

export default {
  components: {
    Pagination,
    ProductModal
  },
  data () {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      isNew: false,
      tempProduct: {
        imagesUrl: []
      },
      productModal: '',
      delProductModal: ''
    }
  },
  methods: {
    getProducts (num = this.pagination.current_page || 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${num}`
      this.$http.get(url)
        .then(res => {
          console.log(res.data)
          if (res.data.success) {
            this.isLoading = true
            const { products, pagination } = res.data
            this.products = products
            this.pagination = pagination
          } else {
            this.isLoading = false
            console.log(res.data.message)
            this.$router.push('/admin/products')
          }
        })
    },
    updateProduct (tempProduct) {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let http = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${tempProduct.id}`
        http = 'put'
      }
      this.$http[http](url, { data: tempProduct })
        .then((res) => {
          if (res.data.success) {
            this.$swal({ title: res.data.message, icon: 'success' })
            this.productModal.hide()
            this.getProducts()
          } else {
            console.log('更新失敗')
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
    },
    openModal (isNew, item) {
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.productModal.show()
      }
      if (isNew === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
        console.log('tempProduct', this.tempProduct)
        this.productModal.show()
      } else if (isNew === 'delete') {
        this.tempProduct = { ...item }
        this.isNew = false
        this.delProductModal.show()
      }
    },
    closeDelModal () {
      this.delProductModal.hide()
    }
  },
  created () {
    this.getProducts()
  },
  mounted () {
    this.productModal = new bootstrap.Modal(document.getElementById('productModal'), {
      keyboard: false,
      backdrop: 'static'
    })
    this.delProductModal = new bootstrap.Modal(this.$refs.touchModal.$refs.delProductModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
