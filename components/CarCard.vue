<template>
  <div class="card-wrapper">
    <div class="car-card">
      <div class="left-side">
        <div>Model</div>
        <div class="model-photo"></div>
        <div class="price">30.000TL</div>
      </div>
      <div class="right-side">
        <ul>
          <li>Model Yili</li>
          <li>Km</li>
          <li>Sanziman</li>
        </ul>
      </div>
    </div>
    <div class="card-footer">
      <CarDetails />
      <MakeReservation />
    </div>
  </div>
</template>
<script>
import CarDetails from "./CarDetails.vue";
import MakeReservation from "./MakeReservation.vue";
export default { components: { CarDetails, MakeReservation } }
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
  background: red;
  margin-bottom: 30px;
}

.card-footer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}
</style>
