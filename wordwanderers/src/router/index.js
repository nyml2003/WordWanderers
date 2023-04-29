import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import BlogView from '../views/BlogView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import BlogPreview from '../views/BlogPreview.vue'
import BlogPresent from '../views/BlogPresent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/userLogin',
    name: 'userLogin',
    component: LoginView
  },
  {
    path: '/userRegister',
    name: 'userRegister',
    component: RegisterView
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BlogPreview
  },
  // 博客展示界面
  {
    path: '/blog/:blogId',
    name: 'BlogPresent',
    component: BlogPresent,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



// 路由配置...

export default router
