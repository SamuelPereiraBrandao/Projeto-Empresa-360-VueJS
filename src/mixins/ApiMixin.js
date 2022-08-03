export default {
    data: () => ({
        dados: {}
    }),
    methods: {
        getDadosApi(url) {
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    this.dados = response
                })
        }
    },
}