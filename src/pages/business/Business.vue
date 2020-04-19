<template>
  <div>
    <Home-Nav :navindex="1"></Home-Nav>
    <Home-Banner></Home-Banner>
    <Main-1></Main-1>
    <Main-2></Main-2>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeBanner from './components/Banner'
import Main1 from './components/Main_1'
import Main2 from './components/Main_2'
import HomeFooter from '../common/Footer'

export default {
  name: 'Bussiness',
  components: {
    HomeNav, HomeFooter, HomeBanner, Main1, Main2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
