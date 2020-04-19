<template>
  <div>
    <Home-Nav :navindex="4"></Home-Nav>
    <Home-Banner :list="list"></Home-Banner>
    <Home-Product1></Home-Product1>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeBanner from '../common/Banner'
import HomeProduct1 from './components/ContactItem'
import HomeFooter from '../common/Footer'

export default {
  name: 'Home',
  components: {
    HomeNav, HomeFooter, HomeProduct1, HomeBanner
  },
  data () {
    return {
      list: [{
        id: 4,
        h2: '联系我们',
        p: '我们珍惜您每一次的联系，冀望将来光辉的前景。'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
