import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Contact from '@/pages/contact/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
