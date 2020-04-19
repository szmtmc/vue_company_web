<template>
  <div class="container">
    <div class="main clear">
      <div class="main-inner">
        <h2>
          <strong>百拓BAITTON</strong>
        </h2>
        <p class="text-muted">成功源于共享，创新成就未来</p>
        <hr />
        <p>
          <strong>广州百拓共享科技应用股份有限公司</strong>
          于2013年7月成立，是一家旨在企事业单位、政府机构、科研院校及各行各业专家之间构建全周期、全生态链的科技服务体 系的服务运营机构。面向各行业的企事业单位及政府客户，我 们的服务包括科技信息资源、科技项目管理及创新成果、科技咨询、知识产权、科技金融、创业孵化、财税顾问及职业教育培训等。
        </p>
        <p>以“构建战略级科技创新服务生态系统”为使命，秉承 “拓知共行、服务至上”的服务理念及最专业的服务态度，我们用六年的时间着力打造了一条企业从孵化期到成熟期的全生 态科技服务产业链。我们将用最专业的服务为客户提供成长动力，实现合作共赢。</p>
      </div>
      <div class="box">
        <img src="../../../assets/image/office-1.jpg" alt srcset />
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
