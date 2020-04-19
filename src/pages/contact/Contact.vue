<template>
  <div>
    <Home-Nav :navindex="4"></Home-Nav>
    <Home-Banner></Home-Banner>
    <Home-Product1></Home-Product1>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeBanner from './components/Banner'
import HomeProduct1 from './components/ContactItem'
import HomeFooter from '../common/Footer'

export default {
  name: 'Home',
  components: {
    HomeNav, HomeFooter, HomeProduct1, HomeBanner
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
