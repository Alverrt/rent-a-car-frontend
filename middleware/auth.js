
export default function ({from, redirect}) {
  // Add the userAgent property to the context
  if (!localStorage.getItem('email')) {
    window.onNuxtReady(() => { window.$nuxt.$router.push('/login') })
  }
  
}