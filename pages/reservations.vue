<template>
  <div class="main-wrapper">
    <h1 class="table-title">Rezervasyonlar</h1>
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
            <tr v-for="(item, index) in reservations" :key="index">
              <td><ReservationDetails /></td>
              <td>{{ item.vehicle.plaka }}</td>
              <td>{{ item.user.adSoyad }}</td>
              <td>{{ item.user.sehir }}</td>
              <td>{{ item.rezervasyonBaslangicTarihi }}</td>
              <td>{{ item.rezervasyonBitisTarihi }}</td>
              <td>
                <v-btn
                  class="mr-3"
                  small
                  depressed
                  color="primary"
                  @click="rentTheCar(index)"
                >
                  Onayla </v-btn
                ><v-btn
                  depressed
                  small
                  color="error"
                  @click="deleteReservation(item.id)"
                >
                  Reddet
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>
<script>
import ReservationDetails from '~/components/ReservationDetails.vue'
export default {
  components: { ReservationDetails },
  data() {
    return {
      email: '',
      pasword: '',
      reservations: [],
    }
  },
  async created() {
    this.reservations = await this.$axios.$get(
      'http://localhost:3000/reservations/'
    )
    console.log(this.reservations)
  },
  methods: {
    async rentTheCar(index) {
      const rent = {
        userId: this.reservations[index].user.id,
        vehicleId: this.reservations[index].vehicle.id,
        kiralamaTarihi: this.reservations[index].rezervasyonBaslangicTarihi,
        bitisTarihi: this.reservations[index].rezervasyonBitisTarihi,
      }

      try {
        const returnedData = await this.$axios.$post(
          'http://localhost:3000/vehicle/rented',
          rent
        )
        console.log(returnedData)
      } catch (error) {
        this.showError = true
      }
    },
    async deleteReservation(reservationId) {
      this.reservations = this.reservations.filter((item, index) => {
        return item !== reservationId
      })
      const reservation = {
        id: reservationId,
      }
      try {
        const returnedData = await this.$axios.$post(
          'http://localhost:3000/reservations/delete',
          reservation
        )
        console.log(returnedData)
      } catch (error) {
        this.showError = true
      }
    },
  },
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
