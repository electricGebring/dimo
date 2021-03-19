<template>
  <div class="headbar">
    <h2 class="categoryTitel">Sök efter kategori</h2>
    <router-link :to="{name: 'Search', params: {Elements: Elements}}">
      <li class="showAll">Visa Alla</li>
    </router-link>
  </div>
  <div class="wrapper">
    <div class="categories" v-for="(Thematic, index) in ThematicList" :key="index">
      <router-link class="link" :to="{name: 'Search', params: {Thematic: Thematic}}">
        <p class="each">{{ Thematic }}</p>
      </router-link>
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

.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 60vw;
  margin-left: 25%;
  font-family: 'Montserrat', sans-serif;
  padding: 2% 0;
}
.categories {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  width: 10%;
  height: 11vh;
  text-align: center;
  background-color: #ffffff;
  border-radius: 10%;
  margin: 20px;
}
.categories:hover {
  box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.2);
  transition: 0.6s;
  cursor: pointer;
}
.each {
  font-size: 11px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.link {
  text-decoration: none;
  text-align: center;
  word-wrap: break-word;
  text-transform: capitalize;
}
.headbar {
  display: block;
  font-family: 'Montserrat', sans-serif;
  width: 83%;
  margin-top: 3%;
  float: left;
}
.showAll {
  float: right;
  text-decoration: none;
  color: black;
  font-size: 14px;
  display: inline;
  font-weight: bold;
}
.categoryTitel {
  position: absolute;
  text-decoration: none;
  color: black;
  font-size: 22px;
  display: block;
  margin-left: 26%;
  font-weight: bolder;
}
</style>
