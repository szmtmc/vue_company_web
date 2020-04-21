<template>
  <div class="container">
    <div class="main clear">
      <div class="main-inner">
        <h2>
          <strong>公司COMPANY</strong>
        </h2>
        <p class="text-muted">成功源于共享，创新成就未来</p>
        <hr />
        <p>
          <strong>公司COMPANY</strong>
          于2099年13月成立，是一家公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY公司COMPANY。
        </p>
        <p>以“构建战略级科技创新服务生态系统”为使命，公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍公司介绍</p>
      </div>
      <div class="box">
        <img src="http://dummyimage.com/450x490/79aff2" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner'
}
</script>
<style scoped>
.clear::after {
  display: block;
  clear: both;
  content: "";
}
.container {
  overflow: hidden;
}
.main {
  margin-top: 80px;
  position: relative;
  margin-left: 30px;
}
.main-inner {
  background: #fff;
  padding: 0 40px;
  float: left;
  max-width: 50%;
  position: absolute;
  right: 690px;
}
@media screen and (max-width: 1360px) {
  .main-inner {
    right: 600px;
  }
  .box {
    margin-right: 0 !important;
  }
}
@media screen and (max-width: 1200px) {
  .main-inner {
    right: 20%;
  }
  .box {
    opacity: 0;
  }
}
@media screen and (max-width: 756px) {
  .main {
    height: 600px;
  }
  .main-inner {
    max-width: 90% !important;
    right: 5%;
  }
  .box {
    display: none;
  }
}

.main h2 {
  font-size: 36px;
  font-weight: bolder;
  /* margin-block-start: 0.83em;
  margin-block-end: 0.83em; */
  margin-top: 0.83rem;
  margin-bottom: 0.83rem;
}
.main p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  margin-top: 0;
  margin-bottom: 1rem;
}
.box {
  width: 450px;
  height: 490px;
  float: right;
  margin-right: 20%;
  margin-top: -20px;
}
.box img {
  width: 450px;
  height: 490px;
}
@media screen and (max-width: 496px) {
  .main {
    margin-top: 30px;
    padding: 10%;
    height: 700px;
  }
  .main-inner {
    max-width: 90% !important;
    right: 10%;
  }
}
</style>
