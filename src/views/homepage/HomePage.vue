<template>
  <v-container class="HomePage">
    <Introduction />
    <History />

    <!-- footer  -->
    <Testimonies />
    <Subscribe />
  </v-container>
</template>

<script>
import { Introduction, History, Subscribe, Testimonies } from "@/components";
export default {
  components: {
    Introduction,
    History,
    Subscribe,
    Testimonies,
  },
};
</script>