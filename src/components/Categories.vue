<template>
  <div class="wrapper">
    <div class="categories" v-for="(Thematic, index) in elements" :key="index">
      <router-link class="link" :to="{name: 'About', params: {elements: elements}}">
        <p class="each">{{ Thematic.Label }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elements: [],
    }
  },
  mounted() {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => (this.elements = data.Elements))
      .catch((err) => console.log(err.message))
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 50vw;
  margin-left: 20%;
}
.categories {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 120px;
  height: 120px;
  text-align: center;
  background-color: #f1f1f1;
  border-radius: 10%;
  margin: 20px;
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
</style>
