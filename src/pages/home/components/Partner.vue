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
export default {
  name: 'Partner',
  data () {
    return {
      list: [{
        id: 1,
        url: 'http://img.baitton.com/logo-1.jpg'
      }, {
        id: 2,
        url: 'http://img.baitton.com/logo-2.jpg'
      }, {
        id: 3,
        url: 'http://img.baitton.com/logo-3.jpg'
      }, {
        id: 4,
        url: 'http://img.baitton.com/logo-4.jpg'
      }, {
        id: 5,
        url: 'http://img.baitton.com/logo-5.jpg'
      }, {
        id: 6,
        url: 'http://img.baitton.com/logo-6.jpg'
      }, {
        id: 7,
        url: 'http://img.baitton.com/logo-7.jpg'
      }, {
        id: 8,
        url: 'http://img.baitton.com/logo-8.jpg'
      }, {
        id: 9,
        url: 'http://img.baitton.com/logo-9.jpg'
      }, {
        id: 10,
        url: 'http://img.baitton.com/logo-10.jpg'
      }, {
        id: 11,
        url: 'http://img.baitton.com/logo-11.jpg'
      }, {
        id: 12,
        url: 'http://img.baitton.com/logo-12.jpg'
      }, {
        id: 13,
        url: 'http://img.baitton.com/logo-13.jpg'
      }, {
        id: 14,
        url: 'http://img.baitton.com/logo-14.jpg'
      }, {
        id: 15,
        url: 'http://img.baitton.com/logo-15.jpg'
      }, {
        id: 16,
        url: 'http://img.baitton.com/logo-16.jpg'
      }, {
        id: 17,
        url: 'http://img.baitton.com/logo-17.jpg'
      }, {
        id: 18,
        url: 'http://img.baitton.com/logo-18.jpg'
      }]
    }
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
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 40px;
}
@media screen and (max-width: 1175px) {
  .row {
    max-width: 70%;
  }
  .item {
    width: 16.66667%;
  }
  img {
    width: 90px;
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
    width: 33.3%;
  }
  img {
    width: 90px !important;
    height: 47.36px !important;
  }
}
</style>
