<template>
  <v-row justify="center">
    <v-col cols="12" md="10">
      <v-card class="mx-auto my-12 primary subscribe" elevation="10">
        <v-card-title class="justify-center white--text"
          >Quer viver essa experiência?</v-card-title
        >

        <v-card-subtitle class="text-center white--text">
          se cadastre agora no nosso site
        </v-card-subtitle>

        <div class="d-flex justify-center my-10 flex-column" v-if="done">
          <v-icon size="72" color="green darken-2"> mdi-check-circle </v-icon>
          <v-card-subtitle class="text-center white--text">
            vamos redirecionar você para o checkout do Pagar.me
          </v-card-subtitle>
        </div>
        <v-card-text v-else-if="!loading" class="mt-5">
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
        <div v-else class="d-flex justify-center my-10">
          <v-progress-circular
            color="purple darken-1"
            :indeterminate="true"
            size="64"
          ></v-progress-circular>
        </div>

        <v-card-actions class="justify-center pb-5">
          <v-btn
            color="white"
            class="black--text"
            @click="submit"
            width="200"
            :disabled="done"
          >
            Enviar!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { OrderService } from "@/services";
import { showError } from "@/global";
export default {
  name: "SubscribeComponent",
  methods: {
    submit() {
      // if (this.user.email == undefined) showError("O e-mail está vazio");
      // if (this.user.name == undefined) showError("O nome está vazio");
      this.loading = true;

      if (this.user.email && this.user.name)
        OrderService.create({ ...this.user })
          .then(() => {
            this.loading = false;
            this.done = true;
          })
          .catch(showError);
    },
  },
  data: () => ({
    user: {},
    loading: false,
    done: false,
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