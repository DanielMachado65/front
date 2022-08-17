<template>
  <div>
    <h4 class="mb-10 mt-10 text-h4">Depoimentos</h4>
    <v-row>
      <v-col
        class="testimonies"
        :id="`testimonies-${item.id}`"
        cols="12"
        md="4"
        sm="6"
        v-for="item in videos"
        :key="item.url"
      >
        <v-card color="primary" elevation="10">
          <v-card-title>
            <!-- <iframe
              width="560"
              height="315"
              :src="item.url"
              frameborder="0"
              allowfullscreen
            ></iframe> -->
          </v-card-title>
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
      { id: 1, url: "asdaksjd" },
      { id: 2, url: "akjsd" },
      { id: 3, url: "asd" },
    ],
  }),
};
</script>

<style scoped>
.testimonies {
  position: relative;
  box-shadow: 10px 10px 0px 0 #200038;
}

#testimonies-1::before {
  content: '"';
  position: absolute;
  font-size: 10em;
  z-index: 10;
  top: -65px;
  left: -45px;
  font-family: cursive;
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