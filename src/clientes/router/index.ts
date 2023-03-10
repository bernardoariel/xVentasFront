import type { RouteRecordRaw } from "vue-router";
import ClienteLayout from "../layouts/ClienteLayout.vue";
import ClienteId from "../pages/ClienteId.vue";
import ClienteList from "../pages/ClienteList.vue";
import ClienteSearch from "../pages/ClienteSearch.vue";
export const clientesRoute:RouteRecordRaw = {
    path: '/clientes',
    redirect:'/clientes/list',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            path: 'by/id',
            name:'cliente-id',
            props:{ title: 'Por Id',visible:false},
            component:ClienteId

        },
        {
            path: 'list',
            name:'cliente-list',
            props:{ title: 'Lista de prueba de clientes',visible:true},
            component:ClienteList

        },
        {
            path: 'search',
            name:'cliente-search',
            props:{ title: 'Busqueda',visible:true},
            component:ClienteSearch

        },
    ]
}