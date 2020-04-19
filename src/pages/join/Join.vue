<template>
  <div>
    <Home-Nav :navindex="3"></Home-Nav>
    <Home-Banner :list="list"></Home-Banner>
    <Join-Item></Join-Item>
    <Home-Join></Home-Join>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeBanner from '../common/Banner'
import JoinItem from './components/JoinItem'
import HomeJoin from '../home/components/Join'
import HomeFooter from '../common/Footer'

export default {
  name: 'Home',
  components: {
    HomeNav, HomeFooter, HomeBanner, JoinItem, HomeJoin
  },
  data () {
    return {
      list: [{
        id: 3,
        h2: '加入我们',
        p: '互联网已成为这个时代的基础设施，利用不断演进的技术，让我们一起构建光辉灿烂的未来。'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
