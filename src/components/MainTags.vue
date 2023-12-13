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
        <div v-for="tag in store.tagList" class="d-flex position-relative tagContainer">
            <img :src="getImage(tag.img)" alt="" class="h-100 w-100">
            <div
                class="tagBox position-absolute top-50 start-50 translate-middle text-white text-uppercase fw-bold fs-4 text-center">
                <div>{{ tag.name }}</div>
                <div class="hide">{{ this.countTags(tag.name) }}</div>

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
    display: none;
}

.tagBox:hover>.hide {
    display: block;
}
</style>