// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/tailwind.css';
import './assets/css/global.css';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueScrollTo from 'vue-scrollto';
import './assets/css/scrollbar.css';


library.add(faBars);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

// Update this part
app.use(VueScrollTo, {
    easing: 'ease',
    duration: 800,
});

app.mount('#app');
