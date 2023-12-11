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
    <div>
        <h1>footer</h1>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>