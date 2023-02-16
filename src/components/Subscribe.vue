<template>
  <v-row justify="center" id="subscribe">
    <v-col cols="12" md="10">
      <v-card class="mx-auto my-12 primary subscribe" elevation="10">
        <v-card-title
          class="justify-center white--text text-h4 title-born text-no-wrap"
          >Quer viver essa experiência?</v-card-title
        >

        <v-card-subtitle class="text-center white--text">
          Faça sua inscrição
        </v-card-subtitle>

        <div class="d-flex justify-center my-10 flex-column" v-if="done">
          <v-icon size="72" color="green darken-2"> mdi-check-circle </v-icon>
          <v-card-subtitle class="text-center white--text">
            vamos redirecionar você para o checkout do Pagar.me
          </v-card-subtitle>
        </div>
        <v-card-text v-else-if="!loading" class="mt-5">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                color="white"
                label="Nome"
                hint="Nome Completo"
                outlined
                v-model="user.name"
                :rules="[rules.required]"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                color="white"
                label="Telefone"
                v-mask="'(##)#####-####'"
                hint="(xx)xxxx-xxxx"
                outlined
                v-model="user.telephone"
                :rules="[telefoneRule, rules.required]"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                hint="exemplo@dominio.com"
                color="white"
                label="E-mail"
                outlined
                v-model="user.email"
                :rules="[rules.required, rules.email]"
                required
              />
            </v-col>
          </v-row>

          <v-checkbox v-model="checkbox" color="secondary">
            <template v-slot:label>
              <div class="subtitle-2">
                Estou ciente dos
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <a
                      class="white--text"
                      target="_blank"
                      href="https://docs.google.com/document/d/1k3ZvXdJAiAGgBLCq0Sls8exZXKDLILzFlinyWNlHdSg/edit?usp=sharing"
                      v-bind="props"
                      @click.stop
                    >
                      termos
                    </a>
                  </template>
                  Vai abrir em uma nova janela
                </v-tooltip>
                na aquisição do ingresso
              </div>
            </template>
          </v-checkbox>
        </v-card-text>
        <div v-else class="d-flex justify-center my-10">
          <v-progress-circular
            color="blue darken-4"
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
            :disabled="done || !checkbox"
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
      if (this.user.email == "") showError("O e-mail está vazio");
      if (this.user.name == "") showError("O nome está vazio");

      if (
        !/^(\([1-9]{2}\))?([0-9]{5}-[0-9]{4})$/.test(
          this.user.telephone?.replace(/ /g, "")
        )
      )
        showError(
          `O telefone informado: [${
            this.user.telephone || "campo vazio"
          }] não é válido no padrão: (XX)XXXXX-XXXX`
        );

      if (!this.checkbox) showError("Você precisa aprovar os termos");
      this.loading = true;
      this.checkbox = false;

      if (this.user.email && this.user.name)
        OrderService.create({ ...this.user })
          .then((data) => {
            this.loading = false;
            this.done = true;

            const { checkouts } = data?.data;

            window.location.href = checkouts[0].payment_url;
          })
          .catch((error) => {
            console.log(error);
            showError(error);
          });
    },
  },

  data: () => ({
    user: {},
    loading: false,
    done: false,
    checkbox: false,
    telefoneRule: [(v) => !!v || "Telefone é obrigatório"],
    rules: {
      required: (value) => !!value || "Requerido.",
      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value?.replace(/ /g, "")
        ) || "E-mail inválido",
      telephone: (v) =>
        /^(\([1-9]{2}\))?([0-9]{5}-[0-9]{4})$/.test(v?.replace(/ /g, "")) ||
        "Telefone inválido",
    },
  }),
};
</script>

<style scoped>
.subscribe {
  box-shadow: 10px 16px 0px 0 #1b0766 !important;
}

.title-born {
  font-family: "LeagueGothic" !important;
}
</style>