<template>
  <div>
    <Home-Nav :navindex="1"></Home-Nav>
    <Home-Banner :list="list"></Home-Banner>
    <Business-Item :businessList="businessList"></Business-Item>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeBanner from '../common/Banner'
import BusinessItem from '../common/BussinessItem'
import HomeFooter from '../common/Footer'
import axios from 'axios'
import url from '../../modules/api.js'
export default {
  name: 'Bussiness',
  components: {
    HomeNav, HomeFooter, HomeBanner, BusinessItem
  },
  data () {
    return {
      list: [{
        id: 1,
        h2: '业务&服务',
        p: '我们从企业业务实际出发，提出富有前瞻性的解决方案，并将策略和执行结合起来。'
      }],
      businessList: []
    }
  },
  mounted () {
    axios.get(url.producDetailtList).then(res => {
      this.businessList = res.data.list
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
