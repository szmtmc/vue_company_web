<template>
  <div>
    <Home-Nav></Home-Nav>
    <Home-Swiper></Home-Swiper>
    <Home-Product1></Home-Product1>
    <Home-Product2></Home-Product2>
    <Home-Product3></Home-Product3>
    <Home-Partner></Home-Partner>
    <Home-Join></Home-Join>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from './components/Nav'
import HomeSwiper from './components/Swiper'
import HomeProduct1 from './components/Product_1'
import HomeProduct2 from './components/Product_2'
import HomeProduct3 from './components/Product_3'
import HomePartner from './components/Partner'
import HomeJoin from './components/Join'
import HomeFooter from './components/Footer'

export default {
  name: 'Home',
  components: {
    HomeNav, HomeSwiper, HomeProduct1, HomeProduct2, HomeProduct3, HomePartner, HomeJoin, HomeFooter
  },
  mounted () {
    // this.$i18n.locale = 'zh-CN'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
