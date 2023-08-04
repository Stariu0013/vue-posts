import MainPage from "@/components/Main/MainPage";
import PostsPage from "@/components/Posts/PostsPage";
import PostPage from "@/components/Posts/PostPage";
import { createRouter, createWebHistory } from "vue-router/dist/vue-router";


const routes = [
    {
        path: "/",
        component: MainPage,
    },
    {
        path: "/posts",
        component: PostsPage,
    },
    {
        path: "/posts/:id",
        component: PostPage,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;