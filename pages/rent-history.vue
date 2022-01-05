<template>
  <div class="main-wrapper">
    <h1 class="table-title">Rezervasyonlar</h1>
    <v-card min-width="1200">
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">Detaylar</th>
              <th class="text-left">Arac Plakasi</th>
              <th class="text-left">Musteri Ad Soyad</th>
              <th class="text-left">Sehir</th>
              <th class="text-left">Baslangic Tarihi</th>
              <th class="text-left">Bitis Tarihi</th>
              <th class="text-left">Aksiyon</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
            <td><ReservationDetails /></td>
              <td>{{ item.plaka }}</td>
              <td>{{ item.adSoyad }}</td>
              <td>{{ item.sehir }}</td>
              <td>{{ item.baslangicTarihi }}</td>
              <td>{{ item.bitisTarihi }}</td>
              <td><RentTheCar /></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>
<script>
import ReservationDetails from "~/components/ReservationDetails.vue"
import RentTheCar from "~/components/RentTheCar.vue";
export default {
    components: { ReservationDetails, RentTheCar },
    data() {
        return {
            email: "",
            pasword: "",
            desserts: [
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
                {
                    plaka: "12HSA23",
                    adSoyad: "Mehmet Yilmaz",
                    sehir: "Ankara",
                    baslangicTarihi: "21.12.2021",
                    bitisTarihi: "12.09.2022",
                },
            ],
        };
    }
}
</script>
<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
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

.table-title {
    display: inline-block;
    padding: 30px 0;
}
</style>
