<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import MainShowcase from "./MainShowcase.vue";
import MainLinks from "./MainLinks.vue";
import MainCarousel from "./MainCarousel.vue";



export default {
    name: "PageMain",
    data() {
        return {
            store
        };
    },
    methods: {},
    mounted() {
        register(this); //per debuggare il componente da console
    },
    components: {
        MainShowcase,
        MainLinks,
        MainCarousel

    }
}
</script>

<template>
    <!-- prima sezione links immagine -->

    <MainShowcase />

    <!-- seconda sezione links immagine con selettori -->
    <MainLinks />

    <!-- ADV  -->
    <div id="mainAdv" class="py-4">
        <div class="container">
            <img src="../assets/imgs/assets/page-banner-1-768x71.webp" class="w-100 rounded" alt="">
        </div>
    </div>

    <!-- featured post -->
    <div id="featPost" class="container ">
        <MainCarousel />


    </div>

    <!-- youtube player -->

    <div id="ytPlayer" class="container"></div>

    <!-- tag Square -->
    <div id="tagSquare" class="d-flex p-2 justify-content-between">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

#mainAdv {
    background-color: $themeColorLightgrey;
}

#ytPlayer {
    height: 20rem;
    background-color: bisque;
}

#tagSquare div {
    width: 16%;
    aspect-ratio: 1;
    background-color: aqua;
}

// ...qui eventuale SCSS di AppComponent
</style>