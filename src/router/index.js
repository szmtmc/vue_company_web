import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Contact from '@/pages/contact/Contact'
import About from '@/pages/about/About'
import Join from '@/pages/join/Join'
import Business from '@/pages/business/Business'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/join',
      name: 'Join',
      component: Join
    }, {
      path: '/business',
      name: 'Business',
      component: Business
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
