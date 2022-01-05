<template>
  <div class="main-wrapper">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        contain
        src="https://www.pngmart.com/files/4/Car-PNG-File.png"
      ></v-img>

      <v-card-title class="mx-auto">Kiralanan Araclar</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <div class="my-4 text-center text-xl font-bold">TOPLAM ARAC SAYISI</div>
      <div class="my-4 text-center text-xl font-bold">245</div>
        <div class="flex justify-center items-center my-4">
          <v-btn color="lighten-2" text @click="reserve">
          Sayfaya Git
        </v-btn>
        </div>
      
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
      contain
        height="250"
        src="https://www.pngmart.com/files/7/Envelope-Mail-PNG-Picture.png"
      ></v-img>

      <v-card-title class="mx-auto">Bekleyen Rezervasyonlar</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <div class="my-4 text-center text-xl font-bold">TOPLAM REZERVASYON</div>
      <div class="my-4 text-center text-xl font-bold">321</div>
        <div class="flex justify-center items-center my-4">
          <v-btn color="lighten-2" text @click="reserve">
          Sayfaya Git
        </v-btn>
        </div>
      
    </v-card>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cnycentral.com/resources/media/de18ac36-e349-40ab-97e6-e02ca7c50a1b-large16x9_Thereare200fewernewcarsatMatthewsAutoHyundaiofSyracusethannormalaccordingtothegeneralsalesmanager.PNG?1624568936049"
      ></v-img>

      <v-card-title class="mx-auto">Bütün Araclar</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <div class="my-4 text-center text-xl font-bold">TOPLAM ARAC SAYISI</div>
      <div class="my-4 text-center text-xl font-bold">245</div>
        <div class="flex justify-center items-center my-4">
          <v-btn color="lighten-2" text @click="reserve">
          Sayfaya Git
        </v-btn>
        </div>
      
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      pasword: '',
    }
  },
}
</script>
<style scoped>
.main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.filter-panel {
  padding: 50px 30px;
  width: 320px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.3);
}

.form-inputs {
  margin-top: 40px;
}

.login-button {
  margin-top: 30px;
}

</style>
