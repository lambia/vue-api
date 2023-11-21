const { createApp } = Vue

createApp({
    data() {
        return {
            user: "Utente Anonimo",
            userNumber: "",
            emails: [],
            apiUrl: "https://flynn.boolean.careers/exercises/api/"
        }
    },
    methods: {
        generaMail() {
            for (let i = 0; i < 10; i++) {
                
                axios.get(this.apiUrl + ` /random/mail?nocache=${i}` ).then(resp => {
                    this.emails.push( resp.data.response );
                });
                
            }
        },
        generaNumero() {
            axios.get(this.apiUrl + '/random/int').then(resp => {
                this.userNumber = resp.data.response;
            });
        },
        generaNome() {
            
            // let self = this; //da usare con axios.get(...).then(function(resp){ ... })

            axios.get(this.apiUrl + '/random/name').then(resp => {
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
    },
    mounted() {
        this.generaNome();
        this.generaMail();

    }
}).mount('#app')