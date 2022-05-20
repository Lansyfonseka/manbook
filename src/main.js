import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import {store} from './state/index';
import clickOutside from './directive/clickOutside';
import './scss/main.scss';

const app = createApp(App);
app.use(router);
app.use(store);

app.directive('click-outside',clickOutside)

app.mount('#app');
