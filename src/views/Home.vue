<template>
  <div id="home">
    <div class="container">
      <div class="main">
        <Categories />
      </div>
    </div>
  </div>
</template>

<script>
import Categories from "../components/Categories.vue";
export default {
  name: "Home",
  components: {
    Categories,
  },
};
</script>
<style lang="scss">
.container {
  display: flex;
}
.sidebar {
  min-width: 200px;
}
.main {
  width: 80%;
}
</style>
