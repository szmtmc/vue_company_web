<template>
  <div class="container">
    <div class="card-deck services">
      <div class="card border-0 rounded-0" v-for="item in list" :key="item.id">
        <img class="w-100" :src="item.url" />
        <div class="card-body text-center py-5">
          <h5 class="card-title font-weight-bold">{{item.p}}</h5>
          <p class="card-text">{{item.p1}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import url from '../../../modules/api.js'
export default {
  name: 'Product',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.get(url.contactList).then(res => {
      this.list = res.data.list
    })
  }
}
</script>
<style scoped>
.container {
  max-width: 1150px;
  margin: 0 auto;
  padding: 50px 0;
}
p {
  word-break: keep-all;
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
