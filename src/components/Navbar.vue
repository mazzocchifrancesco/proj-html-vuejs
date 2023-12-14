
<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "PageHeader",
    components: {
    },

    data() {

        return {
            store,
            activeBanner: false,
            selectedArray: [],
            timer: false
        }
    },
    methods: {
        getImage(img) {
            return new URL(`../assets/imgs/assets/${img}`, import.meta.url).href
        },
        // crea un array con oggetti con tag della selezione
        getTagSelected(tag) {

            this.selectedArray = [];

            store.articles.forEach((element, i) => {
                if (element.tags.includes(tag)) {
                    this.selectedArray.push(element);
                }
            });
            this.activeBanner = true
        },

    },
    mounted() {
        register(this); //per debuggare il componente da console
    }
}
</script>
<template>
    <!-- navbar  -->
    <nav class="position-relative">
        <div class="container d-flex justify-content-between align-items-center py-2">
            <!-- bottone per offcanvas  -->
            <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"> <font-awesome-icon icon="fa-solid fa-bars" class="hover"
                    size='xl' />
            </button>
            <!-- lista bottoni link nav  -->
            <div class="d-flex gap-5 text-uppercase">
                <div class="hover selected">
                    <font-awesome-icon icon="fa-solid fa-home" />
                    home
                </div>
                <div class="hover">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    about us
                </div>
                <!-- TODO il banner rimane aperto se ci vado sopra -->
                <div class="hover" @mouseenter="getTagSelected('lifestyle')" @mouseleave="this.activeBanner = false;">
                    <font-awesome-icon icon="fa-solid fa-briefcase" />
                    lifestyle
                    <font-awesome-icon icon="fa-solid fa-angle-down" />

                </div>
                <div class="hover" @mouseenter="getTagSelected('stories')" @mouseleave="this.activeBanner = false;">
                    <font-awesome-icon icon="fa-solid fa-book-open-reader" />
                    stories
                    <font-awesome-icon icon="fa-solid fa-angle-down" />

                </div>
                <div class="hover">
                    <font-awesome-icon icon="fa-solid fa-book" />
                    pages
                </div>
                <div class="hover">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                    contact us
                </div>
            </div>
            <!-- bottone searchbar fullscreen -->
            <font-awesome-icon class="hover" icon="fa-solid fa-magnifying-glass" size='xl' />
        </div>

        <!-- offcanvas -->
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-center align-items-center ">
                <img id="logo" src="../assets/imgs/assets/anime-logo-300x89.webp" alt="">
                <p class="px-3 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis alias minus culpa
                    aliquam maxime reiciendis rerum nulla, dolores hic voluptas.</p>
                <div class="d-flex justify-content-between">
                    <img class="rounded" v-for="i in 3" :src="getImage(store.articles[i - 1].img)" alt="">
                </div>
                <!-- contenitore info contatti -->
                <div class="py-5 d-flex flex-column gap-2 fw-semibold">
                    <div class="infoLine">
                        <font-awesome-icon class="icon" icon="fa-solid fa-clock" />
                        <div>Sun - Sat : 9:00 AM - 18:00 PM</div>
                    </div>

                    <div class="infoLine">
                        <font-awesome-icon class="icon" icon="fa-solid fa-envelope" />
                        <div>contact@domain.com</div>
                    </div>
                    <div class="infoLine">
                        <font-awesome-icon class="icon" icon="fa-solid fa-phone" />
                        <div>(+82) 8123 456 789</div>
                    </div>
                </div>
                <!-- contenitore icone -->
                <div id="iconContainer" class="d-flex align-items-center gap-2 ">
                    <font-awesome-icon icon="fa-brands fa-facebook-f" />
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                    <font-awesome-icon icon="fa-brands fa-youtube" />
                </div>
            </div>
        </div>

        <!-- banner popup -->
        <div class="linkBanner" v-if="this.activeBanner" @mouseenter="this.activeBanner = true" @mouseleave="timeTrigger()">
            <div class="container d-flex justify-content-between py-3">
                <div v-for="i in 4" class="bg-white cardBox rounded">
                    <img :src="getImage(selectedArray[i - 1].img)" alt="" class="w-100 rounded">
                    <div class="text-center fw-semibold py-2">{{ selectedArray[i - 1].title }}</div>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

// banner popup
.linkBanner {
    width: 100%;
    background-color: $themeColorLightgrey;
    position: absolute;
    // TODO mettere altezza fissa navbar in variabile
    top: 57px;
    left: 0;
    z-index: 999;
}

.infoLine {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}



.icon {
    color: $themeColorAccent;
}

.cardBox {
    width: 23%;
}

nav {
    border: 1px solid $themeColorLightgrey;
    color: $themeColorDark;
}

.selected {
    color: $themeColorAccent
}

#logo {
    width: 60%;
}

img {
    width: 30%;
}

.offcanvas {
    width: 500px !important;
}

#iconContainer * {
    color: white;
    background-color: $themeColorAccent;
    border-radius: 50%;
    padding: 0.5rem;
    aspect-ratio: 1;
    cursor: pointer;
}

// HOVER style 
#iconContainer *:hover {
    background-color: $themeColorDark;
}

.hover:hover {
    color: $themeColorAccent;
}

.infoLine:hover>div {
    color: $themeColorAccent;
}

.infoLine:hover>.icon {
    color: $themeColorDark;
}

.btn:hover {
    background-color: white !important;
}
</style>