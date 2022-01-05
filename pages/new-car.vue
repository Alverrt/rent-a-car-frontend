<template>
  <div class="login-wrapper">
    <div class="login-panel">
      <h1>Giris Yap</h1>
      <div class="form-inputs flex">
        <div class="m-3">
          <v-text-field
            v-model="model"
            label="Model"
            required
          ></v-text-field>
          <v-text-field
            v-model="modelYili"
            label="Model Yili"
            required
          ></v-text-field>
          <v-text-field
            v-model="plaka"
            label="Plaka"
            required
          ></v-text-field>
        </div>
        <div class="m-3">
          <v-text-field
            v-model="saseNo"
            label="Sase No"
            required
          ></v-text-field>
          <v-text-field
            v-model="km"
            label="Km"
            required
          ></v-text-field>
          <v-text-field
            v-model="kmSinir"
            label="Gunluk sinir km"
            required
          ></v-text-field>
          <v-text-field
            v-model="gerekliEhliyetYasi"
            label="Gerekli Ehliyet Yasi"
            required
          ></v-text-field>
        </div>
        <div class="m-3">
          <v-text-field
            v-model="minimumYasSiniri"
            label="Minimum Yas Siniri"
            required
          ></v-text-field>
          <v-text-field
            v-model="airbag"
            label="Airbag"
            required
          ></v-text-field>
          <v-text-field
            v-model="bagajHacmi"
            label="Bagaj Hacmi"
            required
          ></v-text-field>
          <v-text-field
            v-model="koltukSayisi"
            label="Koltuk Sayisi"
            required
          ></v-text-field>
        </div>
        <div class="m-3">
          <v-text-field
            v-model="fiyati"
            label="Fiyati"
            required
          ></v-text-field>
        </div>
      </div>
      <v-btn class="login-button" depressed color="primary" @click="sendNewCar"> Yeni Arac Kaydet </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: '',
      modelYili: '',
      plaka: '',
      saseNo: '',
      km: '',
      kmSinir: '',
      gerekliEhliyetYasi: '',
      minimumYasSiniri: '',
      airbag: '',
      bagajHacmi: '',
      koltukSayisi: '',
      fiyati: ''
    }
  },
  methods: {
    async sendNewCar() {
      const car = {
        model: this.model,
        modelYili: this.modelYili,
        plaka: this.plaka,
        saseNo: this.saseNo,
        km: this.km,
        kmSinir: this.kmSinir,
        gerekliEhliyetYasi: this.gerekliEhliyetYasi,
        minimumYasSiniri: this.minimumYasSiniri,
        airbag: this.airbag,
        bagajHacmi: this.bagajHacmi,
        koltukSayisi: this.koltukSayisi,
        fiyati: this.fiyati
      }

      try {
        const returnedData = await this.$axios.$post('http://localhost:3000/vehicle/', car)
        console.log(returnedData)
      } catch (error) {
        this.showError = true
      }
    }
  },
}
</script>
<style scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-panel {
  padding: 50px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.3);
  background: white;
}

.form-inputs {
  margin-top: 40px;
}

.login-button {
  margin-top: 30px;
}
</style>
