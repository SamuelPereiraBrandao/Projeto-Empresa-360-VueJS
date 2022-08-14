<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ dados.descricao }}</p>
        </div>
    </div>
</template>
<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
    name: 'ServicoVue',
    mixins: [
        ApiMixin
    ],
    props: [
        'id'
    ],
    created() {
        //console.log(`serviço`, this.$route.params.id)
        //console.log('via props:', this.$props)
        this.getDadosApi(`http://localhost:3000/servicos/${this.id}`)
    },
    beforeRouteUpdate(to, from, next) {
        if (to.params.id != undefined) {
            this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
        }
        next()
    }
    /*
    watch: {
        $route(to) { // convenção to = novo valor, from = valor antigo
            if (to.params.id != undefined) {
                this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
            }

        } 
    }*/
}
</script>
