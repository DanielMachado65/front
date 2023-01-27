<template>
  <v-container>
    <v-row>
      <v-col class="d-flex flex-column justify-center" cols="12" sm="6">
        <div class="text-h2 text-center">Born 3</div>
        <div class="text-h5 text-center">A morte!</div>
        <div class="mt-4">
          Na última edição do BØRN, a experiência nunca mais será a mesma. A
          explicação da "morte" chegou e com ela vamos juntos caminhar para a
          salvação em Cristo Jesus, nosso senhor. Vem viver tudo isso, esse é só
          o primeiro passo da sua história com Jesus.
        </div>
        <div class="mt-4">
          Sitio Sossego Mandirituba - PR, 83800-000 Data: 28/04 a 01/05 de 2023
        </div>
      </v-col>

      <v-col cols="12" sm="6">
        <v-row class="d-flex justify-center">
          <!-- <GmapMap
            :center="{ lat: -25.76807503273651, lng: -49.369830988533316 }"
            :zoom="17"
            map-type-id="terrain"
            style="width: 90%; height: 500px; border-radius: 50%"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              @click="center = m.position"
            />
          </GmapMap> -->
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
</style>