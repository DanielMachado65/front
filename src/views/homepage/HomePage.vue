<template>
  <div>
    <Introduction />
    <v-container class="HomePage">
      <History />

      <!-- footer  -->
      <Testimonies />
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