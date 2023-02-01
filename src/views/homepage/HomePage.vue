<template>
  <div>
    <div v-if="orderId"><Congratulations :order-id="orderId" /></div>
    <div v-else>
      <Introduction />

      <v-container class="HomePage">
        <History />

        <!-- footer  -->
        <Testimonies />
      </v-container>

      <v-container fluid class="theme--dark mt-12">
        <About />
      </v-container>

      <v-container fluid class="background-subfoter">
        <v-row>
          <v-col cols="12" sm="6">
            <Price />
          </v-col>
          <v-col cols="12" sm="6" class="p-5">
            <subscribe />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import {
  Introduction,
  History,
  Testimonies,
  Price,
  About,
  Subscribe,
  Congratulations,
} from "@/components";
export default {
  components: {
    Introduction,
    History,
    Congratulations,
    Testimonies,
    About,
    Price,
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
.background-subfoter {
  /* color: #1a150b; */
  /* background-color: #1a150b; */
}

.title-born {
  font-family: "LeagueGothic" !important;
}
</style>