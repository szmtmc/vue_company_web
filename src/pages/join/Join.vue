<template>
  <div>
    <Home-Nav :navindex="3"></Home-Nav>
    <Home-Banner></Home-Banner>
    <Join-Item></Join-Item>
    <Home-Join></Home-Join>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeBanner from './components/Banner'
import JoinItem from './components/JoinItem'
import HomeJoin from '../home/components/Join'
import HomeFooter from '../common/Footer'

export default {
  name: 'Home',
  components: {
    HomeNav, HomeFooter, HomeBanner, JoinItem, HomeJoin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
