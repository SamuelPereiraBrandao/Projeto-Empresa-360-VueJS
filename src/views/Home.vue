<template>

    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <div class="menucentral">
                    <i @click="menuHome()">
                        <router-link class="navbar-brand" to="/home">Empresa <span style="color:#0d6efd">360</span>
                        </router-link>
                    </i>
                    <ul class="navbar-nav">
                        <li class="nav-item">

                            <i @click="menuHome()"> <a class="nav-link" href="#">Sair</a></i>
                        </li>
                    </ul>


                </div>
            </div>
        </nav>

        <div class="m-4 ocultomenu">

            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <a @click="meuMenuToggle()">
                            <div class="navbar-nav">

                                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                                    to="/home/dashboard"><i class="bi bi-speedometer2"></i> Dashboard</router-link>
                                <router-link class="list-group-item list-group-item-action" to="/home/vendas"
                                    exact-active-class="ativo"><i class="bi bi-cart"></i> Vendas</router-link>
                                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                                    to="/home/vendas/leads"><i class="bi bi-caret-right"></i> Leads</router-link>
                                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                                    to="/home/vendas/contratos">
                                    <i class="bi bi-caret-right"></i> Contratos
                                </router-link>
                                <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                                    to="/home/servicos"><i class="bi bi-card-checklist"></i> Serviços</router-link>



                            </div>
                        </a>

                    </div>
                </div>
            </nav>
        </div>
        <div style="border:solid 1px"> </div>
        <div class="d-flex">
            <div>
                <div class="list-group menu-esquerda oculto">
                    <i @click="meuMenuToggle()">
                        <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                            to="/home/dashboard"><i class="bi bi-speedometer2"></i> Dashboard</router-link>

                        <router-link class="list-group-item list-group-item-action" to="/home/vendas"
                            exact-active-class="ativo"><i class="bi bi-cart"></i> Vendas</router-link>
                        <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                            to="/home/vendas/leads"><i class="bi bi-caret-right"></i> Leads</router-link>
                        <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                            to="/home/vendas/contratos"><i class="bi bi-caret-right"></i> Contratos</router-link>
                        <router-link exact-active-class="ativo" class="list-group-item list-group-item-action"
                            to="/home/servicos"><i class="bi bi-card-checklist"></i> Serviços</router-link>
                    </i>

                </div>

            </div>




            <div class="w-100">
                <nav aria-label="breadcrumb" class="pt-1 ps-3">
                    <ol class="breadcrumb">
                        <div class="rodape">
                            <div class="div1">
                                <a href="https://github.com/SamuelPereiraBrandao"><i class="bi bi-github"></i>
                                    GitHub </a>
                                ||
                                <a href="https://www.linkedin.com/in/samuelpereirabrandao/"><i
                                        class="bi bi-linkedin"></i>
                                    Linkedin</a>
                            </div>

                            <router-view name="rodape"></router-view>

                        </div>
                        <li class="breadcrumb-item active" aria-current="page"></li>
                    </ol>

                </nav>


                <div class="container-fluid">
                    <router-view></router-view>
                    <div id="divAll2">

                        <div class="container py-5 all" id="divAll">
                            <!-- For Demo Purpose -->

                            <header class="text-center">

                                <h1 class="display-4 font-weight-bold">Empresa <span style="color:#0D6EFD;">360</span>
                                </h1>
                                <p class="font-italic text-muted mb-0">A melhor empresa, segundo estudos em 2022.</p>
                                <p class="font-italic">Acesse mais informações:
                                    <a href="https://github.com/samuelpereirabrandao" class="text-muted hoverblue">
                                        <span>360Studio</span></a>
                                </p>
                            </header>

                            <div class="py-5">
                                <h3 class="font-weight-bold mb-0"><span style="color:#0D6EFD;">360</span> Studio</h3>
                                <p class="font-italic text-muted mb-4">Nesta modalidade você consegue acessar todos os
                                    seus dados em um
                                    unico aplicativo, conseguindo gerenciar seus dados a qualquer momento e em qualquer
                                    lugar! </p>
                              
                            




                                <div class="planos">

                                    <br>
                                    <button type="button" class="btn btn-outline-primary ml-1">Plano A</button>
                                    <button type="button" class="btn btn-outline-dark ml-1">Plano B</button>
                                    <button type="button" class="btn btn-outline-primary ml-1">Plano C</button>
                                </div>  
                                <p class="planos">Beneficios desse plano:</p>


                                <div class="row">
                                    <!-- DEMO 1 Item-->
                                    <div class="col-lg-6 mb-3 mb-lg-0">
                                        <div class="hover hover-1 text-white rounded"><img
                                                src="https://img.freepik.com/fotos-gratis/homem-de-negocios-usando-aplicativos-de-celular-enviando-mensagens-de-texto-no-azul_496169-2223.jpg?w=996&t=st=1660829975~exp=1660830575~hmac=d2482145ebe95f8a9d83977283bcd1d6804e6a1e781431ca883c0919502cab3d"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-1-content px-5 py-4">
                                                <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span
                                                        class="font-weight-light">360 </span>Studio</h3>
                                                <p class="hover-1-description font-weight-light mb-0 oculto">O melhor
                                                    aplicativo para gerenciamento
                                                    de dados.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- DEMO 1 Item-->
                                    <div class="col-lg-6">
                                        <div class="hover hover-1 text-white rounded"><img
                                                src="https://img.freepik.com/fotos-gratis/vendas-bancarias-na-internet-empresario-africano-bem-sucedido-sentado-em-um-laptop-e-segurando-o-cartao-de-credito-na-mao-ate-o-empresario-fazer-pedidos-pela-internet_231208-701.jpg?w=996&t=st=1660829866~exp=1660830466~hmac=ca7b5aaba94af9e9db8858f28ea7b49efabfad96afb27a8720566bbd3fc3c576"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-1-content px-5 py-4">
                                                <h3 class="hover-1-title text-uppercase font-weight-bold mb-0"> <span
                                                        class="font-weight-light">Cartão </span>360</h3>
                                                <p class="ml hover-1-description font-weight-light mb-0 oculto">Com este
                                                    cartão você tem vários
                                                    beneficios que podem ser visualizados abaixo:</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- DEMO 2-->
                            <div class="py-5">
                                <h3 class="font-weight-bold mb-3">Alguns Beneficios</h3>
                                
                                <div class="planos">
                                    <button type="button" class="btn btn-outline-dark ml-1">Plano B</button>
                                    <button type="button" class="btn btn-outline-dark ml-1">Plano C</button>
                                </div>
                                <p class="planos">Beneficios desse plano:</p>
                                <div class="row">
                                    <!-- DEMO 2 Item-->
                                    <div class="col-lg-6 mb-3 mb-lg-0">
                                        <div class="hover hover-2 text-white rounded"><img
                                                src="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2016/01/28/riomaggiore.jpg"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-2-content px-5 py-4">
                                                <h3 class="hover-2-title text-uppercase font-weight-bold mb-0"> <span
                                                        class="font-weight-light">VIAGENS </span></h3>
                                                <p class="ml hover-2-description text-uppercase mb-0 oculto">com nosso
                                                    cartão você pode acumular
                                                    pontos e trocar por <br> viagens para onde você quiser!</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- DEMO 2 Item-->
                                    <div class="col-lg-6">
                                        <div class="hover hover-2 text-white rounded"><img
                                                src="https://wallpaperaccess.com/full/6688071.jpg" alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-2-content px-5 py-4">
                                                <h3 class="hover-2-title text-uppercase font-weight-bold mb-0"> <span
                                                        class="font-weight-light"> hoteis</span></h3>
                                                <p class="oculto ml hover-2-description text-uppercase mb-0">E nessas
                                                    viagens pode se utilizar os
                                                    pontos para alugar qualquer hotel que deseja ficar!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- DEMO 3 -->
                            <div class="py-5">
                                <h3 class="font-weight-bold mb-3">Mais Beneficios</h3>

                                <div class="row">
                                    <!-- DEMO 3 Item-->
                                    <div class="col-lg-6 mb-3 mb-lg-0">
                                        <div class="hover hover-3 text-white rounded"><img
                                                src="https://img.freepik.com/fotos-gratis/jovem-empresaria-asiatica-contando-dinheiro-e-sorrindo-para-a-camera-sobre-fundo-amarelo_574295-5967.jpg?w=2000"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-3-content px-5 py-4">
                                                <h3 class="hover-3-title text-uppercase font-weight-bold mb-1"><span
                                                        class="font-weight-light">Acrescimos</span></h3>
                                                <br>
                                                <p class="hover-3-description small text-uppercase mb-0 oculto">O
                                                    acrescimo foi o nome dado a esse
                                                    beneficio, como funciona? <br> Então o acrescimo é nada mais nada
                                                    menos quando você está
                                                    devendo um valor, e a data de vencimento está chegando, nós daremos
                                                    até 2 semanas para
                                                    você nos pagar, e só depois das 2 semmanas será cobrado tal valor!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- DEMO 3 Item    -->
                                    <div class="col-lg-6">
                                        <div class="hover hover-3 text-white rounded"><img
                                                src="https://www.impressaogerenciada.com.br/wp-content/uploads/2021/03/seguran%C3%A7a-da-informa%C3%A7%C3%A3o.jpg"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-3-content px-5 py-4">
                                                <h3 class="hover-3-title text-uppercase font-weight-bold mb-1"><span
                                                        class="font-weight-light"></span> <span class="">SESSÃO
                                                        UNICA</span></h3>
                                                <br>
                                                <p class="hover-3-description small text-uppercase mb-0 oculto">É um
                                                    modo de segurança que apenas 1
                                                    pessoa podera se manter conectada, ou seja qualquer outra pessoa
                                                    logada sera bloqueada,
                                                    e só entrando em contato com suporte e se autenticando como titular
                                                    da conta, será
                                                    desbloqueada!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="py-5">
                                <h3 class="font-weight-bold mb-3">Clientes (avaliações)</h3>
                                <div class="row">
                                    <!-- DEMO 4 Item-->
                                    <div class="col-lg-6 mb-3 mb-lg-0">
                                        <div class="hover hover-4 text-white rounded"><img
                                                src="https://img.freepik.com/fotos-premium/estilo-de-vida-emocoes-de-pessoas-e-conceito-de-beleza-perfil-de-alegre-mulher-asiatica-bonita-em-roupa-casual-vire-a-camera-principal-para-sorrir-amigavel-expressar-atitude-feliz-fundo-branco_1258-62156.jpg?w=2000"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-4-content">
                                                <h3 class="hover-4-title text-uppercase font-weight-bold mb-0"><span
                                                        class="font-weight-light">CAMILA FERREIRA NETO</span></h3>
                                                <p
                                                    class=" textoalinhado hover-4-description text-uppercase mb-0 small oculto">
                                                    Eu já tive vários
                                                    aplicativo, mas esse com toda certeza é o melhor! Totalmente seguro
                                                    e barato anualmente,
                                                    podem utilizar sem medo! <br> 18/08/2022</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- DEMO 4 Item            -->
                                    <div class="col-lg-6">
                                        <div class="hover hover-4 text-white rounded"><img
                                                src="https://www.infomoney.com.br/wp-content/uploads/2019/06/pessoa-feliz.jpg?fit=900%2C600&quality=50&strip=all"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-4-content">
                                                <h3 class="hover-4-title text-uppercase font-weight-bold mb-0"><span
                                                        class="font-weight-light">MATHEUS AGUIAR</span></h3>
                                                <p
                                                    class=" textoalinhado hover-4-description text-uppercase mb-0 small oculto">
                                                    Este aplicativo
                                                    mudou a minha forma de pensar, simplesmente intuitivo e muito maduro
                                                    em termos de não
                                                    conter nenhum tipo de erro <br> 18/05/2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- DEMO 5 -->
                            <div class="py-5">
                                <h3 class="font-weight-bold mb-0">SERVIÇOS</h3>
                                <p class="font-italic text-muted mb-2">Este são nossos serviços que você tem direito ao
                                    utilizar nosso
                                    aplicativo.</p>
                                    
                                <div class="planos">
                                    <button type="button" class="btn btn-outline-primary ml-1">Plano C</button>
                                </div><p class="planos">Beneficios desse plano:</p> 
                                <div class="row">
                                    <!-- DEMO 5 Item-->
                                    <div class="col-lg-6 mb-3 mb-lg-0">
                                        <div class="hover hover-5 text-white rounded"><img
                                                src="https://www.smartia.com.br/blog/wp-content/uploads/2019/03/funciona-seguro-vida.jpg"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-5-content">
                                                <h3 class="hover-5-title text-uppercase font-weight-light mb-0">SEGURO
                                                    <strong class="font-weight-bold text-white"> </strong><span>
                                                        VIDA</span></h3>

                                            </div>
                                        </div>
                                        <div class="margin1">
                                            <p>O seguro de vida é um contrato entre um titular de apólice de seguro e
                                                uma seguradora ou
                                                seguradora, em que a seguradora promete pagar a um beneficiário
                                                designado uma quantia em
                                                dinheiro em caso de morte de um segurado.</p>
                                        </div>

                                    </div>
                                    <div class="col-lg-6">
                                        <!-- DEMO 5 Item-->
                                        <div class="hover hover-5 text-white rounded"><img
                                                src="https://www.smartia.com.br/blog/wp-content/uploads/2018/05/7-opcoes-de-empresas-de-seguro-residencial-para-voce-conhecer.jpg"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-5-content">
                                                <h3 class="hover-5-title text-uppercase font-weight-light mb-0">Seguro
                                                    <strong class="font-weight-bold text-white">
                                                    </strong><span>RESIDENCIAL</span></h3>

                                            </div>
                                        </div>
                                        <div class="margin1">
                                            <p>O seguro de vida é um contrato entre um titular de apólice de seguro e
                                                uma seguradora ou
                                                seguradora, em que a seguradora promete pagar a um beneficiário
                                                designado uma quantia em
                                                dinheiro em caso de morte de um segurado.</p>
                                        </div>
                                    </div>
                        
                                    
                                    <div  class="col-lg-6">
                                        <!-- DEMO 5 Item-->
                                        <div class="hover hover-5 text-white rounded"><img
                                                src="https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_mulher-carro-miniatura-sinalizand-protecao3.jpg?quality=70&strip=info&w=960"
                                                alt="">
                                            <div class="hover-overlay"></div>
                                            <div class="hover-5-content">
                                                <h3 class="hover-5-title text-uppercase font-weight-light mb-0">Seguro
                                                    <strong class="font-weight-bold text-white">
                                                    </strong><span>AUTO</span></h3>

                                            </div>
                                        </div>
                                        
                                        <div class="margin1 sumir" >
                                            <p>O seguro de carro, também comumente chamado de seguro automotivo, é um
                                                contrato que firma a obrigação de uma empresa seguradora em cobrir as
                                                necessidades do proprietário de um veículo diante dos prejuízos que
                                                possam vir a ocorrer no dia a dia. A cobertura destes prejuízos são
                                                especificadas nas cláusulas do contrato.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>

        </div>

    </div>

