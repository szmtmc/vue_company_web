<template>
  <div>
    <Home-Nav :navindex="1"></Home-Nav>
    <Home-Banner :list="list"></Home-Banner>
    <Main-1></Main-1>
    <Main-2></Main-2>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeBanner from '../common/Banner'
import Main1 from './components/Main_1'
import Main2 from './components/Main_2'
import HomeFooter from '../common/Footer'

export default {
  name: 'Bussiness',
  components: {
    HomeNav, HomeFooter, HomeBanner, Main1, Main2
  },
  data () {
    return {
      list: [{
        id: 1,
        h2: '业务&服务',
        p: '我们从企业业务实际出发，提出富有前瞻性的解决方案，并将策略和执行结合起来。'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
