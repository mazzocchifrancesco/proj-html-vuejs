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
                    <div class="text-uppercase mb-2 fw-bold">{{ link.title }}</div>
                    <a v-for="(element, i) in link.link" class="text-capitalize text-white text-decoration-none">
                        {{ element }}
                    </a>
                </div>

                <div class="col-4">
                    <div class="mb-2 fw-bold">SUBSCRIBE TO NEWSLETTER</div>
                    <input type="text" placeholder="Email" class="w-100 rounded px-3">
                    <div class="btn text-white mt-2 fw-bold">SUBSCRIBE</div>
                </div>
            </div>
            <div class="row">
                <hr class="col-12 text-white">
            </div>
            <div class="d-flex justify-content-between align-items-center text-white pb-3">
                <img src="../assets/imgs/assets/anime-whitelogo-300x89.png" alt="">
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
    color: white;
    width: 230px;
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

a:hover {
    color: $themeColorDark !important;
}

.btn {
    background-color: $themeColorDark;
    width: 16rem;
}

input {
    width: 16rem !important;
    height: 2.5rem;
    border: none;
}

.btn:hover {
    color: $themeColorAccent !important;
    background-color: white !important;

}

// ...qui eventuale SCSS di AppComponent
</style>