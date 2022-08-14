<template>
    <hr>
    <h5>componente opcoes</h5>
</template>
<script>
export default {
    name: 'OpcoesVue',
    props: [
        'id'
    ],
    created() {
        console.log('Parametro via props', this.id)
    }
}
</script>