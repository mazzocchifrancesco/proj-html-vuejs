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
    <div id="" class="container position-relative ">

        <div class="card" v-for="i in 5">
            <img :src="getImage(store.articles[i - 1].img)" alt="" class="w-100 h-100">
            <div class="tagCont top-0 start-50 translate-middle-x">
                <a v-for="element in store.articles[i - 1].tags" class="tag bg-white rounded px-2 mt-2 text-capitalize">
                    {{ element }}</a>
            </div>
            <div class="position-absolute bottom-0 start-50 translate-middle-x text-white mb-2 text-capitalize">

                <div class="d-flex align-content-baseline gap-2">
                    <font-awesome-icon icon="fa-solid fa-user" class="" />
                    <div>{{ store.articles[i - 1].author }}</div>
                    <font-awesome-icon icon="fa-solid fa-calendar-days" />
                    <div>{{ store.articles[i - 1].date }}</div>
                </div>
                <div class="fw-bold">{{ store.articles[i - 1].title }}</div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

img {
    border-radius: 5px;
    filter: brightness(0.6);
    object-fit: cover;

}

img:hover {
    filter: brightness(0.7);
}

.card {
    border-radius: 5px;
    border-color: $themeColorLightgrey;
    position: relative;
    height: 220px;
    width: 24%;
}

.container {
    height: 450px;
}

// TODO fixa questro obrobrio, ne dovrai rendere conto a Dio!
.card:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
}

.card:nth-child(2) {
    position: absolute;
    bottom: 0;
    left: 0;
}

.card:nth-child(3) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 48%;
}

.card:nth-child(4) {
    position: absolute;
    top: 0;
    right: 0;
}

.card:nth-child(5) {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>