import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

import { getToken, isTokenExpired } from 'src/utils/auth';
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  // Configura el guard de navegación global
  Router.beforeEach((to, from, next) => {
    const token = getToken(); // Obtén el token
    if (to.matched.some(record => record.meta.authRequired)) {
      if (!token || isTokenExpired(token)) {
        // Redirige al login si no hay token o ha expirado
        return next({ name: 'login' });
      }
    }
    next(); // Permite la navegación
  });

  return Router
})
