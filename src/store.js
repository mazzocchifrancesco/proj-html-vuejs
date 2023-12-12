import { reactive } from 'vue'

export const store = reactive({
    articles: [
        {
            title: "traveling alone is awesome",
            date: "",
            tags: ["1", "2"],
            img: "travel-alone.webp",
            author: "",
            text: ""
        },
        {
            title: "the best success stories",
            date: "",
            tags: ["1", "2"],
            img: "success-story.webp",
            author: "",
            text: ""
        },
        {
            title: "place for a road trip",
            date: "",
            tags: ["1", "2"],
            img: "best-places.webp",
            author: "",
            text: ""
        },
        {
            title: "music the love of my life",
            date: "",
            tags: ["1", "2"],
            img: "music-love.webp",
            author: "",
            text: ""
        },
        {
            title: "fashion trend now a days",
            date: "",
            tags: ["1", "2"],
            img: "anime-fashion.webp",
            author: "",
            text: ""
        },
        {
            title: "the best winter outfit",
            date: "",
            tags: ["1", "2"],
            img: "winter.webp",
            author: "",
            text: ""
        },
        {
            title: "beginner photographer's mistake",
            date: "",
            tags: ["1", "2"],
            img: "photographers-mistakes.webp",
            author: "",
            text: ""
        },
        {
            title: "live ideas you might be anime",
            date: "",
            tags: ["1", "2"],
            img: "ideas-anime.webp",
            author: "",
            text: ""
        },
        {
            title: "reason to visit france",
            date: "",
            tags: ["1", "2"],
            img: "visit-france.webp",
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