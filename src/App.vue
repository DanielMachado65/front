<template>
  <v-app>
    <v-main bg="dark">
      <v-container>
        <!-- main topics -->
        <Introduction />
        <History />

        <!-- footer  -->
        <Testimonies />
        <Subscribe />
        <Footer />
      </v-container>
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
