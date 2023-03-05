import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

import axios from "axios";
import VueAxios from "vue-axios";
app.use(VueAxios, axios);
import "@/javascripts/request.config.js";

import router from "./router";
app.use(router);

import Directives from "./directives";
app.use(Directives);

import "./styles/global.css";

//注意use要放在mount之前，否则将报Failed to resolve component: router-view错误
app.mount("#app");
