<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "MainShowcase",
    data() {
        return {
            store,

        }
    },
    methods: {
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
    <!-- TODO posso popolarlo con un v-for per le prime X posizioni? -->
    <!-- quale logica popola con gli elementi questa vetrina -->
    <div id="" class="container">
        <div class="row">
            <!-- prima colonna -->
            <div class="col-3 d-flex flex-column justify-content-between">
                <div class="card">
                    <img :src="getImage(store.articles[0].img)" alt="">
                </div>
                <div class="card">
                    <img :src="getImage(store.articles[1].img)" alt="">
                </div>
            </div>
            <!-- seconda colonna  -->
            <div class="col-6 card">
                <img :src="getImage(store.articles[2].img)" alt="">
            </div>
            <!-- terza colonna  -->
            <div class="col-3 d-flex flex-column justify-content-between">
                <div class="card">
                    <img :src="getImage(store.articles[3].img)" alt="">
                </div>
                <div class="card">
                    <img :src="getImage(store.articles[4].img)" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

img {
    border-radius: 5px;
}

.card {
    border-radius: 5px;
    background-color: $themeColorLightgrey;
    // FIX magheggio per nascondere che l'immagine non riepmpie il div 
    border-color: $themeColorLightgrey;

}
</style>