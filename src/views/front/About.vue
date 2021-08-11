<template>
  <div>
    <Navbar></Navbar>
    <div class="banner my-5">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="container">
          <div class="row">
            <div class="banner-box col-lg-12 col-md-12 col-12 bg-dark text-light py-2 py-sm-4">
              <h2 class="text-center p-4">關於我們</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
   <!-- breadcrumb -->
   <div class="breadcrumb container">
     <nav aria-label="breadcrumb row mb-3">
      <ul class="breadcrumb col-lg-12 col-md-12 col-12" aria-label="breadcrumb mb-3">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-secondary text-decoration-none">
              首頁
            </router-link>
          </li>
          <li class="breadcrumb-item active text-third" aria-current="page">
            關於我們
          </li>
      </ul>
     </nav>
   </div>
    <div class="container px-4 py-4 bg-fixed-bg bg-blue my-4">
      <div class="row g-5 py-5 mb-0">
        <div class="col-lg-12 col-md-12 col-12" style="object:fit;">
          <h1 class="text-center text-light py-6 display-4 fw-bolder pt-0">Oceanbeats</h1>
          <img src="../../assets/about-brand.jpg" alt="">
          <div class="brand-spirit text-light py-6 pb-0">
            <h2 class="text-center display-5 fw-bolder pb-5">品牌理念</h2>
            <p class="pb-0 text-center h3" style="line-height:4rem;">
                Oceanbeats理念是全力以赴，不斷自我挑戰只為打造出音質最純粹，<br>
                讓使用者戴上便能進入音符世界的產品。<br>
                因此，為喜愛音樂的您表現頂級的音質是Oceanbeats的使命，<br>
                讓您享有舒適的配戴體驗更是我們的榮幸。
              </p>
          </div>
        </div>
      </div>
      <div class="row g-5 py-5 mb-0">
        <div class="about-info col-lg-6 col-md-6 col-12">
          <img src="https://i.imgur.com/34gNpiJ.jpg" class="info-img d-block img-fluid" alt="Bootstrap Themes" >
          <div class="brand-text text-light">
            <h3 class="display-5 fw-bold text-center my-5">核心技術</h3>
            <ul class="brand-describe px-2 h4 text-center">
              <li><p>QCC514X晶片高速及時運算，降低延遲，</p></li>
              <li><p>ANC主動降噪技術精準抵消外界噪音，</p></li>
              <li><p>最新版藍牙5.2，支援SBC、AAC音頻解碼。</p></li>
            </ul>
          </div>
        </div>
        <div class="about-info col-lg-6 col-md-6 col-12">
          <img src="https://i.imgur.com/BsWYQWr.jpg" class="info-img d-block img-fluid" alt="Bootstrap Themes" >
          <div class="brand-text text-light">
            <h3 class="display-5 fw-bold text-center my-5">專業服務</h3>
            <ul class="brand-describe px-2 h4 text-center">
              <li><p>Oceanbeat提供完整的產品售後服務，</p></li>
              <li><p>能即時處理使用者遭遇的問題，並給予相對應協助。</p></li>
              <li><p>包括產品使用諮詢，產品維修諮詢，軟體連動教學。</p></li>
            </ul>
          </div>
        </div>
      </div>
      <!---人物介紹----->
      <div class="row py-5">
        <h2 class="text-center display-5 text-light fw-bolder pb-6">團隊成員</h2>
        <div class="box col-lg-4 col-md-4 col-12">
          <div class="team-img">
            <img src="https://images.unsplash.com/photo-1586293580848-eca4adb9647c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1300&q=80" alt="">
          </div>
          <div class="team-text">
            <h3 class="h2 py-4">設計美學總監</h3>
            <p class="h4 pb-4">Emma Ellington</p>
          </div>
        </div>

        <div class="box col-lg-4 col-md-4 col-12">
          <div class="team-img">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="">
          </div>
          <div class="team-text">
            <h3 class="h2 py-4">公司執行長</h3>
            <p class="h4 pb-4">Steve Schmitt</p>
          </div>
        </div>

        <div class="box col-lg-4 col-md-4 col-12">
          <div class="team-img">
            <img src="https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="">
          </div>
          <div class="team-text">
            <h3  class="h2 py-4">技術開發總監</h3>
            <p class="h4 pb-4">Bruno wayne</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  methods: {
    sweetAlert () {
      this.$swal({
        title: 'Oops...',
        icon: 'error'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  height: calc(30vh + 50px);
  background-color: #ccc;
  background: url('https://images.unsplash.com/photo-1594998440033-042baa3ee40c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80') 50% 25%;
  background-size: cover;
}
.banner-box {
  opacity: 0.8;
}
.bg-fixed-bg {
min-height: 100vh;
background-size: cover;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center center;
 }
.bg-blue {
background-image: url("https://images.unsplash.com/photo-1623425654244-a91e8f48bd63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80");
}

.info-img {
  min-height: 420px;
  object-fit: cover;
}
.box {
  width: 100%;
  max-width: 400px;
  height: 600px;
  position: relative;
  overflow: hidden;
  transition: 0.6s ease-out;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
    .team-text {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .team-img {
      transform: scale(1.05);
    }
  }
  .team-img {
    transition: .5s ease-in-out;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .team-text {
    position: absolute;
    bottom: 0;
    z-index: 1;
    background-color: rgba(7, 7, 7, 0.5);
    opacity: 0.6;
    visibility: hidden;
    transform: translateY(100%);
    transition: 0.3s ease-in-out;
    width: 100%;
    color: #fff;
    text-align: center;
  }

}
  @media(max-width:414px){
    .brand-spirit p {
      font-size: 14px;
      padding: 20px;
    }
    .box {
    width: 100%;
    max-width: 200px;
    height: 300px;
    margin-bottom: 30px;
    }
    .team-img {

      width: 100%;
      height: 100%;
    }
    .brand-describe li{
      font-size: 14px;
      padding: 20px;

    }
  }
</style>
