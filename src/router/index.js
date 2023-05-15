import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import BlogView from '../views/BlogView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import BlogPreview from '../views/BlogPreview.vue'
import BlogPresent from '../views/BlogPresent.vue'
import MyPage from '../views/MyPage.vue'
const routes = [
  // 主界面
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 关于我们界面
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // 用户登录界面
  {
    path: '/userLogin',
    name: 'userLogin',
    component: LoginView
  },
  // 用户注册界面
  {
    path: '/userRegister',
    name: 'userRegister',
    component: RegisterView
  },
  // 博客预览界面
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
  },
  // 个人主页
  {
    path: '/MyPage',
    name: 'MyPage',
    component:MyPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



// 路由配置...

export default router
