<template>

    <div class="row mt-3 central">
        <div class="col">
            <h4>BENEFICIOS:</h4>
            <ul>
                <li>teste1</li>
                <li>teste1</li>
                <li>teste1</li>
                <li>teste1</li>
                <li>teste1</li>
            </ul>
        </div>
        <div class="col">
            <h4>CONTRAS:</h4>
            <ul>
                <li>teste 1</li>
                <li>teste 1</li>
                <li>teste 1</li>
                <li>teste 1</li>
                <li>teste 1</li>
            </ul>
        </div>
    </div>

    <div class="texto">
        <h1>Por que a <i>360</i> ?</h1>
    </div>
    <div id="content">
        <ul class="cont">
            <li>
                <a href="">
                    <img src="https://www.eusemfronteiras.com.br/wp-content/uploads/2019/07/46651047_l.jpg"
                        class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />
                    <span>A  <i class="destaque">empresa 360</i>, te auxilia <br> a melhorar</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <img src="https://i1.wp.com/rumodafe.com.br/wp-content/uploads/2019/01/frases-religiosas-de-amizade.jpg?fit=1400%2C933&ssl=1"
                        class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />
                    <span>Vamos te <i class="destaque">ajudar</i>, a <br>conseguir oque precisa!</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmow8aI9hffp8Tgz4MxM1rdD78HwVHTI7enFOxIu23DR3EcF0U4xcr_J9Hb8tNsL2DuzI&usqp=CAU"
                        class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />
                    <span>Construimos o seu <i class="destaque">futuro</i> no  <br>presente</span>
                </a>
            </li>

            <li>
                <a href="#">
                    <img src="https://esbrasil.com.br/wp-content/uploads/2017/11/ainda-sobre-amizade.jpg"
                        class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />
                    <span>Podemos fazer  <i class="destaque">melhor</i> <br>do que sua atual empresa!</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://esbrasil.com.br/wp-content/uploads/2017/11/ainda-sobre-amizade.jpg"
                        class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />
                    <span>Podemos fazer  <i class="destaque">melhor</i> <br>do que sua atual empresa!</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="https://esbrasil.com.br/wp-content/uploads/2017/11/ainda-sobre-amizade.jpg"
                        class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />
                    <span>Podemos fazer  <i class="destaque">melhor</i> <br>do que sua atual empresa!</span>
                </a>
            </li>


        </ul>
    </div>
</template>

<script>
export default {
    name: 'DashboardVue'
}

</script>
<style scoped>

h1 {
    text-align: center;
}
*{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

}
i {
    text-decoration: none;
    color:#0D6EFD;
}
img {
    flex-direction: column;
    height: 200px;
    background: center;
    border-radius: 10px;

}
.texto{
    padding: 50px 0px 50px 0px;
}

.texto :hover {
    opacity: 1;
}

body {
    font: normal 14px Optima, Arial, sans-serif;

    
}

/* Fonte normal tamanho 14 tenho Tahoma como fonte primaria */
a {
    text-decoration: none;
    
}

/* Links sem efeitos */

/* Carecteristicas da div. */
#content {
    padding-bottom: 100px;
    border-radius: 10px;
}

/* Carecteristicas de tudo que esta dentro da Div e com Link */
#content ul li a {
    list-style: none;
    display: block;
    position: relative;
    font-size: 12px;
    margin: auto;
    padding: 10px;
    
    display: flex;

}

/* Efeitos do texto */
#content ul li a span {
    display: block;
    padding: 10px;
    color: white;
    position: absolute;
    bottom: 0;
    -webkit-border-radius: 0 0 5px 5px;
    -moz-border-radius: 0 0 5px 5px;
    border-radius: 0 0 5px 5px;
    opacity: 0;
    -moz-opacity: 0;
    filter: alpha(opacity=0);
    font-size: 25px;
}

/* Efeitos do texto quando o mouse estive em cima da Imagem */
#content ul li:hover span {
    border: 1px solid f00;
    opacity: 1;
    -moz-opacity: 1;
    filter: alpha(opacity=100);
}




#content ul li a span {
    /* Espaço da mensagem que ira aparecer */
    padding-bottom: 20px;
    padding-left: 20px;
}

ul {
    list-style: none;
}

html, body, ul {     
  position:relative; 
  margin:0;           
  padding:0;
  width:100%;         
  height:100%; 
}


.cont li {
  display:block;
  list-style-type: none;    
  margin:0; 
       
  box-sizing: border-box; 
  height:25%; 
}

.cont li:nth-child(odd) { 
  clear:both; 
  float:left;                             

}
</style>



