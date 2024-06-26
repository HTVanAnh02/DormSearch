
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
    component: () => import('../Auth/Profile/FormQuenMatKhau.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/re_password',
    name: PageName.RE_PASSWORD,
    component: () => import('../Auth/Profile/NhapLaiMatKhau.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/profile',
    name: PageName.PROFILE,
    component: () => import('../Auth/Profile/ProfileView.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: () => import('../layouts/Home/Favorites/Favorite.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/user',
    name: PageName.USER,
    component: () => import('../layouts/Home/User/UserView.vue'),
    meta: {
      public: true,
    },
  },

  {
    path: '/homehouse',
    name: PageName.HOMEHOUSE,
    component: () => import('../layouts/Home/Houses/HomeHouse.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/homedetail/:id',
    name: PageName.HOMEDETAIL,
    component: () => import('../layouts/Home/Houses/Housesdetail.vue'),
    meta: {
      public: true,
    },
  },
  // {
  //   path: '/dashboard',
  //   name: PageName.DASHBOARD_PAGE,
  //   component: () => import('../layouts/Admin/Dashboard/IndexView.vue'),
   
  // },
  {
    path: '/chat-mess',
    name: 'chat-mess',
    component: () => import('../layouts/Home/Chat/Chat-index.vue'),
    children:[
      {
        path: 'chat/:id',
        name: 'chat',
        component: () => import('../layouts/Home/Chat/Chat.vue'),
      },
    ]
    
  },
  
  {
    path: '/admin_dashboard',
    name: 'admin_dashboard',
    component: () => import('../layouts/Dashboard Chat/admin_dashboard.vue'),
   
  },
 
  {
    path: '/admin',
    name: PageName.ADMIN,
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: '/areas',
        name:PageName.ADMIN_AREA,
        component: () => import('../layouts/Admin/Area/Area.vue'),
        // meta: {
        //   role:Role.ADMIN,
        //   public:false,
        // },
        // meta: {
        //   public: true,
        // },
      },
      {
        path: '/city',
        name:PageName.ADMIN_CITY,
        component: () => import('../layouts/Admin/City/City.vue'),
        // meta: {
        //   role:Role.ADMIN,
        //   public:false,
        // },
        // meta: {
        //   public: true,
        // },
      },
      // {
      //   path: 'user',
      //   name:PageName.ADMIN_USER,
      //   component: () => import('../layouts/Admin/User/UserView.vue'),
      //   // meta: {
      //   //   role:Role.ADMIN,
      //   //   public:false,
      //   // },
      //   meta: {
      //     public: true,
      //   },
      // },
      {
        path: '/role',
        name:PageName.ROLE_PAGE,
        component: () => import('../layouts/Admin/Roles/RolesIndex.vue'),
        // meta: {
        //   role:Role.ADMIN,
        //   public:false,
        // },
        // meta: {
        //   public: true,
        // },
      },
      {
        path: '/roomstyle',
        name:PageName.ROOMSTYLE,
        component: () => import('../layouts/Admin/Roomstyle/Roomstyle.vue'),
        // meta: {
        //   role:Role.ADMIN,
        //   public:false,
        // },
        // meta: {
        //   public: true,
        // },
        
      },
      {
        path: '/adminhouse',
        name:PageName.ADMIN_HOUSE,
        component: () => import('../layouts/Admin/House/House.vue'),
        // meta: {
        //   role:Role.ADMIN,
        //   public:false,
        // },
        // meta: {
        //   public: true,
        // },
        
      },
      {
        path: '/dashboard',
        name: PageName.DASHBOARD_PAGE,
        component: () => import('../layouts/Admin/Dashboard/IndexView.vue'),
       
      },
      
    ]
  },
  {
    path: '/404',
    name: PageName.NOT_FOUND_PAGE,
    component: () => import('../components/errors/NotFound.vue')
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
