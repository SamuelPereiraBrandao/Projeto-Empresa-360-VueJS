<template>
<div class="div1">
<a href="">GitHub</a>
<a href="">Linkedin</a>
</div>

</template>
<script>
export default {
    name: 'DashboardRodapeVue'
}
</script>
<style scoped>
.div1{
    color:white;
    margin: 10px;
    border-radius: 10px;

}
.div1 a{
    margin-left: 10px;
    color: white;
    text-decoration: none;
}
.div1 a:hover{
    transition: 0.35s ease-in-out;
    color: #000000;
}
</style>