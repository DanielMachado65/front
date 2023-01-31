<template>
  <div>
    <div class="mb-10 mt-10 text-h3 title-born">Depoimentos</div>
    <v-row>
      <v-col
        class="testimonies"
        :id="`testimonies-${item.id}`"
        cols="12"
        md="4"
        sm="6"
        v-for="item in videos"
        :key="item.title"
      >
        <v-card
          color="primary"
          elevation="10"
          max-height="500"
          min-height="300"
        >
          <v-list-item>
            <v-list-item-content>
              <v-row>
                <v-col cols="4" class="d-flex">
                  <v-list-item-avatar
                    size="80"
                    color="white"
                    class="mx-auto align-start"
                  >
                    <v-img :src="require(`@/assets/${item.url}`)" />
                  </v-list-item-avatar>
                </v-col>
                <v-col cols="8">
                  <div class="text-overline mb-4 pl-3">{{ item.overline }}</div>

                  <v-list-item-title class="text-h4 mb-2 pl-3 title-born">
                    {{ item.title }}
                  </v-list-item-title>
                  <v-card-text class="p-0 m-0 subtitle-2">
                    {{ item.description }}
                  </v-card-text>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TestimoniesComponent",

  data: () => ({
    videos: [
      {
        id: 1,
        url: "person1.jpeg",
        overline: "Born I",
        title: "Alana Beatriz",
        description:
          "Foi o melhor, a melhor experiência que tive pessoal e com Deus estava presente! Foi incrível 😍",
      },
      {
        id: 2,
        url: "person2.jpeg",
        overline: "Born II",
        title: "Thiago Pereira",
        description:
          "Uma das melhores experiências da minha vida, uma das mais marcantes e talvez a mais emocionante e espiritual que eu já tive.",
      },
      {
        id: 3,
        url: "person3.jpeg",
        overline: "Born II",
        title: "Mariana Martins",
        description:
          "A experiência mais transformadora e inesquecível. Não consigo descrever a felicidade de ter participado desses momentos mais perto de Deus e de pessoas incríveis! Saudades 💜",
      },
      {
        id: 4,
        url: "person4.jpeg",
        overline: "Born II",
        title: "Mayssuellem M Mendes",
        description:
          "Uma experiência incrível! Nunca tive isso em nenhum retiro, foi inexplicável, sério. 💜",
      },
      {
        id: 5,
        url: "person5.jpeg",
        overline: "Born II",
        title: "Ana Paula Barbosa",
        description:
          "Um acampamento surpreendente, melhor do que eu esperava. 💜",
      },
    ],
  }),
};
</script>

<style scoped>
.testimonies {
  position: relative;
  box-shadow: 10px 10px 0px 0 #200038;
}

.title-born {
  font-family: "LeagueGothic" !important;
}

@media only screen and (max-width: 600px) {
  #testimonies-1::before {
    position: absolute;
    z-index: 10;
    top: -50px;
    left: 0px;
  }
}
</style>