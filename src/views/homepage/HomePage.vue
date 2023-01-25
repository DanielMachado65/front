<template>
  <div>
    <Introduction />
    <v-container class="HomePage">
      <History />

      <!-- footer  -->
      <Testimonies />
    </v-container>

    <About />

    <v-container>
      <Price />
    </v-container>
  </div>
</template>

<script>
import { Introduction, History, Testimonies, Price, About } from "@/components";
export default {
  components: {
    Introduction,
    History,
    Testimonies,
    About,
    Price,
  },
};
</script>

<style scoped>
</style>