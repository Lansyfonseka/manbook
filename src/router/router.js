import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import MainPage from "../pages/MainPage/MainPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import AuthPage from "../pages/AuthPage/AuthPage"
import Users from "../pages/Users/Users"
import CollectionPage from "../pages/CollectionPage/CollectionPage"

createWebHistory;
export default createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  mode: "history",
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
    },
    {
      path: '/collection/:id',
      name: 'collection',
      component: CollectionPage
    }
  ]
})