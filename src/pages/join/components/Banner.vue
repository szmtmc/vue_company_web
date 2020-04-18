<template>
  <div class="container">
    <div class="inner">
      <h2>
        加入我们
        <sup>®</sup>
      </h2>
      <div class="divider my-3"></div>
      <p>互联网已成为这个时代的基础设施，利用不断演进的技术，让我们一起构建光辉灿烂的未来。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner'
}
</script>
<style scoped>
.container {
  background-image: url("../../../assets/image/jobs-subtitle-bg.jpg");
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
  margin: 0 30px;
  margin-bottom: 30px;
  text-align: center;
  /* margin: 0 auto; */
  color: #fff;
}
.container .inner h2 {
  margin-top: 120px;
  padding-bottom: 20px;
  font-size: 50px;
  border-bottom: 2px solid white;
}
.container .inner p {
  padding: 15px 10px;
  font-size: 16px;
}
</style>
