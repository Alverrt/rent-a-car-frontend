<template>
  <v-app dark>
    <v-toolbar class="toolbar">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Kirala.com</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="toolbar-buttons">
        <v-btn text>Hakkimizda</v-btn>
        <v-btn text>Iletisim</v-btn>
        <v-btn text>Giris Yap</v-btn>
      </div>
    </v-toolbar>
    <v-main>
      <Nuxt />
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
.toolbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.toolbar-buttons {
  width: 40%;
  display: flex;
  justify-content: space-around;
}
</style>
