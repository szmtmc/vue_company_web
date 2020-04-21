<template>
  <div class="container" :style="styleObj">
    <div class="inner">
      <h2>{{list[0].h2}}</h2>
      <div class="divider my-3"></div>
      <p>{{list[0].p}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    list: Array
  },
  data () {
    return {
      styleObj: '',
      styleObj1: { backgroundImage: 'url(http://dummyimage.com/1851x500/f2b479)' },
      styleObj2: { backgroundImage: 'url(http://dummyimage.com/1851x500/9179f2)' },
      styleObj3: { backgroundImage: 'url(http://dummyimage.com/1851x500/84f279)' },
      styleObj4: { backgroundImage: 'url(http://dummyimage.com/1851x500/f279a7)' }
    }
  },
  mounted () {
    if (this.list[0].id === 1) {
      this.styleObj = this.styleObj1
    }
    if (this.list[0].id === 2) {
      this.styleObj = this.styleObj2
    }
    if (this.list[0].id === 3) {
      this.styleObj = this.styleObj3
    }
    if (this.list[0].id === 4) {
      this.styleObj = this.styleObj4
    }
  }
}
</script>
<style scoped>
.container {
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
  position: absolute;
  top: 80px;
  margin-bottom: 30px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  padding: 0 30px;
}
.container .inner h2 {
  margin-top: 120px;
  padding-bottom: 20px;
  font-size: 50px;
  border-bottom: 2px solid white;
}
.container .inner p {
  padding: 15px 10px;
  font-size: 16px;
}
</style>
