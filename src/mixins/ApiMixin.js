export default {
    data: () => ({
        dados: {}
    }),
    methods: {
        getDadosApi(url, queryParams = {}) {

            Object.keys(queryParams).forEach(chave => { //removendo itens vazios
                if (queryParams[chave] == '') {
                    delete queryParams[chave]
                }
            })

            const urlQueryParams = new URLSearchParams(queryParams).toString()

            const urlcompleta = urlQueryParams ? `${url}& ${urlQueryParams}` : url


                fetch(urlcompleta)
                    .then(response => response.json())
                    .then(response => {
                        this.dados = response
                    })
        }
    },
}