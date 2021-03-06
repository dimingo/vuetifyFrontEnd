import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Photos from '../views/Photos.vue'
import About from '../views/About.vue'
import Allfolders from '../views/Allfolders'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',


    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {

    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {

    path: '/allfolders',
    name: 'Allfolders',
    component: Allfolders
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router