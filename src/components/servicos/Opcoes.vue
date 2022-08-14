<template>
    <div>
        <h5>componente opcoes</h5>
        <p>Poderiamos recuperar as opcoes do serviço id {{ id }}</p>

    </div>
</template>
<script>
export default {
    name: 'OpcoesVue',
    props: [
        'id'
    ],
    created() {
        //console.log('Parametro via props', this.id)
    }
}
</script>