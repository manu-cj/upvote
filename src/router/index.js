import { createRouter, createWebHistory } from 'vue-router'

import ItemList from "../components/Item-List.vue"
import LoginPage from "../components/LoginPage.vue"
import HomePage from "../views/HomePage.vue"


const routes = [
  {
    path: '/item-list',
    name: 'item-list',
    component: ItemList
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/?c=about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
