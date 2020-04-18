<template>
  <div class="container">
    <div class="main clear">
      <div class="main-inner">
        <h2>
          <strong>科技信息资源服务</strong>
        </h2>
        <p class="text-muted">集成科技政策、科技查新、专利检索、科技培训、专家智库</p>
        <hr />
        <p>您需要的不仅仅是一个网站！在互联网已成为基础实施的今天，官方网站已成为企业品牌露出的重要平台、内外信息流的中枢和企业互联网应用的集成系统。如何有效的将企业官方网站的作用发挥出来，促进企业内外信息的流动，进而提升企业的运行效率，是我们一直在思考和实践的重要命题。</p>
        <h3>服务特点</h3>
        <ul class="pl-3">
          <li>多语种，全球化，提供多达78种语言的支持</li>
          <li>集成多种展示终端（web、h5、小程序、ios、android等）</li>
          <li>基于云计算的技术架构</li>
          <li>与国内外顶尖数字设计工作室合作</li>
        </ul>
      </div>
      <div class="box">
        <img src="../../../assets/image/solution-1.jpg" alt srcset />
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
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15) !important;
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
@media screen and (max-width: 496px) {
  .main {
    height: 635px;
    margin-top: 20px;
  }
}
.main h2 {
  font-size: 36px;
  font-weight: bolder;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
}
.main h3 {
  font-size: 30px;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
}
.main ul {
  margin-left: 15px;
}
.main li {
  list-style-type: disc;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
}
.main p {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  margin-top: 0;
  margin-bottom: 20px;
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
    padding: 10%;
  }
  .main-inner {
    max-width: 90% !important;
    right: 10%;
  }
}
</style>
