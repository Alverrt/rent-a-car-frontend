<template>
  <div class="login-wrapper">
    <div class="login-panel">
      <h1>Giris Yap</h1>
      <div class="form-inputs">
        <v-text-field v-model="email" label="Email" required></v-text-field>
        <v-text-field v-model="password" label="Sifre" required></v-text-field>
      </div>
      <v-btn class="login-button" depressed color="primary" @click="authUser"> Giris </v-btn>
    </div>
    <v-snackbar
      v-model="showError"
    >
      {{ errorMsg }}

      <template #action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="showError = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showError: false,
      errorMsg: 'Girdiginiz email ya da kullanici adi yanlis.'
    }
  },
  methods: {
    async authUser() {
      const userAuthDto = {
        email: this.email,
        password: this.password
      }
      try {
        const returnedData = await this.$axios.$post('http://localhost:3000/user/auth', userAuthDto)
        localStorage.setItem('email', returnedData.email)
        localStorage.setItem('userId', returnedData.id)
        if (returnedData.email === 'admin') {
          localStorage.setItem('access', 1)
          this.$router.push('dashboard')
        } else if (returnedData.email === 'maintainer') {
          this.$router.push('dashboard')
        } else {
          this.$router.push('main')
        }
      } catch (error) {
        this.showError = true
      }
    },
  }
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
