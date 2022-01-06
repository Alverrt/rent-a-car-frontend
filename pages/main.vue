<template>
  <div class="main-wrapper">

    <div class="car-cards flex gap-5">
      <CarCard v-for="(item, index) in cars" :key="index" :car-data="item" />
    </div>
  </div>
</template>
<script>
import CarCard from '~/components/CarCard.vue'
export default {
  components: { CarCard },
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
  padding: 80px 30px 0 30px;
  height: 100%;
}

.main-header-panel {
  padding: 30px 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.3);
  background: #ffffff;
}

.form-inputs {
  margin-top: 40px;
}

.login-button {
  margin: 15px 5px 0 5px;
}

.main-header-row {
  display: flex;
  justify-content: space-evenly;
}

.main-header-cell {
  display: inline-block;
  width: 300px;
}

.car-cards {
  padding: 30px;
}
</style>
