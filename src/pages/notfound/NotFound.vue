<template>
  <div>
    <Home-Nav :navindex="9"></Home-Nav>
    <div class="container">
      <h1 class="num">404</h1>
      <h1 class="p">抱歉！您所访问的页面不存在，请重新加载！</h1>
      <router-link tag="h1" to="/" class="p2">返回首页</router-link>
    </div>

    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
import HomeFooter from '../common/Footer'

export default {
  name: 'NotFound',
  components: {
    HomeNav, HomeFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 100px;
  text-align: center;
}
.num {
  font-size: 100px;
}
.p {
  font-size: 50px;
}
.p2 {
  margin-top: 20px;
  font-size: 50px;
  text-decoration: underline;
  color: rgb(163, 238, 238);
}
</style>
