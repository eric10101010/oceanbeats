<template>
  <div>
  <Navbar></Navbar>
    <div class="banner my-5">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="container">
          <div class="row">
            <div class="banner-box col-lg-12 col-md-12 col-12 bg-dark text-light py-2 py-sm-4">
              <h2 class="text-center p-4">聯絡資訊</h2>
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
            聯絡資訊
          </li>
      </ul>
      </nav>
    </div>
    <div class="container mt-4">
      <h2 class="display-5 fw-bolder text-primary">門市資訊</h2>
      <div class="row px-2 my-6">
        <div class="box col-lg-6 col-md-12 col-12">
          <div class="shop-img d-flex justify-content-center align-items-center" style=" background: url('https://images.unsplash.com/photo-1567787899110-e8399c09cbe8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80') 50% 45%;">
            <h3 class="display-5 text-light text-center">Oceanbeats<br>台北館</h3>
            <div class="shop-text text-left py-4 px-5">
              <p class="py-2 h3">地點:台北市大安區復興南路二段202號</p>
              <p class="py-2 h3">電話：(02)2266-2188</p>
              <p class="py-2 h3">營業時間：週一至週日10:00~21:00</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.174076873652!2d121.54138231633563!3d25.028165844676465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzQxLjQiTiAxMjHCsDMyJzM2LjkiRQ!5e0!3m2!1szh-TW!2stw!4v1619939605303!5m2!1szh-TW!2stw"
                    width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0" style="border: 0px;">
            </iframe>
        </div>
      </div>
      <div class="row px-2 d-flex flex-row-reverse mb-6">
        <div class="box col-lg-6 col-md-12 col-12">
          <div class="shop-img d-flex justify-content-center align-items-center" style=" background: url('https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80') 65% 10%;">
            <h3 class="display-5 text-light text-center">Oceanbeats<br>台中館</h3>
            <div class="shop-text text-left py-4 px-5">
              <p class="py-2 h3">地點:台中市西屯區台灣大道三段251號</p>
              <p class="py-2 h3">電話：(04)2433-6688</p>
              <p class="py-2 h3">營業時間：週一至週日10:00~21:00</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.2111658086787!2d120.64233391634967!3d24.164325978751187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d8cea6a6b63%3A0xafd8ce8af60532e9!2zNDA35Y-w5Lit5biC6KW_5bGv5Y2A5Y-w54Gj5aSn6YGT5LiJ5q61MjUx6Jmf6Jmf!5e0!3m2!1szh-TW!2stw!4v1628666284446!5m2!1szh-TW!2stw"
                   width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0" style="border: 0px;">
          </iframe>
        </div>
      </div>
      <div class="row px-2 my-6">
        <div class="box col-lg-6 col-md-12 col-12">
          <div class="shop-img d-flex justify-content-center align-items-center" style=" background: url('https://i.imgur.com/UV7vCdq.jpg') 15% 0%;">
            <h3 class="display-5 text-light text-center">Oceanbeats<br>高雄館</h3>
            <div class="shop-text text-left px-5">
              <p class="py-2 h3">地點:高雄市前鎮區中華五路789號</p>
              <p class="py-2 h3">電話：(07)8261-1264</p>
              <p class="py-2 h3">營業時間：週一至週日10:00~21:00</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5706866394285!2d120.30473501634249!3d22.595154737833504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0372ebc9d327%3A0x92317d11de68daf9!2z5aSi5pmC5Luj6LO854mp5Lit5b-DIERyZWFtIE1hbGw!5e0!3m2!1szh-TW!2stw!4v1628666381525!5m2!1szh-TW!2stw"
                    width="100%" height="100%" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0" style="border: 0px;">
            </iframe>
        </div>
      </div>
      <div class="container mb-6">
        <div class="row">
          <h2 class="display-5 fw-bolder text-primary pb-6">服務範圍</h2>
          <div class="col-4 col-md-4 col-12 d-flex flex-column justify-content-center mb-4">
            <div class="service-img border border-third mx-4 position-relative ">
              <img src="https://i.imgur.com/xdtIoRF.png" alt="">
            </div>
            <div class="service-text border border-third text-center mx-4 py-4 bg-secondary text-light ">
              <h3 class="py-4 h2">維修保固</h3>
              <p>一年保固，送修免運</p>
            </div>
          </div>
          <!-- https://i.imgur.com/tf11wS5.png -->
          <div class="col-4 col-md-4 col-12 d-flex flex-column justify-content-center mb-4">
            <div class="service-img border border-third mx-4 position-relative ">
              <img src="https://i.imgur.com/ioaGMex.png" alt="">
            </div>
            <div class="service-text border border-third text-center mx-4 py-4 bg-secondary text-light ">
              <h3 class="py-4 h2">專人客服</h3>
              <p>客服專線: 0800-168-168</p>
            </div>
          </div>
          <div class="col-4 col-md-4 col-12 d-flex flex-column justify-content-center mb-4">
            <div class="service-img border border-third mx-4 position-relative ">
              <img src="https://i.imgur.com/tf11wS5.png" alt="">
            </div>
            <div class="service-text border border-third text-center mx-4 py-4 bg-secondary text-light ">
              <h3 class="py-4 h2">軟體支援</h3>
              <p>支援各式3C載體</p>
            </div>
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
.shop-img{
  min-width: 400px;
  min-height: 600px;
  object-fit: cover;
}
.box {
  position: relative;
  overflow: hidden;
  height: 600px;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
    .shop-text {
      opacity: 1;
      visibility: visible;
      transform: translateY(0%);
    }
  }
  .shop-img {
    transition: 1s ease-in-out;
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
  .shop-text {
    position: absolute;
    bottom: 0;
    z-index: 1;
    background-color: rgba(2, 2, 2, 0.5);
    opacity: 0.8;
    visibility: hidden;
    transform: translateY(50%);
    transition: 0.3s ease-in-out;
    width: 100%;
    color: #fff;
    text-align: center;
  }

}
.service-img {
width: 50%;
z-index: 2;
background: #fff;
}
.service-img {
  top: 8%;
  left: 20%;
}
@media(max-width:768px){
  .box{
    height: 600px;
  }
  .service-img {
    left: 15%;
  }
}
@media(max-width:414px){
  .service-img {
    left: 20%;
  }
}
</style>
