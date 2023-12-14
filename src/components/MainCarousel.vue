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
    name: "MainCarousel",
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

            onSlideChange,
            modules: [Autoplay, Navigation],
            swiper: null
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
            //1 perchè è il secondo carosello che ho, madonna che obrobrio
            arrowR[1].classList.add("mainR");
            arrowL[1].classList.add("mainL");

        },
        onSwiper(instance) {
            this.swiper = instance
        },
        swiperNext() {
            this.swiper.slideNext()
        },
        swiperPrev() {
            this.swiper.slidePrev()
        },
    },
    mounted() {
        register(this); //per debuggare il componente da console
    }
}
</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <!-- titolo -->
            <div class="fs-4 fw-bold py-3 mt-3">FEATURED POSTS</div>

            <!-- pulsanti navigazione custom -->
            <div>
                <!-- CHECK perché il v-if?  -->
                <font-awesome-icon class="navArrow me-2" icon="fa-solid fa-angle-left" v-if="swiper"
                    @click="swiperPrev()" />
                <font-awesome-icon class="navArrow" icon="fa-solid fa-angle-right" v-if="swiper" @click="swiperNext()" />
            </div>
        </div>
        <!-- contenitore slides -->
        <div id="carosello" class="bg-white">
            <!-- slides -->
            <swiper @swiper="onSwiper" :slidesPerView="3" :spaceBetween="30" :modules="modules" :loop="true" :autoplay="{
                delay: 6000,
                disableOnInteraction: false,
            }" class="mySwiper">
                <!-- slides che ciclano -->
                <swiper-slide v-for="articles in store.articles">
                    <div id="slide" class="rounded d-flex flex-column align-items-center position-relative pb-3">
                        <img class="w-100 rounded-top" :src="getImage(articles.img)" alt="">
                        <div class="text-capitalize fw-bold text-center px-2 mt-3">{{ articles.title }}</div>
                        <div class="testo">{{ articles.date }}</div>
                        <div class="testo text-center my-1 px-2">{{ articles.text }}</div>
                        <!-- bottone read more -->
                        <div class="btn text-white mt-2">Read More</div>
                        <div class="tagCont top-0 start-50 translate-middle-x">
                            <div v-for="element in articles.tags" class=" tag bg-white rounded px-2 mt-2 text-capitalize">
                                {{ element
                                }}</div>
                        </div>

                    </div>
                </swiper-slide>
            </swiper>



        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
@use '../styles/partials/variables' as *;

#carosello {
    background-color: $themeColorLightgrey;
}

.navArrow {
    background-color: $themeColorDark;
    color: white;
    border-radius: 50%;
    padding: 0.8rem;
    aspect-ratio: 1;
    cursor: pointer;
}

.navArrow:hover {
    background-color: $themeColorAccent;
}

#slide {
    background-color: #f3f3f3;
}

.testo {
    font-size: 0.8rem;
}

.btn {
    background-color: $themeColorAccent;
    border-radius: 20px;
    padding: 0.2rem 1rem;
}
</style>
<style lang="scss">
@use '../styles/partials/variables' as *;

.btn:hover {
    background-color: $themeColorDark !important;
}
</style>