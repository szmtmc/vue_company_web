<template>
  <div>
    <header class="header clear">
      <nav class="navbar">
        <a class="navbar-brand" href="/">
          <img height="32" src="http://www.yuanchin.tech/style/home/img/logo.png" />
        </a>
        <ul class="menu clear">
          <li>{{$t('lang.solution')}}</li>
          <li>{{$t('lang.about')}}</li>
          <li>{{$t('lang.join')}}</li>
          <li>{{$t('lang.contact')}}</li>
        </ul>
        <ul class="language clear">
          <li @click="changeCh()" :class="{fff:LanIndex===2}">中文</li>
          <li @click="changeEn()" :class="{fff:LanIndex===1}">ENGLISH</li>
        </ul>
        <span class="more" @click="downmenuClick()">三</span>
      </nav>
    </header>
    <nav class="nav-down" v-show="downmenuShow">
      <ul class="downmenu clear">
        <li>{{$t('lang.solution')}}</li>
        <li>{{$t('lang.about')}}</li>
        <li>{{$t('lang.join')}}</li>
        <li>{{$t('lang.contact')}}</li>
        <li @click="changeCh()" :class="{fff:LanIndex===2}">中文</li>
        <li @click="changeEn()" :class="{fff:LanIndex===1}">ENGLISH</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      downmenuShow: false,
      LanIndex: 1
    }
  },
  mounted () {
    console.log(this.$i18n.locale)
    if (this.$i18n.locale === 'zh-CN') {
      this.LanIndex = 1
    } else {
      this.LanIndex = 2
    }
  },
  methods: {
    downmenuClick () {
      this.downmenuShow = !this.downmenuShow
    },
    changeEn () {
      this.$i18n.locale = 'en-US'
      this.LanIndex = 2
    },
    changeCh () {
      this.$i18n.locale = 'zh-CN'
      this.LanIndex = 1
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
  float: left;
}
.menu li {
  float: left;
  padding: 24px 17px;
  font-size: 15px;
  cursor: pointer;
}
.language {
  float: right;
  margin-right: 10px;
}
.language li {
  float: left;
  padding: 24px 5px;
  font-size: 15px;
  cursor: pointer;
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
  padding: 8px;
  font-size: 15px;
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
