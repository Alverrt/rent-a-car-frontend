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
          <v-col><v-avatar color="secondary" size="200" tile></v-avatar></v-col>
          <v-col>
              <v-list dense height="220">
                  <v-list-item>Model Yili:</v-list-item>
                  <v-list-item>Plaka:</v-list-item>
                  <v-list-item>Sase No:</v-list-item>
                  <v-list-item>Km:</v-list-item>
                  <v-list-item>Gunluk sinir Km:</v-list-item>
              </v-list>
              <v-list dense>
                  <v-list-item >Motor Hacmi:</v-list-item>
                  <v-list-item >Motor Gucu:</v-list-item>
                  <v-list-item >Sanziman:</v-list-item>
                  <v-list-item >Yakit Cinsi:</v-list-item>
              </v-list>
              <v-list dense>
                  <v-list-item >Koltuk Sayisi:</v-list-item>
                  <v-list-item >Bagaj Hacmi:</v-list-item>
                  <v-list-item >Airbag:</v-list-item>
                  <v-list-item >Kapi Sayisi:</v-list-item>
                  <v-list-item >Renk:</v-list-item>
                  <v-list-item >Sunroof:</v-list-item>
              </v-list>
          </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
<style></style>
