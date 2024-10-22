
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('src/pages/auth/loginPage.vue') }
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/MainLayoutAuth.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('pages/dashboard/indexDashboard.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'venta',
        name: 'venta',
        component: () => import('pages/ventas/indexVenta.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'addVenta',
        name: 'addVenta',
        component: () => import('./../components/ventas/addVentaComponent.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('pages/categories/indexCategories.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'addCategories',
        name: 'addCategories',
        component: () => import('./../components/categories/addCategoriesComponent.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'types',
        name: 'types',
        component: () => import('pages/types/indexTypes.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'addTypes',
        name: 'addTypes',
        component: () => import('./../components/types/addTypesComponent.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'editTypes/:id',
        name: 'editTypes',
        component: () => import('./../components/types/editTypesComponent.vue'),
        meta: {
          authRequired: true,
        }
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('pages/users/indexUsers.vue'),
        meta: {
          authRequired: true,
        }
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
