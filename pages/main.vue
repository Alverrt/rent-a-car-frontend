<template>
  <div class="main-wrapper">
    <div class="main-header-panel">
      <div class="main-header-row">
        <div class="main-header-cell">
          <v-text-field v-model="email" label="Model" required></v-text-field>
        </div>
        <div class="main-header-cell">
          <v-text-field
            v-model="email"
            label="Max Fiyat"
            required
          ></v-text-field>
        </div>
        <div class="main-header-cell">
          <v-text-field v-model="email" label="Renk" required></v-text-field>
        </div>
      </div>
      <div class="main-header-row">
        <div class="main-header-cell">
          <v-text-field
            v-model="email"
            label="Model Yili"
            required
          ></v-text-field>
        </div>
        <div class="main-header-cell">
          <v-text-field
            v-model="email"
            label="Sanziman"
            required
          ></v-text-field>
        </div>
        <div class="main-header-cell">
          <v-btn class="login-button" depressed color="primary">
            Filtrele
          </v-btn>
          <v-btn class="login-button" depressed color="warning"> Reset </v-btn>
        </div>
      </div>
    </div>
    <div class="car-cards">
        <CarCard />
    </div>
  </div>
</template>
<script>
import CarCard from "~/components/CarCard.vue"
export default {
    components: { CarCard },
    data() {
        return {
            email: "",
            pasword: "",
        };
    }
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
