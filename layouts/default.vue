<template>
  <v-app class="background-wrapper" dark>
    <v-toolbar class="toolbar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Kirala.com</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="toolbar-buttons">
        <v-btn text>Hakkimizda</v-btn>
        <v-btn text>Iletisim</v-btn>
        <v-btn text>Giris Yap</v-btn>
      </div>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      class="pt-16"
      absolute
      bottom
      temporary
    >
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <NuxtLink to="/reservations"><v-list-item-title>Rezervasyon Talepleri</v-list-item-title></NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink to="/rented"><v-list-item-title>Kiralanan Araclar</v-list-item-title></NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink to="/cars"><v-list-item-title>Tum Araclar</v-list-item-title></NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink to="/new-car"><v-list-item-title>Yeni Arac Kaydi</v-list-item-title></NuxtLink>
          </v-list-item>

          <v-list-item>
            <NuxtLink to="/users"><v-list-item-title>Kullanici Kaydi</v-list-item-title></NuxtLink>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div class="pt-20"><Nuxt /></div>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
.background-wrapper {
  background: url('~/assets/bgg.jpeg') no-repeat center center !important;
  background-size: cover!important;
}

.toolbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.toolbar-buttons {
  width: 40%;
  display: flex;
  justify-content: space-around;
}
</style>
