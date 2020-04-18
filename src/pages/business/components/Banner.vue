<template>
  <div class="container">
    <div class="inner">
      <h2>业务&服务</h2>
      <div class="divider my-3"></div>
      <p>我们从企业业务实际出发，提出富有前瞻性的解决方案，并将策略和执行结合起来。</p>
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
