import Vue from "vue";
import App from "./App.vue";
import store from "~/store";
import router from "~/router";
import i18n from "~/plugins/i18n";
import "~/assets/app.scss";
import axios from "axios";

import "~/plugins";
import "~/components";

document.body.style.overflowY = "scroll";
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  ...App,
});
