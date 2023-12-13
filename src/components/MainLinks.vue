<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "MainLinks",
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
    <div class="container py-5">
        <div class="d-flex justify-content-between py-3">
            <div class="text-uppercase fw-bold fs-4">lifestyle & stories</div>
            <div class="d-flex gap-3">
                <div class="btn">all</div>
                <div class="btn">lifestyle</div>
                <div class="btn">stories</div>
            </div>
        </div>

        <!-- immagini -->
        <div class="container">
            <div id="imgBoxTwo" class="row">

                <div class="col-8">
                    <img :src="getImage(store.articles[0].img)" class="w-100" alt="">
                </div>
                <div id="sidecard" class="col-4 d-flex flex-column justify-content-between">
                    <div class="d-flex">
                        <div class="Smallcard">
                            <img :src="getImage(store.articles[1].img)" class="w-100" alt="">
                        </div>
                    </div>
                    <hr>
                    <div class="d-flex">

                        <div class="Smallcard">
                            <img :src="getImage(store.articles[2].img)" class="w-100" alt="">
                        </div>
                    </div>

                    <hr>
                    <div class="d-flex">

                        <div class="Smallcard">
                            <img :src="getImage(store.articles[3].img)" class="w-100" alt="">
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

#imgBoxTwo {
    height: 30rem;
}

.Smallcard {
    width: 50%;
}

.btn {
    text-transform: uppercase;
    background-color: $themeColorDark;
    color: white;
}

.btn:hover {
    background-color: $themeColorAccent;
    color: white;
}
</style>