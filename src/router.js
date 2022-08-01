// --- início rotas
import { createRouter,  createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
//createWebHashHistory
const routes = [
    {
        path: '/home', //localhost:8080/home
        component: Home
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    }
] 

const router = createRouter({
    history: createWebHistory(),
    routes //routes: routes
})
export default router
// --- fim rotas