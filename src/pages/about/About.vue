<template>
  <div>
    <Home-Nav :navindex="2"></Home-Nav>
    <Home-Banner :list="list"></Home-Banner>
    <Home-Main></Home-Main>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeBanner from '../common/Banner'
import HomeMain from './components/Main'
import HomeFooter from '../common/Footer'

export default {
  name: 'Home',
  components: {
    HomeNav, HomeFooter, HomeBanner, HomeMain
  },
  data () {
    return {
      list: [{
        id: 2,
        h2: '关于公司',
        p: '我们着眼未来，相信前程似锦'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
