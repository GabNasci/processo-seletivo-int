import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import EnrollmentStepOneView from '../views/EnrollmentStepOneView.vue'
import EnrollmentStepTwoView from '../views/EnrollmentStepTwoView.vue'
import EnrollmentStepThreeView from '../views/EnrollmentStepThreeView.vue'
import UserView from '../views/UserView.vue'
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
    path: '/busca',
    component: SearchView
  },
  {
    path: '/matricula-passo-1',
    component: EnrollmentStepOneView
  },
  {
    path: '/matricula-passo-2',
    component: EnrollmentStepTwoView
  },
  {
    path: '/matricula-passo-3',
    component: EnrollmentStepThreeView
  },
  {
    path: '/conta',
    component: UserView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router