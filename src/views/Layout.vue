<template>
  <div class="front">
    <Navbar></Navbar>
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" >
.front {
  @import '../assets/stylesheets/all';
}
</style>
