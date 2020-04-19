<template>
  <div>
    <header class="header clear">
      <nav class="navbar">
        <a class="navbar-brand">
          <img height="32" src="../../assets/image/logo1.png" />
          <!-- <img height="32" src="../../assets/image/logo.png" /> -->
        </a>
        <ul class="menu clear">
          <router-link tag="li" to="/" :class="{fff:navindex===0}">首页</router-link>
          <router-link tag="li" to="/business" :class="{fff:navindex===1}">{{$t('lang.solution')}}</router-link>
          <router-link tag="li" to="/about" :class="{fff:navindex===2}">{{$t('lang.about')}}</router-link>
          <router-link tag="li" to="/join" :class="{fff:navindex===3}">{{$t('lang.join')}}</router-link>
          <router-link tag="li" to="/contact" :class="{fff:navindex===4}">{{$t('lang.contact')}}</router-link>
        </ul>
        <span class="more" @click="downmenuClick()">三</span>
      </nav>
    </header>
    <nav class="nav-down" v-show="downmenuShow">
      <ul class="downmenu clear">
        <router-link tag="li" to="/" :class="{fff:navindex===0}">首页</router-link>
        <router-link tag="li" to="/business" :class="{fff:navindex===1}">{{$t('lang.solution')}}</router-link>
        <router-link tag="li" to="/about" :class="{fff:navindex===2}">{{$t('lang.about')}}</router-link>
        <router-link tag="li" to="/join" :class="{fff:navindex===3}">{{$t('lang.join')}}</router-link>
        <router-link tag="li" to="/contact" :class="{fff:navindex===4}">{{$t('lang.contact')}}</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      downmenuShow: false
    }
  },
  props: {
    navindex: String
  },
  mounted () {
  },
  methods: {
    downmenuClick () {
      this.downmenuShow = !this.downmenuShow
    }
  }

}
</script>
<style scoped>
.clear::after {
  content: "";
  display: block;
  clear: both;
}
.fff {
  color: #fff !important;
  pointer-events: none;
}
header {
  position: fixed;
  background: #043985;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  color: rgba(255, 255, 255, 0.5);
}
.navbar-brand {
  display: inline-block;
  padding: 16px 14px;
}
.header .navbar-brand {
  float: left;
  background-color: #fa541c;
}
.header .navbar-brand img {
  height: 32px;
  width: 152px;
  vertical-align: middle;
  border-style: none;
}
.menu {
  float: right;
}
.menu li {
  float: left;
  padding: 24px 17px;
  font-size: 15px;
  cursor: pointer;
}
.nav-down ul {
  float: right;
}
.more {
  display: none;
  float: right;
  margin-right: 15px;
  margin-top: 15px;
  border: 1px solid #cccccc;
  padding: 10px;
}
.nav-down {
  z-index: 100;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: #043985;
  color: rgba(255, 255, 255, 0.5);
}
.downmenu li {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
header li:hover,
.nav-down li:hover {
  color: rgba(255, 255, 255, 0.75);
}
@media screen and (max-width: 767px) {
  .menu,
  .language {
    display: none;
  }
  .more {
    display: block;
  }
}
@media screen and (min-width: 767px) {
  .nav-down {
    display: none;
  }
}
@media screen and (max-width: 496px) {
  .header .navbar-brand {
    float: left;
    background-color: #043985;
  }
}
</style>
