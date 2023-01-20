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
        :key="item.title"
      >
        <v-card color="primary" elevation="10">
          <v-list-item>
            <v-list-item-content>
              <v-row>
                <v-col cols="4">
                  <v-list-item-avatar size="80" color="white">
                    <v-img :src="require(`../assets/${item.url}`)" />
                  </v-list-item-avatar>
                </v-col>
                <v-col>
                  <div class="text-overline mb-4">{{ item.overline }}</div>

                  <v-list-item-title class="text-h5 mb-5">
                    {{ item.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="">{{
                    item.description
                  }}</v-list-item-subtitle>
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
        overline: "test",
        title: "Guilherme, 23",
        description: "achei muito legal",
      },
      {
        id: 2,
        url: "person1.jpeg",
        title: "Daniel, 23",
        description: "achei muito legal",
      },
      {
        id: 3,
        url: "person1.jpeg",
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