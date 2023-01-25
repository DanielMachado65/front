<template>
  <v-row justify="center">
    <v-col cols="12" md="10">
      <v-card class="mx-auto my-12 primary subscribe" elevation="10">
        <v-card-title class="justify-center white--text"
          >Se inscreva já!</v-card-title
        >

        <v-card-text class="text-center white--text">
          Inscreva-se para fazer parte desse evento mais do que maravilhoso.
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

        <v-card-actions class="justify-center pb-5">
          <v-btn color="white" class="black--text" @click="submit" width="200">
            Enviar!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { UserService } from "@/services";
import { showError, showSuccess } from "@/global";
export default {
  name: "SubscribeComponent",
  methods: {
    submit() {
      if (this.user.email == undefined) showError("O e-mail está vazio");
      if (this.user.name == undefined) showError("O nome está vazio");
      if (this.user.email && this.user.name)
        UserService.create(this.user)
          .then(() => {
            showSuccess("Entraremos em contato com você");
          })
          .catch(showError);
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

<style scoped>
.subscribe {
  box-shadow: 10px 16px 0px 0 #200038 !important;
}
</style>