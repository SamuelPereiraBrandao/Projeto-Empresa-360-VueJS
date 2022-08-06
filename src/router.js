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
import Lead from '@/components/vendas/Lead.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Servico from '@/components/servicos/Servico.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Rodape from '@/components/dashboard/DashboardRodape.vue'
import Error404 from '@/components/dashboard/DashboardErro.vue'
const routes = [
    {
        path: '/:catchAll(.*)*', redirect: {name:'erro'} //redireciona todos url desconhecidas para pag raiz
    },
    {
        path: '/',
        component: Site
    },
    {
        path: '/error404',
        component: Error404,
        name:'erro'
    },
    {
        path: '/home', //localhost:8080/home
        component: Home,
        alias: '/app',
        children: [
            {
                path: 'vendas',//localhost:8080/home/vendas
                component: Vendas,
                children: [
                    {
                        path: 'leads',
                        component: Leads,
                        //localhost:8080/home/vendas/leads
                    },
                    {
                        path: 'leads/:id',
                        component: Lead,
                          //localhost:8080/home/vendas/lead/5
                    },
                    {
                        path: '',
                        component: VendasPadrao,
                        name: 'vendas' //localhost:8080/home/vendas/
                    },

                    {
                        path: 'contratos',
                        component: Contratos,
                        name:'contratos'
                        //localhost:8080/home/vendas/Contratos
                    },

                ]
            },
            {
                path: 'servicos',//localhost:8080/home/servicos
                component: Servicos,
                name: 'servicos',
                children: [
                    {
                        path: ':id',
                        alias: '/s/:id',  //localhost:8080/home/servicos
                        components: {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores
                        },
                        name: 'servico'
                    }
                ]
            },
            {
                path: 'dashboard',
                components:
                {
                    default: Dashboard,
                    rodape: Rodape
                }
            }
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    },
    {
        path: '/redirecionamento-1', redirect: '/home/servicos',

    },
    {
        path: '/redirecionamento-2', redirect: '/home/vendas',

    },
    {
        path: '/redirecionamento-3', redirect: { name: 'vendas' },

    },
   
]

const router = createRouter({
    history: createWebHashHistory(),
    routes //routes: routes
})
export default router
// --- fim rotas