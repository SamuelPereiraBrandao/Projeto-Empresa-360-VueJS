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
import DashboardConteudo from '@/components/dashboard/DashboardConteudo.vue'
import Servico from '@/components/servicos/Servico.vue'
import Opcoes from '@/components/servicos/Opcoes.vue'
import Indicadores from '@/components/servicos/Indicadores.vue'
import Error404 from '@/components/dashboard/DashboardErro.vue'

const routes = [
    {
        path: '/home/dashboard#/home',
        component: DashboardConteudo,
        name:DashboardConteudo
        
    },
    {
        path: '/:catchAll(.*)*', redirect: { name: 'erro' } //redireciona todos url desconhecidas para pag raiz
    },
    {
        path: '/',
        component: Site,
        meta: { requerAutorizacao: false }
    },
    {
        path: '/error404',
        component: Error404,
        name: 'erro'
    },
    {
        path: '/home', //localhost:8080/home
        meta: { requerAutorizacao: true },
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
                        beforeEnter(){
                            //poderiamos verificar se o usuario tem permissao de carregar a rota
                            console.log('guarda de rota beforeEnter')
                        }
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
                        name: 'contratos'
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
                        props: {
                            default: true,
                            indicadores: true,
                            opcoes: true
                        },
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
                    
                }
            }
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login,
        meta: { requerAutorizacao: false }
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
    scrollBehavior(to, from, savedPosition){
        //return {left:0, top: 150} // left = x / top= y
        console.log(savedPosition)

        if(savedPosition){
            return savedPosition
        }
        
        if(to.hash){
            return {
                el: to.hash //to.hash deve corresponder a um id de elemento html
                //fragmento = @secao_1 => id = secao_1
            }
        }else {
            return {
                left:0,
                top:0
            }
        }
    }, 
    routes //routes: routes
})

router.beforeEach((to) => {
    if(to.meta.requerAutorizacao){
        //console.log('acesso especial')
    }else{
        //console.log('acesso comum')
    }
})
router.afterEach(() => {
    //console.log('guarda global aftereach')
})

router.beforeResolve(() => {
    //console.log('guarda global before resolve')
})
export default router
// --- fim rotas