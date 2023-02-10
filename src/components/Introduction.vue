<template>
  <div>
    <v-container
      fluid
      id="title-introduction"
      class="d-flex justify-space-around flex-column p-5"
    >
      <p class="text-h4 font-weight-black text-center">28 ABR | 2023</p>

      <v-img
        class="logo-born"
        max-height="350"
        max-width="350"
        style="margin: 0 auto"
        lazy-src="@/assets/logo.png"
        src="@/assets/logo.png"
      ></v-img>
      <!-- <p class="text-center text-h1 font-weight-bold title-born">BORN III</p> -->

      <v-btn
        @click="scrollTo"
        outlined
        elevation="2"
        color=" white white--text font-weight-black title-born"
        style="width: 200px; margin: 0 auto 50px"
        rounded
      >
        QUERO PARTICIPAR</v-btn
      >
    </v-container>
    <v-container class="d-flex justify-center align-center">
      <ArrowComponent />
      <p
        class="text--white text-h5 font-weight-light text-uppercase"
        style="margin-bottom: 0"
      >
        Veja o que rolou nas edições anteriores
      </p>
      <ArrowComponent />
    </v-container>
  </div>
</template>

<script>
import ArrowComponent from "./Arrows.vue";

export default {
  name: "IntroductionComponent",
  components: { ArrowComponent },
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
