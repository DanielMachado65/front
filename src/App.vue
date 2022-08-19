<template>
  <v-app>
    <v-main id="main">
      <!-- <NavBar /> -->
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import { Footer } from "./components/index";
export default {
  name: "App",

  components: {
    Footer,
    // NavBar,
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
  background-color: #1e1e24;
}

#main {
  background: url("./assets/stars.png");
  z-index: 0;
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