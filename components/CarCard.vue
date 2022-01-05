<template>
  <div class="card-wrapper">
    <div class="car-card">
      <div class="left-side">
        <div>Model: {{carData.model}}</div>
        <div class="model-photo"><img src="~/assets/bg.jpeg" alt=""></div>
        <div class="price">Fiyati: {{carData.fiyati}}</div>
      </div>
      <div class="right-side">
        <ul>
          <li>Model Yili: {{carData.modelYili}}</li>
          <li>Km: {{carData.km}}</li>
          <li>Koltuk Sayisi: {{carData.koltukSayisi}}</li>
        </ul>
      </div>
    </div>
    <div class="card-footer">
      <CarDetails :item="carData" />
      <MakeReservation :item="carData" />
    </div>
  </div>
</template>
<script>
import CarDetails from './CarDetails.vue'
import MakeReservation from './MakeReservation.vue'
export default {
  components: { CarDetails, MakeReservation },
  props: {
    carData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  },
}
</script>
<style scoped>
.card-wrapper {
  width: 370px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: #ffffff;
}
.car-card {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
}

.right-side {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
}

.left-side {
  flex: 1 0 0;
}
.model-photo {
  height: 80px;
  width: 140px;
  margin-bottom: 30px;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}
</style>
