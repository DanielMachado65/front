<template>
  <footer class="pb-10 footer">
    <v-row class="d-flex justify-center pt-10">
      <p>Home | Nos ajude | Contato | Loja</p>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-icon
        v-for="(item, i) in items"
        :key="i"
        class="mr-3"
        large
        color="white darken-2"
        style="
           {
            cursor: 'click';
          }
        "
        @click="sentTo(item.link)"
      >
        {{ item.icon }}
      </v-icon>
    </v-row>
    <v-row class="d-flex justify-center mt-5">
      <v-img
        lazy-src="@/assets/logo-negativa.png"
        src="@/assets/logo-negativa.png"
        max-height="150"
        max-width="150"
      ></v-img>
    </v-row>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    items: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/bornministerio",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/bornministerio/",
      },
      {
        icon: "mdi-spotify",
        link: "https://open.spotify.com/show/5JXqcW2WDote4VMPiJiUjp?si=60219b3883ee4a43",
      },
      {
        icon: "mdi-youtube",
        link: "https://www.youtube.com/@bornministerio6293",
      },
    ],
  }),
  methods: {
    sentTo: (url) => {
      window.location.href = url;
    },
  },
};
</script>

<style scoped>
.footer {
  background: #0d0d0d;
  position: relative;
}

.footer::before {
  content: "";
  background: #0d0d0d;
  width: 100vw;
  position: absolute;
  top: -250px;
  bottom: 0;
  z-index: -1;
}
</style>