<template>
  <div>
    <Home-Nav :navindex="0"></Home-Nav>
    <Home-Swiper></Home-Swiper>
    <Home-Product :list="list1"></Home-Product>
    <Home-Product :list="list2"></Home-Product>
    <Home-Product :list="list3"></Home-Product>
    <Home-Partner></Home-Partner>
    <Home-Expert></Home-Expert>
    <Home-Join></Home-Join>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeSwiper from './components/Swiper'
import HomeProduct from '../common/Product'
import HomePartner from './components/Partner'
import HomeExpert from './components/Expert'
import HomeJoin from './components/Join'
import HomeFooter from '../common/Footer'

import axios from 'axios'
import url from '../../modules/api.js'
export default {
  name: 'Home',
  components: {
    HomeNav, HomeSwiper, HomeProduct, HomePartner, HomeJoin, HomeFooter, HomeExpert
  },
  data () {
    return {
      list1: [],
      list2: [],
      list3: []
    }
  },
  mounted () {
    axios.get(url.productLists).then(res => {
      this.list1 = res.data.list
    })
    axios.get(url.productLists).then(res => {
      this.list2 = res.data.list
    })
    axios.get(url.productLists).then(res => {
      this.list3 = res.data.list
    })
  }
}
</script>

<style scoped>
</style>
