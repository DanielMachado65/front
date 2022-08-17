<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- main topics -->
        <Introduction />
        <History />

        <!-- footer  -->
        <Testimonies />
        <Subscribe />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Introduction from "./components/Introduction";
import History from "./components/History";
import Subscribe from "./components/Subscribe";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Introduction,
    History,
    Subscribe,
    Testimonies,
    Footer,
  },
};
</script>

<style>
:root {
  --webkit-font-smoothing: antialiased;
  --moz-ozx-font-smoothing: grayscale;
}

* {
  font-family: "Montserrat", sans-serif;
}

body {
  margin: 0;
  background: url("./assets/stars.png");
}

::-webkit-scrollbar {
  width: 0.25rem;
}

::-webkit-scrollbar-track {
  background: #1e1e24;
}

::-webkit-scrollbar-thumb {
  background: purple;
}
</style>