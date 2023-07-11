import "./bootstrap";
import { createApp } from "vue";
import store from "./store/index";
import routes from "./routes";
import App from "./components/App.vue";
import Mensagem from './components/Views/Mensagem.vue'

const app = createApp(App);

app.config.globalProperties.$filters = {
    currencyBRL(value) {
        return Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    },
};
app.component('Mensagem', Mensagem)
app.use(routes);
app.use(store);
app.mount("#app");
