<template>
  <div class="section">
    <div class="headbar">
      <h2 class="category-heading">Sök efter kategori</h2>
      <router-link :to="{name: 'Search', params: {Elements: Elements}}">
        <span class="show-all">Visa Alla</span>
      </router-link>
    </div>
    <div class="wrapper">
      <span class="categories" v-for="(Thematic, index) in ThematicList" :key="index">
        <router-link class="link" :to="{name: 'Search', query: {Thematic: Thematic }}">
          <p class="category-title">{{ Thematic }}</p>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Elements() {
      return this.$store.state.Elements
    },

    ThematicList() {
      const ThematicList = new Set()
      this.$store.state.Elements.forEach((item) => ThematicList.add(item.Thematic))
      return Array.from(ThematicList)
    },
  },
  mounted() {
    this.$store.dispatch('getDocuments')
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

.section {
  width: 100%;
  margin-top: 80px;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  margin: 20px 0 0 20px;
}
.categories {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  width: 117px;
  height: 117px;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10%;
  margin: 20px;
}
.categories:hover {
  box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.2);
  transition: 0.6s;
}
.category-title {
  font-size: 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.link {
  text-decoration: none;
  text-align: center;
  word-wrap: break-word;
  text-transform: capitalize;
  height: 117px;
  width: 117px;
  display: block;
  cursor: pointer;
}
.headbar {
  display: block;
  font-family: 'Montserrat', sans-serif;
  margin-left: 40px;
  width: 90%;
}
.show-all {
  float: right;
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: bold;
}
.category-heading {
  text-decoration: none;
  color: black;
  font-size: 22px;
  font-weight: bolder;
  margin: 0;
}
</style>
