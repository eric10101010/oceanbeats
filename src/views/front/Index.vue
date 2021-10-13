<template>
  <div>
    <!---首頁區塊1-banner--->
    <div class="banner container-fluid d-flex align-items-center justify-content-center my-5">
        <div class="row banner-box p-3">
          <div class="col-lg-12 col-md-12 col-12 text-white text-center ">
            <h2> Oceanbeats</h2>
            <h2 class="typing">『專注打造聽感沉浸』</h2>
            <div class="h4 pt-4 text-center">
              <router-link to="/products" class="fw-bolder text-decoration-none text-light border border-light p-2 px-4 jump-btn btn-outline-secondary">
                  <span class="px-2 ">由此前往選購</span><i class="bi bi-caret-right"></i>
              </router-link>
            </div>
          </div>
        </div>
    </div>
    <!---首頁區塊2-品牌介紹--->
    <div class="about container my-3 mb-5">
      <div class="row">
        <div class="about-img col-lg-6 col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
          <img src="https://i.imgur.com/XQWFiqx.jpg" alt="about-photo">
        </div>
        <div class="about-text col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center text-center px-4 mb-4 mb-lg-0 mb-md-0">
          <h3 class="pb-lg-4 pb-sm-0 fw-bolder">品牌願景</h3>
           <p>Oceanbeats願產品能夠提供頂級的音質與最舒適的佩戴體驗，</p>
          <p>致力於降躁科技的開發研究，加上配戴舒適度調整改良，</p>
          <p>當使用者戴上Oceanbeats耳機後便可於音樂世界中盡情遨遊。</p>
        </div>
      </div>
      <div class="row d-flex flex-row-reverse">
        <div class="about-img col-lg-6 col-md-6 col-12 mb-4 mb-lg-0 mb-md-0">
          <img src="https://i.imgur.com/4RCfmNd.jpg" alt="about-photo">
        </div>
        <div class="about-text col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center text-center px-4">
          <h3 class="pb-lg-4 pb-sm-0 fw-bolder">品牌風格</h3>
          <p>Oceanbeats主打海洋輕盈風，若用海洋比擬音樂，</p>
          <p>那無論是海上的驚滔駭浪，抑或是海底安寧沉穩，</p>
          <p>採用的獨家晶片皆可真實重現重低音及紓壓BGM的沉浸感。</p>
        </div>
      </div>
    </div>
    <!---首頁區塊3-產品分類--->
    <div class="catelog-back my-3 d-flex align-items-center d-lg-flex d-md-flex d-none">
      <div class="catelog-box container d-flex justify-content-around d-lg-flex d-md-none d-none">
        <div class="catelog-img d-flex justify-content-center align-items-center change"
             style="width:250px;height:14vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1533734640-1e555dd1f5cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2302&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h3  px-3 border border-light">
                    有線耳機
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/UHUqSwd.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
                <router-link to="/products" class="text-decoration-none text-light text-center h3  px-3 border border-light">
                    有線耳機
                </router-link>
              </div>
          </div>
        </div>
        <div class="catelog-img d-flex justify-content-center align-items-center change"
              style="width:250px;height: 14vh;"
        >
          <div class="rotate-one" style="background-image: url('https://i.imgur.com/xtSWZJu.jpg');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light ">
                    藍芽耳機
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://images.unsplash.com/photo-1606400082792-fe14743a8e01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light ">
                    藍芽耳機
                </router-link>
              </div>
          </div>
        </div>
        <div class="catelog-img  d-flex justify-content-center align-items-center change"
              style="width:250px;height: 14vh"
        >
          <div class="rotate-one" style="background-image: url('https://i.imgur.com/MyRVJ7R.jpg'); background-position: 50% 50%">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light">
                    有線耳罩
                </router-link>>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/gsPBD5L.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light">
                    有線耳罩
                </router-link>
              </div>
          </div>
        </div>
        <div class="catelog-img  d-flex justify-content-center align-items-center change"
              style="width:250px;height: 14vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=60');  background-position: 35% 50%">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light">
                    藍芽耳罩
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/8BbcyqU.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
                <router-link to="/products" class="text-decoration-none text-light text-center h3 py-1 px-3 border border-light">
                    藍芽耳罩
                </router-link>
              </div>
          </div>
        </div>
      </div>
      <!----分類區塊-平板----->
      <div class="catelog-box d-flex justify-content-evenly d-lg-none d-md-flex d-none container">
        <div class="catelog-img d-flex justify-content-center align-items-center change"
             style="width:180px;height:14vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1533734640-1e555dd1f5cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2302&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h3  px-3 border border-light">
                    有線耳機
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/UHUqSwd.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
              <router-link to="/products" class="text-decoration-none text-light text-center h3  px-3 border border-light">
                  有線耳機
              </router-link>
              </div>
          </div>
        </div>
        <div class="catelog-img d-flex justify-content-center align-items-center change"
             style="width:150px;height:14vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1606763106489-9068ee8a9030?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAxfHx3aXJlbGVzcyUyMGVhcnBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light ">
                    藍芽耳機
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://images.unsplash.com/photo-1606400082792-fe14743a8e01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light ">
                    藍芽耳機
                </router-link>
              </div>
          </div>
        </div>
        <div class="catelog-img d-flex justify-content-center align-items-center change"
             style="width:150px;height:14vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1572932038525-b866a6702cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light ">
                   有線耳罩
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/gsPBD5L.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light ">
                   有線耳罩
                </router-link>
              </div>
          </div>
        </div>
        <div class="catelog-img d-flex justify-content-center align-items-center change"
             style="width:150px;height:14vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h3 px-3 border border-light">
                    藍芽耳罩
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/8BbcyqU.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
                <router-link to="/products" class="text-decoration-none text-light text-center h3 py-1 px-3 border border-light">
                    藍芽耳罩
                </router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
    <!--分類區塊-手機-->
    <div class="catelog-back my-3 d-lg-none d-md-none d-flex flex-column justify-content-around px-3">
      <div class="d-flex justify-content-between w-100" >
        <div class="catelog-img d-flex justify-content-center align-items-center change"
            style="width:160px;height:13vh"
        >
          <!--1-->
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1533734640-1e555dd1f5cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2302&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h5 border border-light">
                    有線耳機
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/UHUqSwd.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
              <router-link to="/products" class="text-decoration-none text-light text-center h5 border border-light">
                  有線耳機
              </router-link>
              </div>
          </div>
        </div>
        <!--2-->
        <div class="catelog-img d-flex justify-content-center align-items-center change"
            style="width:160px;height:13vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1606763106489-9068ee8a9030?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAxfHx3aXJlbGVzcyUyMGVhcnBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h5 border border-light">
                    藍芽耳機
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://images.unsplash.com/photo-1606400082792-fe14743a8e01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
              <router-link to="/products" class="text-decoration-none text-light text-center h5 border border-light">
                  藍芽耳機
              </router-link>
              </div>
          </div>
        </div>
      </div>
      <!--3-->
      <div class="d-flex justify-content-between w-100 " >
        <div class="catelog-img d-flex justify-content-center align-items-center change"
            style="width:160px;height:13vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1572932038525-b866a6702cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h5 border border-light">
                    有線耳罩
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/gsPBD5L.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
              <router-link to="/products" class="text-decoration-none text-light text-center h5 border border-light">
                  有線耳罩
              </router-link>
              </div>
          </div>
        </div>
        <div class="catelog-img d-flex justify-content-center align-items-center change"
            style="width:160px;height:13vh"
        >
          <div class="rotate-one" style="background-image: url('https://images.unsplash.com/photo-1594434533760-02e0f3faaa68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=60');">
              <div class="contents"          >
                <router-link to="/products" class="text-decoration-none text-light text-center h5 border border-light">
                    藍芽耳罩
                </router-link>
              </div>
          </div>
          <div class="rotate-two" style="background-image: url('https://i.imgur.com/8BbcyqU.jpg'),linear-gradient(to right,#00000070,#00000070);">
              <div class="contents">
              <router-link to="/products" class="text-decoration-none text-light text-center h5 border border-light">
                  藍芽耳罩
              </router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
    <!---首頁區塊4-產品輪播--->
    <div class="container my-6">
      <div class=" text-danger mt-4 text-center">
        <h4 class="h1 my-4 fw-bolder">熱銷商品</h4>
      </div>
      <swiper
            :slides-per-view="3"
            :space-between="20"
            :loop="true"
            :autoplay="autoplay"
            :loopFillGroupWithBlank="true"
            :navigation="true" :lazy="true"
            :breakpoints="{
              320: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              }
            }"
          >
        <swiper-slide  v-for="item in hotSales" :key="item.id">
          <div class="row px-md-5 px-2 py-1">
            <div class="slider-product position-relative">
            <div class="col-lg-12 col-md-12 col-12">
              <router-link :to="`/product/${item.id}`" class="d-block d-md-block d-lg-block item-img ">
                <img :src="item.imageUrl" alt="hot-sale-photo"
                      class="card-img-top"
                      style="min-height:210px;min-width:200px; object-fit: cover;"
                >
                <div class="view-detail position-absolute">
                  <span class="h5"><i class="bi bi-search me-2"></i>查看商品</span>
                </div>
              </router-link>
            </div>
            <div class="card-body text-center p-2 ">
              <h6 class="product-title text-dark my-3 h4 fw-bolder mb-1">
                {{ item.title }}
              </h6>
              <h6 class="product-title text-dark mt-0 h4 fw-bolder">
                {{ item.category }}
              </h6>

              <div class="d-flex justify-content-evenly">
                <div class="card-text text-third text-decoration-line-through">
                    <small class="mr-2">原價</small>
                    <span>NT${{ item.origin_price }}</span>
                </div>
                <div class="card-text price mb-2">
                  <span class="h6 me-2 text-danger">特價</span>
                  <span class="h5 text-dark fw-bolder">NT${{ item.price }}</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!---首頁區塊5-訂閱--->
    <div class="subscribe-img d-flex align-items-center">
      <div class="container d-flex flex-column w-100">
        <div class="d-flex flex-justify-content-between">
          <div class="space w-50">
          </div>
          <div class="subscribe-box text-light p-4 px-3 w-100">
            <div class="sub-title" :class="show ? '' : 'd-none d-md-none'">
              <div class="blcok d-none d-lg-block d-md-block">
                <h3>訂閱電子報</h3>
                <h3>即可獲得8折優惠劵</h3>
              </div>
            </div>
            <div class="sub-title d-lg-none d-md-none d-block w-100" :class="show ? '' : 'd-none d-md-none'">
              <p class="h6 mb-3">訂閱電子報<br>即可獲得8折優惠劵</p>
            </div>
              <!--桌機+平板-->
              <Form
                    class="container row g-md-0 py-3 d-md-block d-none"
                    :class="show ? '' : 'd-none d-md-none'"
                    v-slot="{ errors }"
                    @submit="sendSubmit"
                    id="subscribe">
                <span class="d-flex">
                  <Field  type="email" id="email" name="Email"
                          class="form-control w-75 d-lg-block "
                          :class="{ 'is-invalid': errors['Email'] }"
                          :disabled="idDisabled"
                          placeholder="name@mail.com"
                          rules="email|required"
                          inputmode="email"
                          v-model="email">
                  </Field>
                  <ErrorMessage name="Email" class="invalid-feedback position-md-absolute">
                  </ErrorMessage>
                  <button type="submit" class="btn btn-primary text-light w-25 d-lg-block"
                          :disabled="idDisabled"
                          @submit="sendSubmit">
                    訂閱
                  </button>
                </span>
              </Form>
              <!---手機板-->
              <Form
                    class="w-100"
                    :class="show ? '' : 'd-none d-md-none'"
                    v-slot="{ errors }"
                    @submit="sendSubmit"
                    id="subscribe">
                <span class="d-flex">
                  <Field  type="email" id="email" name="Email"
                          class="form-control d-lg-none d-md-none d-block my-0"
                          :class="{ 'is-invalid': errors['Email'] }"
                          :disabled="idDisabled"
                          placeholder="name@mail.com"
                          rules="email|required"
                          inputmode="email"
                          v-model="email">
                  </Field>
                  <ErrorMessage name="Email" class="invalid-feedback position-md-absolute">
                  </ErrorMessage>
                </span>
                <button type="submit" class="btn btn-primary text-light d-lg-none d-md-none d-block w-100"
                        :disabled="idDisabled"
                        @submit="sendSubmit">
                  訂閱
                </button>
              </Form>
                <div class="d-flex flex-column" >
                <!--桌機+平板-->
                <div class="text-light fade text-center" v-if="email" ref="done">
                  <h4 class="email-box my-3 h5 mt-0 d-lg-block d-md-block d-none mt-3 mb-4"><span class="text-warning">{{ email }}<span class="text-light px-2">訂閱電子報成功</span></span></h4>
                  <h4 class="email-box my-2 h6 mt-0 d-lg-none d-md-none d-block"><span class="text-warning">{{ email }}</span></h4>
                  <h4 class="d-lg-none d-md-none d-block h6 mb-4">訂閱電子報成功</h4>
                    <ul class="counpon h3 text-light d-flex justify-content-center align-items-center">
                      <li>
                        <p class="mx-2 h5 d-lg-block d-md-block d-none">8折優惠劵:</p>
                        <p class="h5 d-lg-none d-md-none d-block mt-1">8折優惠劵:</p>
                        <p class="text-success h4 p-1 border-light border d-lg-none d-md-none d-block" >ocean2021beats</p>
                      </li>
                      <li>
                        <p class="text-success h4 p-2 border-light border d-lg-block d-md-block d-none" ><i class="bi bi-patch-check-fill pe-3"></i>ocean2021beats</p>
                      </li>
                    </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import emitter from '../../assets/javascript/emitter'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
