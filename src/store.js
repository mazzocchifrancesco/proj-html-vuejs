import { reactive } from 'vue'

export const store = reactive({
    news: [
        {
            img: "healthy-foods-150x150.webp",
            text: "the best healthy foods",
            time: "17.39"
        },
        {
            img: "winter-150x150.webp",
            text: "the best winter outfits",
            time: "18.25"
        },
        {
            img: "rice-ball-150x150.webp",
            text: "hygenic recipe to prepare rice",
            time: "20.30"
        },
        {
            img: "meal-time-150x150.webp",
            text: "the best time to have a meal",
            time: "22.18"
        },
    ]
});