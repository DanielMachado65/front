<template>
  <div>
    <div v-if="orderId">
      <Congratulations :order-id="orderId"/>
    </div>
    <div v-else>
      <Introduction/>

      <v-container class="HomePage">
        <History/>

        <!-- footer  -->
        <Testimonies/>
      </v-container>

      <v-container fluid class="theme--dark mt-12">
        <About/>
      </v-container>

      <v-container fluid class="background-subfoter">
        <v-row>
          <v-col cols="12" sm="12" lg="6" class="p-5" style="margin: 0 auto">
            <subscribe/>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import {About, Congratulations, History, Introduction, Subscribe, Testimonies,} from "@/components";

export default {
  components: {
    Introduction,
    History,
    Congratulations,
    Testimonies,
    About,
    Subscribe,
  },
  data: () => ({
    orderId: "",
  }),
  created() {
    const params = new URLSearchParams(window.location.search.substring(1));
    this.orderId = params.get("order_id");
  },
};
</script>

<style>
</style>
