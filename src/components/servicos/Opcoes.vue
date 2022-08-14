<template>
    <hr>
    <h5>componente opcoes</h5>
</template>
<script>
export default {
    name: 'OpcoesVue',
    created() {
        console.log('opcoes', this.$route.id)
    }
}
</script>