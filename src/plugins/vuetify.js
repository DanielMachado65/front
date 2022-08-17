import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: colors.purple.accent1,
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
            dark: {
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                primary: colors.red.accent1,
            },
        },
    }
});
