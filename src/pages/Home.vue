<template>
  <div>
    <Home-Nav></Home-Nav>
  </div>
</template>

<script>
import HomeNav from './components/Nav'
export default {
  name: 'Home',
  components: {
    HomeNav
  },
  mounted () {
    // this.$i18n.locale = 'zh-CN'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
