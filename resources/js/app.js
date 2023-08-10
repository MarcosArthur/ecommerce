import "./bootstrap";
import { createApp } from "vue";
import { createPinia } from "pinia";
import routes from "./routes";
import App from "./App.vue";
import Mensagem from "./components/Mensagem.vue";

const app = createApp(App);

app.config.errorHandler = (err) => {};

app.use(createPinia());
app.config.globalProperties.$filters = {
    currencyBRL(value) {
        if (!isNaN(value)) {
            return Number(value).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            });
        }
        return 0;
    },
};

app.component("Mensagem", Mensagem);
app.use(routes);
app.mount("#app");
