<template>
  <div class="savedlist-container">
    <h3>Mina sparade dokument</h3>
    <div class="savedlist-object" v-for="item in savedDocuments" :key="item">
      <img
        class="pdf-icon"
        src="https://i.ibb.co/5M6fZr1/Test-23.png"
        alt="Test-23"
        border="0"
      />
      <h4>{{item.Label}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  methods: {},
   computed: {
    savedDocuments() {
      return this.$store.state.savedDocuments
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.savedlist-container {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 25vw;
  padding: 16px 40px 40px 40px;
  margin-top: 30px;
  font-family: Montserrat;

  h3 {
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    line-height: 20px;
    color: #002065;
  }

  .savedlist-object {
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
