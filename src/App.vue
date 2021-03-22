<template>
  <div>
    <sidebar />
  </div>
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
</style>
