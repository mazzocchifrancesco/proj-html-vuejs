import { reactive } from 'vue'

export const store = reactive({
    articles: [
        {
            title: "traveling alone is awesome",
            date: "December 13, 2023",
            tags: ["stories", "travel"],
            img: "travel-alone.webp",
            author: "gianni",
            text: ""
        },
        {
            title: "the best success stories",
            date: "December 13, 2023",
            tags: ["culture", "stories"],
            img: "success-story.webp",
            author: "ugo",
            text: ""
        },
        {
            title: "place for a road trip",
            date: "December 13, 2023",
            tags: ["lifestyle", "stories", "travel"],
            img: "best-places.webp",
            author: "pippo",
            text: ""
        },
        {
            title: "music the love of my life",
            date: "December 13, 2023",
            tags: ["culture", "lifestyle"],
            img: "music-love.webp",
            author: "gino",
            text: ""
        },
        {
            title: "fashion trend now a days",
            date: "December 13, 2023",
            tags: ["fashion", "lifestyle"],
            img: "anime-fashion.webp",
            author: "jack",
            text: ""
        },
        {
            title: "the best winter outfit",
            date: "December 13, 2023",
            tags: ["fashion"],
            img: "winter.webp",
            author: "john",
            text: ""
        },
        {
            title: "beginner photographer's mistake",
            date: "December 13, 2023",
            tags: ["fashion"],
            img: "photographers-mistakes.webp",
            author: "al",
            text: ""
        },
        {
            title: "live ideas you might be anime",
            date: "December 13, 2023",
            tags: ["culture", "stories"],
            img: "ideas-anime.webp",
            author: "pdor",
            text: ""
        },
        {
            title: "reason to visit france",
            date: "December 13, 2023",
            tags: ["lifestyle", "travel"],
            img: "visit-france.webp",
            author: "furio",
            text: ""
        },
        {
            title: "hygenic recipe to prepare rice",
            date: "December 13, 2023",
            tags: ["food"],
            img: "rice-ball.webp",
            author: "cesare",
            text: ""
        },
        {
            title: "the best time to have a meal",
            date: "December 13, 2023",
            tags: ["food"],
            img: "visit-france.webp",
            author: "sertorio",
            text: ""
        },
        {
            title: "the beast healty food",
            date: "December 13, 2023",
            tags: ["food"],
            img: "healthy-foods.webp",
            author: "tullio",
            text: ""
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
    ]
});