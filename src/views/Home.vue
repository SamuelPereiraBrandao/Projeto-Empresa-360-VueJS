<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <router-link class="navbar-brand" to="/home">Empresa 360</router-link>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        
                            
                        </li>
                    </ul>
                    <div class="m-4 ocultomenu">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                    <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                    to="/home/dashboard"><i class="bi bi-speedometer2"></i> Dashboard</router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas"
                    exact-active-class="ativo"><i class="bi bi-cart"></i> Vendas</router-link>
                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                    to="/home/vendas/leads"><i class="bi bi-caret-right"></i> Leads</router-link>
                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                    to="/home/vendas/contratos"><i class="bi bi-caret-right"></i> Contratos</router-link>
                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                    to="/home/servicos"><i class="bi bi-card-checklist"></i> Serviços</router-link>

                    <a class="nav-link" href="#">Sair</a>
                </div>
                
            </div>
        </div>
    </nav>
</div>
                </div>
            </div>
        </nav>


        <div class="d-flex"><div>
        <div class="list-group menu-esquerda oculto">
                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                    to="/home/dashboard"><i class="bi bi-speedometer2"></i> Dashboard</router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas"
                    exact-active-class="ativo"><i class="bi bi-cart"></i> Vendas</router-link>
                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                    to="/home/vendas/leads"><i class="bi bi-caret-right"></i> Leads</router-link>
                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                    to="/home/vendas/contratos"><i class="bi bi-caret-right"></i> Contratos</router-link>
                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                    to="/home/servicos"><i class="bi bi-card-checklist"></i> Serviços</router-link>
                    
            </div>
            
        </div>
            
            
            

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <div class="rodape">
                            <div class="div1">
                                <a href="https://github.com/SamuelPereiraBrandao"><i class="bi bi-github"></i>
                                    GitHub </a>
                                ||
                                <a href="https://www.linkedin.com/in/samuelpereirabrandao/"><i
                                        class="bi bi-linkedin"></i>
                                    Linkedin</a>
                            </div>

                            <router-view name="rodape"></router-view>

                        </div>
                        <li class="breadcrumb-item active" aria-current="page"></li>
                    </ol>
                    
                </nav>


                <div class="container-fluid">
                    <router-view></router-view>
                </div>

            </div>
        </div>

    </div>
</template>
<script>


export default {
    name: "HomeVue",
    
}
</script>

<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}

.ativo {
    color: white;
    background-color: #0d6efd;
    border-color: #0d6efd;
    border-radius: 5px;

}

.rodape {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #0D6EFD;
    border-radius: 10px 10px 0px 0px;
    z-index: 100;

}

.div1 {
    color: white;
    margin: 10px;
    border-radius: 10px;
    z-index: 7;
}

.div1 a {
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    text-decoration: none;
}

.div1 a:hover {
    transition: 0.35s ease-in-out;
    color: #000000;
    filter: blur(0.5px);
}
.ocultomenu{
    display:none;
}
@media (max-width:625px) {
    .ocultomenu{
        display: block;
        color:#000000;
        font-size: 35px;
    }
    .list-group-item{
        margin: 10px;
    }
 
    .ocultomenu i{
        display:none;
        
    }
}
</style>