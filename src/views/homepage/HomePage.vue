<template>
  <div>
    <Introduction />
    <v-container class="HomePage">
      <History />

      <!-- footer  -->
      <Testimonies />
    </v-container>

    <v-container fluid class="purple darken-4 mt-12">
      <p class="text-h1">born</p>
    </v-container>
  </div>
</template>

<script>
import { Introduction, History, Testimonies } from "@/components";
export default {
  components: {
    Introduction,
    History,
    Testimonies,
  },
};
</script>

<style scoped>
</style>