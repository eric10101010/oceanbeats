<template>

  <div class="back d-flex align-items-center justify-content-center">
    <h1 class="back-box text-center">
      <router-link to="/" class="index text-center text-danger">不存在此頁<br>返回首頁</router-link>
    </h1>
  </div>
</template>

<style lang="scss" scoped>

.index{
  font-size: 50px;
  text-decoration: none;
}
.back{
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1523672557977-2c106afb2278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80') no-repeat 50% 50%;
  background-size: cover;
  object-fit: cover;
  display: flex;
  justify-content: center;
}
.back-box{
  border: 1px solid red;
  background-color: #000000;
  opacity: 0.6;
}
</style>
