<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console



export default {
    name: "MainTags",
    components: {

    },
    data() {

        return {
            store,
            totalTags: [],
            counterOver: false,


        }
    },
    methods: {
        getImage(img) {
            return new URL(`../assets/imgs/assets/${img}`, import.meta.url).href
        },
        getTags() {
            for (let i = 0; i < store.articles.length; i++) {
                store.articles[i].tags.forEach((element) => this.totalTags.push(element));
            }
        },
        countTags(tag) {
            var count = 0;
            for (let i = 0; i < this.totalTags.length; i++)
                if (this.totalTags[i] == tag)
                    count++;
            return count;
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.getTags()
    }
}
</script>
<template>
    <div id="tagSquare" class="d-flex p-2 justify-content-between ">

        <!-- square tag box -->
        <div v-for="tag in store.tagList" class="d-flex position-relative tagContainer">
            <!-- sfondo  -->
            <img :src="getImage(tag.img)" alt="" class="h-100 w-100">
            <!-- nome + counter  -->
            <div class="tagBox top-50 start-50 translate-middle">{{ tag.name }}</div>
            <div class="hide tagBox start-50 translate-middle">{{ this.countTags(tag.name) }}</div>
            <!-- sfondo rosso -->
            <div class="colorHover h-100 w-100 position-absolute top-0 left-0">
                <div></div>
            </div>
        </div>


    </div>
</template>
<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

.tagContainer {
    width: 16%;
    aspect-ratio: 1;
}

img {
    object-position: center;
    object-fit: cover;
    filter: brightness(0.5);
}

.hide {
    opacity: 0;
    top: 65%;
}

.colorHover {
    background-color: $themeColorAccent;
    z-index: 1;
    display: none;
    justify-content: center;
    align-items: center;
}

.colorHover div {
    width: 80%;
    height: 80%;
    border: 1px solid white;
}

// TODO aggiugnere animazioni
.tagBox {
    z-index: 999;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-align: center;
    text-transform: uppercase;
    position: absolute;
}

// HOVER style 
.tagContainer:hover>.hide {
    opacity: 1;
}

.tagContainer:hover>.colorHover {
    display: flex;
    opacity: 0.5;
}
</style>