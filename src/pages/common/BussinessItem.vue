<template>
  <div>
    <div class="container" v-for="item in businessList" :key="item.id">
      <div class="main clear">
        <div class="main-inner">
          <h2>
            <strong>{{item.h2}}</strong>
          </h2>
          <p class="text-muted">{{item.p1}}</p>
          <hr />
          <p>{{item.p2_1}}</p>
          <p>{{item.p2_2}}</p>
          <!-- <h3>服务特点</h3>
          <ul class="pl-3">
            <li v-for="(li,index) in item.li" :key="index">{{li}}</li>
          </ul>-->
        </div>
        <div class="box">
          <img :src="item.url" alt srcset />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    businessList: Array
  }
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
    padding: 0 10%;
    height: 584px;
    margin-top: 20px;
    margin-bottom: -15px;
  }
  .main-inner {
    max-width: 90% !important;
    right: 10%;
  }
  .box {
    display: none;
  }
}
@media screen and (max-width: 496px) {
  .main {
    padding: 0 10%;
    height: 584px;
    margin-top: 20px;
    margin-bottom: -15px;
  }
  .main-inner {
    max-width: 90% !important;
    right: 10%;
  }
}
.main h2 {
  font-size: 36px;
  font-weight: bolder;
  margin-top: 0.83rem;
  margin-bottom: 0.83rem;
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
  width: 350px;
  height: 350px;
  float: right;
  margin-right: 20%;
  margin-top: -10px;
}
.box img {
  width: 350px;
  height: 350px;
}
</style>
