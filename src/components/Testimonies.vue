<template>
  <v-row>
    <v-col v-for="item in videos" :key="item.url">
      <v-card color="purple darken-2">
        <v-card-title>{{ item.url }}</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "TestimoniesComponent",

  data: () => ({
    videos: [{ url: "asdaksjd" }, { url: "akjsd" }, { url: "asd" }],
  }),
};
</script>