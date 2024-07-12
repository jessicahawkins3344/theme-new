import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Import AOS and its CSS

import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';


import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as BiIcons from "oh-vue-icons/icons/Bi";

const Bi = Object.values({ ...BiIcons });
addIcons(...Bi);

const app = createApp(App)

app.component("v-icon", OhVueIcon);
app.use(createPinia())
app.use(router)


app.mount('#app')

AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

import { BiHouseHeartFill } from "oh-vue-icons/icons";