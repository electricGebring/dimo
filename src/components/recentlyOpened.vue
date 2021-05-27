<template>
  <div class="container">
    <h3>Senast visade</h3>
    <div class="list" v-for="item in recentlyViewed" :key="item">
      <div class="object" @click.stop="goto(item.URL)" >
        <img
          class="pdf-icon"
          src="https://i.ibb.co/5M6fZr1/Test-23.png"
          alt="Test-23"
          border="0"
        />
        <h4>{{ item.Label }}</h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("getRecentlyViewed");
 
  },
  methods: {
    goto(url) {
      window.open(url, "_blank").focus();
    },
  },
  computed: {
     recentlyViewed() {
      return this.$store.state.recentlyViewed;
    },
  
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.container {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: table;
  width: 25vw;
  padding: 16px 40px 40px 40px;
  margin-right: 20px;
  margin-top: 30px;
  font-family: Montserrat;
  float: left;

  h3 {
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    line-height: 20px;
    color: #002065;
  }

  .list {
    margin-top: 10px;
  }

  .object {
    margin-top: 30px;

    .pdf-icon {
      width: 40px;
      float: left;
      margin-right: 10px;
    }
    h4 {
      font-style: normal;
      font-size: 12px;
      line-height: 16px;
      color: #2c365a;
      margin: 0;
      cursor: pointer;

      &:hover {
        color: #c0c7d9;
      }
    }
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 7px;
      line-height: 9px;
      color: #000000;
      margin: 0;
    }
  }
}
</style>
