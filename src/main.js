import Vue from "vue";
import Router from "vue-router";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";

// plugins
import "./plugins/axios";
import "./plugins/msg";

// fonts
import "./assets/LeagueGothic-Regular-VariableFont_wdth.ttf";
import "./assets/LeagueGothic-Regular.ttf";

Vue.config.devtools = true;
Vue.use(Router);

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_API_KEY_GOOGLE,
    libraries: "places", // This is required if you use the Auto complete plug-in
  },
});

new Vue({
  vuetify,
  router: new Router({
    mode: "history",
    routes: [
      {
        name: "HomePage",
        path: "/",
        component: () => import("@/views/homepage/HomePage.vue"),
      },
      {
        name: "StorePage",
        path: "/store",
        component: () => import("@/views/store/StorePage.vue"),
      },
      {
        path: "*",
        component: {
          render(h) {
            return h("div", "404. Not Found.");
          },
        },
      },
    ],
  }),
  render: (h) => h(App),
}).$mount("#app");
