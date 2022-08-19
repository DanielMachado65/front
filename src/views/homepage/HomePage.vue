<template>
  <div class="HomePage">
    <Introduction />
    <History />

    <!-- footer  -->
    <Testimonies />
    <Subscribe />
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