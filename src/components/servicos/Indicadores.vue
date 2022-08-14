<template>
    <div>
        <h5>componente opcoes</h5>
        <p>Poderiamos recuperar os indicadores do serviço id {{ id }}</p>

    </div>
</template>
<script>
export default {
    name:'IndicadoresVue',
    props:[
        'id'
    ],
    created(){
       // console.log('indicadores = parametro via props', this.id)
    }


}
</script>