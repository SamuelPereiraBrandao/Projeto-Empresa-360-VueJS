// --- início rotas
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'
import Leads from '@/components/vendas/Leads.vue'
import Contratos from '@/components/vendas/Contratos.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
const routes = [
    {
        path: '/',
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [
            {
                path: 'vendas',//localhost:8080/home/vendas
                component: Vendas,
                children: [
                    {
                        path: 'leads',
                        component: Leads, //localhost:8080/home/vendas/leads
                    },
                    {
                        path: 'contratos',
                        component: Contratos, //localhost:8080/home/vendas/Contratos
                    },

                ]
            },
            {
                path: 'servicos',//localhost:8080/home/servicos
                component: Servicos
            },
            {
                path: 'dashboard',
                component: Dashboard
            }
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes //routes: routes
})
export default router
// --- fim rotas