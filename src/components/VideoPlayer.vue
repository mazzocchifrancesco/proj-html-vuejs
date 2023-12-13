<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console



export default {
    name: "VideoPlayer",
    components: {

    },
    data() {

        return {
            store,

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
    <div class="d-flex justify-content-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JWlKA9wmO64?si=Sjw4BN7KyPEUWCFm"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>
<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

#ytPlayer {
    height: 20rem;
    background-color: bisque;
}
</style>