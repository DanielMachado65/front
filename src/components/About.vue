<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-column justify-center" cols="12" sm="6">
        <div class="text-h2 title-born">BORN 3</div>
        <div class="text-h5">A morte!</div>
        <div class="subtitle-2 mt-4">
          Na última edição do BØRN, a experiência nunca mais será a mesma. A
          explicação da "morte" chegou e com ela vamos juntos caminhar para a
          salvação em Cristo Jesus, nosso senhor. Vem viver tudo isso, esse é só
          o primeiro passo da sua história com Jesus.
        </div>
        <div class="text-6 mt-10">
          <v-icon color="purple darken-3" size="36" class="mr-2"
            >mdi-calendar</v-icon
          >
          28 de Abril 01 de Maio
        </div>
        <div class="text-6 mt-5">
          <v-icon color="purple darken-3" size="36" class="mr-2"
            >mdi-map-marker-radius</v-icon
          >
          Sitio Sossego Mandirituba - PR, 83800-000
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <v-row>
          <v-col class="d-flex justify-center flex-column">
            <!-- <GmapMap
              :center="{ lat: -25.76807503273651, lng: -49.369830988533316 }"
              :zoom="17"
              map-type-id="terrain"
              style="
                width: 100%;
                height: 250px;
                border-radius: 50%;
                margin: 0 auto;
              "
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @click="center = m.position"
              />
            </GmapMap> -->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FutureComponent",
  data() {
    return {
      markers: [
        {
          position: {
            lat: -25.76807503273651,
            lng: -49.369830988533316,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.title-born {
  font-family: "LeagueGothic" !important;
}
</style>