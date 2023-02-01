<template>
  <v-container class="fill-height">
    <v-row class="d-flex justify-center">
      <v-col
        ><p class="text-h2">Parabéns!</p>
        <p class="text-h3">você vai fazer parte do nosso evento</p>
        <p class="subtitle-1">
          aqui está seu pedido <strong>#{{ orderId }}</strong> caso precise de
          comunicar alguma coisa com nosso time
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CongratulationsComponent",
  props: {
    orderId: String,
  },
};
</script>

<style scoped>
.fill-height {
  height: 90vh;
}
</style>