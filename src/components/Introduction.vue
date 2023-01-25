<template>
  <v-container fluid id="title-introduction">
    <v-img
      center
      lazy-src="@/assets/background.png"
      src="@/assets/background.png"
      class="d-flex justify-center align-center custom-img"
    >
      <v-container class="flex-column justify-center align-center">
        <v-img lazy-src="@/assets/logo.png" src="@/assets/logo.png"></v-img>
        <p
          class="text-center"
          style="z-index: 20001; padding: 20px; font-size: 25px"
        >
          Não somos um retiro convencional, somos uma experiência pessoal!
        </p>
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

<style>
#title-introduction {
  height: 90vh;
  z-index: 0;
  padding: 0;
}

.custom-img {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
}
</style>
