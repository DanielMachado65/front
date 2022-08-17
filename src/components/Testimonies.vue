<template>
  <div>
    <h3 class="mb-5 text-h3">Depoimentos</h3>
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
        <v-card color="purple">
          <v-card-title>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y881t8ilMyc"
              frameborder="0"
              allowfullscreen
            ></iframe>
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