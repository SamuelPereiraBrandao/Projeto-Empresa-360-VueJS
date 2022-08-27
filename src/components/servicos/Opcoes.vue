<template>
    <div>

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
    },
    beforeRouteUpdate(){
        console.log('guarda de componente before route updatee')
    }
}
</script>