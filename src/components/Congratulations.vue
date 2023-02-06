<template>
  <v-container class="fill-height">
    <v-row class="d-flex justify-center">
      <v-col
        ><p class="text-h2">É OFICIAL!</p>
        <p class="text-h3">
          Agora você vai fazer parte dessa experiência. #GOGOBORN
        </p>
        <p class="subtitle-1">
          Aqui está o código do seu pedido (<strong>#{{ orderId }}</strong
          >) caso precise informar ao nosso time.
          <br />
          Logo enviaremos mais informações sobre o evento.
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