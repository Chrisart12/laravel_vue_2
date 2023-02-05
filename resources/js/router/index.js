import { createRouter, createWebHistory } from "vue-router";
import AboutView from "./../components/pages/AboutView.vue";
import Test from "./../components/pages/Test.vue";
import NotFound from "./../components/pages/NotFound.vue";

const routes = [
    {
        path: "/test",
        name: "test",
        component: Test,
    },

    {
        path: "/about",
        name: "about",
        component: AboutView,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },

    // catchall 404
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({

    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
