<template>
    <h5>componente indicadores</h5>
</template>
<script>
export default {
    name:'IndicadoresVue',
    created(){
        console.log('indicadores', this.$route.params.id)
    }


}
</script>