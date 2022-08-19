<template>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
      <div class="info">
        <h1>Oakley</h1>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img  src="https://swiperjs.com/demos/images/nature-2.jpg"/>
      <div class="info">
        <h1>Oakley</h1>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
      <div class="info">
        <h1>Oakley</h1>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
      <div class="info">
        <h1>Oakley</h1>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
      <div class="info">
        <h1>Oakley</h1>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg"/>
      <div class="info">
        <h1>Oakley</h1>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};
</script>
