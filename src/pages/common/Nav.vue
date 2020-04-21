<template>
  <div>
    <header class="header clear">
      <nav class="navbar" v-show="navshow">
        <a class="navbar-brand">
          <img height="32" src="../../assets/image/logo.png" />
          <!-- <img height="32" src="../../assets/image/logo.png" /> -->
        </a>
        <ul class="menu clear">
          <router-link tag="li" to="/" :class="{fff:navindex===0}">首页</router-link>
          <router-link tag="li" to="/business" :class="{fff:navindex===1}">业务&服务</router-link>
          <router-link tag="li" to="/about" :class="{fff:navindex===2}">关于公司</router-link>
          <router-link tag="li" to="/join" :class="{fff:navindex===3}">加入我们</router-link>
          <router-link tag="li" to="/contact" :class="{fff:navindex===4}">联系我们</router-link>
        </ul>
        <span class="more" @click="downmenuClick()">
          <div class="icon-twrap" p-id="599">
            <svg
              class="icon"
              style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="601"
            >
              <path
                d="M925 811H99.5c-12 0.7-23.5-5.3-29.7-15.7-6.2-10.3-6.2-23.3 0-33.6s17.7-16.4 29.7-15.7H925c12-0.7 23.5 5.3 29.7 15.7 6.2 10.3 6.2 23.3 0 33.6-6.3 10.4-17.7 16.4-29.7 15.7zM925 534.7H99.5c-12 0.7-23.5-5.3-29.7-15.7-6.2-10.3-6.2-23.3 0-33.6s17.7-16.4 29.7-15.7H925c12-0.7 23.5 5.3 29.7 15.7 6.2 10.3 6.2 23.3 0 33.6-6.3 10.3-17.7 16.4-29.7 15.7zM925 279.7H99.5c-12 0.7-23.5-5.3-29.7-15.7-6.2-10.3-6.2-23.3 0-33.6s17.7-16.4 29.7-15.7H925c12-0.7 23.5 5.3 29.7 15.7 6.2 10.3 6.2 23.3 0 33.6-6.3 10.3-17.7 16.4-29.7 15.7z"
                p-id="602"
              />
            </svg>
          </div>
        </span>
      </nav>
    </header>
    <nav class="nav-down" v-show="downmenuShow">
      <ul class="downmenu clear">
        <router-link tag="li" to="/" :class="{fff:navindex===0}">首页</router-link>
        <router-link tag="li" to="/business" :class="{fff:navindex===1}">业务&服务</router-link>
        <router-link tag="li" to="/about" :class="{fff:navindex===2}">关于公司</router-link>
        <router-link tag="li" to="/join" :class="{fff:navindex===3}">加入我们</router-link>
        <router-link tag="li" to="/contact" :class="{fff:navindex===4}">联系我们</router-link>
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
      navshow: true,
      height: 0,
      timer: null
    }
  },
  props: {
    navindex: Number
  },
  mounted () {
  },
  // created () {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // destroyed () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  methods: {
    downmenuClick () {
      this.downmenuShow = !this.downmenuShow
    },
    handleScroll (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const top = document.documentElement.scrollTop
        if (this.height < top) {
          this.navshow = false
          this.height = top
        } else {
          this.navshow = true
          this.height = top
        }
      }, 50)
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
.nav-down ul li {
  margin-left: 50%;
  transform: translateX(-25%);
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
  .downmenu {
    border-top: 1px solid #fff;
    height: 181px;
  }
  .nav-down {
    overflow: hidden;
    animation: mymove 0.5s;
  }
  @keyframes mymove {
    from {
      height: 0px;
    }
    to {
      height: 181px;
    }
  }
}
</style>
