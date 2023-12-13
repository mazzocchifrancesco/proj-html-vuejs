<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "MainLinks",
    data() {
        return {
            store,
            selectedArray: store.articles


        }
    },
    methods: {
        getImage(img) {
            return new URL(`../assets/imgs/assets/${img}`, import.meta.url).href
        },
        // crea un array con oggetti con tag della selezione
        getTagSelected(tag) {
            this.selectedArray = [];
            if (tag == 'all') {
                this.selectedArray = store.articles
                console.log(tag);
            }
            else {
                console.log(tag);

                store.articles.forEach((element, i) => {
                    if (element.tags.includes(tag)) {
                        this.selectedArray.push(element);
                    }
                });
                console.log(this.selectedArray)

            }
            console.log(this.selectedArray)
        },
    },
    mounted() {
        register(this); //per debuggare il componente da console
    },

}
</script>

<template>
    <div class="container my-5">
        <div class="d-flex justify-content-between py-3">
            <div class="text-uppercase fw-bold fs-4">lifestyle & stories</div>
            <div class="d-flex gap-3">
                <div class="btn" @click="getTagSelected('all')">all</div>
                <div class="btn" @click="getTagSelected('lifestyle')">lifestyle</div>
                <div class="btn" @click="getTagSelected('stories')">stories</div>
            </div>
        </div>
        <div id="contenitoreCard" class="container position-relative ">

            <!-- card che cicla -->
            <div class="card" v-for="i in 4">
                <!-- immagine -->
                <img :src="getImage(this.selectedArray[i - 1].img)" alt="" class="w-100 h-100">

                <!-- tags -->
                <div class="tagCont top-0 start-50 translate-middle-x">
                    <!-- elemento tag che cicla sul numero di tag nell'oggetto -->
                    <a v-for="element in this.selectedArray[i - 1].tags"
                        class="tag bg-white rounded px-2 mt-2 text-capitalize">
                        {{ element }}</a>
                </div>

                <!-- scheda informazioni autore data ...  -->
                <div class="info position-absolute mb-2 text-capitalize">
                    <div class="d-flex align-content-baseline gap-2">
                        <font-awesome-icon icon="fa-solid fa-user" class="" />
                        <div>{{ this.selectedArray[i - 1].author }}</div>
                        <font-awesome-icon icon="fa-solid fa-calendar-days" />
                        <div>{{ this.selectedArray[i - 1].date }}</div>
                    </div>
                    <div class="fw-bold">{{ this.selectedArray[i - 1].title }}</div>
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

img {
    border-radius: 5px;
    filter: brightness(0.6);
    object-fit: cover;
}

img:hover {
    filter: brightness(0.7);
}

.btn {
    text-transform: uppercase;
    background-color: $themeColorDark;
    color: white;
}

.btn:hover {
    background-color: $themeColorAccent;
    color: white;
}

.card {
    border-radius: 5px;
    border-color: $themeColorLightgrey;
    position: relative;
    height: 30%;
    width: 24%;
}

#contenitoreCard {
    height: 450px;
}

// TODO fixa questro obrobrio, ne dovrai rendere conto a Dio!
.card:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 58%;
}

.card:nth-child(1) .info {
    bottom: 0;
    left: 0;
    padding: 1.5rem;
    color: white;
}

.card:nth-child(2) {
    position: absolute;
    top: 0;
    left: 60%;
}

.card:nth-child(2) .info {
    top: 10%;
    right: -85%;
    padding: 1.5rem;
    width: 15rem;
    color: $themeColorDark;
    font-size: 0.8rem;
}

.card:nth-child(3) {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translateY(-50%);

}

.card:nth-child(3) .info {
    top: 10%;
    right: -85%;
    padding: 1.5rem;
    width: 15rem;
    color: $themeColorDark;
    font-size: 0.8rem;
}

.card:nth-child(4) {
    position: absolute;
    bottom: 0;
    left: 60%;
}

.card:nth-child(4) .info {
    top: 10%;
    right: -85%;
    padding: 1.5rem;
    width: 15rem;
    color: $themeColorDark;
    font-size: 0.8rem;
}</style>