import { createRouter, createWebHistory } from 'vue-router';
import Home from '@src/ui/components/pages/Home.vue';
import Seasons from '@src/ui/components/pages/Season/Seasons.vue';
import FranchisePage from '@src/ui/components/pages/Franchise/FranchisePage.vue';
import FranchiseDetailVue from '@src/ui/components/pages/Franchise/FranchiseDetail/FranchiseDetail.vue';
import Venues from '@src/ui/components/pages/Venues.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'season',
    path: '/season',
    component: Seasons,
  },
  {
    name: 'franchise',
    path: '/franchise',
    component: FranchisePage,
  },
  {
    name: 'franchise-detail',
    path: '/franchise/:id',
    component: FranchiseDetailVue,
  },
  {
    name: 'venue',
    path: '/venue',
    component: Venues,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
