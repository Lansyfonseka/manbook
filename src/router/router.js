import { createRouter, createWebHistory } from "vue-router"
import MainPage from "../pages/MainPage/MainPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import AuthPage from "../pages/AuthPage/AuthPage"
import Users from "../pages/Users/Users"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/login',
      component: AuthPage
    },
    {
      path: '/users',
      component: Users
    }
  ]
})