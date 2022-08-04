<template>
    <div>
        <h1>ID: {{ dados.id }} | {{ dados.nome }}</h1>
        <hr>

        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">NOME</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
        </div>
        <div class="mb-3 row">
            <label for="" class="col-sm-2 col-form-label">TELEFONE</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.telefone">
            </div>
        </div>
        <div class="col-auto ">
            <button class="btn btn-success" @click="$router.push('/home/vendas/leads')"> <i
                    class="bi bi-backspace-fill"> </i>
                Voltar</button> |
            <button class="btn  btn-primary">Atualizar</button>
        </div>

        <br>

    </div>
</template>
<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
    name: 'LeadVue',
    mixins: [
        ApiMixin
    ],
    created() {
        this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
}
</script>