<template>
  <div class="main-wrapper">
    <h1 class="table-title">Tum Araclar</h1>
    <v-card min-width="1200">
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">Detaylar</th>
              <th class="text-left">Model</th>
              <th class="text-left">Plaka</th>
              <th class="text-left">Statu</th>
              <th class="text-left">Fiyati</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cars" :key="item.model">
              <td><CarDetails :item="item" /></td>
              <td>{{ item.model }}</td>
              <td>{{ item.plaka }}</td>
              <td>{{ item.statu }}</td>
              <td>{{ item.fiyati }}</td>
              <td><RentTheCar :item="item" /></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>
<script>
import RentTheCar from '~/components/RentTheCar.vue'
import CarDetails from '~/components/CarDetails.vue'
export default {
  components: { RentTheCar, CarDetails },
  data() {
    return {
      cars: [],
    }
  },
  async created() {
    this.cars = await this.$axios.$get('http://localhost:3000/vehicle/')
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
