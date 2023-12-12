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
            <CarouselBar />

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