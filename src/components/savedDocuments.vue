<template>
  <div class="container">
    <h3>Mina sparade dokument</h3>
    <div v-for="(item, index) in savedDocuments" :key="item.docId">
      <div v-if="index < limitBy">
           <span
          v-show="true"
          class="delete"
          v-on:click.stop="deleteItem(item._id)"
          >X</span
        >
        <div class="object" @click.stop="goto(item.URL)">
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

    <span
      class="show-more"
      @click="showMore(defaultLimit, savedDocuments.length)"
      >{{ limitBy === 3 ? "Visa fler" : "Visa färre" }}</span
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultLimit: 3,
      limitBy: 3,
    };
  },
  mounted() {
    this.$store.dispatch("getSaved");
    this.$store.dispatch("deleteSavedDocuments");
  },
  computed: {
    savedDocuments() {
      return this.$store.state.savedDocuments;
    },
  },
  methods: {
    showMore(defaultLimit, listLength) {
      this.limitBy = this.limitBy === defaultLimit ? listLength : defaultLimit;
    },
    deleteItem(id) {
      this.$store.dispatch("deleteSavedDocuments", id);
    },
    goto(url) {
      window.open(url, "_blank").focus();
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
  width: 25vw;
  padding: 16px 40px 16px 40px;
  margin-right: 20px;
  margin-top: 30px;
  font-family: Montserrat;
  float: left;
  display: table;

  h3 {
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    line-height: 20px;
    color: #002065;
  }
  .object {
    margin-top: 30px;
  }

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
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 7px;
      line-height: 9px;
      color: #000000;
      margin: 0;
    }
  }
  .delete {
    cursor: pointer;
    float: right;
    font-family: arial;
    font-size: 12px;
  }
  .show-more {
    cursor: pointer;
    padding-left: 72px;
    font-weight: bold;
    line-height: 4;
  }
}
</style>
