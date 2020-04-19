<template>
  <div class="container">
    <div class="card-deck services">
      <div class="card border-0 rounded-0" v-for="item in list" :key="item.id">
        <img class="w-100" :src="item.url" />
        <div class="card-body text-center py-5">
          <h5 class="card-title font-weight-bold">{{item.h5}}</h5>
          <p class="card-text">
            {{item.p1}}
            <br />
            {{item.p2}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Product',
  data () {
    return {
      list: [{
        id: 1,
        h5: '广东·广州',
        p1: '13802760156',
        p2: '广州市黄埔区永和经济技术开发区斗塘路22号',
        url: 'https://szsz12.oss-cn-beijing.aliyuncs.com/contact-1.jpg'
      }, {
        id: 2,
        h5: '江苏·无锡',
        p1: '0510-82434568',
        p2: '无锡市锡山经济开发区锡山科创园 瑞云六座一楼',
        url: 'https://szsz12.oss-cn-beijing.aliyuncs.com/contact-2.jpg'
      }, {
        id: 3,
        h5: '广东·佛山',
        p1: '15815864696',
        p2: '佛山市禅城区港口路2号首层P8号',
        url: 'https://szsz12.oss-cn-beijing.aliyuncs.com/contact-3.jpg'
      }]
    }
  }
}
</script>
<style scoped>
.container {
  max-width: 1150px;
  margin: 0 auto;
  margin-top: 50px;
}
@media screen and (min-width: 576px) {
  .card-deck {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  .card-deck .card {
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
  }
}
/* @media screen and (max-width: 576px) {
} */
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  margin: 0 20px;
  margin-bottom: 20px;
}
.w-100 {
  width: 100% !important;
}
img {
  vertical-align: middle;
  border-style: none;
}
.text-center {
  text-align: center !important;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.card-title {
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 10px;
}
.card-text:last-child {
  margin-bottom: 0;
}
.card-text {
  line-height: 20px;
  padding-bottom: 30px;
}
img {
  height: 241.97px;
}
@media screen and (max-width: 767px) {
  img {
    height: 180.97px !important;
    width: 100px !important;
  }
}
@media screen and (max-width: 487px) {
  img {
    height: 241.97px !important;
  }
}
</style>
