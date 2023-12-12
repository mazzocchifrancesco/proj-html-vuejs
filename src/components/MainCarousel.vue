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
            onSwiper,
            onSlideChange,
            modules: [Autoplay, Navigation],
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
    <div id="carosello" class="p-4">
        <swiper :slidesPerView="4" :spaceBetween="30" :modules="modules" :navigation="true" :loop="true" :autoplay="{
            delay: 6000,
            disableOnInteraction: false,
        }" class="mySwiper">
            <swiper-slide v-for="articles in store.articles">
                <div id="slide" class="rounded d-flex flex-column align-items-center">
                    <img class="w-100 rounded-top" :src="getImage(articles.img)" alt="">
                    <div class="text-capitalize fw-bold text-center">{{ articles.title }}</div>
                    <div class="btn text-white ">Read More</div>
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

.btn {
    background-color: $themeColorAccent;
    border-radius: 20px;
    padding: 0.2rem 1rem;
}
</style>