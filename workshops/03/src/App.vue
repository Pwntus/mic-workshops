<template lang="pug">
v-app
  v-content
    display-info
    login
</template>

<script>
import DisplayInfo from '@/components/DisplayInfo'
import Login from '@/components/Login'

export default {
  name: 'App',
  components: {
    DisplayInfo,
    Login
  }
}
</script>
