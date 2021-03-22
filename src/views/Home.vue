<template>
  <div id="home">
    <div class="container">
      <div class="sidebar">
    <sidebar />
    </div>
    <div class="main">
    <Categories />
    </div>
    </div>
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
<style lang="scss">
.container {
   display: flex;
}
.sidebar {
   min-width: 300px;
}
.main {
   width: 80%;
   padding: 0 5% 0 5%;
}

</style>
