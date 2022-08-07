<template>
    <div>
        <h5>Contratos</h5>


        <router-link class="btn btn-primary" :to="{ name: 'contratos', query: { leadId_like: 1 } }">LeadID = 1
        </router-link>
        <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2">ServicoID = 2</router-link>



        <router-link class="btn btn-success" :to="{ name: 'contratos', query: { leadId_like: 1, servicoId_like: 2 } }">
            LeadID = 1 e servicoID = 2</router-link>



        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">LEAD</th>
                    <th scope="col">SERVIÇO</th>
                    <th scope="col">DATA INICIO</th>
                    <th scope="col">DATA FIM</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td>{{ d.id }}</td>
                    <td>{{ d.lead.nome }}</td>
                    <td>{{ d.servico.servico }}</td>
                    <td>{{ d.data_inicio }}</td>
                    <td>{{ d.data_fim }}</td>
                    <td>


                    </td>
                </tr>
            </tbody>
        </table>

    </div>

</template>
<script>
import ApiMixin from '@/mixins/ApiMixin'
export default {
    name: 'ContratosVue',
    mixins: [ApiMixin],
    data: () => ({
        parametrosDeRelacionamento: '_expand=lead&_expand=servico'
    }),
    created() {
        
        const queryParams = new URLSearchParams(this.$route.query).toString()
        const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
        this.getDadosApi(url)
    },
    beforeRouteUpdate(to, from, next) {
        //console.log(to.query) //objeto => url search params
        const queryParams = new URLSearchParams(to.query).toString()
        const url = `http://localhost:3000/contratos?${this.parametrosDeRelacionamento}&${queryParams}`
      
        this.getDadosApi(url)
        next()
    }
}
</script>