<template>
  <v-row class="mx-auto d-flex justify-center">
    <v-col cols="12" md="10" class="align-center">
      <div id="prices"></div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PriceComponent",
};
</script>

<style scoped>
#prices {
  background: url("../assets/about.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 270px !important;
  width: 100%;
}

@media screen and (max-width: 768px) {
  #prices {
    background-size: 100% 80%;
  }
}
</style>