<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "CarouselBar",
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
        next(array) {
            if (this.counter < array.length - 1) { //-1 perchè l'incremento ovviamente avviene dopo il check
                this.counter++
                console.log(this.counter);

            }
            else {
                this.counter = 0;
                console.log(this.counter);

            };
        },
        prev(array) {
            if (this.counter > 0) {
                this.counter--
                console.log(this.counter);

            }
            else {
                this.counter = array.length;
                console.log(this.counter);

            };
        },
        getImage(img) {
            return new URL(`../assets/imgs/assets/${img}`, import.meta.url).href
        },
    },
    mounted() {
        register(this); //per debuggare il componente da console
    }
}
</script>

<template>
    <div id="contenitore" class="d-flex">
        <img :src="getImage(this.news[counter].img)" alt="">
        <p>{{ this.news[counter].time }}</p>
        <p>{{ this.news[counter].text }}</p>
    </div>
    <div>
        <div class="btn" @click="next(this.news)">avanti</div>
        <div class="btn" @click="next(this.news)">indietro</div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

img {
    width: 3rem;
    aspect-ratio: 1;
}

#contenitore {
    width: 40rem;
}

// ...qui eventuale SCSS di AppComponent
</style>