<template>
  <footer class="pb-10 footer">
    <v-row class="d-flex justify-center">
      <p>Home | Nos ajude | Contato | Loja</p>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-icon class="mr-3" large color="white darken-2"> mdi-facebook </v-icon>
      <v-icon class="ml-1" large color="white darken-2"> mdi-instagram </v-icon>
    </v-row>
    <v-row class="d-flex justify-center mt-5"> 
      <v-img
        lazy-src="../assets/logo-negativa.png"
        src="../assets/logo-negativa.png"
        max-height="150"
        max-width="150"
      ></v-img>
    </v-row>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background: #222222;
  position: relative;
}

.footer::before {
  content: "";
  background: #222222;
  width: 100vw;
  position: absolute;
  top: -250px;
  bottom: 0;
  z-index: -1;
}
</style>