<template>
  <v-dialog max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn color="warning" small dark v-bind="attrs" v-on="on"> Kirala </v-btn>
    </template>
    <v-card class="mx-auto px-10 py-10" outlined>
      <v-row>
        <v-col><v-avatar color="secondary" size="200" tile></v-avatar></v-col>
        <v-col>
          <h1>{{item.model}}</h1>
          <v-list dense height="220">
            <v-list-item>Model Yili: {{item.modelYili}}</v-list-item>
            <v-list-item>Plaka: {{item.plaka}}</v-list-item>
            <v-list-item>Sase No: {{item.saseNo}}</v-list-item>
            <v-list-item>Km: {{item.km}}</v-list-item>
            <v-list-item>Gunluk sinir Km: {{item.kmSinir}}</v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1>Kisisel Bilgiler</h1>
          <v-list-item
            ><v-text-field
              :error-messages="errors"
              label="Ad Soyad"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              :error-messages="errors"
              label="TC Kimlik No"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              :error-messages="errors"
              label="Telefon"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              :error-messages="errors"
              label="E-Posta"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              :error-messages="errors"
              label="Adres"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              :error-messages="errors"
              label="Sehir"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              :error-messages="errors"
              label="Alis Tarihi"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              :error-messages="errors"
              label="Iade Tarihi"
              required
            ></v-text-field
          ></v-list-item>
          <v-btn color="error" class="mt-5 mx-auto" dark v-bind="attrs" v-on="on"> Kiralamayi Bitir </v-btn>
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
    }
  },
}
</script>
<style></style>
