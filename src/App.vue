<template>
  <sidebar />
  <router-view />
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: 'App',
  components: {
    Sidebar,
  },
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
body {
background-color: #C0C7D9;
}
</style>
