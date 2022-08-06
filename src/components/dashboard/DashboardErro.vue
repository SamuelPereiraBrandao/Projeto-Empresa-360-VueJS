<template>
    <div class="text-center pt-5 mt-5 d-flex align-items-center justify-content-center">
        <div class="row ">
            <div class="col ">
                <h1>ERROR 404</h1>  
                <i class="bi bi-code"></i> <br>
                <h9>Url não encontrada</h9> <br>
          
                <router-link to="/home/dashboard">Voltar Para Home</router-link>
                 <br><i class="bi bi-code-slash"></i>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'DashboardErrorVue'
}
</script>