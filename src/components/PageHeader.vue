<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import Slider from "./Slider.vue"
import Navbar from "./Navbar.vue"


export default {
    name: "PageHeader",
    components: {
        Slider,
        Navbar
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

            <!-- slider testo news  -->
            <Slider :news="this.news" />

            <!-- contenitore icone -->
            <div id="iconContainer" class="d-flex align-items-center gap-2">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-youtube" />
            </div>
        </div>
    </div>
    <!-- cotnenitore logo + banner  -->
    <div class="container d-flex py-2 justify-content-between align-items-center">
        <img id="logo" src="../assets/imgs/assets/anime-logo-300x89.webp" alt="">
        <img src="../assets/imgs/assets/header-banner.webp" class="rounded" alt="">
    </div>

    <!-- navbar links  -->
    <Navbar />

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

#iconContainer * {
    color: $themeColorAccent;
    background-color: white;
    border-radius: 50%;
    padding: 0.5rem;
    aspect-ratio: 1;
}

#carosello {
    background-color: $themeColorLightgrey;
    height: 10rem;
}

#logo {
    height: 4rem;
}
</style>