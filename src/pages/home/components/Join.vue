<template>
  <div class="container">
    <div class="inner">
      <h2>
       加入<strong>百拓BAITTON<sup>®</sup></strong>
      </h2>
      <hr />
      <p>{{$t('lang.joinp')}}</p>
      <p>
        <a href="https://jobs.51job.com/guangzhou-hpq/co4762896.html" target="_blank" class="submit">{{$t('lang.submit')}}</a>
      </p>
      <p class="small">为便于检索，请按统一格式填写邮件标题：职位-姓名，如：商务助理-张百拓</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Join'
}
</script>
<style scoped>
.container {
  background-image: url("http://img.baitton.com/office.jpg");
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
}
.container .inner {
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 80px;
  margin-bottom: 30px;
  text-align: center;
  width: 85%;
  margin: 0 auto;
}
.container .inner h2 {
  padding: 40px 10px;
  font-size: 30px;
}
.container .inner h2 strong {
  font-size: 30px;
  font-weight: bold;
}
.container .inner p {
  padding: 15px 10px;
  font-size: 16px;
}
.submit {
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: normal;
  color: #fff;
  background: #007bff;
  border-radius: 4.8px;
  padding: 15px;
}
.small {
  font-size: 14px !important;
  color: #6c757d !important;
  margin-bottom: 40px;
}
</style>
