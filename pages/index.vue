<template>
  <div class="main-wrapper">
    <div class="filter-panel">
      <h1>Filtrele</h1>
      <div class="form-inputs">
        <v-text-field v-model="email" label="Alis Tarihi" required></v-text-field>
        <v-text-field v-model="password" label="Iade Tarihi" required></v-text-field>
        <v-text-field v-model="password" label="Sehir" required></v-text-field>
      </div>
      <v-btn class="login-button" depressed color="primary"> Goster </v-btn>
    </div>
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
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, .3);
}

.form-inputs {
  margin-top: 40px;
}

.login-button {
    margin-top: 30px;
}
</style>
