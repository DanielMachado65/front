<template>
  <div>
    <h4 class="mb-10 mt-10 league-gothic text-h3">Depoimentos</h4>
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
          <v-card-title> {{ item.title }} </v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
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
        url: "asdaksjd",
        title: "Guilherme, 23",
        description: "achei muito legal",
      },
      {
        id: 2,
        url: "akjsd",
        title: "Daniel, 23",
        description: "achei muito legal",
      },
      {
        id: 3,
        url: "asd",
        title: "Gabriele, 23",
        description: "achei muito legal",
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

@media only screen and (max-width: 600px) {
  #testimonies-1::before {
    position: absolute;
    z-index: 10;
    top: -50px;
    left: 0px;
  }
}
</style>