<template>
  <v-dialog v-model="dialog" max-width="600px">
  <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Detaylar
        </v-btn>
      </template>
    <v-card class="mx-auto px-10 py-10" outlined>
      <v-row>
          <v-col><img src="~/assets/bg.jpeg" alt=""></v-col>
          <v-col>
              <v-list dense height="220">
                  <v-list-item>Model: {{item.model}}</v-list-item>
                  <v-list-item>Model Yili: {{item.modelYili}}</v-list-item>
                  <v-list-item>Plaka: {{item.plaka}}</v-list-item>
                  <v-list-item>Sase No: {{item.saseNo}}</v-list-item>
                  <v-list-item>Km: {{item.km}}</v-list-item>
              </v-list>
              <v-list dense>
                  <v-list-item >Km Siniri: {{item.kmSinir}}</v-list-item>
                  <v-list-item >Gerekli Ehliyet Yasi: {{item.gerekliEhliyetYasi}}</v-list-item>
                  <v-list-item >Minimum Yas Siniri: {{item.minimumYasSiniri}}</v-list-item>
                  <v-list-item >Airbag: {{item.airbag}}</v-list-item>
              </v-list>
              <v-list dense>
                  <v-list-item >Bagaj Hacmi: {{item.bagajHacmi}}</v-list-item>
                  <v-list-item >Koltuk Sayisi: {{item.koltukSayisi}}</v-list-item>
                  <v-list-item >Fiyati: {{item.fiyati}}</v-list-item>
              </v-list>
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