SwiperCore.use([Autoplay])
export default {
  props: ['isDisabled'],
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      show: true,
      idDisabled: false,
      mainProduct: [],
      productsData: [],
      email: '',
      autoplay: {
        delay: 3000
      },
      hotSales: [
        {
          id: '-Me8IdRogwlJlGDNC8Lx',
          title: 'Whsa-024',
          category: '藍芽耳機',
          imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1627033055985.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AWfVaeRiqiVs6uPX%2FcZf1ITCi3Wu9L00jJVwE9IxEIBj3rV7E5VWiDo%2B13Cj5dspMIS5qK65yz8CjBBNMVAiLdTkNZGwrcIkzt3Ftnly7R4USCud8pc8TdqVzCYXfglqkEPJVsaDW4ply79XVaJocZXs8N3IshJXuBDkf2EhaF18M%2B%2FUcVC52dzzmo3zh83MHG2%2FdkSmEIA%2BZw1rFNDA5BuPgYEopXE233apanI87b5ijoEMYw23wex%2BZCAp9sR8xt%2BcBXUtxOIRu7NoeDdDtuCS3KJ33xfQC85J1%2BeHQOtj%2Bj4AQYr%2BiMGrW2UNQc6u4prwkumkqFZZCtjqqOVz1g%3D%3D',
          origin_price: 6000,
          price: 5000
        },
        {
          id: '-Me8DcAL4oCP1yFgBOp3',
          title: 'Whsa-124',
          category: '藍芽耳機',
          imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625848362921.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=a86GeqR5BY4GX4UJNeK0l4c9a4591Z2RlhVqxibDg%2FnHbweok2hmk%2BITe9%2BXF%2BrWYS2B4Qx%2FPMrq2e4pXHE11GokoYcp%2BraW1b8sGw%2FrCst5SwTOXhZdmH2419egnUptX%2FAcH6hvOvAf4waybNz5NNInZG5y9gk4XKXSe20uL1d0SeoHGpjGIKrVLzRVNXQqEkw9APXD5b%2BoVGZgyqiHa4KkkPSSUPOKZZumAtut9XS6G%2Bl1s6IuS1NWwLyw68gtI2Z6ajtG7%2FwfjOsOBfRGTibsZCbPpRmliDAQCrYF6ZZZLX5rxf%2FoM3TRU1IMRZIgQzoCKrZB9Ccd65LY8Fv0sA%3D%3D',
          origin_price: 4000,
          price: 3000
        },
        {
          id: '-Me8FCubDIljeTPSudXo',
          title: 'Whsa-085',
          category: '藍芽耳機',
          imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625873767329.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PIb8HYob4ZPOvnBkG4s7f0T%2F%2BIBdhsqJfR3KbMdRCSELz4%2F7BOK%2Bs74LUidx0q0fFZpA%2BU7XolHcILcUeappEWwGS7aixHe8%2BL9jPnt4ZqxtF%2FNY2cqIP4XxQ%2BOTwTAgvtWDXs11O96fJ3pdXpzcZKEnOd5vst25C3ruYC2bL91cldYIi%2BBosFYVkj0nMaVmgonPwIpd%2F5%2BEH37xfmoRSmepWLswc9G4OKu6l29tYBAp2SWkA8KdLFNQTtustfzEitr2xFGy5F%2FoE5OCzrmLO65HkORKi3CVmWxMbonN6nkaKSQrOvTzKBreCnk3twL80QfW7yzFVdZhWbzKtYRqZw%3D%3D',
          origin_price: 6000,
          price: 5000
        },
        {
          id: '-Me8EN4uFnRtPUFWw4bU',
          title: 'Whsa-002',
          category: '藍芽耳機',
          imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625884050628.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BGKq%2FsS9MIzw4eO%2FC%2Fe%2Bwq9zb59cJYO%2F5Ak5gnUiOKag80F0RGQ0MQZcr7a8ZqO%2FvTqsZ%2FOpvzwXbnf4edYgPNlEIPHehMsOJmqcIgdIWQJVBQm0aDY3EjffWjj0XgEmcUjB8dShhVfqwahn6uA8%2BXwmzXOaNJ2Qjh%2BM6xMyN4JcYXZzSOjUBdVLU1ZJ%2FIkwPWLHrQjfmyOeOkvKv%2FR%2B7WVxk2xZEd5nZIyTsEFjg8gCvmn6DlN1yTubvu3I9f89TOSIZQgsKYZEmgWKuDI%2BizvNWO8rt6hzKK8MpZwh5qjyXSDkIOBndAW6gXFiUDZIopbVIbW78ghNjtzK5%2Be9mg%3D%3D',
          origin_price: 4000,
          price: 3000
        },
        {
          id: '-Me8IT2myUwaIEgQQLOg',
          title: 'whsa-177',
          category: '藍芽耳機',
          imageUrl: 'https://storage.googleapis.com/vue-course-api.appspot.com/item666/1625873926424.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=akmbNsTmjgQ%2FLtGccjg7sCX4NOn9y%2Fus9Za3GAKNPcp%2F6D92LkgbcweOUxMOk%2FpuE6RGe%2Bvzsaq2%2F7zlr3b%2BMhNfE8Q%2FAIoqfU4kJjbRx6U4mo0MTCIpVCVossNJyBtmh8Pyq%2Bq3Fws1tGW5VrehpTNL3%2FyS8HlDKXQhsdybrffnNpIedDTWnZSOFuChaBifOYX%2FU%2FaPkZny%2B6OyNBDnGdyhoCAhBnTdDU6HvEDiqu%2BVB37w2Gkq%2FeNzq70QaA3QoVnJhNbOvvM5PRYMGgaXlHVbBiTRtxFadZGqYiE%2F%2FcjAMv5pAVfsskwqjKz%2Fz6EuXS6VaO%2FD0kskZfw5TYi5LA%3D%3D',
          origin_price: 3000,
          price: 2000
        }
      ]
    }
  },
  methods: {
    getMainProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(url)
        .then(res => {
          if (res.data.success) {
            const data = res.data.products
            this.mainProduct = data.filter(item => item.mainProduct)
            console.log(res.data)
          } else {
            console.log(res.data.message)
            alert('error')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    sendSubmit () {
      this.idDisabled = true
      // emitter.emit('toggle-spinner', this.email)
      setTimeout(() => {
        this.idDisabled = false
        this.$refs.done.classList.add('show')
        this.show = false
      }, 1500)
    }
  },
  mounted () {
    this.getMainProduct()
  }
}
</script>

<style lang="scss">
.banner-box{
  background-color: #000000;
  opacity: 0.7;
}
.banner{
  height:50vh;
  background: url('https://images.unsplash.com/photo-1624557446133-bd61df5a0e74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80') no-repeat;
  background-position:75% 50%;
  background-size: cover;
}
.catelog-back{
  height: 20vh;
  background: url('https://images.unsplash.com/photo-1559825481-12a05cc00344?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1301&q=80') no-repeat;
  background-size: cover;
  background-position: 50% 10%;
}
.catelog-img {
  height: 8vh;
  background-size: cover;
  background-position: 50% 50%;
}
.catelog-back {
  height: 25vh;
  background-size: cover;
  background-position: 50% 80%;
}
.slider-product{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.subscribe-img{
  height:30vh;
  background: url('../../assets/subscibe.jpg') no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.view-detail {
  color: #fff;
  bottom: 0px;
  left: 0;
  right:0;
  top:0px;
  background-color: #000000;
  z-index: 10;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
}
.view-detail:hover {
  opacity: 0.7;
}
.subscribe-text router-link{
  background-color: #0000;
  text-align: center;
  font-size: 60px;
}
.subscribe-box {
  background-color: #000000;
  opacity: 0.7;
  max-height: 200px;
}
.change{
    height: 400px;width: 290px;
    position: relative;
}
.rotate-one, .rotate-two{
    position: absolute;
    width: 100%;height: 100%;
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;
    perspective: 1000px;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s ease-in;
}
.change .rotate-two{
    transform: rotateY(180deg);
}
.contents{
    transform: translateZ(100px);
    backface-visibility: hidden;
}
.change:hover .rotate-one{
    transform: rotateY(-180deg);
}
.change:hover .rotate-two{
    transform: rotateY(0deg);
}
.typing {
  width: 300px;
  animation: typing 3s steps(16), blink .8s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  font-family: monospace;
  font-size: 2em;
}
@keyframes typing {
  from {
    width: 0
  }
}
@keyframes blink {
  50% {
    border-color: transparent
  }
}
.jump-btn{
  position:relative;
  animation:jump 0.8s infinite ;
}
.jump-btn:hover{
  transition: 0.8s;
}
@keyframes jump{
  0%{
    top:10px;
  }
  50%{
    top:5px;
  }
  100%{
    top:0px;
  }
}
@media(max-width:768px){
  .about-text p{
    font-size: 16px;
  }
}
@media(max-width:414px){
  .subscribe-box {
    min-width: 150px;
  }
  .card-img-top {
    max-height: 50px;
    object-fit: cover;
  }
  .catelog-back{
    height: 20vh;
    background-position: 50% 90%;
    display: flex;
    background-size: cover;
  }
  .catelog-back{
    height: 40vh;
  }
  .catelog-box{
    display: flex;
    flex: wrap;
  }
  .catelog-img{
    height: 10vh;
  }
}
@media(max-width:320px){
  .subscribe-box {
    min-width: 300px;
    max-height: 171px;
  }
  .typing{
    width: 250px;
  }
}

</style>
