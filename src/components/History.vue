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
        <v-card-title class="text-h6">{{ item.title }}</v-card-title>
        <v-card-text>
          <p>
            {{ item.text }}
          </p>
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
        title: "Lorem Ipsum",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus optio ipsum aut quisquam aperiam incidunt exercitationem, nemo excepturi commodi esse nobis iste doloremque, sunt nesciunt nisi eligendi, deserunt quasi recusandae!",
      },
      {
        title: "Lorem Ipsum",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus optio ipsum aut quisquam aperiam incidunt exercitationem, nemo excepturi commodi esse nobis iste doloremque, sunt nesciunt nisi eligendi, deserunt quasi recusandae!",
      },
      {
        title: "Lorem Ipsum",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus optio ipsum aut quisquam aperiam incidunt exercitationem, nemo excepturi commodi esse nobis iste doloremque, sunt nesciunt nisi eligendi, deserunt quasi recusandae!",
      },
      {
        title: "Lorem Ipsum",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus optio ipsum aut quisquam aperiam incidunt exercitationem, nemo excepturi commodi esse nobis iste doloremque, sunt nesciunt nisi eligendi, deserunt quasi recusandae!",
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