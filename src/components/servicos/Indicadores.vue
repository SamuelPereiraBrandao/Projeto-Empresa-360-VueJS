<template>
    <h5>componente indicadores</h5>
</template>
<script>
export default {
    name:'IndicadoresVue',
    props:[
        'id'
    ],
    created(){
        console.log('indicadores = parametro via props', this.id)
    }


}
</script>