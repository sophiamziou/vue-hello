const {
    createApp
} = Vue;

createApp({
    data(){
        return{
            message: 'Benvenuto in Vuejs!',
            image: './img/logovue.png'
        }
    }
}).mount('#text')

