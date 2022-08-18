<template>
<div>
<div class="container planos">

<div class="card" style="width: 18rem;">
  <img class="card-img-top" style="border-radius:10px" src="https://www.recorteadesivo.com.br/site/fotoTexturaMaterial?id_recorte_personalizado=431&id_materia_prima=406&tamanho=290x290" alt="Imagem de capa do card">
  <div class="card-body">
    <h5 class="card-title">Plano A</h5>
    <p class="card-text oculto">básico que pode-se ser utilizado totalmente de graça, mas nenhum beneficio.</p>
    <i @click="menuHome()">
    <a href="/home#/home" class="btn btn-outline-primary">Visitar</a>
    </i>
    
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img class="card-img-top" style="border-radius:10px" src="https://www.figueiralaser.com.br/site/fotoTexturaMaterial?id_recorte_personalizado=826&id_materia_prima=1612&tamanho=290x290" alt="Imagem de capa do card">
  <div class="card-body">
    <h5 class="card-title">Plano B</h5>
    <p class="card-text oculto">intermediario que pode conter alguns beneficios como: nosso cartão, viagens acumuladas.
    </p>
    <i @click="menuHome()">
     <a href="/home#/home" class="btn btn-outline-primary">Visitar</a>
    </i>
   
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img class="card-img-top" style="border-radius:10px" src="https://www.figueiralaser.com.br/site/fotoTexturaMaterial?id_recorte_personalizado=150&id_materia_prima=1612&tamanho=290x290" alt="Imagem de capa do card">
  <div class="card-body">
    <h5 class="card-title">Plano C</h5>
    <p class="card-text oculto">O melhor plano que temos no momento, ele tem exatamente tudo que está no site, todos os beneficios, que você pode verificá-los aqui: </p>
    <i @click="menuHome()">
     <a href="/home#/home" class="btn btn-outline-primary">Visitar</a>
    </i>
   
  </div>
</div>


                </div>
              
</div>
</template>

<script>
export default {
    name: 'DashboardVue',
    methods:{
        menuHome() {
            var x = document.getElementById("divAll");
            if (x.style.display === "none") {
                x.style.display = "block";
            } 
        }
    }
    
}

</script>
<style>
.hover {
    overflow: hidden;
    position: relative;
    padding-bottom: 60%;
}

.hover-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90;
    transition: all 0.4s;
}

.hover img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
}

.hover-content {
    position: relative;
    z-index: 99;
}


/* DEMO 1 ============================== */
.hover-1 img {
    width: 105%;
    position: absolute;
    top: 0;
    left: -5%;
    transition: all 0.3s;
}

.hover-1-content {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    transition: all 0.4s;
}

.hover-1 .hover-overlay {
    background: rgba(0, 0, 0, 0.5);
}

.hover-1-description {
    transform: translateY(0.5rem);
    transition: all 0.4s;
    opacity: 0;
}

.hover-1:hover .hover-1-content {
    bottom: 2rem;
}

.hover-1:hover .hover-1-description {
    opacity: 1;
    transform: none;
}

.hover-1:hover img {
    left: 0;
}

.hover-1:hover .hover-overlay {
    opacity: 0;
}


/* DEMO 2 ============================== */
.hover-2 .hover-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
}

.hover-2-title {
    position: absolute;
    top: 50%;
    left: 0;
    text-align: center;
    width: 100%;
    z-index: 99;
    transition: all 0.3s;
}

.hover-2-description {
    width: 100%;
    position: absolute;
    bottom: 0;
    opacity: 0;
    left: 0;
    text-align: center;
    z-index: 99;
    transition: all 0.3s;
}

.hover-2:hover .hover-2-title {
    transform: translateY(-1.5rem);
}

.hover-2:hover .hover-2-description {
    bottom: 0.5rem;
    opacity: 1;
}

.hover-2:hover .hover-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
}


/* DEMO 3 ============================== */
.hover-3::after {
    content: '';
    width: calc(100% - 3rem);
    height: calc(100% - 3rem);
    border: 1px solid #0D6EFD;
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    z-index: 90;
    transition: all 0.3s;
    transform: scale(1.1);
    opacity: 0;
    display: block;
    opacity: 0;
}

