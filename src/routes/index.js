import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import EnrollmentView from '../views/EnrollmentView.vue'
import SearchView from '../views/SearchView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/curso',
    component: CourseView
  },
  {
    path: '/matricula',
    component: EnrollmentView
  },
  {
    path: '/busca',
    component: SearchView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router