</template>
<script>
export default {
    name: "HomeVue",
    methods: {
        meuMenuToggle() {
            var x = document.getElementById("divAll");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "none";
            }
        },
        menuHome() {
            var x = document.getElementById("divAll");
            if (x.style.display === "none") {
                x.style.display = "block";
            }
        },
        

    }
}

</script>

<style scoped>
.menu-superior {
    border-bottom: solid 1px #ccc;
}

.menu-esquerda {
    border-right: solid 1px #ccc;
    width: 250px;
}

.list-group-item {
    border-top: none;
    border-right: none;
}

.ativo {
    color: white;
    background-color: #0d6efd;
    padding: 10px;
    border-color: #0d6efd;
    border-radius: 5px;

}

.rodape {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #0D6EFD;
    border-radius: 10px 10px 0px 0px;
    z-index: 100;

}

.div1 {
    color: white;
    margin: 10px;
    border-radius: 10px;
    z-index: 7;
}

.div1 a {
    margin-left: 10px;
    margin-right: 10px;
    color: white;
    text-decoration: none;
}

.div1 a:hover {
    transition: 0.35s ease-in-out;
    color: #000000;
    filter: blur(0.5px);
}

.ocultomenu {
    display: none;
}

@media (max-width:625px) {
    .ocultomenu {
        display: block;
        color: #000000;
        font-size: 30px;
    }

    .list-group-item {
        margin: 10px;
    }

    .ocultomenu i {
        display: none;

    }

    .menucentral {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;

    }

}

.planos {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}
.ml-1{
    margin-left: 5px;
    margin-right: 5px;
}
</style>