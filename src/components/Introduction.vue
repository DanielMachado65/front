<template>
  <v-container
    fluid
    id="title-introduction"
    class="d-flex justify-space-around flex-column p-5"
  >
    <v-btn
      outlined
      elevation="2"
      color=" white white--text title-born "
      style="width: 200px; margin: 50px auto 0"
      rounded
      >28/04 ABR | 2023</v-btn
    >

    <v-img
      class="logo-born"
      max-height="300"
      max-width="300"
      style="margin: 0 auto"
      lazy-src="@/assets/logo.png"
      src="@/assets/logo.png"
    ></v-img>
    <v-btn
      @click="scrollTo"
      outlined
      elevation="2"
      color=" white white--text title-born "
      style="width: 200px; margin: 0 auto 50px"
      rounded
      >Inscreva-se</v-btn
    >
  </v-container>
</template>

<script>
export default {
  name: "IntroductionComponent",

  data: () => ({}),
  methods: {
    scrollTo() {
      document
        .getElementById("subscribe")
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
#title-introduction {
  min-height: 90vh;
  z-index: 0;
  padding: 0;
  background: url("../assets/background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 100px !important;
  width: 100%;
}

.title-born {
  font-family: "LeagueGothic" !important;
}

@media screen and (max-width: 768px) {
  .logo-born {
    margin-top: 0px;
    max-height: 350px !important;
    max-width: 350px !important;
  }

  .title-born {
    font-size: 20px !important;
    color: #a6a6a6;
  }

  #title-introduction {
    background-size: 200% 70%;
  }
}
</style>
