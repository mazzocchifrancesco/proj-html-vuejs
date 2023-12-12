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
    <div class="container">
        <div class="d-flex justify-content-between">
            <div class="text-uppercase">lifestyle & stories</div>
            <div>
                <div class="btn">BOTTONE</div>
                <div class="btn">BOTTONE</div>
                <div class="btn">BOTTONE</div>
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
</style>