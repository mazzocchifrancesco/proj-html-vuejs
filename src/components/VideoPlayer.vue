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
<template></template>
<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;
</style>