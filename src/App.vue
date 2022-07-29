<template>
  <v-app>
    <v-main bg="dark">
      <v-container fluid>
        <Introduction />
        <History />
        <Subscribe />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Introduction from "./components/Introduction";
import History from "./components/History";
import Subscribe from "./components/Subscribe";

export default {
  name: "App",

  components: {
    Introduction,
    History,
    Subscribe,
  },

  data: () => ({
    //
  }),
};
</script>
