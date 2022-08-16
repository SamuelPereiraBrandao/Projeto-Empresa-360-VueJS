<template>
<div class="div1">
<a href="https://github.com/SamuelPereiraBrandao"><i class="bi bi-github"></i>
 GitHub </a>
  ||
<a href="https://www.linkedin.com/in/samuelpereirabrandao/"><i class="bi bi-linkedin"></i> Linkedin</a>
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
    margin-right: 10px;
    color: white;
    text-decoration: none;
}
.div1 a:hover{
    transition: 0.35s ease-in-out;
    color: #000000;
    filter:blur(0.5px);
}
</style>