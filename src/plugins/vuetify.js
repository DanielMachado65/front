import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#480080",
        secondary: "#FDEC22",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
      dark: {
        background: "#000",
        secondary: "#FDEC22",
        accent: "#8c9eff",
        error: "#b71c1c",
        primary: "#480080",
      },
    },
  },
});
