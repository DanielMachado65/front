<template>
  <div>
    <Introduction />
    <v-container class="HomePage">
      <History />

      <!-- footer  -->
      <Testimonies />
      <Subscribe />
    </v-container>
  </div>
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