<template>
  <div class="container">
    <h2 class="text-center">合作伙伴</h2>
    <p class="text-center">很荣幸，能与众多行业优秀客户共同成长</p>
    <div class="row">
      <div class="item" v-for="item in list" :key="item.id">
        <img class="w-100" :src="item.url" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import url from '../../../modules/api.js'
export default {
  name: 'Partner',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get(url.partnerList).then(res => {
      this.list = res.data.list
    })
  }
}
</script>
<style scoped>
.container {
  margin-top: 50px;
  background: #ffffff;
}
.container h2 {
  font-weight: 500;
  font-size: 40px;
  padding-top: 30px;
  padding-bottom: 10px;
}
.text-center {
  text-align: center;
}
.row {
  width: 1175px;
  padding-top: 10px;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 40px;
}
img {
  width: 170px;
  height: 84.2px;
  padding: 0 10px 0 0;
}
@media screen and (max-width: 1175px) {
  .row {
    max-width: 70%;
  }
  .item {
    width: 16.66667%;
  }
  img {
    width: 80px;
    height: 47.36px;
  }
}
@media screen and (max-width: 767px) {
  .row {
    max-width: 70%;
  }
  .item {
    width: 33.33333%;
  }
  img {
    width: 160px !important;
    height: 84.2px !important;
  }
}
@media screen and (max-width: 496px) {
  .row {
    max-width: 70%;
  }
  .item {
    width: 33.33333%;
  }
  img {
    width: 80px !important;
    height: 47.36px !important;
  }
}
</style>
