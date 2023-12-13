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
        // aggiunge classe a frecce header carousel FIX
        addArrowsClass() {
            let arrowR = document.getElementsByClassName("swiper-button-next");
            let arrowL = document.getElementsByClassName("swiper-button-prev");
            //1 perchè è il secondo carosello che ho, madonna che obrobrio
            arrowR[1].classList.add("mainR");
            arrowL[1].classList.add("mainL");

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
    <div class="container">
        <div>
            <div class="fs-4 fw-bold py-3 mt-3">FEATURED POSTS</div>
        </div>
        <div id="carosello">
            <swiper :slidesPerView="3" :spaceBetween="30" :modules="modules" :navigation="true" :loop="true" :autoplay="{
                delay: 6000,
                disableOnInteraction: false,
            }" class="mySwiper">
                <swiper-slide v-for="articles in store.articles">
                    <div id="slide" class="rounded d-flex flex-column align-items-center position-relative pb-3">
                        <img class="w-100 rounded-top" :src="getImage(articles.img)" alt="">
                        <div class="text-capitalize fw-bold text-center px-2 mt-3">{{ articles.title }}</div>
                        <div class="testo">{{ articles.date }}</div>
                        <div class="testo text-center my-1 px-2">{{ articles.text }}</div>

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

// TODO centrare frecce nel div 
.mainR,
.mainL {
    color: $themeColorAccent;
    background-color: white;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    position: absolute;
}

.mainR::after,
.mainL::after {
    font-size: 0.7rem;
    font-weight: 900;
    text-shadow: 0px 1px, 1px 0px, 1px 1px;

}
</style>