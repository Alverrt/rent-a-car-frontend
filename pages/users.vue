<template>
  <div class="main-wrapper">
    <div class="flex w-8/12 mx-auto justify-evenly py-5 my-4 shadow-md items-center bg-white">
      <div>
        <v-text-field v-model="adsoyad" label="Ad Soyad" required></v-text-field>
        <v-text-field v-model="tc" label="TC" required></v-text-field>
      </div>
      <div>
        <v-text-field v-model="telefon" label="Telefon" required></v-text-field>
        <v-text-field v-model="email" label="Email" required></v-text-field>
      </div>
      <div>
        <v-text-field v-model="adres" label="Adres" required></v-text-field>
        <v-text-field v-model="sehir" label="Şehir" required></v-text-field>
      </div>
      <div>
        <v-text-field v-model="statu" label="Statü" required></v-text-field>
        <v-text-field v-model="password" label="Şifre" required></v-text-field>
      </div>
      <div>
        <v-btn class="mr-3" x-large depressed color="primary" @click="sendNewUser"> Yeni Ekle </v-btn>
      </div>
    </div>
    <h1 class="table-title">Kullanicilar</h1>
    <v-card min-width="1200">
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left"> Ad Soyad</th>
              <th class="text-left">Email</th>
              <th class="text-left">Telefon</th>
              <th class="text-left">Sehir</th>
              <th class="text-left">TC</th>
              <th class="text-left">Sifre</th>
              <th class="text-left">Statu</th>
              <th class="text-left">Duzenle</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.name">
              <td>{{ item.adsoyad }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.telefon }}</td>
              <td>{{ item.sehir }}</td>
              <td>{{ item.tc }}</td>
              <td>{{ item.password }}</td>
              <td>{{ item.statu }}</td>
              <td>
                <UserEdit :item="item" />
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>
<script>
import UserEdit from '~/components/UserEdit.vue'
export default {
  components: { UserEdit },
  data() {
    return {
      errorMsg: 'Bir hata olustu.',
      showError: false,
      adsoyad: '',
      tc: '',
      telefon: '',
      sehir: '',
      statu: '',
      email: '',
      password: '',
      adres: '',
      users: [
      ],
    }
  },
  async created() {
    this.users = await this.$axios.$get('http://localhost:3000/user/')
  },
  methods: {
    async sendNewUser() {
      const user = {
        email: this.email,
        password: this.password,
        adsoyad: this.adsoyad,
        adres: this.adres,
        telefon: this.telefon,
        sehir: this.sehir,
        statu: this.statu,
        tc: this.tc
      }

      try {
        const returnedData = await this.$axios.$post('http://localhost:3000/user/', user)
        console.log(returnedData)
      } catch (error) {
        this.showError = true
      }
    }
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
