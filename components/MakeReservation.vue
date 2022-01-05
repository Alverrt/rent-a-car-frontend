<template>
  <v-dialog max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn color="error" dark v-bind="attrs" v-on="on"> Rezervasyon </v-btn>
    </template>
    <v-card class="mx-auto px-10 py-10" outlined>
      <v-row>
        <v-col><v-avatar color="secondary" size="200" tile></v-avatar></v-col>
        <v-col>
          <h1>Arac Ismi</h1>
          <v-list dense height="220">
            <v-list-item>Model Yili: {{ item.modelYili }}</v-list-item>
            <v-list-item>Plaka: {{ item.plaka }}</v-list-item>
            <v-list-item>Sase No: {{ item.saseNo }}</v-list-item>
            <v-list-item>Km: {{ item.km }}</v-list-item>
          </v-list>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-list-item
            ><v-text-field
              v-model="baslangic"
              label="Alis Tarihi"
              required
            ></v-text-field
          ></v-list-item>
          <v-list-item
            ><v-text-field
              v-model="bitis"
              label="Iade Tarihi"
              required
            ></v-text-field
          ></v-list-item>
          <v-btn
            color="error"
            class="mt-5 mx-auto"
            dark
            v-bind="attrs"
            v-on="on"
            @click="makeNewReservation"
          >
            Rezervasyon Talebi Olustur
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    item: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      baslangic: '',
      bitis: '',
      dialog: false,
    }
  },
  methods: {
    async makeNewReservation() {
      const reservation = {
        userId: localStorage.getItem('userId'),
        vehicleId: this.item.id,
        rezervasyonBaslangicTarihi: this.baslangic,
        rezervasyonBitisTarihi: this.bitis
      }

      try {
        const returnedData = await this.$axios.$post('http://localhost:3000/reservations/', reservation)
        console.log(returnedData)
      } catch (error) {
        this.showError = true
      }
    }
  },
}
</script>
<style></style>
