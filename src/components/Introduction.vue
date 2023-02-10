<template>
  <div>
    <v-container
      fluid
      id="title-introduction"
      class="d-flex justify-space-around flex-column p-5"
    >
      <p
        class="text-h5 font-weight-black text-center"
        style="font-size: 1.3rem !important"
      >
        28 ABR | 2023
      </p>

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
        color=" white white--text font-weight-bold title-born text-uppercase"
        style="width: 200px; margin: 0 auto 50px"
        rounded
      >
        <strong>quero participar </strong>
      </v-btn>
    </v-container>
    <v-container
      fluid
      style="padding: 0 auto; margin: 0 auto"
      class="d-flex justify-center align-center subtitle-histories"
    >
      <ArrowComponent />
      <p
        class="text--white subtitle-1 font-weight-light text-uppercase"
        style="margin-bottom: 0; word-wrap: break-word"
      >
        <strong>Veja o que rolou nas edições anteriores</strong>
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
