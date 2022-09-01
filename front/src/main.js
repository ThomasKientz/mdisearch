import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import InstantSearch from "vue-instantsearch";
import VueClipboard from "vue-clipboard2";

Vue.use(VueClipboard);
Vue.use(InstantSearch);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
