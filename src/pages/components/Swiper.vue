<template>
  <div class="banner-wrap">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <div class="imgwrapepr">
            <div class="banner-info">
              <h1>{{$t('lang.slide1h1')}}</h1>
              <!-- <p>{{$t('lang.slide1p')}}</p> -->
            </div>
            <img class="bannerimg" src="../../assets/image/slide-1.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgwrapepr">
            <div class="banner-info">
              <h1>{{$t('lang.slide2h1')}}</h1>
              <!-- <p>{{$t('lang.slide2p')}}</p> -->
            </div>
            <img class="bannerimg" src="../../assets/image/slide-2.jpg" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="imgwrapepr">
            <div class="banner-info">
              <h1>{{$t('lang.slide3h1')}}</h1>
              <!-- <p>{{$t('lang.slide3p')}}</p> -->
            </div>
            <img class="bannerimg" src="../../assets/image/slide-3.jpg" />
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
// swiper options example:
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        autoplay: 4000,
        loop: true
      }
    }
  }
}
</script>
<style scoped>
.banner-wrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 734px;
  overflow: hidden;
  position: relative;
}
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
}
.imgwrapepr {
  height: 884px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.bannerimg {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.banner-info {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
}
.banner-info h1 {
  color: #fff;
  font-size: 50px;
  font-weight: 300;
  line-height: 50px;
  margin-bottom: 25px;
}
.banner-info p {
  color: #fff;
  font-size: 17px;
  font-weight: 400;
}
.wrapper >>> .swiper-pagination {
  position: absolute;
  bottom: 180px;
}
@media screen and (max-width: 767px) {
  .banner-info h1 {
    width: 100%;
    word-wrap: break-word;
    word-break: normal;
    padding-right: 30px;
  }
  .banner-info {
    width: 60%;
    word-wrap: break-word;
    word-break: normal;
    text-align: center;
    margin-left: 5%;
    padding-right: 5%;
    position: absolute;
    top: 300px;
  }
}
@media screen and (max-width: 496px) {
  .banner-wrap {
    height: 586px;
  }
  .banner-info {
    top: 260px;
  }
  .swiper-pagination {
    bottom: 340px;
  }
  .banner-info h1 {
    font-size: 30px;
    line-height: 30px;
  }
}
</style>
