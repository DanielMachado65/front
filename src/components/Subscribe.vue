<template>
  <v-card class="mx-auto my-12 deep-purple" elevation="5">
    <v-card-title class="justify-center white--text"
      >Se inscreva já!</v-card-title
    >

    <v-card-text class="text-center white--text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sed
      aliquid
    </v-card-text>

    <v-card-text>
      <v-text-field
        color="white"
        label="Name"
        outlined
        v-model="user.name"
        :rules="[rules.required]"
        required
      />
      <v-text-field
        color="white"
        label="E-mail"
        outlined
        v-model="user.email"
        :rules="[rules.required, rules.email]"
        required
      />
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn @click="submit" rounded width="200"> Enviar! </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SubscribeComponent",
  methods: {
    submit: () => {
      console.log("submit");
    },
  },
  data: () => ({
    user: {},
    rules: {
      required: (value) => !!value || "Requerido.",
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail inválido";
      },
    },
  }),
};
</script>
