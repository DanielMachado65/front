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

@font-face {
  font-family: "LeagueGothic";
  src: url("./assets/LeagueGothic-Regular.ttf") format("truetype");
}

.league-gothic {
  font-family: "LeagueGothic", Arial, Helvetica, sans-serif !important;
}

main {
  margin: 0;
  background-color: #020202;
  padding: 0;
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