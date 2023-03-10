import { clientesRoute } from './../clientes/router/index';
import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //publicas
        {
            ...MainRoutes,
            path: '/main'    
        },
        {
            ...AuthRoutes,
            path: '/auth'
        },
        //MIS RUTAS
        {
            ...clientesRoute,
            path: '/clientes'
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/pages/Error404.vue')
        },
        
    ]
});

