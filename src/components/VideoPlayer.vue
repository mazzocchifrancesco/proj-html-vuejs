<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console



export default {
    name: "VideoPlayer",
    props: {
        video: Array,
    },
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
    <div class="d-flex container my-5">
        <iframe width="840" height="550" src="https://www.youtube.com/embed/JWlKA9wmO64?si=Sjw4BN7KyPEUWCFm"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>

        <!-- playlist container  -->
        <div class="d-flex flex-column gap-2 overflow-y-auto">
            <div id="videoHeader" class="d-flex p-3 text-white gap-3">
                <font-awesome-icon icon="fa-solid fa-play" size="2xl" />
                <div>
                    <div>Video Playlist</div>
                    <div>{{ video.length }}/{{ video.length }}</div>
                </div>
            </div>
            <div v-for="video in video" class="">
                <div class="d-flex gap-2">
                    <img :src="getImage(video.img)" alt="" class="rounded">
                    <div>{{ video.title }}</div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

img {
    height: 4rem;
}

hr {
    border: 1px solid black
}

.container {
    height: 550px;
}

#videoHeader {
    background-color: $themeColorDark;
}
</style>