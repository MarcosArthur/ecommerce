import './bootstrap';
import { createApp } from 'vue';
import store from './store/index';
import routes from './routes'
import App from './components/App.vue';

const app = createApp(App);
app.use(routes)
app.use(store)
app.mount('#app');
