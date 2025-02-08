import { createRouter, createWebHistory } from 'vue-router';
import routeManifest from '../routeManifest';

const getRoutes = () => {
  const remoteRoutes = routeManifest.map((mfe) => ({
    path: mfe.route.path,
    name: mfe.route.name,
    meta: {
      ...mfe.route.meta,
    },
    component: () => import('@/components/Loader.vue'),
  }));

  return remoteRoutes;
};

const routes = getRoutes();

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const useRoute = () => {
  return router;
};
