import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage'
import DetailBlood from '../components/DetailBlood'

const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/HomePage',
            component: HomePage
        },
        {
            path: '/DetailBlood',
            component: DetailBlood
        }
    ]
})
  
export default router