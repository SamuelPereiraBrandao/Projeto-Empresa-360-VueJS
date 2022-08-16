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
    <h1>safsafsafsafa</h1>
    </div>
    <div id="content">
                    <ul>
                <li >
                    <a href="#">
                        <img src="https://www.eusemfronteiras.com.br/wp-content/uploads/2019/07/46651047_l.jpg" class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />                        
                        <span>Mensagem que deve aparece com o mouse em cima.</span>
                    </a>
                </li>
                
                                <li >
                    <a href="#">
                        <img src="https://www.eusemfronteiras.com.br/wp-content/uploads/2019/07/46651047_l.jpg" class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />                        
                        <span>Mensagem que deve aparece com o mouse em cima.</span>
                    </a>
                </li>
                
                                <li >
                    <a href="#">
                        <img src="https://www.eusemfronteiras.com.br/wp-content/uploads/2019/07/46651047_l.jpg" class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />                        
                        <span>Mensagem que deve aparece com o mouse em cima.</span>
                    </a>
                </li>
                
                                <li >
                    <a href="#">
                        <img src="https://www.eusemfronteiras.com.br/wp-content/uploads/2019/07/46651047_l.jpg" class="attachment-thumbnail wp-post-image" alt="Imagem" title="" />                        
                        <span>Mensagem que deve aparece com o mouse em cima.</span>
                    </a>
                </li>
                
                
                </ul>
                </div>
</template>

<script>
export default {
    name:'DashboardVue'
}

</script>
<style>

img {
   width: 100%;
   height: 200px;
   background: center fixed;
   border-radius: 10px;

}
img:hover{
    filter: blur(2px);
}
.texto {
      background-color: rgba(0,0,0,0.5);
      color:#fff;
      top: 680px;
      margin-right: 20%;
      width: 100%;
      border-radius: 10px;
      opacity: 0;
}
.texto :hover {
    opacity: 1;
}
body{font:normal 14px Tahoma, Arial, sans-serif;color:#333;background:#e5e5e5} /* Fonte normal tamanho 14 tenho Tahoma como fonte primaria */
a{text-decoration:none;} /* Links sem efeitos */

/* Carecteristicas da div. */
#content {
    
border: 1px solid rgb(0, 0, 0);
border-radius: 10px;
width: 100%;
height: 100%;

}
/* Carecteristicas de tudo que esta dentro da Div e com Link */
#content ul li a{
    list-style: none;
display:block;
position:relative;
font-size:12px;
margin: auto;
padding: 10px;

}

/* Efeitos do texto */
#content ul li a span{
    
display:block;
padding:10px;
color:#000000;
position:absolute;
bottom:0;

-webkit-border-radius:0 0 5px 5px;
-moz-border-radius:0 0 5px 5px;
border-radius:0 0 5px 5px;
opacity:0;
-moz-opacity:0;
filter:alpha(opacity=0);
font-size: 25px;
}

/* Efeitos do texto quando o mouse estive em cima da Imagem */ 
#content ul li:hover span{
border: 1px solid f00;
opacity:1;
-moz-opacity:1;
filter:alpha(opacity=100);
}



#content ul li a img{ /* Tamanho da imagem na DIV */
width:100%;
height:280px;

}

#content ul li a span{ /* Espaço da mensagem que ira aparecer */
width:300px;
padding-bottom: 20px;
padding-left: 20px;
}
ul {
    list-style: none;
}


</style>