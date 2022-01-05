<template>
  <div class="login-wrapper">
    <div class="login-panel">
      <h1>Giris Yap</h1>
      <div class="form-inputs">
        <v-text-field v-model="email" label="Email" required></v-text-field>
        <v-text-field v-model="password" label="Sifre" required></v-text-field>
      </div>
      <v-btn class="login-button" depressed color="primary"> Giris </v-btn>
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
.login-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-panel {
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
