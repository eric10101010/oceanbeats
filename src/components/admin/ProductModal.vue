<template>
<!-- Modal -->
<div id="productModal"
     ref="productModal"
     class="modal fade"
     tabindex="-1"
     aria-labelledby="productModalLabel"
     aria-hidden="true"
>
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content border-0 ">
      <div class="modal-header bg-primary text-white">
        <h5 id="productModalLabel" class="modal-title fw-bolder">
          <span v-if="isNew">新增產品</span>
          <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body mb-5">
        <div class="row d-flex justify-content-evenly">
          <div class="col-5">
            <div class="form-group">
              <label for="imageUrl">主要照片</label>
              <input v-model="tempProduct.imageUrl" id="imageUrl" type="text" class="form-control my-3" placeholder="請輸入照片連結">
            </div>
            <div class="form-group">
              <label for="customFile">或 上傳照片
                <i class="fas fa-spinner fa-spin" v-if="fileUploading"></i>
              </label>
              <input type="file" id="customFile" class="form-control my-4" ref="files" @change="uploadFile">
            </div>
            <img class="img-fluid" :src="tempProduct.imageUrl">
            <div class="mb-1">多圖新增</div>
            <div v-if="Array.isArray(tempProduct.imagesUrl)">
              <div class="mb-1" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                <div class="form-group">
                  <label for="imageUrl">照片網址</label>
                  <input v-model="tempProduct.imagesUrl[key]" type="text" class="form-control"
                    placeholder="請輸入照片連結">
                </div>
                <img class="img-fluid" :src="image">
              </div>
              <div
                v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]">
                <button class="btn btn-hgray btn-sm d-block w-100 my-3"
                  @click="tempProduct.imagesUrl.push('')">
                  新增照片
                </button>
              </div>
              <div v-else>
                <button class="btn btn-outline-danger btn-sm d-block w-100" @click="tempProduct.imagesUrl.pop()">
                  刪除照片
                </button>
              </div>
            </div>
            <div v-else>
              <button class="btn btn-primary text-light btn-sm d-block w-25 py-2 mt-4"
                @click="createImages">
                新增多張照片
              </button>
            </div>
          </div>
          <div class="col-5">
            <div class="form-group">
              <label for="title">標題</label>
              <input id="title" v-model="tempProduct.title" type="text" class="form-control my-3" placeholder="請輸入標題">
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="category">分類</label>
                <input id="category" v-model="tempProduct.category" type="text" class="form-control my-3"
                  placeholder="請輸入分類">
              </div>
              <div class="form-group col-md-6">
                <label for="unit">單位</label>
                <input id="unit" v-model="tempProduct.unit" type="text" class="form-control my-3" placeholder="請輸入單位">
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="origin_price">原價</label>
                <input id="origin_price" v-model.number="tempProduct.origin_price" type="number" min="0"
                  class="form-control my-3" placeholder="請輸入原價">
              </div>
              <div class="form-group col-md-6">
                <label for="price">售價</label>
                <input id="price" v-model.number="tempProduct.price" type="number" min="0" class="form-control my-3"
                  placeholder="請輸入售價">
              </div>
            </div>
            <hr>
            <div class="form-group">
              <label for="drivers">驅動單元</label>
              <textarea id="drivers" v-model="tempProduct.drivers" type="text" class="form-control my-3"
                placeholder="請輸入產品規格描述">
              </textarea>
            </div>
            <div class="form-group">
              <label for="infor">通訊使用頻段</label>
              <textarea id="infor" v-model="tempProduct.infor" type="text" class="form-control my-3"
                placeholder="請輸入產品規格描述">
              </textarea>
            </div>
            <div class="form-group">
              <label for="fequency">頻率響應</label>
              <textarea id="fequency" v-model="tempProduct.fequency" type="text" class="form-control my-3"
                placeholder="請輸入產品規格描述">
              </textarea>
            </div>
            <div class="form-group">
              <label for="weight">產品重量</label>
              <textarea id="weight" v-model="tempProduct.weight" type="text" class="form-control my-3"
                placeholder="請輸入產品規格描述">
              </textarea>
            </div>
            <div class="form-group">
              <label for="content">說明內容</label>
              <textarea id="content" v-model="tempProduct.content" type="text" class="form-control my-3"
                placeholder="請輸入說明內容">
              </textarea>
            </div>
            <div class="form-group mt-5">
              <div class="form-check form-switch">
                <input class="form-check-input" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" type="checkbox" id="tempProduct.id">
                <label class="form-check-label" for="tempProduct.id">
                  是否啟用 :
                </label>
                <span class="ms-3"
                      :class="{ 'text-success' : tempProduct.is_enabled ,
                                'text-danger' : !tempProduct.is_enabled }">
                  {{ tempProduct.is_enabled ? '啟用' : '未啟用' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary text-white fw-bolder" @click="$emit('update-product', tempProduct)">
          確定
        </button>
        <button type="button" class="btn btn-outline-danger fw-bolder" data-bs-dismiss="modal">
          取消
        </button>
      </div>
    </div>
  </div>
</div>

<!-- delModal -->
<div  class="modal fade"
      id="delProductModal"
      ref="delProductModal"
      tabindex="-1"
      aria-labelledby="delProductModalLabel"
      aria-hidden="true"
>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header bg-danger text-white">
        <h5 id="delProductModalLabel" class="modal-title fw-bolder text-white">
          刪除產品
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body my-7">
        是否刪除
        <strong class="text-danger">
          {{ innerTemp.title }}
        </strong> 商品(刪除後將無法恢復)。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" @click="delProduct">
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
      fileUploading: false,
      tempProduct: {
        imagesUrl: []
      }
    }
  },
  props: ['innerTemp', 'isNew'],
  watch: {
    innerTemp () {
      this.tempProduct = this.innerTemp
    }
  },
  methods: {
    uploadFile () {
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      this.fileUploading = true
      this.$http.post(url, formData)
        .then((res) => {
          this.fileUploading = false
          if (res.data.success) {
            console.log(res.data)
            this.tempProduct.imageUrl = res.data.imageUrl
            this.$swal({ title: '上傳照片成功', icon: 'success' })
          }
          if (!res.data.success) {
            this.$swal({ title: '檔案格式錯誤 or 照片太大無法上傳', icon: 'error' })
            console.log('error')
          }
        })
        .catch((err) => {
          this.fileUploading = false
          console.log(err.response)
        })
    },
    createImages () {
      this.tempProduct.imagesUrl = ['']
      this.tempProduct.imagesUrl.push('')
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.innerTemp.id}`
      this.$http.delete(url)
        .then(res => {
          console.log(res.data)
          if (res.data.success) {
            this.$swal({ title: res.data.message, icon: 'success' })
            this.$emit('close-del-modal')
            this.$emit('get-data')
          } else {
            this.$swal({ title: res.data.message, icon: 'error' })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

  }
}
</script>
