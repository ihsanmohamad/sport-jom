import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue';

const routes = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/signup',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
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
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
        
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4.vue')
      }
    ]
  },
  {
    path: '/drinks-by-ingredient/:ingredient',
    component: () => import('@/views/DrinksByIngredient.vue')
  },
  {
    path: '/drink/:id',
    component: () => import('@/views/Drink.vue'),
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
