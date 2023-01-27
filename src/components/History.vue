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
        <v-card-text>
          <div>{{ item.data }}</div>
          <p class="text-h4 text--primary">{{ item.title }}</p>
          <p>{{ item.subtitle }}</p>
          <div class="text--primary">{{ item.text }}</div>
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
        title: "BORN 1",
        data: "(2019)",
        subtitle: "Preparado para nascer de novo? ",
        text: " Primeira edição do evento com mais de 70 participantes, o evento foi cheio de entrega, novas experiências com Jesus, aprendizados pessoais,  esportes radicais e o mais importe experienciar o derramamento do Espírito Santo. ",
      },
      {
        title: "BORN 2",
        data: "(2020)",
        subtitle: "Maturidade espiritual. ",
        text: "Na segunda edição Deus nos mostrou a dependência total dEle, depois de um acidente na cozinha ter queimado todas as comidas e utensílios do evento, vimos o agir de Deus em uma experiência imersiva de dependência e intimidade única e só quem estava lá pode descrever a atmosfera que foi criada de união e entrega a Deus. O fogo queimou e tudo se fez novo!",
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