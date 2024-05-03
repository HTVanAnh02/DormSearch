
import { createRouter, createWebHistory, NavigationGuardWithThis, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import { PageName, Role } from '../common/contant/contants';
import authMiddleware from './authMiddleware';
import VueRouteMiddleware, { GLOBAL_MIDDLEWARE_NAME } from './middleware';
import HomeView from '@/views/HomeView.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: PageName.HOME,
    component: HomeView,
    meta: {
      public: true,
    },
  },
 
  {
    path: '/register',
    name: PageName.REGISTER_PAGE,
    component: () => import('../Auth/Register/RegisterView.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/login',
    name: PageName.LOGIN_PAGE,
    component: () => import('../Auth/Login/LoginView.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/forgot_password',
    name: PageName.FORGOT_PASSWORD,
    component: () => import('../Auth/Login/FormQuenMatKhau.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/prices',
    name: PageName.PRICE,
    component: () => import('../layouts/Home/Price/Price.vue'),
    meta: {
      public: true,
    },
  },
  // {
  //   path: '/homedetail',
  //   name: PageName.HOMEDETAIL,
  //   component: () => import('../layouts/Home/Houses/Housesdetail.vue'),
  //   meta: {
  //     public: true,
  //   },
  // },
  {
    path: '/404',
    name: PageName.NOT_FOUND_PAGE,
    component: () => import('../components/errors/NotFound.vue')
  },
  {
    path: '/admin',
    name: PageName.ADMIN,
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'areas',
        name:PageName.ADMIN_AREA,
        component: () => import('../layouts/Admin/Area/Area.vue'),
        meta: {
          role:Role.ADMIN,
          public:false,
        },
      },
      {
        path: 'city',
        name:PageName.ADMIN_CITY,
        component: () => import('../layouts/Admin/City/City.vue'),
        meta: {
          role:Role.ADMIN,
          public:false,
        },
      },
      {
        path: 'user',
        name:PageName.ADMIN_USER,
        component: () => import('../layouts/Admin/User/UserView.vue'),
        meta: {
          role:Role.ADMIN,
          public:false,
        },
      },
      {
        path: 'role',
        name:PageName.ROLE_PAGE,
        component: () => import('../layouts/Admin/Roles/RolesIndex.vue'),
        meta: {
          role:Role.ADMIN,
          public:false,
        },
      },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(
  VueRouteMiddleware({
    [GLOBAL_MIDDLEWARE_NAME]: authMiddleware,
  }) as NavigationGuardWithThis<unknown>,
);

export default router
