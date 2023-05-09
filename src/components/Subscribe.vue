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

        <div class="d-flex justify-center my-10 flex-column" v-if="ready">
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
                label="name"
                placeholder="Nome"
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
                label="telephone"
                placeholder="Telefone"
                v-mask="'(##)#####-####'"
                hint="(xx)xxxx-xxxx"
                outlined
                v-model="user.telephone"
                :rules="[rules.required, rules.telephone]"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                hint="exemplo@dominio.com"
                color="white"
                label="email"
                placeholder="E-mail"
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
            :disabled="ready || !checkbox"
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

const trim = (value) => value && value.replace(/ /g, "");

const validateEmail = (value) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    trim(value)
  );

const validateTelephone = (value) =>
  /^(\([1-9]{2}\))?([0-9]{5}-[0-9]{4})$/.test(trim(value));

export default {
  name: "SubscribeComponent",
  methods: {
    submit() {
      const { email, name, telephone } = this.user;
      const area_code = telephone.split(")")[0].substring(1);

      if (!name || name == "") return showError("O nome está vazio");

      if (!validateTelephone(telephone))
        return showError(
          `O telefone informado: [${
            telephone || "campo vazio"
          }] não é válido no padrão: (XX)XXXXX-XXXX`
        );

      if (!email || !validateEmail(email))
        return showError(`O e-mail: ${email || ""} está vazio`);

      if (!this.checkbox) return showError("Você precisa aprovar os termos");
      this.loading = true;
      this.checkbox = false;

      if (email && name) {
        const telephone_with_area_code = {
          area_code,
          telephone: telephone.split(")")[1].replace("-", ""),
        };

        console.log({ ...this.user, ...telephone_with_area_code });

        OrderService.create({ ...this.user, ...telephone_with_area_code })
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
      }
    },
  },

  data: () => ({
    user: {},
    loading: false,
    ready: false,
    checkbox: false,
    rules: {
      required: (v) => !!v || "Requerido.",
      email: (v) => validateEmail(v) || "E-mail inválido",
      telephone: (v) => validateTelephone(v) || "Telefone inválido",
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