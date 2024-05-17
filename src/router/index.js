import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Layout from '../components/Layout.vue'
import About from '../components/About.vue'
import Services from "../components/Services";
import Contact from "../components/Contact"
import SlotComponent from "../components/SlotComponent";
import PageNotFound from "../components/PageNotFound";

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
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/slotcomponent',
      name: 'SlotComponent',
      component: SlotComponent,
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
    },

  ]
})
