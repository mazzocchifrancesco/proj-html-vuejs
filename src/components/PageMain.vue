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
            store,
            video: [{
                title: "Sword of the Stranger fight scene",
                link: "https://www.youtube.com/embed/ebHd_3QJNBA?si=jmGy61cIS8Ut-N1U",
                img: "sword.jpg"
            },
            {
                title: "Non picchia solo il sole | Il meglio di Escanor (Spoiler!) | I Sette Peccati Capitali",
                link: "https://www.youtube.com/embed/zlwQERpksnw",
                img: "sun.jpg"
            },
            {
                title: "Top 10 Vinland Saga moments",
                link: "https://www.youtube.com/embed/itQnUDMMhaU",
                img: "10vinland.jpg"
            },
            {
                title: "Everytime Sukuna Appears",
                link: "https://www.youtube.com/embed/IrU2dklT11s",
                img: "sakuna.jpg"
            },
            {
                title: "Wizard King (Julius) vs Licht (Patri) Full Fight [English Sub]",
                link: "https://www.youtube.com/embed/H5qupR6YQpQ",
                img: "king.jpg"
            },
            {
                title: "Vinland Saga | SHATTERED",
                link: "https://www.youtube.com/embed/ICt1jYfucec",
                img: "vinland.jpg"
            },
            {
                title: "Konan arranges 600 billion explosive charms to defeat Uchiha Madara",
                link: "https://www.youtube.com/embed/CkC5CtabT1Y",
                img: "konan.jpg"
            }
            ]

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

        <VideoPlayer :video="this.video" />

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
    background-color: $themeColorLight ;
}

// ...qui eventuale SCSS di AppComponent
</style>