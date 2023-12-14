<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "HeaderSlider",
    props: {
        news: Array,
    },
    data() {
        return {
            store,
            counter: 0,

        }
    },
    methods: {
        //manda avanti le slides / TODO blocca intervallo autoplay e riparte dopo 5 sec
        next(array) {
            if (this.counter < array.length - 1) { //-1 perchè l'incremento ovviamente avviene dopo il check
                this.counter++
            }
            else {
                this.counter = 0;
            };

        },
        //manda indietro le slides
        prev(array) {
            if (this.counter > 0) {
                this.counter--

            }
            else {
                this.counter = array.length - 1;

            };

        },
        //recupera dinamicamente le immagini
        getImage(img) {
            return new URL(`../assets/imgs/assets/${img}`, import.meta.url).href
        },
        //TODO rendere + generico questo passaggio
        autoplay() {
            this.next(this.news)
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console

        // autoplay slider / TODO check bug stress test
        const intervallo = setInterval(this.autoplay, 5000);

    }
}
</script>

<template>
    <div class="d-flex text-white align-items-center gap-2 flex-fill fw-semibold">
        <img :src="getImage(this.news[counter].img)" alt="">
        <div class="">{{ this.news[counter].time }}</div>
        <div class="text-uppercase news ">{{ this.news[counter].text }}</div>
    </div>
    <div class="d-flex align-items-center me-5">
        <font-awesome-icon id="left" class="btn text-white" @click="prev(this.news)" :icon="['fas', 'angle-left']" />
        <font-awesome-icon id="right" class="btn text-white" @click="next(this.news)" :icon="['fas', 'angle-right']" />
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

img {
    width: 3rem;
    aspect-ratio: 1;
}

.btn:hover {
    color: $themeColorDark !important;
    background-color: $themeColorAccent !important;
}

.news:hover {
    color: $themeColorDark;
}
</style>