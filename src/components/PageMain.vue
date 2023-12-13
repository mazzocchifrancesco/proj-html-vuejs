<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import MainShowcase from "./MainShowcase.vue";
import MainLinks from "./MainLinks.vue";
import MainCarousel from "./MainCarousel.vue";
import VideoPlayer from "./VideoPlayer.vue";
import MainTags from "./MainTags.vue";





export default {
    name: "PageMain",
    data() {
        return {
            store
        };
    },
    methods: {

    },
    mounted() {
        register(this); //per debuggare il componente da console
    },
    components: {
        MainShowcase,
        MainLinks,
        MainCarousel,
        VideoPlayer,
        MainTags


    }
}
</script>

<template>
    <main>
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
        <div class="container ">
            <MainCarousel />
        </div>

        <!-- youtube player -->

        <VideoPlayer />

        <!-- tag Square -->
        <MainTags />
    </main>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

#mainAdv {
    background-color: $themeColorLightgrey;
}

main {
    background-color: $themeColorLightgrey ;
}

// ...qui eventuale SCSS di AppComponent</style>