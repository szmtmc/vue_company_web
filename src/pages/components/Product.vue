<template>
  <div class="container">
    <div class="card-deck services">
      <div class="card border-0 rounded-0">
        <img class="w-100" src="http://www.yuanchin.tech/style/home/img/index-service-1.png" />
        <div class="card-body text-center py-5">
          <h5 class="card-title font-weight-bold">{{$t('lang.prod1h1')}}</h5>
          <p class="card-text">{{$t('lang.prod1p')}}</p>
        </div>
      </div>
      <div class="card border-0 rounded-0">
        <img class="w-100" src="http://www.yuanchin.tech/style/home/img/index-service-2.png" />
        <div class="card-body text-center py-5">
          <h5 class="card-title font-weight-bold">{{$t('lang.prod2h1')}}</h5>
          <p class="card-text">{{$t('lang.prod2p')}}</p>
        </div>
      </div>
      <div class="card border-0 rounded-0">
        <img class="w-100" src="http://www.yuanchin.tech/style/home/img/index-service-3.png" />
        <div class="card-body text-center py-5">
          <h5 class="card-title font-weight-bold">{{$t('lang.prod3h1')}}</h5>
          <p class="card-text">{{$t('lang.prod3p')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Product'
}
</script>
<style scoped>
.container {
  max-width: 1450px;
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
  padding-bottom: 30px;
}
</style>
