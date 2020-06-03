import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Welcome from '../components/Welcome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/registration',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
