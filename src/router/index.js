import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Crew from '../views/Crew.vue';
import Destination from '../views/Destination.vue';
import Technology from '../views/Technology.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/crew',
    name: 'crew',
    component: Crew,
  },
  {
    path: '/destination',
    name: 'destination',
    component: Destination,
  },
  {
    path: '/technology',
    name: 'technology',
    component: Technology,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
