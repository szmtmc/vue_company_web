<template>
  <div class="container">
    <div class="main clear">
      <div class="main-inner">
        <h2>
          <strong>
            远锦YUANCHIN
            <sup>®</sup>
          </strong>
        </h2>
        <p class="text-muted">依托技术，我们将策略、设计和运营整合在一起</p>
        <hr />
        <p>
          <strong>
            远锦YUANCHIN
            <sup>®</sup>
          </strong>肇始于2007年，自创立以来一直致力于为各类机构和企业提供富有前瞻性的互联网咨询和技术服务，业务覆盖云计算、大数据、科技金融和AI集成等领域。公司总部设于中国成都，并在美国洛杉矶和芬兰赫尔辛基设有分支机构。
        </p>
        <p>
          多年来，
          <strong>
            远锦YUANCHIN
            <sup>®</sup>
          </strong>深耕企业互联网服务市场，不断提升技术实力和服务水平，通过长期而富有成效的工作，助力各个行业的客户迈向更高的台阶。
        </p>
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
    padding: 10%;
  }
  .main-inner {
    max-width: 90% !important;
    right: 10%;
  }
}
</style>
