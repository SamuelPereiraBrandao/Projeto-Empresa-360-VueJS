<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa <i>360</i> </a>

                <ul class="navbar-nav links">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ path: '/', hash: '#secao_1' }">E360 </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ path: '/', hash: '#secao_2' }">Localizações</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{path: '/', hash: '#secao_3'}">Sobre</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login"><i>Acessar</i> </router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="destaque">
                        <h4 class="text-primary text-center">Descubra as vantagens em utilizar o Empresa 360 para
                            gerenciar seus negócios!</h4>
                    </div>
                </div>
                <div class="col">
                    <p class="text-center">Inscreva-se e veja a nossa demonstração</p>
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Nome">
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="E-mail">
                            </div>
                            <button class="btn btn-outline-primary">Me inscrever</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-5 p-5 bg-light">
                <div class="col">
                    <h3 id="secao_1" class="mb-3">Empresa <i>360</i>  (E<i>360</i> )</h3>
                    <p>Nossa empresa foi criado no final de 2012, com o intuito de promover ações beneficiarias para pessoas que estavam em situações ruins, com nossa enorme evolução, conseguimos abranger os clientes e atender todos os tipos, com isso aumentamos nossa produtividade e com isso podemos ajudar muito mais pessoas!</p>
                </div>
            </div>

            <div class="row mt-5 p-5 ">
                
                    <h3 id="secao_2" class="text-center mb-3">Nossas localizações</h3>
                    <div class="col mt-3">
                    <h5>São Paulo</h5>
                    <p>Rua alexandre borges, 354</p>
                    <p>Rua Almadraladres, 40</p>
                    <p>Avenida Jose Abrel, 1337</p>
                    <p>Avenida Paulista, 2375</p>
                    </div>
                    <div class="col mt-3">   
                    <h5>Rio de Janeiro</h5>
                    <p>São Augusto, 456</p>
                    <p>Angra dos reis, 35</p>
                    </div>
                 
                
            </div>

            <div class="row mt-5 p-5 bg-light">
                <div class="col">
                    <h3 id="secao_3" class="mb-3">Mais sobre a empresa  <i>360</i></h3>
                    <p>Nos trabalhamos com nosso aplicativo, com ele você pode fazer milhares de coisas, desde um recarregameto de bilhete, até o financiamento de um carro! <br>
                    O que está esperando? venha agora mesmo conhecer todos os beneficios que estamos te oferecendo! <br>
                    De a volta completa, seja <i>360</i>! <br>
                    <router-link class="nav-link mb-3 mt-3" to="/login"><button class="btn btn-outline-primary">Acessar</button></router-link></p>

                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="row bg-secondary">
                <div class="col">
                    <p>Rodapé</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SiteVue'
}
</script>

<style scoped>
.menu-superior {
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}

.destaque {
    padding: 60px 15px;
}

.links {
    flex-direction: row;
}

.links a {
    margin-right: 20px;
}
i{
    text-decoration: none;
    color:#0D6EFD;
}
</style>