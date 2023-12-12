
<script>
export default {
    name: "PageHeader",
}
</script>
<template>
    <nav>
        <div class="container d-flex justify-content-between align-items-center py-2">

            <font-awesome-icon icon="fa-solid fa-bars" size='2xl' />
            <div class="d-flex gap-5 text-uppercase">
                <div class="selected">
                    <font-awesome-icon icon="fa-solid fa-home" />
                    home
                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-user" />
                    about us
                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-briefcase" />
                    lifestyle
                    <font-awesome-icon icon="fa-solid fa-angle-down" />

                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-book-open-reader" />
                    stories
                    <font-awesome-icon icon="fa-solid fa-angle-down" />

                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-book" />
                    pages
                </div>
                <div>
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                    contact us
                </div>
            </div>
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" size='2xl' />
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
</style>