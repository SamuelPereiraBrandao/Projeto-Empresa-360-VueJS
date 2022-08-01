// --- início rotas
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Site from '@/views/Site.vue'
import Vendas from '@/components/vendas/Vendas.vue'
import Servicos from '@/components/servicos/Servicos.vue'
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
                component: Vendas 
            },
            {
                path: 'servicos',//localhost:8080/home/servicos
                component: Servicos
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