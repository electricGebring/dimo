<template>
  <div id="home">
    <sidebar />
    <Categories />
    <Searchbar />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Categories from '../components/Categories.vue'
import Searchbar from '../components/Searchbar.vue'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Categories,
    Searchbar,
  },
}
</script>
