
<script>
export default {
    name: "PageHeader",
}
</script>
<template>
    <nav>
        <div class="container d-flex justify-content-between align-items-center py-2">

            <font-awesome-icon icon="fa-solid fa-bars" class="hover" size='xl' />
            <div class="d-flex gap-5 text-uppercase">
                <div class="hover selected">
                    <font-awesome-icon icon="fa-solid fa-home" />
                    home
                </div>
                <div class="hover">
                    <font-awesome-icon icon="fa-solid fa-user" />
                    about us
                </div>
                <div class="hover">
                    <font-awesome-icon icon="fa-solid fa-briefcase" />
                    lifestyle
                    <font-awesome-icon icon="fa-solid fa-angle-down" />

                </div>
                <div class="hover">
                    <font-awesome-icon icon="fa-solid fa-book-open-reader" />
                    stories
                    <font-awesome-icon icon="fa-solid fa-angle-down" />

                </div>
                <div class="hover">
                    <font-awesome-icon icon="fa-solid fa-book" />
                    pages
                </div>
                <div class="hover">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                    contact us
                </div>
            </div>
            <font-awesome-icon class="hover" icon="fa-solid fa-magnifying-glass" size='xl' />
        </div>
    </nav>
</template>
<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

nav {
    border: 1px solid $themeColorLightgrey;
    color: $themeColorDark;
}

.selected {
    color: $themeColorAccent
}

.hover:hover {
    color: $themeColorAccent;
}
</style>