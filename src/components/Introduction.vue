<template>
  <v-container fluid id="title-introduction">
    <v-img
      lazy-src="@/assets/background.png"
      src="@/assets/background.png"
      class="d-flex justify-center align-center"
    >
      <v-container class="d-flex flex-column justify-center align-center">
        <v-img
          max-height="600"
          max-width="600"
          lazy-src="@/assets/logo.png"
          src="@/assets/logo.png"
        ></v-img>
        <div
          class="text-center text-h4 title-born"
          style="z-index: 20001; padding: 20px; font-size: 25px"
        >
          Não somos um retiro convencional, somos uma experiência pessoal!
        </div>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
export default {
  name: "IntroductionComponent",

  data: () => ({}),
};
</script>

<style scoped>
#title-introduction {
  height: 90vh;
  z-index: 0;
  padding: 0;
}

.title-born {
  font-family: "LeagueGothic" !important;
}
</style>
