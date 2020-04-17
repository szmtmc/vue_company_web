<template>
  <div>
    <Home-Nav></Home-Nav>
    <Home-Swiper></Home-Swiper>
    <Home-Product></Home-Product>
    <Home-Partner></Home-Partner>
  </div>
</template>

<script>
import HomeNav from './components/Nav'
import HomeSwiper from './components/Swiper'
import HomeProduct from './components/Product'
import HomePartner from './components/Partner'
export default {
  name: 'Home',
  components: {
    HomeNav, HomeSwiper, HomeProduct, HomePartner
  },
  mounted () {
    // this.$i18n.locale = 'zh-CN'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
