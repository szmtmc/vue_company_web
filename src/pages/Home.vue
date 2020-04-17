<template>
  <div>
    <Home-Nav></Home-Nav>
    <Home-Swiper></Home-Swiper>
    <Home-Product></Home-Product>
    <Home-Partner></Home-Partner>
    <Home-Join></Home-Join>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from './components/Nav'
import HomeSwiper from './components/Swiper'
import HomeProduct from './components/Product'
import HomePartner from './components/Partner'
import HomeJoin from './components/Join'
import HomeFooter from './components/Footer'

export default {
  name: 'Home',
  components: {
    HomeNav, HomeSwiper, HomeProduct, HomePartner, HomeJoin, HomeFooter
  },
  mounted () {
    // this.$i18n.locale = 'zh-CN'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
