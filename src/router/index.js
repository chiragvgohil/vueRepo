import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Layout from '../components/Layout.vue'
import About from '../components/About.vue'
import Services from "../components/Services";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    }
  ]
})
