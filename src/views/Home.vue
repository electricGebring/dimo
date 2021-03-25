<template>
  <div id="home">

    <div class="container">
      <div class="main">
        <Categories />
        <Searchbar />
      </div>
    </div>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue'
import Categories from "../components/Categories.vue";

export default {
  name: "Home",
  components: {
    Categories,
    Searchbar,
  },
};
</script>

