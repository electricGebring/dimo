<template>
  <div id="home">
    <div class="container">
      <div class="main">
        <Searchbar />
        <Categories />
        <Recentlyopened />
        <Saveddocuments />
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue'
import Categories from '../components/Categories.vue'
import Saveddocuments from '../components/savedDocuments.vue'
import Recentlyopened from '../components/recentlyOpened.vue'

export default {
  name: 'Home',
  components: {
    Categories,
    Searchbar,
    Saveddocuments,
    Recentlyopened,
  },
}
</script>

<style lang="scss">
.container {
  display: flex;
  padding: 5% 5% 0 5%;
}

.main {
  width: 100%;
}
</style>
