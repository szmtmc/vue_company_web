<template>
  <div class="container">
    <h2 class="text-center">专家智库</h2>
    <p class="text-center">很自豪，能为各领域的发展提供满意方案</p>
    <div class="row">
      <div class="item" v-for="item in list" :key="item.id">
        <img class="w-100" :src="item.url" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Partner',
  data () {
    return {
      list: [{
        id: 1,
        url: 'http://img.baitton.com/zjzk-1.jpg'
      }, {
        id: 2,
        url: 'http://img.baitton.com/zjzk-2.jpg'
      }, {
        id: 3,
        url: 'http://img.baitton.com/zjzk-3.jpg'
      }, {
        id: 4,
        url: 'http://img.baitton.com/zjzk-4.jpg'
      }, {
        id: 5,
        url: 'http://img.baitton.com/zjzk-5.jpg'
      }, {
        id: 6,
        url: 'http://img.baitton.com/zjzk-6.jpg'
      }, {
        id: 7,
        url: 'http://img.baitton.com/zjzk-7.jpg'
      }, {
        id: 8,
        url: 'http://img.baitton.com/zjzk-8.jpg'
      }]
    }
  }
}
</script>
<style scoped>
.container {
  margin: 50px 0;
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
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 40px;
}
img {
  width: 240px;
  height: 240px;
  padding: 30px 30px 0 10px;
}
@media screen and (max-width: 1175px) {
  .row {
    max-width: 86%;
  }
  .item {
    width: 25%;
  }
  img {
    width: 150px !important;
    height: 150px !important;
  }
}
@media screen and (max-width: 767px) {
  .row {
    max-width: 86%;
  }
  .item {
    width: 50%;
  }
  img {
    width: 150px !important;
    height: 150px !important;
  }
}
/* @media screen and (max-width: 496px) {
  .row {
    max-width: 86%;
  }
  .item {
    width: 50%;
  }
  img {
    width: 200px !important;
    height: 200px !important;
  }
} */
</style>
