<template>
  <div>
    <Home-Nav></Home-Nav>
    <Home-Swiper></Home-Swiper>
  </div>
</template>

<script>
import HomeNav from './components/Nav'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeNav, HomeSwiper
  },
  mounted () {
    // this.$i18n.locale = 'zh-CN'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
