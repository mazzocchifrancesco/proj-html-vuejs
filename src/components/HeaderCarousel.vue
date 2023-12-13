<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

//SWIPER

// import required modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


export default {
    name: "HeaderCarousel",
    components: {

        Swiper,
        SwiperSlide,
        Navigation
    },
    data() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            store,
            onSwiper,
            onSlideChange,
            modules: [Autoplay, Navigation],
        }
    },
    methods: {
        getImage(img) {
            return new URL(`../assets/imgs/assets/${img}`, import.meta.url).href
        },

        // aggiunge classe a frecce header carousel FIX 
        addArrowsClass() {
            let arrowR = document.getElementsByClassName("swiper-button-next");
            let arrowL = document.getElementsByClassName("swiper-button-prev");
            arrowR[0].classList.add("headerR");
            arrowL[0].classList.add("headerL");

        }
    },
    mounted() {
        register(this); //per debuggare il componente da console

        //magica funzione per cambiare le frecce FIX
        this.addArrowsClass();
    }
}
</script>

<template>
    <div id="carosello" class="p-4">
        <swiper id="mySlider" :slidesPerView="4" :spaceBetween="30" :modules="modules" :navigation="true" :loop="true"
            :autoplay="{
                delay: 6000,
                disableOnInteraction: false,
            }" class="mySwiper">
            <swiper-slide v-for="articles in store.articles">
                <div id="slide" class="rounded position-relative">
                    <img class="w-100 rounded-top" :src="getImage(articles.img)" alt="">
                    <div class="py-3 text-center">
                        <div class="text-capitalize fw-bold ">{{ articles.title }}</div>
                        <div>{{ articles.date }}</div>
                    </div>
                    <div class="tagCont top-0 start-50 translate-middle-x">
                        <div v-for="element in articles.tags" class=" tag bg-white rounded px-2 mt-2 text-capitalize">
                            {{ element
                            }}</div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>

    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

#carosello {
    background-color: $themeColorLightgrey;
}

#slide {
    background-color: white;
}

.swiper-button-next {
    color: $themeColorAccent;
}
</style>

<!-- CHECK per qualche strano motivo non funziona se scoped, approfondire -->

<style lang="scss">
@use '../styles/partials/variables' as *;

// TODO centrare frecce nel div 
.headerR,
.headerL {
    color: $themeColorAccent;
    background-color: white;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
}

.headerR::after,
.headerL::after {
    font-size: 0.7rem;
    font-weight: 900;
    text-shadow: 0px 1px, 1px 0px, 1px 1px;
}
</style>