import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import FirstSales from "../pages/FirstSales.vue";
import GenerateImage from "../pages/GenerateImage.vue";
import ChatBot from "../pages/ChatBot.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/sales",
        name: "Sales",
        component: FirstSales,
    },
    {
        path: "/images",
        name: "OpenAIImages",
        component: GenerateImage,
    },
    {
        path: "/chatbot",
        name: "ChatBot",
        component: ChatBot,
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHashHistory("/wasabi-dataviz"),
    routes: routes,
});

export default router;