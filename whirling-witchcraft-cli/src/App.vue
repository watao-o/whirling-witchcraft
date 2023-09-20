<template>
  <v-layout class="rounded rounded-md">
    <!-- <v-app-bar title="whirling-witchcraft" color="cyan-lighten-3"></v-app-bar> -->
    <v-main>
      <WhirlingWitchcraft msg="Welcome to Your Vue.js App"/>
    </v-main>
  </v-layout>
</template>

<script>
import WhirlingWitchcraft from './components/WhirlingWitchcraft.vue'

export default {
  name: 'App',
  components: {
    WhirlingWitchcraft
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
