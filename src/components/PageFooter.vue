<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "PageFooter",
    props: {
        footerLinks: Array,
    },
    data() {
        return {
            store
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
    <footer>
        <div id="barraStacco" class="position-relative">
            <font-awesome-icon id="triangle" icon="fa-solid fa-caret-down" size="2xl" class="position-absolute start-50" />
        </div>
        <div class="container">
            <div class="row text-white justify-content-between py-5">
                <div class="col-2 d-flex flex-column" v-for="link in this.footerLinks">
                    <div class="text-uppercase mb-2">{{ link.title }}</div>
                    <div v-for="(element, i) in link.link" class="text-capitalize">
                        {{ element }}
                    </div>
                </div>

                <div class="col-4">
                    <div>SUBSCRIBE TO NEWSLETTER</div>
                    <input type="text" class="w-100 rounded">
                    <div class="btn">SUBSCRIBE</div>
                </div>
            </div>
            <div class="row">
                <hr class="col-12 text-white">
            </div>
            <div class="d-flex justify-content-between align-items-center text-white pb-3">
                <img src="../assets/imgs/assets/anime-logo.webp" alt="">
                <div>&copy; Anime Tech, Theme by HasnainDEV</div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

footer {
    background-color: $themeColorAccent;
}

img {
    filter: invert(99%) sepia(15%) saturate(564%) hue-rotate(205deg) brightness(119%) contrast(100%);
    width: 15rem;
}

hr {
    border: 1px solid white;
}

#barraStacco {
    background-color: $themeColorDark;
    height: 5px;
}

#triangle {
    top: -10px;
    color: $themeColorDark;
}


// ...qui eventuale SCSS di AppComponent
</style>