const { createApp } = Vue

createApp({
    data() {
        return {
            user: "Utente Anonimo",
            userNumber: ""
        }
    },
    methods: {
        generaNumero() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/int').then(resp => {
                this.userNumber = resp.data.response;
            });
        }
    },
    mounted() {

        axios.get('https://flynn.boolean.careers/exercises/api/random/name').then(resp => {
            // resp.data = dati ottenuti in risposta dal server
            // resp.status = codice HTTP di risposta (es. 200)
            // resp.statusText = codice HTTP di risposta (es. OK)
            console.log("Ricevuto: ", resp.data);

            //se la risposta è ok
            if(resp.data.success) {
                this.user = resp.data.response;
            }
        });
        
    }
}).mount('#app')