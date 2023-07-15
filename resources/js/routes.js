import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Auth from "./pages/Login.vue";
import Orders from "./pages/Orders.vue";

const routes = [
    { path: "/", name: "/", component: Home },
    { path: "/Auth", name: "auth", component: Auth },
    { path: "/Orders", name: "orders", component: Orders },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
