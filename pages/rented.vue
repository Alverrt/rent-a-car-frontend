<template>
  <div class="main-wrapper">
    <h1 class="table-title">Kiralanan Araclar</h1>
    <v-card min-width="1200">
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">Arac Plakasi</th>
              <th class="text-left">Musteri Ad Soyad</th>
              <th class="text-left">Sehir</th>
              <th class="text-left">Baslangic Tarihi</th>
              <th class="text-left">Bitis Tarihi</th>
              <th class="text-left">Aksiyon</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in rentedCars" :key="index">
              <td>{{ item.vehicle.plaka }}</td>
              <td>{{ item.user.adSoyad }}</td>
              <td>{{ item.user.sehir }}</td>
              <td>{{ item.kiralamaTarihi }}</td>
              <td>{{ item.bitisTarihi }}</td>
              <td><v-btn
                  class="mr-3"
                  small
                  depressed
                  color="primary"
                >
                  Teslim Al </v-btn
                ></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            pasword: "",
            rentedCars: [
            ],
        };
    },
  async created() {
    this.rentedCars = await this.$axios.$get('http://localhost:3000/vehicle/rented')
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
