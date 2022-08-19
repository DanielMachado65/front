<template>
  <v-app-bar
    absolute
    color="#6A76AB"
    dark
    prominent
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-shope</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
};
</script>