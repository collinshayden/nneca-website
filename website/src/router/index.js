import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import GrandPrix from '../views/GrandPrix.vue'
import Team from '../views/Team.vue'
import Tournaments from '../views/Tournaments.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/grandprix',
    name: 'GrandPrix',
    component: GrandPrix
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: Tournaments
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
