<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import CarouselBar from "./CarouselBar.vue"

export default {
    name: "PageHeader",
    components: {
        CarouselBar
    },
    data() {
        return {
            store,
            news: [
                {
                    img: "healthy-foods-150x150.webp",
                    text: "the best healthy foods",
                    time: "17.39"
                },
                {
                    img: "winter-150x150.webp",
                    text: "the best winter outfits",
                    time: "18.25"
                },
                {
                    img: "rice-ball-150x150.webp",
                    text: "hygenic recipe to prepare rice",
                    time: "20.30"
                },
                {
                    img: "meal-time-150x150.webp",
                    text: "the best time to have a meal",
                    time: "22.18"
                },
            ]

        }
    },
    methods: {
    },
    mounted() {
        register(this); //per debuggare il componente da console
    }
}
</script>

<template>
    <!-- barra rossa -->
    <div id="newsBar">
        <!-- container elementi -->
        <div class="container d-flex">
            <div id="newsUpdate" class="text-uppercase bg-secondary fw-bold text-white px-3 d-flex align-items-center">news
                updates</div>

            <!-- carosello testo news  -->
            <CarouselBar :news="this.news" />

            <div>icon container</div>
        </div>
    </div>
    <!-- cotnenitore logo + banner  -->
    <div class="container d-flex py-2 justify-content-between">
        <img src="../assets/imgs/assets/anime-logo-300x89.webp" alt="">
        <img src="../assets/imgs/assets/header-banner.webp" class="rounded" alt="">
    </div>
    <!-- navbar links  -->
    <nav class="container">
        LINKSSS LINKSSS LINKSSS LINKSSS LINKSSS LINKSSS
    </nav>
    <!-- carosello header  -->
    <div id="carosello">
        CAROSELLONE
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

#newsBar {
    background-color: $themeColorAccent;
}

#newsUpdate {}

#mealHeader {
    height: 3rem;
}

#carosello {
    background-color: $themeColorLightgrey;
    height: 10rem;
}
</style>