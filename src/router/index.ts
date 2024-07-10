import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VisionView from '@/views/VisionView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactsView from '@/views/ContactsView.vue'
import NotFoundView from '@/views/notFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'aboutus',
    component: AboutView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/vision',
    name: 'vision',
    component: VisionView
  },
  {
    path: '/:catchAll()',
    name: 'notFound',
    component: NotFoundView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
