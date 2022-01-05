<template>
  <v-dialog max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn color="warning" small dark v-bind="attrs" v-on="on"> Düzenle </v-btn>
    </template>
    <v-card class="mx-auto px-10 py-10" outlined>
      <v-row>
        <v-col>
          <h1>Kisisel Bilgiler</h1>
          <v-list-item
            ><v-text-field
              v-model="adsoyad"
              label="Ad Soyad"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              v-model="tc"
              label="TC"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              v-model="telefon"
              label="Telefon"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              v-model="email"
              label="Email"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              v-model="sehir"
              label="Sehir"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              v-model="statu"
              label="Statu"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              v-model="password"
              label="Sifre"
              required
            ></v-text-field
          ></v-list-item>
          <v-btn color="error" class="mt-5 mx-auto" dark v-bind="attrs" v-on="on"> Kaydet </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      adsoyad: this.item.adsoyad,
      tc: this.item.tc,
      telefon: this.item.telefon,
      sehir: this.item.sehir,
      statu: this.item.statu,
      email: this.item.email,
      password: this.item.password,
      adres: this.item.adres,
    }
  },
}
</script>
<style></style>
