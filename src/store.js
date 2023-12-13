import { reactive } from 'vue'

export const store = reactive({
    articles: [
        {
            title: "traveling alone is awesome",
            date: "December 13, 2023",
            tags: ["stories", "travel"],
            img: "travel-alone.webp",
            author: "gianni",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "the best success stories",
            date: "December 13, 2023",
            tags: ["culture", "stories"],
            img: "success-story.webp",
            author: "ugo",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "place for a road trip",
            date: "December 13, 2023",
            tags: ["lifestyle", "stories", "travel"],
            img: "best-places.webp",
            author: "pippo",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "music the love of my life",
            date: "December 13, 2023",
            tags: ["culture", "lifestyle"],
            img: "music-love.webp",
            author: "gino",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "fashion trend now a days",
            date: "December 13, 2023",
            tags: ["fashion", "lifestyle"],
            img: "anime-fashion.webp",
            author: "jack",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "the best winter outfit",
            date: "December 13, 2023",
            tags: ["fashion"],
            img: "winter.webp",
            author: "john",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "beginner photographer's mistake",
            date: "December 13, 2023",
            tags: ["fashion"],
            img: "photographers-mistakes.webp",
            author: "al",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "live ideas you might be anime",
            date: "December 13, 2023",
            tags: ["culture", "stories"],
            img: "ideas-anime.webp",
            author: "pdor",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "reason to visit france",
            date: "December 13, 2023",
            tags: ["lifestyle", "travel"],
            img: "visit-france.webp",
            author: "furio",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "hygenic recipe to prepare rice",
            date: "December 13, 2023",
            tags: ["food"],
            img: "rice-ball.webp",
            author: "cesare",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "the best time to have a meal",
            date: "December 13, 2023",
            tags: ["food"],
            img: "meal2.jpg",
            author: "sertorio",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        },
        {
            title: "the beast healty food",
            date: "December 13, 2023",
            tags: ["food"],
            img: "healthy-foods.webp",
            author: "tullio",
            text: "Cantami, o Diva, del Pelìde Achille l'ira funesta che infiniti addusse lutti agli Achei"
        }
    ],
    tagList: [
        {
            name: "fashion",
            img: "anime-fashion.webp"
        },
        {
            name: "culture",
            img: "success-story.webp"
        },
        {
            name: "food",
            img: "healthy-foods.webp"
        },
        {
            name: "lifestyle",
            img: "visit-france.webp"
        },
        {
            name: "stories",
            img: "travel-alone.webp"
        },
        {
            name: "travel",
            img: "best-places.webp"
        },
    ],
});