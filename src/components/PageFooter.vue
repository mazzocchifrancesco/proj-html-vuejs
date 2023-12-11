<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "PageFooter",
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
        <div class="container">
            <div class="row">
                <div class="col-2 tempLink">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi.</div>
                <div class="col-2 tempLink">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi.</div>
                <div class="col-2 tempLink">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi.</div>
                <div class="col-2 tempLink">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi.</div>
                <div class="col-4 tempLink">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sequi.</div>
            </div>
            <div class="row">
                <hr class="col-12">
            </div>
            <div>
                logo + altro
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

.tempLink {
    height: 10rem;
}

// ...qui eventuale SCSS di AppComponent
</style>