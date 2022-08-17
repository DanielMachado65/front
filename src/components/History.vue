<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      color="primary"
      transition="slide-x-transation"
      fill-dot
    >
      <v-card color="primary" class="history" elevation="10">
        <v-card-title class="text-h6">{{ item.title }}</v-card-title>
        <v-card-text>
          <p>
            {{ item.text }}
          </p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "HistoryComponent",

  data: () => ({
    items: [
      {
        title: ". 2019-2020",
        text: " Evento aconteceu e foi incrivel, realente uma experiencia com Deus",
      },
      {
        title: ". 2020-2021",
        text: " Evento realmente pegou fogo de tão esperitual que foi",
      },
      {
        title: ". 2021-2022 ",
        text: " Evento foi cancelado devido a pandemia",
      },
      {
        title: ". 2022-2023 ",
        text: " Esse vai ser o evento de encerramento",
      },
    ],
  }),
};
</script>

<style scoped>
.history {
  box-shadow: 10px 16px 0px 0 #200038 !important;
}
</style>