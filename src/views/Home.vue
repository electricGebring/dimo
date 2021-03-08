<template>
  <div id="home">
    <sidebar />
    <Categories />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Categories from '../components/Categories.vue'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Categories,
  },
}
</script>
<style lang="scss"></style>
