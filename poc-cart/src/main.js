import App from './App.vue';
import { createApp } from 'vue';
import router from '@/router';
import pinia from '@/stores';
import vuetify from '@/plugins/vuetify';

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(pinia);
app.mount('#app');