.hover-3-content {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    text-align: center;
    z-index: 99;
}

.hover-3-description {
    opacity: 0;
    transform: scale(1.3);
    transition: all 0.3s;
}

.hover-3 img {
    width: 110%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hover-3 .hover-overlay {
    background: rgba(0, 0, 0, 0.2);
}

.hover-3:hover img {
    width: 100%;
}

.hover-3:hover::after {
    opacity: 1;
    transform: none;
}

.hover-3:hover .hover-3-description {
    opacity: 1;
    transform: none;
}

.hover-3:hover .hover-overlay {
    background: rgba(0, 0, 0, 0.8);
}


/* DEMO 4 ============================== */
.hover-4 img {
    width: 110%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.hover-4 .hover-overlay {
    background: rgba(0, 0, 0, 0.4);
    z-index: 90;
}

.hover-4-title {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 3rem;
    z-index: 99;
}

.hover-4-title :hover {
    color: #0D6EFD;
    transition: 0.5s ease-in-out;
}

.hover-4-description {
    position: absolute;
    font-weight: 0;
    top: 2rem;
    left: 2rem;
    text-align: right;
    border-left: 3px solid #0D6EFD;

    padding: 0 1rem;
    z-index: 99;
    transform: translateX(-1.5rem);
    opacity: 0;
    transition: all 0.3s;
}
    .oculto {
        display:block;
        overflow: hidden;
    }
@media (max-width: 740px) {
    .hover-4-description {
        width: 50%;
    }
        .oculto {
        display:none;
        overflow: hidden;
        
    }

}

.hover-4:hover img {
    width: 100%;
}

.hover-4:hover::after {
    opacity: 1;
    transform: none;
}

.hover-4:hover .hover-4-description {
    opacity: 1;
    transform: none;
}

.hover-4:hover .hover-overlay {
    background: rgba(0, 0, 0, 0.8);
}


/* DEMO 5 ============================== */
.hover-5::after {
    content: '';
    width: 100%;
    height: 10px;
    background: #0D6EFD;
    position: absolute;
    bottom: -10px;
    left: 0;
    display: block;
    transition: all 0.3s;
    z-index: 999;
}

.hover-5 .hover-overlay {
    background: rgba(0, 0, 0, 0.4);
}

.hover-5-title {
    position: absolute;
    bottom: 1rem;
    left: 0;
    transition: all 0.3s;
    padding: 2rem 3rem;
    z-index: 99;
}

.hover-5-title span {
    transition: all 0.4s;
    opacity: 0;
    color: #0D6EFD;
}

.hover-5:hover .hover-overlay {
    background: rgba(0, 0, 0, 0.8);
}

.hover-5:hover .hover-5-title {
    bottom: 0;
}

.hover-5:hover .hover-5-title span {
    opacity: 1;
}

.hover-5:hover::after {
    bottom: 0;
}

.ml {
    padding-bottom: 20px;
}

.textoalinhado {
    text-align: start;
}

.font-weight-light {
    font-weight: 300;
}

.margin1 {
    margin: 20px 20px 20px 20px;
    text-align: justify;
    
    border-left: #0D6EFD;
}

.margin1 p {
    padding: 10px;
    font-weight: 500;
    border-radius: 10px;
    
}

.margin1:hover ::after,
.margin1:hover ::before{
    content: "";
    width: 40%;
    height: 50px;
    position: absolute;
    z-index: 2;
    background-image: linear-gradient(to right, rgb(13, 110, 253) 0%, rgba(0, 0, 0, 0.8) 40%,rgb(13, 110, 253) 60%);
    transform: skewX(-5deg);
    left: -40%;
    animation: bgc 100ms linear forwards;
    mix-blend-mode: overlay;
}
@keyframes bgc {
    0% {left: 0%}
    100% {left: 20%}
}
.hoverblue{
    text-decoration: none;
}
.hoverblue :hover{
    color:rgb(13, 110, 253);
}
.planos{
    display: flex;
}

</style>



