import { reactive } from 'vue'

export const store = reactive({
    articles: [
        {
            title: "traveling alone is awesome",
            date: "",
            tags: ["stories", "travel"],
            img: "travel-alone.webp",
            author: "",
            text: ""
        },
        {
            title: "the best success stories",
            date: "",
            tags: ["culture", "stories"],
            img: "success-story.webp",
            author: "",
            text: ""
        },
        {
            title: "place for a road trip",
            date: "",
            tags: ["lifestyle", "stories", "travel"],
            img: "best-places.webp",
            author: "",
            text: ""
        },
        {
            title: "music the love of my life",
            date: "",
            tags: ["culture", "lifestyle"],
            img: "music-love.webp",
            author: "",
            text: ""
        },
        {
            title: "fashion trend now a days",
            date: "",
            tags: ["fashion", "lifestyle"],
            img: "anime-fashion.webp",
            author: "",
            text: ""
        },
        {
            title: "the best winter outfit",
            date: "",
            tags: ["fashion"],
            img: "winter.webp",
            author: "",
            text: ""
        },
        {
            title: "beginner photographer's mistake",
            date: "",
            tags: ["fashion"],
            img: "photographers-mistakes.webp",
            author: "",
            text: ""
        },
        {
            title: "live ideas you might be anime",
            date: "",
            tags: ["culture", "stories"],
            img: "ideas-anime.webp",
            author: "",
            text: ""
        },
        {
            title: "reason to visit france",
            date: "",
            tags: ["lifestyle", "travel"],
            img: "visit-france.webp",
            author: "",
            text: ""
        },
        {
            title: "hygenic recipe to prepare rice",
            date: "",
            tags: ["food"],
            img: "rice-ball.webp",
            author: "",
            text: ""
        },
        {
            title: "the best time to have a meal",
            date: "",
            tags: ["food"],
            img: "visit-france.webp",
            author: "",
            text: ""
        },
        {
            title: "the beast healty food",
            date: "",
            tags: ["food"],
            img: "healthy-foods.webp",
            author: "",
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