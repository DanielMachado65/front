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
          <p class="text-h4 text--primary title-born mb-0">{{ item.title }}</p>
          <p class="text-h5 title-born">{{ item.subtitle }}</p>
          <div class="mt-10 subtitle-1 text--primary">{{ item.text }}</div>
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
        title: "BORN I",
        data: "(2019)",
        subtitle: "Preparado para nascer de novo? ",
        text: " Primeira edição do evento com mais de 70 participantes, o evento foi cheio de entrega, novas experiências com Jesus, aprendizados pessoais,  esportes radicais e o mais importante, experienciar o derramamento do Espírito Santo. ",
      },
      {
        title: "BORN II",
        data: "(2020)",
        subtitle: "Maturidade espiritual. ",
        text: "Na segunda edição Deus nos mostrou a dependência total dEle. Depois de um acidente na cozinha ter queimado todas as comidas e utensílios do evento, vimos o agir de Deus em uma experiência imersiva de dependência e intimidade única e só quem estava lá pode descrever a atmosfera que foi criada de união e entrega a Deus. O fogo queimou e tudo se fez novo!",
      },
      {
        title: "BORN III",
        data: "(2023)",
        subtitle: "A Morte",
        text: 'Na última edição do BØRN, a experiência nunca mais seria a mesma. A explicação da "morte" tinha chegado e com ela íamos juntos caminhar para a salvação em Cristo Jesus, nosso senhor. Tínhamos convidado as pessoas a viverem tudo isso, pois era só o primeiro passo da sua história com Jesus.',
      },
    ],
  }),
};
</script>

<style scoped>
.title-born {
  font-family: "LeagueGothic" !important;
}
.history {
  box-shadow: 10px 16px 0px 0 #1b0766 !important;
}
</style>