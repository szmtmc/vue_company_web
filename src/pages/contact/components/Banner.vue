<template>
  <div class="container">
    <div class="inner" v-show="ch">
      <h2>联系我们</h2>
      <hr/>
      <p>我们珍惜您每一次的联系，冀望将来光辉的前景。</p>
    </div>
    <div class="inner" v-show="!ch">
      <h2>Solutions&Services</h2>
      <hr />
      <p>Starting with an in-depth understanding of your business model, we offer customized forward-looking solutions that balance strategy and operation.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  data () {
    return {
      ch: true
    }
  }
}
</script>
<style scoped>
.container {
  background-image: url("../../../assets/image/contact-subtitle-bg.jpg");
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
}
.container .inner {
  position: absolute;
  top: 80px;
  margin-bottom: 30px;
  text-align: center;
  width: 85%;
  margin: 0 auto;
  color: #fff;
}
.container .inner h2 {
  margin-top: 120px;
  margin-bottom: 20px;
  font-size: 50px;
}
.container .inner p {
  padding: 15px 10px;
  font-size: 16px;
}
</style>
