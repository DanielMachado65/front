<template>
  <div>
    <Introduction />
    <v-container class="HomePage">
      <History />

      <!-- footer  -->
      <Testimonies />
    </v-container>

    <Calltoaction />

    <v-container> </v-container>
  </div>
</template>

<script>
import { Introduction, History, Testimonies, Calltoaction } from "@/components";
export default {
  components: {
    Introduction,
    History,
    Testimonies,
    Calltoaction,
  },
};
</script>

<style scoped>
</style>