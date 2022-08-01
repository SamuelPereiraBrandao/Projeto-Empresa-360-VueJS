<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="d-flex">
            <div class="list-group menu-esquerda">
                <router-link class="list-group-item list-group-item-action" to="/home"><i class="bi bi-speedometer2"></i> Dashboard</router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/vendas"><i class="bi bi-cart"></i> Vendas</router-link>
                <router-link class="list-group-item list-group-item-action" to="/home/servicos"><i class="bi bi-card-checklist"></i> Serviços</router-link>
            </div>

            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
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
export default{
    name:'HomeVue'
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

</style>