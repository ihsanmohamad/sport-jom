import { createRouter, createWebHistory } from '@ionic/vue-router';
import store from "@/store"
import Tabs from '../views/Tabs.vue';



const authGuard = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next('/login');
  } else next()
  
};

const routes = [
  {
    path: '/',
    redirect: '/login',
    beforeEnter: authGuard,
  },
  {
    path: '/signup',
    component: () => import('@/views/SignUp.vue'),

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),

  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
        beforeEnter: authGuard,

      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
        beforeEnter: authGuard,
        
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
        beforeEnter: authGuard,

      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4.vue'),
        beforeEnter: authGuard,

      }
    ]
  },
  {
    path: '/facility-by-category/:category',
    component: () => import('@/views/FacilityByCategory.vue'),
    beforeEnter: authGuard,

  },
  {
    path: '/search-facility',
    component: () => import('@/views/SearchFacility.vue'),
    beforeEnter: authGuard,

  },
  {
    path: '/drink/:id',
    component: () => import('@/views/FacilityDetail.vue'),
    beforeEnter: authGuard,

  },
  {
    path: '/temperature',
    component: () => import('@/views/Temperature.vue'),
    beforeEnter: authGuard,

  },
  {
    path: '/profile',
    component: () => import('@/views/UserProfile.vue'),
    beforeEnter: authGuard,

  },
  {
    path: '/team',
    component: () => import('@/views/Team.vue'),
    beforeEnter: authGuard,
    
  },
  {
    path: '/team/create',
    component: () => import('@/views/NewTeam.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/team/:id',
    component: () => import('@/views/TeamById.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/book-now/:id',
    component: () => import('@/views/BookNow.vue'),
    beforeEnter: authGuard,
    }
    
 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
