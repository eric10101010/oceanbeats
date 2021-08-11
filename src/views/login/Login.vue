<template>
    <div class="login vh-100">
      <div class="col-10 col-xl-6 col-md-6 mx-auto login-form bg-primary text-light p-4">
        <h2 class="text-center">
          後台資料管理
        </h2>
          <Form v-slot="{ errors }" @submit="login">
            <div class="mb-3">
              <label for="email" class="form-label">帳號</label>
              <Field id="email" name="email" type="email"
                     class="form-control" :class="{ 'is-invalid': errors['email'] }"
                     placeholder="請輸入 Email" rules="email|required" v-model="user.username"></Field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼</label>
              <Field id="password" name="password" type="password"
                     class="form-control" :class="{ 'is-invalid': errors['password'] }"
                     placeholder="請輸入密碼" rules="required" v-model="user.password"></Field>
              <error-message name="password" class="invalid-feedback"></error-message>
            </div>
            <div class="d-flex justify-content-between">
              <router-link  :to="`/`"  class="btn btn-secondary text-light" >返回前台</router-link>
              <button type="submit" class="btn btn-secondary text-light text-center">登入後台</button>
            </div>
          </Form>
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
    login () {
      const url = `${process.env.VUE_APP_API}admin/signin`
      this.isLoading = true
      this.$http.post(url, this.user)
        .then(res => {
          if (res.data.success) {
            const { token, expired } = res.data
            document.cookie = `MyToken=${token}; expires=${new Date(expired)}`
            this.$swal({ title: res.data.message, icon: 'success' })
            // 轉入後台頁面
            this.$router.push('/admin/products')
          } else {
            this.$swal({ title: '登入失敗，請重新確認帳號密碼', icon: 'error' })
            this.user.username = ''
            this.user.password = ''
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.login{
    background:url('https://images.unsplash.com/photo-1626291594949-64c26e0317f0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80') no-repeat;
    background-size: cover;
    background-position:center center;
    .login-form{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        opacity: 0.7;
    }
}
</style>
